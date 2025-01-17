$(document).ready(function(){

    console.log('Listo')

    //  Obtén la fecha actual y actualízala en el DOM.

    let date_time = new Date()
    let current_date = date_time.toLocaleDateString()

    $('#date').text("Fecha : " + current_date)


    //  Escribe un evento, cuando se hace clic en el botón enviar.
    $('').click(function(){

        //  Obtén el valor del texto, del área de texto, con el método 'val()'.
        let text_value = $('').val()

        //  Conviértelo en un objeto JS.
        //  Proporciona una 'clave' aquí y en escribe lo mismo en el archivo app.py; también para extraer los datos.
        let input_text = {'' : text_value}
        console.log(input_text)

        //  Requerimiento AJAX.
        $.ajax({

            //ruta
            url : "/predict",
            //  Tipo de requerimiento web.
            type : "POST",
            //  Datos a ser enviados en formato JSON.
            data : JSON.stringify(input_data),
            //  Tipo de respuesta esperada en JSON.
            dataType : 'json',
            //  contentType - (tipo de contenido).
            contentType : 'application/json',

            //  Si todo es exitoso, ejecuta esta función.
            success : function(result){

                // Extrae la predicción y la URL del emoticón del resultado.
                //  Actualiza los elementos del DOM.
                //  Muestra los elementos.
                let prediction = result.prediction
                let emoji_url = result.url

                $('#sentiment').text(prediction)
                $('#sentiment').show()

                $('#emoji').attr('src' , emoji_url)
                $('#emoji').show()

            },

            //  Si hay algún error, ejecuta esta función.
            error : function(result){

                console.log(result)
            }
        })


        //  Borra el cuadro de texto después de cada clic en el botón.
        $('#text').val("")
    })
        
})
