function validaSenha(senha, confirmacaoSenha, erro){
    console.log(senha, confirmacaoSenha)
    if (senha !== confirmacaoSenha || !senha){
        erro.push("Senhas não batem!")
    }
}

function validaEmail(email, erro){
    const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i
    if(!regex.test(email)){
        erro.push("E-mail inválido!")
    }
}

function validaNome(nome, erro){
    if(nome.length < 3){
        erro.push("Nome inválido!")
    }
}

function validaCPF(cpf, erro){
    const cpfTeste = parseInt(cpf)
    if(cpfTeste != cpf || cpf.length != 11){
        erro.push("CPF inválido!")
    }
}

function validaTelefone(telefone, erro){
    const tel = parseInt(telefone)
    if(tel != telefone || telefone.length < 10 || telefone.length > 12){
        erro.push("Telefone inválido!")
    }
}

export default function validaHospede(payload){
    const erro = []
    validaSenha(payload.senha, payload.confirmacaoSenha, erro)
    validaEmail(payload.email, erro)
    validaNome(payload.nome, erro)
    validaTelefone(payload.telefone, erro)
    validaCPF(payload.cpf, erro)
    return erro
}