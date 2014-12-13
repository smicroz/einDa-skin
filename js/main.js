// muestra u oculta menu
var daApp = angular.module('ng-da-app', [])

daApp.controller('gestorContenido', ['$scope', function($scope){

  $scope.sMenu = function ()            {
    $scope.controlMenu = true
    $scope.gestorScroll = { "overflow-y" : "hidden" }
  }
  $scope.sMenuCerrar = function ()            {
    $scope.controlMenu = false
    $scope.gestorScroll = { "overflow" : "scroll" }
  }

  $scope.controlPerfil = true


}]);

daApp.controller('gestorItems', ['$scope', function($scope){
  // content main reseller
  $scope.itemsMain = [
  // AccountManagement
  { seccion: "accountManagement", url: "/HTM_ACCOUNT_USER_CREATE", iniciales:"ANU", nombre: am_add_new_user}
  ,{ seccion: "accountManagement", url: "/CMD_USER_SHOW", iniciales:"LU", nombre: am_list_users}
  ,{ seccion: "accountManagement", url: "CMD_TICKET_MANAGE", iniciales:"MT", nombre: am_manage_tickets}
  ,{ seccion: "accountManagement", url: "/CMD_SHOW_USER_PACKAGE", iniciales:"AP", nombre: am_add_package}
  ,{ seccion: "accountManagement", url: "/CMD_MANAGE_USER_PACKAGES", iniciales:"LP", nombre: am_list_packages}
  ,{ seccion: "accountManagement", url: "javascript:showUserMessage();", iniciales:"EMU", nombre: am_edit_user_msg}
  // Reseller Tools
  ,{ seccion: "resellerTools", url: "/HTM_USER_PASSWD", iniciales:"CP", nombre: rt_change_pass}
  ,{ seccion: "resellerTools", url: "/CMD_RESELLER_STATS", iniciales:"RS", nombre: rt_reseller_stats}
  ,{ seccion: "resellerTools", url: "/CMD_IP_CONFIG", iniciales:"IM", nombre: rt_ip_manager}
  ,{ seccion: "resellerTools", url: "/CMD_SKINS", iniciales:"SM", nombre: rt_skin_manager}
  ,{ seccion: "resellerTools", url: "/CMD_USER_BACKUP", iniciales:"UB", nombre: rt_user_backups}
  // Extra features
  ,{ seccion: "extraFeatures", url: "/CMD_SYSTEM_INFO", iniciales:"SY", nombre: ef_sys_info}
  ,{ seccion: "extraFeatures", url: "/CMD_NAME_SERVER", iniciales:"NS", nombre: ef_namerservers}
  ,{ seccion: "extraFeatures", url: "/CMD_TICKET_CREATE?TYPE=Message&amp;who=all", iniciales:"MU", nombre: ef_msg_all_users}
  ,{ seccion: "extraFeatures", url: "/CMD_TICKET_CREATE?TYPE=Ticket", iniciales:"CA", nombre: ef_contact_admin}
  //,{ seccion: "extraFeatures", url: "", iniciales:"", nombre: ""}
  ]

}]);
