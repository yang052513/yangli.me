import $ from 'jquery'

$(document).ready(function () {
    $("#budget-project").click(function() {
        $("#budget-project-modal").fadeIn();
    });

    $("#haikyuu-project").click(function() {
        $("#haikyuu-project-modal").fadeIn();
    });

    $("#howsurday-project").click(function() {
        $("#howsurday-project-modal").fadeIn();
    });
    
    $("#osaka-project").click(function() {
        $("#osaka-project-modal").fadeIn();
    });

    $(".modal-cancel-btn").click(function() {
        $(".project-modal").fadeOut();
    });

    $(".showcase-overlay").mouseenter(function() {
        $(".overlay-tit, .overlay-cont").css({
            "transform": "translateX(" + 0 + "px)"
        });
        $(".overlay-tit, .overlay-cont").css("transition", "transform 1s")
    });

    $(".showcase-overlay").mouseleave(function() {
        $(".overlay-tit").css({
            "transform": "translateX(" + -400 + "px)"
        });

        $(".overlay-cont").css({
            "transform": "translateX(" + 400 + "px)"
        });

        $(".overlay-tit, .overlay-cont").css("transition", "transform 1s")
    });
});