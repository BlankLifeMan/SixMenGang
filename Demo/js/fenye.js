//初始化分页
function initPageSelector() {
    activePageButton();
    initSelectPage();
}

function activePageButton() {
    $(".li_btn").click(function () {
        $(".li_btn")
            .css("background-color", "#fff");
        $(".li_btn").css("color", "#858585");
        $(this).css("background-color", "#00bcd4");
        $(this).css("color", "#fff");
    });
}

/* * 上衣页 下一页事件监听 */
function initSelectPage() {
    $(".li_next").click(function () {
        document.getElementById("div_li_btn_mid").scrollLeft += 40;
    });
    $(".li_prew").click(function () {
        document.getElementById("div_li_btn_mid").scrollLeft -= 40;
    });
}
