$(document).ready(function(){
    $("#guardarRegistro").click(function(){
        if(isSubmitOk()){
           alert("Registrado");
        }
        else{
            //document.getElementById("guardarRegistro").onsubmit = false; 
            alert("Registro erroneo");
        }
    });
    function isSubmitOk(){
        var nombres= document.getElementById("txtnombres").value;
        var apellidoP= document.getElementById("txtapellidoP").value;
        var apellidoM= document.getElementById("txtapellidoM").value;
        if(isValidFullName(nombres, apellidoP, apellidoM) == false){
            return false;
        }
        var fechaNacimiento = document.getElementById("fechaNacimiento").value;
        isValidDate(fechaNacimiento);
        //funcion
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

    function isValidDate(_date){
        var sYear = _date.slice(0,4);
        var year = Number(sYear);
        if(year < 2022){
            return false;
        }
        return true;
    }

    function isValidFullName(_nombres, _apellido, _apellido2){
        validar = /^[A-z]+$/;
        for(var i =0; i< _apellido.length; i ++){
            if(_apellido[i].match(validar) == false){
                alert("apellido no tiene un formato correcto");
                return false;
            }
        }
        for(var i =0; i< _apellido2.length; i ++){
            if(_apellido2[i].match(validar) == false){
                alert("apellido no tiene un formato correcto");
                return false;
            }
        }
        for(var i =0; i< _nombres.length; i ++){
            if(_nombres[i].match(validar) == false){
                if(_nombres[i] != ' ')
                {
                    alert("nombre no tiene un formato correcto");
                    return false;
                }
            }
        }
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
        alert("correo no tiene un formato correcto");
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
            switch(_texto[i]){
                case '.':
                    case ',':
                        case ':':
                            case ';':
                                case '!':
                                    case '?':
                                        havePSign = true;
                                        break;  
            }
            if(_texto[i].match(validar)){
                havePSign = true;
            }
        }
        if(haveMayus){
            if(haveMinus){
                if(haveNumber){
                    if(havePSign){
                        return true;
                    }
                }
            }
        }
        alert("La contraseña no es lo suficientemente fuerte. Debe ser mayor a 8 caracteres y contar con 1 mayuscula, 1 minuscula, 1 digito y un signo de puntuacion.");
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