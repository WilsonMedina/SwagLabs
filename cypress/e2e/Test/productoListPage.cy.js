import { plp } from '../../support/pages/plp.page'

describe('Smart testing', function() {

    beforeEach('User logeado in plp', () => {

        cy.LoginSwagLabs()
        cy.fixture('data.swag').then( fxt => { this.fxt = fxt })

    })

    it('Validate add product the shopping cart', () => {

        cy.url().should('contain', this.fxt.endpoint)
        plp.clickbuttonAddToCart()
        plp.element.countCart().should('contain', this.fxt.counterCart)
        plp.element.buttonRemoveToCart().should('contain', this.fxt.remove)
        plp.clickbuttonRemoveToCart()

    })
    it('Validate enter details of a product without being added to the shopping cart.', () => {

        cy.url().should('contain', this.fxt.endpoint)
        plp.clickImageProduct()
        cy.url().should('contain', this.fxt.endpointItem)
        plp.clickbuttonBackToproduct()
        cy.url().should('contain', this.fxt.endpoint)
        plp.clickNameProduct()
        cy.url().should('contain', this.fxt.endpointItem)

    })
    it('Validate enter details of a product added to the shopping cart.', () => {

        cy.url().should('contain', this.fxt.endpoint)
        plp.clickbuttonAddToCart()
        plp.element.buttonRemoveToCart().should('contain', this.fxt.remove)

        plp.clickImageProduct()
        cy.url().should('contain', this.fxt.endpointItem)
        plp.clickbuttonBackToproduct()
        cy.url().should('contain', this.fxt.endpoint)
        plp.clickNameProduct()
        cy.url().should('contain', this.fxt.endpointItem)
        plp.clickbuttonRemoveToCart()

    })
    it('Validate check the product page sorting rule', () => {

        cy.url().should('contain', this.fxt.endpoint)
        plp.selectSorting(this.fxt.price)

    })
})