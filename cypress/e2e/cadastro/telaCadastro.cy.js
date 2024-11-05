import {
  HomePage
} from '../../support/pages/index';

import dayjs from 'dayjs';
import faker from 'faker-br';
import { generate } from 'gerador-validador-cpf';
import generator from 'generate-password';


beforeEach(() => {
  cy.visit('');
});

describe('Cadastro de cliente', () => {
  context('principal', () => {

    it('Fluxo de cadastro cliente com sucesso! ', () => {
      //Arrange
      const homePage = new HomePage();
      var nome = faker.fake('{{name.firstName}} {{name.lastName}}');
      var cpf = generate();
      var telefone = 31912341234;
      var email = nome.replace(' ', '_') + '@teste.com';
      var dataNascimento = dayjs().subtract(18, 'year').format('DD-MM-YYYY');
      var senha = generator.generate({
        length: 10,
        numbers: true
      });
      var texto = 'SMS';
      var cep = 68552770;
      var identificacaoEndereco = 'CASA';
      var numeroEndereco = '123';
      var complemento = 'Teste';
      var referenciaEndereco = 'Teste';

      //Action
      homePage.clicarCadastrar()
              .preencherNome(nome)
              .preencherCpf(cpf)
              .clicarGenero()
              .clicarGeneroCombo()
              .preencherDataNascimento(dataNascimento)
              .preencherTelefone(telefone)
              .preencherEmail(email)
              .preencherSenha(senha)
              .preencherConfirmaSenha(senha)
              .clicarPesquisa().clicarPesquisaCombo()
              .clicarContinuar()
              .preencherCep(cep)
              .preencherIdentificacao(identificacaoEndereco)
              .preencherNumero(numeroEndereco)
              .preencherComplemento(complemento)
              .preencherPontoReferencia(referenciaEndereco)
              .clicarConcluirCadastro()
              //Assert
              .validarTextoEndereco(texto)
    });
  });
});