Myapp.controller("randomCtrl", function ($scope, $uibModalInstance, random){
    $scope.random = random;
 
    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
})