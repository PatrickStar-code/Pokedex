$(document).ready(function () {
    $("#nome-pokemon").html('Loading')

    $.get("https://pokeapi.co/api/v2/pokemon/1",
        function (data) {
            console.log(data)
            $("#nome-pokemon").html(data["name"]);
            $("#tela-pokemon").append('<img src="' + data["sprites"]["front_default"] + '" alt="" class="img-responsive" width="100%">')
            $(".id").html("<p id='id_pokemon'>" + data["id"] + "</p>");
            for (let i = 0; i < data["types"].length; i++) {
                $(".tipo").append("<span>" + data["types"][i]["type"]["name"] + "</span><br>");

            }
        }
    );
});


$("#anterior").click(function (e) {
    e.preventDefault();
    var id = $("#id_pokemon").html();
    if (id == 1) {
        id == 1;
    }
    else {
        id -= 1;

        $.get("https://pokeapi.co/api/v2/pokemon/" + id + "",
            function (data) {
                $("#nome-pokemon").empty();
                $("#tela-pokemon").empty();
                $(".id").empty();
                $(".tipo").empty();

                $("#nome-pokemon").html(data["name"]);
                $("#tela-pokemon").append('<img src="' + data["sprites"]["front_default"] + '" alt="" class="img-responsive" width="100%">')
                $(".id").html("<p id='id_pokemon'>" + data["id"] + "</p>");
                for (let i = 0; i < data["types"].length; i++) {
                    $(".tipo").append("<span>" + data["types"][i]["type"]["name"] + "</span><br>");

                }
            }
        );
    }


});

$("#proximo").click(function (e) {
    e.preventDefault();
    var id = $("#id_pokemon").html();

    id++
    
    $("#nome-pokemon").html('Loading')

    $.get("https://pokeapi.co/api/v2/pokemon/" + id + "",
        function (data) {
            $("#nome-pokemon").empty();
            $("#tela-pokemon").empty();
            $(".id").empty();
            $(".tipo").empty();

            $("#nome-pokemon").html(data["name"]);
            $("#tela-pokemon").append('<img src="' + data["sprites"]["front_default"] + '" alt="" class="img-responsive" width="100%">')
            $(".id").html("<p id='id_pokemon'>" + data["id"] + "</p>");
            for (let i = 0; i < data["types"].length; i++) {
                $(".tipo").append("<span>" + data["types"][i]["type"]["name"] + "</span><br>");

            }
        }
    );
});
$("#form-pesquisa").submit(function (e) {
    e.preventDefault();
    const pesquisa = $("#texto_pesquisa").val();
    $("#nome-pokemon").html('Loading')

    $.get("https://pokeapi.co/api/v2/pokemon/" + pesquisa + "",
     function (data) {
    
        $("#nome-pokemon").empty();
        $("#tela-pokemon").empty();
        $(".id").empty();
        $(".tipo").empty();

        $("#nome-pokemon").html(data["name"]);
        $("#tela-pokemon").append('<img src="' + data["sprites"]["front_default"] + '" alt="" class="img-responsive" width="100%">')
        $(".id").html("<p id='id_pokemon'>" + data["id"] + "</p>");
        for (let i = 0; i < data["types"].length; i++) {
            $(".tipo").append("<span>" + data["types"][i]["type"]["name"] + "</span><br>");
        }
    }
    );
});

