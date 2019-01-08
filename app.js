(function(){
'use strict';

angular.module('LunchCheck',[])

.controller('LunchCheckController', LunchCheckContoller);

LunchCheckContoller.$inject = ['$scope'];
function LunchCheckContoller($scope){
    $scope.LunchChcker = function(){
        var lunchItems = 0;
        console.log($scope.items);
        if (!$scope.items){
            $scope.message = "Please enter lunch item";

        }else{
            $scope.message = "";
            var lunchInput = $scope.items.split(',');
            var index;
            for(index = 0; index< lunchInput.length; index++){
                if(lunchInput[index].trim().length > 0){
                    lunchItems++;
                }
            }
            if(lunchItems <=3) $scope.message ="Enjoy";
            else if (lunchItems > 3) $scope.message = "Too much";
        }
        $scope.lunchItems = lunchItems;
    };

}

})();