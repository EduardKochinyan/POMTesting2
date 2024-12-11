class ChangeInfo {
    elements= {


    }
    Change(){
        cy.get('[name="firstName"]').clear().type('Elon')
        cy.wait(500)
        cy.get('[name="lastName"]').clear().type('Musk')
        cy.wait(500)
        cy.get('[type="submit"]').first().click()
    }
}

export default ChangeInfo;