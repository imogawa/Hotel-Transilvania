export class HospedeModel{
    constructor(nome, cpf, email, telefone, senha){
        this.nome = nome
        this.cpf = cpf
        this.email = email
        this.telefone = telefone
        this.senha = senha
    }
}

export class ReservaModel{
    constructor(idCliente, qtdDias, checkIn, checkOut, idQuarto){
        this.idCliente = idCliente
        this.qtdDias = qtdDias
        this.checkIn = checkIn
        this.checkOut = checkOut
        this.idQuarto = idQuarto
    }
}

export class QuartoModel{
    constructor(numero, tipo, status){
        this.numero = numero
        this.tipo = tipo
        this.status = status
    }
}

export class FuncionarioModel{
    constructor(nome, funcao, turno){
        this.nome = nome
        this.funcao = funcao
        this.turno = turno
    }
}