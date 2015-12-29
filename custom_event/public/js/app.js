(function(){
    var app = angular.module('main', []);

    app.directive('eventEmitter', function(){
        return {
            restrict: 'A',
            scope:{
                action: '@',
                event: '@'
            },
            controller: ['$rootScope', '$scope', function($rootScope, $scope){
                $scope.sendEvent = function(){
                    $rootScope.$broadcast($scope.event);
                }
            }],
            link: function(scope, element){
                element[scope.action](function(e){
                    scope.sendEvent();
                })
            }
        }
    })
    .directive('popover', function(){
        
        return {
            restrict: 'E',
            templateUrl: '/public/templates/popover-template.html',
            controller: ['$scope', function($scope){
                $scope.data = ['number1', 'number2'];
                $scope.show = false;

                $scope.$on('cartOpen', function(){
                    console.log('cartOpen received!');
                    $scope.show = true;
                    $scope.$apply();
                });

                $scope.$on('cartClose', function(){
                    console.log('cartClose received!');
                    $scope.show = false;
                    $scope.$apply();
                });
            }],
            link: function(scope, element, attr){

                scope.$watch('show', function(newVal){
                    console.log('show changed to', newVal);
                    if(scope.show){
                        element.find('div').css('right', 0);
                    }else{                        
                        element.find('div').css('right', -1000);
                    }
                });
            }
        }
    });
})()