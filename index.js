$(document).ready( () => {

    $(".mensaje").fadeOut(10);

    $("div.bloque").mouseenter( function () {
        $(".mensaje").fadeIn(300);
        $(this).addClass("hovered");
        $("#contenido-mensaje").text("Bloque " + $(this).attr('id'));
    });

    $("div.bloque").mouseleave( function () {
        $(".mensaje").fadeOut(200);
        $(this).removeClass("hovered");
    });

    $("div.bloque").click( function () {
        $(this).animate({
            top: "+=10"
        }, 500, () => {
            $(this).animate({
                top: "-=10"
            });
        });
    });
    
});