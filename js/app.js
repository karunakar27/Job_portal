

var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.controller("myAppController",function($scope){
    //This will hide the DIV by default.
    /*$scope.IsVisible = false;
    $scope.ShowHide = function () {
        //If DIV is visible it will be hidden and vice versa.
        $scope.IsVisible = $scope.IsVisible ? false : true;
    }*/
})


routerApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'home.html'
        })
        
        // nested list with custom controller
        /*.state('home.list', {
            url: '/list',
            templateUrl: 'home-list.html',
            controller: function($scope) {
                $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
            }
        })*/
        .state('employer', {
            url: '/employer',
            templateUrl: 'employer.html'
        })
        
        // nested list with just some random string data
        /*.state('home.paragraph', {
            url: '/paragraph',
            template: 'I could sure use a drink right now.'
        })*/
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('register', {
            url: '/register',
            templateUrl: 'register.html'
            /*views: {
                '': { templateUrl: 'register.html' },
                'columnOne@about': { template: 'Look I am a column!' },
                'columnTwo@about': { 
                    templateUrl: 'table-data.html',
                    controller: 'scotchController'
                }
            }*/
            
        });
        // use the HTML5 History API
        //$locationProvider.html5Mode(true);
});

/*routerApp.controller('scotchController', function($scope) {
    
    $scope.message = 'test';
   
    $scope.scotches = [
        {
            name: 'Macallan 12',
            price: 50
        },
        {
            name: 'Chivas Regal Royal Salute',
            price: 10000
        },
        {
            name: 'Glenfiddich 1937',
            price: 20000
        }
    ];
    
});*/