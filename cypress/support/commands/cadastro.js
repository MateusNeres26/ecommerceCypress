import HomePage from '../pages/home/home.page.js'
import CadastroPage from '../pages/cadastro/cadastro.page.js'

Cypress.Commands.add('preencherFormularioCadastro', (cliente) => {
    const homePage = new HomePage();

    homePage.clicarCadastrar()
    .preencherNome(cliente.nome)
    .preencherCpf(cliente.cpf)
    .clicarGenero()
    .clicarGeneroCombo()
    .preencherDataNascimento(cliente.dataNascimento)
    .preencherTelefone(cliente.telefone)
    .preencherEmail(cliente.email)
    .preencherSenha(cliente.senha)
    .preencherConfirmaSenha(cliente.senha)
    .clicarPesquisa().clicarPesquisaCombo()
    .clicarContinuar()
    .preencherCep(cliente.cep)
    .preencherIdentificacao(cliente.identificacaoEndereco)
    .preencherNumero(cliente.numeroEndereco)
    .preencherComplemento(cliente.complemento)
    .preencherPontoReferencia(cliente.referenciaEndereco)
    .clicarConcluirCadastro()
  });
  
  Cypress.Commands.add('validarCadastro', (texto) => {
    const cadastroPage = new CadastroPage().validarTextoEndereco(texto)
  });