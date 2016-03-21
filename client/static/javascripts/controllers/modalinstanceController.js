Myapp.controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, items, modal, ingredients) {
    $scope.modal = modal;
    $scope.items = items;
    $scope.ingredients = ingredients;
   
    
    $scope.selected = {
        item: $scope.items[0]
        };
        $scope.ok = function () {
            $uibModalInstance.close($scope.selected.item);
        };
        $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
});