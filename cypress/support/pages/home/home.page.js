import CadastrarClientePage from '../cadastro/cadastro.page.js'

//**********Mapeamento de elementos**********
const elements = {

    cadastrarButton: '#linkCadastroHeader',

}


//**********Ações**********
export default class HomePage { 

    clicarCadastrar(){
        cy.get(elements.cadastrarButton).click();
        return new CadastrarClientePage();
    }
}