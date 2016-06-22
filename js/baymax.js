$(function() {
    //前进
    $(".win-forward").click(function() {
        window.history.forward(1);
    });
    //后退
    $(".win-back").click(function() {
        window.history.back(-1);
    });
    //刷新
    $(".win-refresh").click(function() {
        window.location.reload();
    });
    //关闭
    $(".win-close").click(function() {
        window.close();
    });
    //点击显示下拉菜单
    $('.dropdown-toggle').click(function() {
        $(this).closest('.dropdown').addClass("open");
    });
    //滑过显示下拉菜单
    $(".dropdown-hover").hover(function() {
        $(".dropdown").removeClass("open");
        $(this).closest('.ButtonGroup, .dropdown').addClass("open");
    }, function() {
    });
    //关闭下拉菜单
    $(document).bind("click", function(e) {
        if ($(e.target).closest(".ButtonGroup.open, .dropdown.open").length == 0) {
            $(".ButtonGroup, .dropdown").removeClass("open");
        }
    });
    //关闭警告框
    $('.alert .close').each(function() {
        $(this).click(function() {
            $(this).closest('.alert').remove();
        });
    });
    //静止在顶部或尾部
    $(".fixed").each(function() {
        var e = $(this);
        var style = e.attr("data-style");
        var top = e.attr("data-offset-fixed");
        if (top == null) {
            top = e.offset().top;
        } else {
            top = e.offset().top - parseInt(top);
        };
        if (style == null) {
            style = "fixed-top";
        };

        $(window).bind("scroll", function() {
            var thistop = top - $(window).scrollTop();
            if (style == "fixed-top" && thistop < 0) {
                e.addClass("fixed-top");
            } else {
                e.removeClass("fixed-top");
            };

            var thisbottom = top - $(window).scrollTop() - $(window).height();
            if (style == "fixed-bottom" && thisbottom > 0) {
                e.addClass("fixed-bottom");
            } else {
                e.removeClass("fixed-bottom");
            };
        });

    });
})