import LoginPage from './ProjectObjects/LoginPage'
import ChangeInfo from "./ProjectObjects/ChangeInfo";
describe("Practical Implementation of POM ", () => {
    it("Test Login and Info change", ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        const loginPage = new LoginPage()
        loginPage.login()
        cy.contains('Dashboard').should('be.visible')
        cy.contains('My Info').click()
        const changeInfo = new ChangeInfo()
        changeInfo.Change()
        //cy.get('[name="firstName"]').contains('Elon').should('be.visible')
       // cy.get('[name="lastName"]').contains('Musk').should('be.visible')
        cy.contains('Elon Musk').should('be.visible')
    })
})
