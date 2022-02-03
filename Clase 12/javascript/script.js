const URLIMG = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjt0n9uXpS-kle2zlBk1ZrxIZ6CtbnLvFaVNDXhVd2SJCx51gPQT3RFPvWekXrXwCOlMU&usqp=CAU";

$("body").append(`<img id="cachorro" src="${URLIMG}">`);

$("body").prepend(`<div><p id="texto">La animacion esta por comenzar!</p></div>`);
$("body").append(`<div><p id="clicker">Clickea la imagen!</p></div>`);

const cachorro = $("#cachorro");

const texto = $("#texto");

const clicker = $("#clicker");

cachorro.click(() => { 
    texto.fadeOut(1000, () => { 
        texto.text("La animacion esta en proceso!");
        cachorro.slideUp(1000);
    }).fadeIn(2000,() => {
        texto.text("La animacion esta por terminar!");
        
        cachorro.delay(500).slideDown(1000);
    }).animate({
        margin: 50
    }, 1000,() => {
        texto.text("La animacion termino espero la hayas disfrutado!");
        cachorro.animate({
            margin: 50
        });
        clicker.animate({
            margin: 50
        });
    }).delay(3000).animate({
        margin: 0
    },2000, () => {
        cachorro.animate({
            margin: 0
        });
        clicker.animate({
            margin: 0
        });
        clicker.text("Clickea la imagen denuevo para volver a ver la animacion!");
    });
});