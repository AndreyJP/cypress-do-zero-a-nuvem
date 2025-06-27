//fillMandatoryFieldsAndSubmit
Cypress.Commands.add('fillMandatoryFieldsAndSubmit', (data = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@example.com',
    feedback: 'Teste de feedback.'
}) => {
    // Campo Nome
    cy.get('input[id=firstName]')
        .as('nome')
        .should('be.visible')
        .type(data.firstName)
    cy.get('@nome').should('have.value', data.firstName)

    // Campo Sobrenome
    cy.get('input[id=lastName]')
        .as('sobreNome')
        .should('be.visible')
        .type(data.lastName)
    cy.get('@sobreNome').should('have.value', data.lastName)

    // Campo E-mail
    cy.get('input[id=email]')
        .as('email')
        .should('be.visible')
        .type(data.email)
    cy.get('@email').should('have.value', data.email)

    // Campo de Feedback
    cy.get('textarea[id=open-text-area]')
        .as('feedback')
        .should('be.visible')
        .type(data.feedback, { delay: 0 })
    cy.get('@feedback').should('have.value', data.feedback)

    // Botão de Enviar
    cy.contains('button', 'Enviar')
      .should('be.visible')
      .click()
})