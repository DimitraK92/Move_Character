$(function () {
    var player = '<div id="player"></div>';
    $("#map").append(player);

    $(document).keydown(function (e) {
        var position = $("#player").position();
        switch (e.keyCode) {
            case 37:    //Left
                $("#player").css('left',position.left - 50 + 'px');
                break;
            case 38:    //Up
                $("#player").css('top',position.top - 50 + 'px'); 
                break;
            case 39:    //Right
                $("#player").css('left', position.left + 50 + 'px'); 
                break;
            case 40:    //Down
                $("#player").css('top', position.top + 50 + 'px'); 
                break;
        }
    })
    window.addEventListener("keydown", function (e) {
        if (["Space", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].indexOf(e.code) > -1) {
            e.preventDefault();
        }
    }, false);
});