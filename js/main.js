$(document).ready(function () {
    $("#mi-boton").on("click", function (){
        $.ajax({
            url: "https://pokeapi.co/api/v2/pokemon/" +$("#txt-buscar").val(),
            type: "GET",
            //dataType: "json",
            contentType: "application/json",
            success: function (data) {
                console.log(data.sprites.other.home.front_default)
                $("#imagen_pokemon").html(`<img src="${data.sprites.other.home.front_default}">`)
            }
        })
    })
})

