$(document).ready(function() {

    /*======================================*/
    window.parent.postMessage({ progress_: "" }, '*');

    loadTemplet();
    mediaSet();

    $(".break-container").css("visibility", "hidden");
    /*======================================*/
});