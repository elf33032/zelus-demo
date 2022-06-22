describe('Loading and finding element', ()=>{
    beforeEach(()=>{
        cy.visit('http://localhost:3000/');
    });
    it('Passing with Apt Number', ()=>{
        cy.get("#property-name").type("Random Property");
        cy.get("#street").type("2330 Sunset Blvd");
        cy.get("#apt-number").type("233");
        cy.get("#city").type("San Diego");
        cy.get("#state").type("CA").get('li[data-option-index="0"]').click();;
        cy.get("#zip").type("99999");
        cy.get("#first-name").type("Shuo");
        cy.get("#last-name").type("Li");
        cy.get("#submit").click();
        cy.get("#back").should('exist');
    });
    it('At 2nd page', ()=>{
        cy.get("#back").should('not.exist');
    })

    it('Passing Without Apt Number', ()=>{
        cy.get("#property-name").type("Random Property");
        cy.get("#street").type("2330 Sunset Blvd");
        cy.get("#city").type("San Diego");
        cy.get("#state").type("CA").get('li[data-option-index="0"]').click();;
        cy.get("#zip").type("99999");
        cy.get("#first-name").type("Shuo");
        cy.get("#last-name").type("Li");
        cy.get("#submit").click();
        cy.get("#back").should('exist');
    })
    it('Fail without property Name', ()=>{
        cy.get("#street").type("2330 Sunset Blvd");
        cy.get("#apt-number").type("233");
        cy.get("#city").type("San Diego");
        cy.get("#state").type("CA").get('li[data-option-index="0"]').click();;
        cy.get("#zip").type("99999");
        cy.get("#first-name").type("Shuo");
        cy.get("#last-name").type("Li");
        cy.get("#submit").click();
        cy.get("#back").should('not.exist');
    })
    it('Fail with bad street info', ()=>{
        cy.get("#property-name").type("Random Property");
        cy.get("#street").type("23301230129301203901230129031203012903102930129033120391029301293");
        cy.get("#apt-number").type("233");
        cy.get("#city").type("San Diego");
        cy.get("#state").type("CA").get('li[data-option-index="0"]').click();;
        cy.get("#zip").type("99999");
        cy.get("#first-name").type("Shuo");
        cy.get("#last-name").type("Li");
        cy.get("#submit").click();
        cy.get("#back").should('not.exist');
    })
    it('Fail with bad apt Number', ()=>{
        cy.get("#property-name").type("Random Property");
        cy.get("#street").type("2333");
        cy.get("#apt-number").type("notapt");
        cy.get("#city").type("San Diego");
        cy.get("#state").type("CA").get('li[data-option-index="0"]').click();;
        cy.get("#zip").type("99999");
        cy.get("#first-name").type("Shuo");
        cy.get("#last-name").type("Li");
        cy.get("#submit").click();
        cy.get("#back").should('not.exist');
    });
    it('Fail with bad zip', ()=>{
        cy.get("#property-name").type("Random Property");
        cy.get("#street").type("2333");
        cy.get("#apt-number").type("notapt");
        cy.get("#city").type("San Diego");
        cy.get("#state").type("CA").get('li[data-option-index="0"]').click();;
        cy.get("#zip").type("999990");
        cy.get("#first-name").type("Shuo");
        cy.get("#last-name").type("Li");
        cy.get("#submit").click();
        cy.get("#back").should('not.exist');
    });
    it('Fail with bad first name', ()=>{
        cy.get("#property-name").type("Random Property");
        cy.get("#street").type("2333");
        cy.get("#apt-number").type("notapt");
        cy.get("#city").type("San Diego");
        cy.get("#state").type("CA").get('li[data-option-index="0"]').click();;
        cy.get("#zip").type("99999");
        cy.get("#last-name").type("Li");
        cy.get("#submit").click();
        cy.get("#back").should('not.exist');
    });

})