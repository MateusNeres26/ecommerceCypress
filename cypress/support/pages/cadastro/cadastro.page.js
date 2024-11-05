//**********Mapeamento de elementos**********
const elements = {
    cadastrarButton: '#linkCadastroHeader',
    nomeField:'[data-testid="complete-name-input"]',
    cpfField: '[data-testid="cpf-input"]',
    generoField: '#SelectGender',
    generoComboBox: '#SelectGender > div:nth-child(3) > span:nth-child(3)',
    dataNascimentoField: '[data-testid="birth-date-input"]',
    telefoneField: '[data-testid="mobile-number-input"]',
    emailField: '[data-testid="email-input"]',
    senhaField: '[data-testid="password-input"]',
    confirmaSenhaField: '[data-testid="confirm-password-input"]',
    ondeConheceuComboBox: '#SelectBox > .sc-jdkBTo > .sc-fmzyuX',
    continueButton: '[data-testid="button-form-continue"]',
    pesquisaField: '#SelectBox',
    pesquisaComboBox: '#SelectBox > div:nth-child(3) > span:nth-child(3)',
    adicionarEnderecoText: "button[data-testid='sms-method-button'] > span:nth-child(2)",
    cepEnderecoField: '[data-testid="zipcode-input"]',
    identificacaoEnderecoField: '[data-testid="address-identification-input"]',
    numeroEnderecoField: '[data-testid="address-number-input"]',
    complementoEnderecoField: '[data-testid="address-complement-input"]',
    referenciaEnderecoField: '[data-testid="address-reference-input"]',
    concluirCadastroButton: '[data-testid="register-submit-button"]',

}


//**********Ações**********
export default class CadastrarClientePage { 

    clicarCadastrar(){
        cy.get(elements.cadastrarButton).click();
        return this;
    }

    preencherNome(nomeCompleto){
        cy.get(elements.nomeField).type(nomeCompleto);
        return this;
    }

    preencherCpf(cpf){
        cy.get(elements.cpfField).type(cpf);
        return this;
    }

    clicarGenero(){
        cy.get(elements.generoField).click();
        return this;
    }
    clicarGeneroCombo(){
        cy.get(elements.generoComboBox).click();
        return this;
    }

    preencherDataNascimento(dataNascimento){
        cy.get(elements.dataNascimentoField).type(dataNascimento);
        return this;
    }

    preencherTelefone(telefone){
        cy.get(elements.telefoneField).type(telefone);
        return this;
    }

    preencherEmail(email){
        cy.get(elements.emailField).type(email);
        return this;
    }

    preencherSenha(senha){
        cy.get(elements.senhaField).type(senha);
        return this;
    }

    preencherConfirmaSenha(senha){
        cy.get(elements.confirmaSenhaField).type(senha);
        return this;
    }

    clicarPesquisa(){
        cy.get(elements.pesquisaField).click();
        return this;
    }

    clicarPesquisaCombo(){
        cy.get(elements.pesquisaComboBox).click();
        return this;
    }

    clicarContinuar(){
        cy.get(elements.continueButton).click();
        return this;
    }

    preencherCep(cep){
        cy.get(elements.cepEnderecoField).type(cep);
        return this;
    }

    preencherIdentificacao(identificacaoEndereco){
        cy.get(elements.identificacaoEnderecoField).type(identificacaoEndereco);
        return this;
    }

    preencherNumero(numeroEndereco){
        cy.get(elements.numeroEnderecoField).type(numeroEndereco);
        return this;
    }

    preencherComplemento(complemento){
        cy.get(elements.complementoEnderecoField).type(complemento);
        return this;
    }

    preencherPontoReferencia(referenciaEndereco){
        cy.get(elements.referenciaEnderecoField).type(referenciaEndereco);
        return this;
    }

    clicarConcluirCadastro(){
        cy.get(elements.concluirCadastroButton).click();
        return this;
    }


//**********Validações**********
    validarTextoEndereco(texto){
        cy.get(elements.adicionarEnderecoText).contains(texto)
        return this;
    }
}