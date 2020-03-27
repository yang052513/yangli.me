import $ from 'jquery'; 

$(document).ready(function () {
    
    //Show play btn when mouse hover the preview img of video
    function playBtnShow() {
        $(".video-preview-wrap").mouseenter(function () {
            $(this).find(".video-play-btn").fadeIn();
        });

        $(".video-preview-wrap").mouseleave(function () {
            $(this).find(".video-play-btn").fadeOut();
        });
    }

    //Play the video when click the button
    function playVideo() {
        $(".video-preview-wrap").click(function() {
            $(this).find("video").fadeIn();
            $(".video-overlay").fadeIn();
            $("html").css("overflow", "hidden");
            
        });

        $(".video-overlay").click(function() {
            $(".video-player").fadeOut();
            $('video').trigger('pause');
            $(".video-overlay").fadeOut();
            $("html").css("overflow", "visible");
        });

    }

    //Call video play button function
    playBtnShow();
    playVideo();

});