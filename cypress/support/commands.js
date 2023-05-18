import { plp } from '../support/pages/plp.page'

Cypress.Commands.add('LoginSwagLabs', () => {

    cy.fixture('data.swag').then( function(fxt) { 

        this.fxt = fxt 
        
        cy.visit('/')
        plp.writeUsername(this.fxt.username)
        plp.writePassword(this.fxt.password)
        plp.clickLoginButton()

    })
    
})