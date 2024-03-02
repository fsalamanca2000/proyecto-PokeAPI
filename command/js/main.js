var artyom = new Artyom();

document.querySelector("#activar").addEventListener('click', function(){
    artyom.say("sonido activado");
});

artyom.addCommands({
    indexes: ["Hola","adios", "comando"],
    action: function(i){
        if(i == 0){
            artyom.say("saludo");
        }else if(i == 1){
            artyom.say("chao");
        }
        else if(i == 2) {console.log("recibido");

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