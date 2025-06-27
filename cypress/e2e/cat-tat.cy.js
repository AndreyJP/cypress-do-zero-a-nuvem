/// <reference types="cypress" />

describe('Central de Atendimento ao Cliente TAT', () => {

  beforeEach(() => {
    //Caminho com referência ao arquivo de configuração do cypress
    cy.visit('./src/index.html');
  })

  it('Verifica o título da aplicação', () => {
    cy.title().should('be.eq', 'Central de Atendimento ao Cliente TAT');
  })

  it('Preenche os campos obrigatórios e envia o formulário', () => {

    const longText = Cypress._.repeat('abcdefghijklmnopqrstuvwxyz ', 10)

    // Campo Nome
    cy.get('input[id=firstName]')
      .as('nome')
      .should('be.visible')
      .type('Cliente')
    cy.get('@nome').should('have.value', 'Cliente')

    // Campo Sobrenome
    cy.get('input[id=lastName]')
      .as('sobreNome')
      .should('be.visible')
      .type('Teste')
    cy.get('@sobreNome').should('have.value', 'Teste')

    // Campo E-mail
    cy.get('input[id=email]')
      .as('email')
      .should('be.visible')
      .type('clienteteste@email.com')
    cy.get('@email').should('have.value', 'clienteteste@email.com')

    // Campo de Feedback
    cy.get('textarea[id=open-text-area]')
      .as('feedback')
      .should('be.visible')
      .type(longText, { delay: 0 })
    cy.get('@feedback').should('have.value', longText)

    // Botão de Enviar
    cy.contains('button', 'Enviar')
      .should('be.visible')
      .click()

    // cy.get('button[type=submit]')
    //   .should('be.visible')
    //   .click()

    // Verificar Mensagem
    cy.get('span[class=success]')
      .should('be.visible')

  });

  it('Exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {

    // Campo Nome
    cy.get('input[id=firstName]')
      .as('nome')
      .should('be.visible')
      .type('Cliente')
    cy.get('@nome').should('have.value', 'Cliente')

    // Campo Sobrenome
    cy.get('input[id=lastName]')
      .as('sobreNome')
      .should('be.visible')
      .type('Teste')
    cy.get('@sobreNome').should('have.value', 'Teste')

    // Campo E-mail
    cy.get('input[id=email]')
      .as('email')
      .should('be.visible')
      .type('clienteteste@')
    cy.get('@email').should('have.value', 'clienteteste@')

    // Campo de Feedback
    cy.get('textarea[id=open-text-area]')
      .as('feedback')
      .should('be.visible')
      .type('Teste de feedback do cliente', { delay: 0 })
    cy.get('@feedback').should('have.value', 'Teste de feedback do cliente')

    // Botão de Enviar
    cy.contains('button', 'Enviar')
      .should('be.visible')
      .click()

    // Verificar Mensagem
    cy.get('span[class=error]')
      .should('be.visible')
  });

  it('Campo telefone continua vazio quando preenchido com valor não numérico', () => {

    cy.get('input[id=phone]')
      .as('telefone')
      .should('be.visible')
      .type('abcde')
    cy.get('@telefone').should('have.value', '')

  });

  it('Exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => {
    // Campo Nome
    cy.get('input[id=firstName]')
      .as('nome')
      .should('be.visible')
      .type('Cliente')
    cy.get('@nome').should('have.value', 'Cliente')

    // Campo Sobrenome
    cy.get('input[id=lastName]')
      .as('sobreNome')
      .should('be.visible')
      .type('Teste')
    cy.get('@sobreNome').should('have.value', 'Teste')

    // Campo E-mail
    cy.get('input[id=email]')
      .as('email')
      .should('be.visible')
      .type('clienteteste@email.com')
    cy.get('@email').should('have.value', 'clienteteste@email.com')

    // Marcar opção de Telefone
    cy.get('input[id=phone-checkbox]')
      .as('telefone')
      .should('be.visible')
      .check()

    // Campo de Feedback
    cy.get('textarea[id=open-text-area]')
      .as('feedback')
      .should('be.visible')
      .type('Teste de feedback do cliente', { delay: 0 })
    cy.get('@feedback').should('have.value', 'Teste de feedback do cliente')

    // Botão de Enviar
    cy.contains('button', 'Enviar')
      .should('be.visible')
      .click()

    // Verificar Mensagem
    cy.get('span[class=error]')
      .should('be.visible')
  });

  it('Preenche e limpa os campos nome, sobrenome, email e telefone', () => {
    // Campo Nome
    cy.get('input[id=firstName]')
      .as('nome')
      .should('be.visible')
      .type('Cliente')
    cy.get('@nome').should('have.value', 'Cliente')
    cy.get('@nome').clear()
    cy.get('@nome').should('have.value', '')

    // Campo Sobrenome
    cy.get('input[id=lastName]')
      .as('sobreNome')
      .should('be.visible')
      .type('Teste')
    cy.get('@sobreNome').should('have.value', 'Teste')
    cy.get('@sobreNome').clear()
    cy.get('@sobreNome').should('have.value', '')

    // Campo E-mail
    cy.get('input[id=email]')
      .as('email')
      .should('be.visible')
      .type('clienteteste@email.com')
    cy.get('@email').should('have.value', 'clienteteste@email.com')
    cy.get('@email').clear()
    cy.get('@email').should('have.value', '')

    // Campo Telefone
    cy.get('input[id=phone]')
      .as('telefone')
      .should('be.visible')
      .type('999999999')
    cy.get('@telefone').should('have.value', '999999999')
    cy.get('@telefone').clear()
    cy.get('@telefone').should('have.value', '')

  });

  it('Exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', () => {
    // Botão de Enviar
    cy.contains('button', 'Enviar')
      .should('be.visible')
      .click()

    // Verificar Mensagem
    cy.get('span[class=error]')
      .should('be.visible')
  });

  it('Envia o formuário com sucesso usando um comando customizado', () => {

    const data = {
      firstName: 'Nome',
      lastName: 'SobreNome',
      email: 'nomesobrenome@email.com',
      feedback: 'Está tudo indo muito bem, nenhuma sugestão a se considerar.'
    }

    cy.fillMandatoryFieldsAndSubmit(data)

    // Verificar Mensagem
    cy.get('span[class=success]')
      .should('be.visible')
  });

  it('Seleciona um produto (YouTube) por seu texto', () => {
    cy.get('select[id=product]')
      .as('produto')
      .select('YouTube')
    cy.get('@produto').should('have.value', 'youtube')
  });

  it('Seleciona um produto (Mentoria) por seu valor (value)', () => {
    cy.get('select[id=product]')
      .as('produto')
      .select('mentoria')
    cy.get('@produto').should('have.value', 'mentoria')
  });

  it('Seleciona um produto (Blog) por seu índice', () => {
    cy.get('select[id=product]')
      .as('produto')
      .select(1)
    cy.get('@produto').should('have.value', 'blog')
  });

  it('Marca o tipo de atendimento "Feedback"', () => {
    cy.get('input[type=radio][value=feedback]')
      .check('feedback')
      .should('be.checked')
  });

  it('Marca cada tipo de atendimento', () => {
    cy.get('input[type=radio][name=atendimento-tat]')
      .each(typeOfService => {
        cy.wrap(typeOfService) // Empacota elemento para continuar utilizando nele os comandos do Cypress
          .check()
          .should('be.checked')
      })
  });

  it('Marca ambos checkboxes, depois desmarca o último', () => {
    cy.get('input[type=checkbox]')
      .check()
      .should('be.checked')

    cy.get('input[type=checkbox]')
      .last()
      .uncheck()
      .should('not.be.checked')
  });

  it('Seleciona um arquivo da pasta fixtures', () => {

    cy.get('#file-upload')
      .selectFile('cypress/fixtures/example.json')
      .should(input => {
        expect(input[0].files[0].name).to.equal('example.json')
      })
  });

  it('Seleciona um arquivo simulando um drag-and-drop', () => {
    cy.get('#file-upload')
      .selectFile('cypress/fixtures/example.json', { action:'drag-drop' })
      .should(input => {
        expect(input[0].files[0].name).to.equal('example.json')
      })
  });

  it('Seleciona um arquivo utilizando uma fixture para a qual foi dada um alias', () => {
    cy.fixture('example.json')
      .as('exampleFile')

    cy.get('#file-upload')
      .selectFile('@exampleFile')
      .should(input => {
        expect(input[0].files[0].name).to.equal('example.json')
      })
  });

  it('Verifica que a política de privacidade abre em outra aba sem a necessidade de um clique', () => {
    cy.get('div[id=privacy] > a')
      .should('have.attr', 'target', '_blank')
      .and('have.attr', 'href', 'privacy.html')
  });

  it('Acessa a página da política de privacidade removendo o target e então clicando no link', () => {
    cy.get('div[id=privacy] > a')
      .invoke('removeAttr', 'target').click()
      .title()
      .should('be.eq', 'Central de Atendimento ao Cliente TAT - Política de Privacidade')
  });

})