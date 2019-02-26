var todoApp = angular.module('todoApp', []) ;

todoApp.controller('TodoCtrl', ['$scope', function ($scope){

    //init array of task
    $scope.taskSet=[
        {
            taskName: 'Faire le ménage',
            done : false
        },{
            taskName: 'Ranger le courrier',
            done : false
        },{
            taskName: 'Promener le chien',
            done : false
        }];


    //method to add task
    $scope.addTask = function () {
        
        if ($scope.taskName !== '') {
            $scope.taskSet.push({
                taskName: $scope.taskName,
                done: false
            });

            // clear taskName value
            $scope.taskName = '';
        }
    };

}]);