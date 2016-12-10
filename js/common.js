var $sidebarEventTarget = $('#collapseSideBar');

var $sidebarContainer = $('#left-sidebar-nav');

function checkTablet() {
    if ($('#dummy').css('display') == 'none') {
        $sidebarEventTarget.hide();
        $('.main-container').addClass('shift-container');
        $sidebarContainer.addClass('sidebar-collapsed').promise().done(function() {
            $sidebarContainer.addClass('hoverMe');
        });
        $sidebarContainer.removeClass('sidebar-not-collapsed');
        $("#owl-demo").data('owlCarousel').reinit({ items: 2});
    } 
}
$(function() {
    /***side bar expand collapse code */

    $('select').material_select();
    $sidebarEventTarget.on('click', function(e) {
        if ($('#dummy').css('display') !== 'none') {

            e.stopPropagation();
            e.preventDefault();
            if ($sidebarContainer.hasClass('sidebar-collapsed')) {
                $sidebarContainer.removeClass('display-over');
            }
            $sidebarContainer.toggleClass('sidebar-collapsed').promise().done(function() {
                $sidebarContainer.toggleClass('hoverMe');
            });
            $sidebarContainer.toggleClass('sidebar-not-collapsed');
            $('.main-container').toggleClass('shift-container');


            $("#owl-demo").data('owlCarousel').reinit({});
        }

    });

    $(document).on('mouseover', '.hoverMe', function() {
        $sidebarContainer.addClass('display-over');
        $sidebarEventTarget.show();
    });
    $(document).on('mouseleave', '.hoverMe', function() {
        $sidebarContainer.removeClass('display-over');
        $sidebarEventTarget.hide();
    });
    checkTablet();
    $(window).resize(function() {
        checkTablet();
    })


});
