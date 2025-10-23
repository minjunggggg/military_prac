// 민정 추가
// 쿠키 세팅 및 쿠키에 따라 팝업 보여지기
function setCookie(name, value, days) {
    const d = new Date();
    d.setDate(d.getDate() + days);
    document.cookie = name + "=" + value + "; path=/; expires=" + d.toUTCString();
}
function getCookie(name) {
    const match = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
    return match ? match[2] : null;
}

window.onload = function () {
    if (getCookie("hidePopup") === "Y") {
        $(".help-bg.beta-eventpop").hide();
    } else {
        $(".help-bg.beta-eventpop").show();
    }
};

// 팝업 닫기 버튼 클릭 시
$(document).on("click", ".w-close", function (e) {
    e.preventDefault();
    $(".help-bg.beta-eventpop").hide();
});

// 오늘 하루 보지 않기 버튼 클릭 시
$(document).on("click", ".btn_nottoday2", function () {
    setCookie("hidePopup", "Y", 1);
    $(".help-bg.beta-eventpop").hide();
});
