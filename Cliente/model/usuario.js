class Usuario extends Connect{
    constructor(){
        super();
        this.idUsuario = 0; //0: No ha realizado login
        this.nombre = '';
        this.rol = '';
    }

    setUsuario(data){
        this.idUsuario = data.idUsuario;
        this.nombre = data.nombre;
        this.rol = data.rol;
    }

    getUsuario(){

        let data = {
            "idUsuario": this.idUsuario,
            "nombre": this.nombre,
            "rol": this.rol
        };

        return data
    }

    login(dataReq, loginCallback){
        const endpoint = 'usuarios/login';
        const method = 'POST';
        this.connect(dataReq, endpoint, method, loginCallback);
    }
}