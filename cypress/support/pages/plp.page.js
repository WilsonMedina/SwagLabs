class Plp {

    element = {
        
        username: ()=> cy.get('[name="user-name"]'),
        password: ()=> cy.get('[name="password"]'),
        loginButton: ()=> cy.get('[name="login-button"]'),
        buttonAddToCart: ()=> cy.get('[name="add-to-cart-sauce-labs-backpack"]'),
        buttonRemoveToCart: ()=> cy.get('[name="remove-sauce-labs-backpack"]'),
        countCart: ()=> cy.get('#shopping_cart_container'),
        imageProduct: ()=> cy.get('.inventory_list > div > .inventory_item_img > a > [alt="Sauce Labs Backpack"]'),
        nameProduct: ()=> cy.get('.inventory_list > div > .inventory_item_description > div > #item_4_title_link'),
        buttonBackToproduct: ()=> cy.get('[name="back-to-products"]'),
        sorting: ()=> cy.get('[data-test="product_sort_container"]')

    }

    writeUsername(username){
        this.element.username().type(username)
    }
    writePassword(password){
        this.element.password().type(password)
    }
    clickLoginButton(){
        this.element.loginButton().click()
    }
    clickbuttonAddToCart(){
        this.element.buttonAddToCart().click()
    }
    clickbuttonRemoveToCart(){
        this.element.buttonRemoveToCart().click()
    }
    clickImageProduct(){
        this.element.imageProduct().click({multiple: true})
    }
    clickNameProduct(){
        this.element.nameProduct().click({multiple: true})
    }
    clickbuttonBackToproduct(){
        this.element.buttonBackToproduct().click()
    }
    selectSorting(string){
        this.element.sorting().select(string)
    }
}

export const plp = new Plp();