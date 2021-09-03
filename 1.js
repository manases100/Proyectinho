function VerificarRespuestas() {
    var puntos = 0;
    
    var form = document.forms["quiz"];
    
    var respuestas =["a", "c", "c", "a", "b"];

    for(var i = 1; i <= respuestas.length; i++){
        console.log(form["p" + i].value);
        if (form["p" + i].value === null || form["p" + i].value === "") {
            alert("Responda a la pregunta " + i);
        }
        else{
            if(form["p" + i].value === respuestas[i - 1]){
                puntos++;

            }
        }
    }

    var resultado = document.getElementById("resultado");
    resultado.innerHTML = "<h3>Obtuviste <span>"+ puntos +"</span> de <span>"+ respuestas.length +" puntos</span></h3>";
}