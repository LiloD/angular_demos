(function(){
	angular.module('pickies/template/carousel.html', [])
		.run(['$templateCache', function($templateCache){
			$templateCache.put('pickies/template/carousel.html', 
				"<div ng-mouseenter=\"pause()\" ng-mouseleave=\"play()\" class=\"carousel\" ng-swipe-right=\"prev()\" ng-swipe-left=\"next()\">\n" +
			    "  <div class=\"carousel-inner\" ng-transclude></div>\n" +
			    "  <ol class=\"carousel-indicators\" ng-show=\"slides.length > 1\">\n" +
			    "    <li ng-repeat=\"slide in slides | orderBy:indexOfSlide track by $index\" ng-class=\"{ active: isActive(slide) }\" ng-click=\"select(slide)\">\n" +
			    "      <span class=\"sr-only\">slide {{ $index + 1 }} of {{ slides.length }}<span ng-if=\"isActive(slide)\">, currently active</span></span>\n" +
			    "    </li>\n" +
			    "  </ol>\n" +
			    "</div>");
		}]);
})()