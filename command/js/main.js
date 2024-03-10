var artyom = new Artyom();

document.querySelector("#activar").addEventListener('click', function(){
    artyom.say("sonido activado");
    console.log("estoy activado");
});
artyom.addCommands({
    indexes: ["buscar","shiny","finalizar"],
    action: function(i){
        if(i == 0){
            
            $.ajax({
                url: "https://pokeapi.co/api/v2/pokemon/"+$("#txt-buscar").val(),
                type: "GET",
                //dataType: "json",
                contentType: "application/json",
                success: function (data) {
                    console.log(data.sprites.other.home.front_default)
                    $("#imagen_pokemon").html(`<img src="${data.sprites.other.home.front_default}">`)
                }
            })
        }
        else if(i == 1) {
            $.ajax({
                url: "https://pokeapi.co/api/v2/pokemon/"+$("#txt-buscar").val(),
                type: "GET",
                //dataType: "json",
                contentType: "application/json",
                success: function (data) {
                    console.log(data.sprites.other.home.front_default)
                    $("#imagen_pokemon").html(`<img src="${data.sprites.other.home.front_shiny}">`)
                }
            })
        }else if(i == 2){
            artyom.say("sonido desactivado");
            artyom.dontObey();
        }
    }
});

artyom.initialize({
    lang:"es-ES",
    debug:true,
    listen:true,
    continuous: true,
    speed:0.9,
    mode:"normal"
});

artyom.redirectRecognizedTextOutput(function(recognized,isFinal){
    if(isFinal){
        console.log("Texto final reconocido: " + recognized);
    }else{
        console.log(recognized);
    }
});