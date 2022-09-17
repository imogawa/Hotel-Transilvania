function validaSenha(senha, confirmacaoSenha, setErro, erro){
    if (senha !== confirmacaoSenha){
        setErro([...erro, "Senhas não batem!"])
    }
}

function validaEmail(email, setErro, erro){
    const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i
    if(!regex.test(email)){
        setErro([...erro, "E-mail inválido!"])
    }
}

function validaNome(nome, setErro, erro){
    if(nome.length < 3){
        setErro([...erro, "Nome inválido!"])
    }
}

function validaCPF(cpf, setErro, erro){
    const cpfTeste = parseInt(cpf)
    if(cpfTeste != cpf || cpf.length != 11){
        setErro([...erro, "CPF inválido!"])
    }
}

function validaTelefone(telefone, setErro, erro){
    const tel = parseInt(telefone)
    if(tel != telefone || telefone.length < 10 || telefone.length > 12){
        setErro([...erro, "Telefone inválido!"])
    }
}

export default function validaHospede(payload, setErro, erro){
    validaSenha(payload.senha, payload.confirmacaoSenha, setErro, erro)
    validaEmail(payload.email, setErro, erro)
    validaNome(payload.nome, setErro, erro)
    validaTelefone(payload.telefone, setErro, erro)
    validaCPF(payload.cpf, setErro, erro)
}