$(function () {
    /***side bar expand collapse code */
    var $sidebarEventTarget = $('#collapseSideBar');
    var $hoverContainer = $('#left-sidebar-nav');
    var $sidebarContainer = $('#left-sidebar-nav');

    $sidebarEventTarget.on('click', function (e) {
        e.stopPropagation();
        e.preventDefault();
        if ($sidebarContainer.hasClass('sidebar-collapsed')) {
            $sidebarContainer.removeClass('sidebar-collapsed');
            $('.main-container').removeClass('shift-container');

            if ($(this).is(':hidden')) {
                $(this).show(function () {
                    $hoverContainer.removeClass('hoverMe');
                    $hoverContainer.removeClass('display-over');
                });
            } else {
                $(this).show(function () {
                    $hoverContainer.removeClass('hoverMe');
                    $hoverContainer.removeClass('display-over');
                });
            }

        } else {
            $sidebarContainer.addClass('sidebar-collapsed');
            $('.main-container').addClass('shift-container');

            $(this).hide(function () {
                $hoverContainer.addClass('hoverMe');
            });

        }

        $("#owl-demo").data('owlCarousel').reinit({});

    });

    $(document).on('mouseover', '.hoverMe', function () {
        $sidebarContainer.addClass('display-over');
        $sidebarEventTarget.show();
    });
    $(document).on('mouseleave', '.hoverMe', function () {
        $sidebarContainer.removeClass('display-over');
        $sidebarEventTarget.hide();
    });

});
