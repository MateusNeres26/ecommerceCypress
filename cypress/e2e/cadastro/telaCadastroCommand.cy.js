import ClienteBuilder from '../../support/pages/builders/ClienteBuilder';

beforeEach(() => {
  cy.visit('');
});

describe('Cadastro de cliente', () => {
  it('Fluxo de cadastro cliente com sucesso!', () => {
    const cliente = new ClienteBuilder().build();
    cy.preencherFormularioCadastro(cliente);
    cy.validarCadastro(cliente.texto);
  });
});
