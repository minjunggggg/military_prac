// 민정 추가
$(function () {
    const popup = $(".h-win");
    const cookieName = "hidePopup";

    // --- 쿠키 존재하면 팝업 숨김 ---
    if (getCookie(cookieName) === "Y") {
        popup.hide();
    }

    // --- 닫기 버튼 ---
    $(".w-close").on("click", function (e) {
        e.preventDefault();
        popup.hide();
    });

    // --- 오늘 하루 보지 않기 ---
    $('.btn_nottoday2 input[type="checkbox"]').on("change", function () {
        if ($(this).is(":checked")) {
            setCookie(cookieName, "Y", 1); // 1일 유효
            popup.hide();
        }
    });

    // --- 쿠키 함수 ---
    function setCookie(name, value, days) {
        const d = new Date();
        d.setDate(d.getDate() + days);
        document.cookie = `${name}=${value}; path=/; expires=${d.toUTCString()}`;
    }

    function getCookie(name) {
        const v = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
        return v ? v[2] : null;
    }
});

$(document).on("click", ".w-close", function (e) {
    e.preventDefault();
    $(".h-win").hide();
});

$(document).on("change", '.btn_nottoday2 input[type="checkbox"]', function () {
    setCookie("hidePopup", "Y", 1);
    $(".h-win").hide();
});
