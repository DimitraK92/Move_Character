$(function () {
    const player = '<div id="player"></div>';
    $("#map").append(player);

    $(document).keydown(function (e) {
        let position = $('#player').position();
        if (e.keyCode === 37) {//Left
            $("#player").css('left', position.left - 50 + 'px');
        } else if (e.keyCode === 38) {//Up
            $("#player").css('top', position.top - 50 + 'px');
        } else if (e.keyCode === 39) {//Right
            $("#player").css('left', position.left + 50 + 'px');
        } else if (e.keyCode === 40) {//Down
            $("#player").css('top', position.top + 50 + 'px');
        }
    })
    window.addEventListener("keydown", function (e) {
        if (["Space", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].indexOf(e.code) > -1) {
            e.preventDefault();
        }
    }, false);
});