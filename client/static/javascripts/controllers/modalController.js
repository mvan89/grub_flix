Myapp.controller('modalcontrol', function ($scope, $uibModal, $log, apifactory) {
    $scope.list = [];
    $scope.items = ['item1', 'item2', 'item3'];
    $scope.animationsEnabled = true;
    $scope.modal = [];
    $scope.ingredients = [];
    $scope.errors = [];
    $scope.random = [];
    $scope.show = false;
    if ($scope.list = []){
        apifactory.getapi(function(data){
            $scope.list = data[0].recipes;
            // console.log($scope.list);
            //console.log($scope.list[0].recipes.length);
        
        });
    }
   
    
    $scope.form = function (){
    	$scope.show = true;
    	apifactory.search($scope.box, function(data){
    		
    		$scope.list = data[0].recipes;
            $scope.show = false; 
    		console.log(data[0].recipes);


    	});
    	
    }

     $scope.randombutton = function(size){
        $scope.show = true;
        $scope.random = [];
    	apifactory.random(function(data){
    		$scope.random = data;
            $scope.show = false;
    		var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'modal1.html',
            controller: 'randomCtrl',
            size: size,
            resolve: {
                random: function(){
                    return $scope.random;
                },
            }
            });
    	});
    	
    }
    $scope.open = function (size, num) {
        $scope.modal = [];
        $scope.ingredients = [];
        apifactory.callback(function(data){
            $scope.modal.push(num);
        });
        apifactory.get_ing(num.recipe_id, function(data){
            $scope.ingredients = data;
            // console.log($scope.ingredients);
        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'modal.html',
            controller: 'ModalInstanceCtrl',
            size: size,
            resolve: {
            items: function () {
              return $scope.items;
             
            },
            modal: function(){
                return $scope.modal;
            },
            ingredients: function(){
                return $scope.ingredients;
            },
            }
        });
        });
    };
    // $scope.toggleAnimation = function () {
    // $scope.animationsEnabled = !$scope.animationsEnabled;
    // };
});