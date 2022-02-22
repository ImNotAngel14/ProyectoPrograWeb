$(document).ready(function(){
    $("#guardarRegistro").click(function(){
        //window.open("login.html", "A", "width=300, height=200")
        //alert("Guardado con exito");
        if(isSubmitOk()){
           alert("es valido");
        }
        else{
            alert("no es valido");
        }
    });
    function isSubmitOk(){
        var nombres= document.getElementById("txtnombres").value;
        var apellidoP= document.getElementById("txtapellidoP").value;
        var apellidoM= document.getElementById("txtapellidoM").value;
        if(isValidFullName(nombres, apellidoP, apellidoM) == false){
            console.log("falso");
            return false;
        }
        //var fechaNacimiento;
        var correo=document.getElementById("txtcorreo").value;
        if(isValidEmail(correo)== false){
            return false;
        }
        var contrasena = document.getElementById("txtcontrasena").value;
        var confirmContrasena = document.getElementById("txtconfirmarContrasena").value;
        if(isStrongPassword(contrasena)){
            
            if(doPasswordsMatch(contrasena, confirmContrasena)==false){
                return false;
            }
        }else{
            return false;
        }
       return true;
    }

    function isValidFullName(_nombres, _apellido, _apellido2){
        validar = /^[A-z]+$/;
        for(var i =0; i< _apellido.length; i ++){
            if(_apellido[i].match(validar) == false){
                return false;
            }
        }
        for(var i =0; i< _apellido2.length; i ++){
            if(_apellido2[i].match(validar) == false){
                return false;
            }
        }
        for(var i =0; i< _nombres.length; i ++){
            if(_nombres[i].match(validar) == false){
                if(_nombres[i] != ' ')
                {
                    return false;
                }
            }
        }
        console.log("el nombre es valido");
        return true;
    }

    function isValidEmail(_texto){
        var haveUser = false;
        var haveAt = false;
        var haveEnterprise = false;;
        var haveDot = false;
        var haveTermination = false;
        for(var i = 0; i < _texto.length; i++){
            if(haveAt == false){
                if(_texto[i]=='@'){
                    if(i>0){
                        haveUser = true;
                        haveAt = true;
                        var j = i+1;
                        if(_texto[j] == '.'){
                            break;
                        }
                        else{
                            haveEnterprise = true;
                        }
                    }
                    else{
                        break;
                    }
                }
                
            }
            else{
                if(_texto[i] == '.'){
                    haveDot = true;
                    var j = i+1;
                    if(j == _texto.length){
                        break;
                    }
                    else{
                        haveTermination = true;
                    }
                }
            }
        }
        if(haveUser){
            if(haveAt){
                if(haveEnterprise){
                    if(haveDot){
                        if(haveTermination){
                            return true;
                        }
                    }
                }
            }
        }
        return false;
    }
    
    function isStrongPassword(_texto){
        var haveMayus = false;
        var haveMinus= false;
        var haveNumber= false;
        var havePSign= false;

        for(var i = 0;i<_texto.length; i++){
            validar = /^[0-9]+$/;
            if(_texto[i].match(validar)){
                haveNumber = true;
            }
            validar = /^[A-Z]+$/;
            if(_texto[i].match(validar)){
                haveMayus = true;
            }
            validar = /^[a-z]+$/;
            if(_texto[i].match(validar)){
                haveMinus = true;
            }
            //validar = /^[A-Z]+$/;
            if(_texto[i].match(validar)){
                havePSign = true;
            }
        }
        if(haveMayus){
            if(haveMinus){
                if(haveNumber){
                    //aqui va la validacion de sign
                    return true;
                }
            }
        }
        return false;
    }
    function doPasswordsMatch(_contra1, _contra2){
        var longitud = _contra1.length;
        var longitud2 = _contra2.length;
        if(longitud != longitud2){
            return false;
        }else{
            for(var j = 0; j<longitud; j++){
                if(_contra1[j] != _contra2[j]){
                    return false;
                }
            }
            
        }
        return true;
    }
});