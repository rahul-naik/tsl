$(function () {
    /***side bar expand collapse code */
    var $sidebarEventTarget = $('#collapseSideBar');
    var $hoverContainer = $('#colapseOnHover');
    var $sidebarContainer = $('#left-sidebar-nav');
    $sidebarEventTarget.on('click', function (e) {
        e.stopPropagation();
        e.preventDefault();
        $sidebarContainer.toggleClass('sidebar-collapsed');
        $('.main-container').toggleClass('shift-container');
    });

    $hoverContainer.on('mouseover',function(){
        $sidebarContainer.removeClass('sidebar-collapsed');
    });

});
