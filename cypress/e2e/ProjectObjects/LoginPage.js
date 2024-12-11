class LoginPage {
    elements= {


    }
    login(){
        cy.get('[name="username"]').type('Admin');
        cy.wait(500)
        cy.get('[name="password"]').type('admin123');
        cy.wait(500)
        cy.get('[type="submit"]').click();
    }
}

export default LoginPage