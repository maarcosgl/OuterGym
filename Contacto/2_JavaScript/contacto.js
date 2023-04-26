
$("#formularioContacto").submit(function() {
    mailTo();
  });
  
  function mailTo() {
    var checkBox = $("#checkPrivacidad")[0];
    if (checkBox.checked) {
      var nombre = $("input[name='nombre']").val();
      var apellidos = $("input[name='apellido']").val();  
      var asunto = $("input[name='asunto']").val();
      var mensaje = $("#areaText").val();
      if(nombre != null && nombre != "" && apellidos != null && apellidos != "" && asunto != null && asunto != "" && mensaje != null && mensaje != ""){

      
        var mail = "mailto:outergym.contacto@gmail.com?subject=" + asunto + "&body=" + mensaje + "%0AEnviado: " + nombre;

        var datosPersona = nombre + " " + apellidos;
      
        window.location.href = mail;
      
        alert("Se va a enviar el siguiente correo:\nEMISOR: " + datosPersona + "\nASUNTO = " + asunto + "\nCUERPO = " + mensaje); 
      }
      else{
        alert("Debes cubrir todos los campos del formulario");
      }
    }
    else{  
      alert("Debes estar de acuerdo con las políticas de privacidad");
    }
  }
  
