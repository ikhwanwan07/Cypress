
context('Smoketest', () => {
    it('Login', () => {
      cy.login('problem_user', { cacheSession: false })
    cy.xpath('//span[@class="title"]').should('have.text','Products')
  })
  it('Add item to cart', () => {
    cy.login('problem_user', { cacheSession: false })
    cy.xpath('//button[@id="add-to-cart-sauce-labs-backpack"]').click()
    cy.xpath('//*[@id="shopping_cart_container"]/a/span').should('have.text',('1'))
  })
  it('checkot item', () => {
    cy.login('problem_user', { cacheSession: false })
    cy.xpath('//button[@id="add-to-cart-sauce-labs-backpack"]').click()
    cy.xpath('//a[@class="shopping_cart_link"]').click()
    cy.get('[data-test="checkout"]').click()

    
    // cy.xpath('//input[@id="first-name"]').type('hh')
    // cy.xpath('//input[@id="last-name"]').type('hasyim')
    // cy.xpath('//input[@id="postal-code"]').type('121212')
    // cy.get('[data-test="continue"]').click()
    
  })

})
