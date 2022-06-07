
use projeto_vixteam;

create table Cliente(
	idCliente integer not null unique primary key auto_increment,
	nomeCliente varchar(180) not null,
	cpf char(11) not null unique,
	email varchar(180) not null unique,
	senha varchar(10) not null,
	telefone varchar(14),
	data_Nascimento date not null,
	sexo enum('M','F') not null,
	constraint pkCliente primary key (idCliente)
);