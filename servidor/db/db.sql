CREATE TABLE documento(
	idDoc tinyint not null unique primary key,
    nombre char (31)
);

CREATE TABLE usuario(
	idUsuario bigint not null unique primary key auto_increment,
    nombre char(25),
    rol char(15),
    idDoc tinyint,
    numDoc bigint,
    contrasena varchar(10),
    FOREIGN KEY (idDoc) REFERENCES documento(idDoc)
);

CREATE TABLE clinica(
	idClinica bigint not null unique primary key,
    nombre char(100)
);

CREATE TABLE paciente(
	idPaciente bigint not null unique primary key auto_increment,
    idUsuario bigint,
    idDoc tinyint,
    numDoc tinyint,
    tipoSangre ENUM('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-') not null,
	numCama smallint not null unique,
    numRegistro bigint not null unique,
    peso decimal(4,2),
    estatura decimal(3,2),
    fechaNac date,
    FOREIGN KEY (idUsuario) REFERENCES usuario(idUsuario),
    FOREIGN KEY (idDoc) REFERENCES documento(idDoc)
);

CREATE TABLE clinicaUsuario(
	idUsuario bigint,
    idClinica bigint,
    FOREIGN KEY (idUsuario) REFERENCES usuario(idUsuario),
    FOREIGN KEY (idClinica) REFERENCES clinica(idClinica)
);

CREATE TABLE solucion(
	idPaciente bigint,
    tipoSolucion varchar(100),
    volumenTotal decimal(5,2),
    mezcla varchar (100),
    cmHora decimal(4,2),
    FOREIGN KEY (idPaciente) REFERENCES paciente(idPaciente) 
);

CREATE TABLE actividad(
	idPaciente bigint,
    actividad varchar(200),
    FOREIGN KEY (idPaciente) REFERENCES paciente(idPaciente)
);

CREATE TABLE diagnostico(
	idPaciente bigint,
    diagnostico varchar(500),
    FOREIGN KEY (idPaciente) REFERENCES paciente(idPaciente)
);

CREATE TABLE antAlergicos(
	idPaciente bigint,
    antAlergicos varchar(100),
    FOREIGN KEY (idPaciente) REFERENCES paciente(idPaciente)
);

CREATE TABLE observaciones(
	idPaciente bigint,
    fecha date,
    observaciones varchar(500),
    FOREIGN KEY (idPaciente) REFERENCES paciente(idPaciente)
);

CREATE TABLE restLiquidos(
	idPaciente bigint,
    restLiquidos varchar(100),
    FOREIGN KEY (idPaciente) REFERENCES paciente(idPaciente)
);