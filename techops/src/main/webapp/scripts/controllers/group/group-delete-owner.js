define(['../../utils/constant'],function(constant) {
    /**
     * A module representing a User controller.
     * @exports controllers/User
     */
    var Controller = function ($rootScope, $scope, GroupService, UserService) {
        var paramsCtlLevel = {};
        paramsCtlLevel.onlyShowGroup = false;
        paramsCtlLevel.userGroupType = 1;
        $scope.getTree = GroupService.syncTree;
        $scope.getTree(paramsCtlLevel);

        $scope.user = {};
        $scope.refreshUsers = function(email) {
            var params = {email: email, pageNumber:0, pageSize: 16};
            return UserService.getUsers(params).$promise.then(function(response) {
                if(response.data && response.data.data) {
                    $scope.users = response.data.data;
                } else {
                    $scope.users = [];
                }
            });
        }

        $scope.removeUserFromGroup = function () {

            if(!$rootScope.shareGroup.selected || !$rootScope.shareGroup.selected.id){
                $scope.groupMessage = '请先选择一个父组, 再删除Owner.';
                return;
            }
            if(!$scope.user.selected || !$scope.user.selected.id) {
                $scope.groupMessage = '请先选择一个用户, 再删除Owner.';
                return;
            }

            var params = {};
            params.groupId=$rootScope.shareGroup.selected.id;
            params.normalMember=false;
            params.userIds = [];
            params.userIds.push($scope.user.selected.id);

            GroupService.deleteUser(params, function (res) {
                $scope.groupMessage = '';
                if(res.info) {
                    $scope.groupMessage = res.info;
                    return;
                }
                $scope.getTree(paramsCtlLevel);
            }, function () {
                $scope.addedGroup = {};
                $scope.groupMessage = constant.loadError;
            });
        };

    };

    return {
        name: "GroupDeleteOwnerController",
        fn: ["$rootScope","$scope", "GroupService", "UserService", Controller]
    };

});