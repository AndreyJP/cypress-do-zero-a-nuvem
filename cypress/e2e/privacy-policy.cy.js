  it('Testa a página da política de privacidade de forma independente', () => {
    cy.visit('./src/privacy.html')
    cy.title()
      .should('be.eq', 'Central de Atendimento ao Cliente TAT - Política de Privacidade')
    cy.contains('p', 'Talking About Testing').should('be.visible')
  });