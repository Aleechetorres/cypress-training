describe("Log in feature", () => {
  beforeEach(() => {
    cy.visit("https://www.demoblaze.com/index.html");
    
    // Realizar el login a la página
    cy.get("#login2").click();
    //cy.wait(500);
    cy.get("#loginusername").type("aleechetorres");
    cy.get("#loginpassword").type("1234567");
    cy.get(".btn-primary").contains("Log in").click();

    // Validar que el login y usuario username corresponden a la sesión iniciada
    cy.get("#nameofuser").should('contain.text', "Welcome aleechetorres");
  });

  it("Añadir celular al carrito y validar que el nombre corresponde al item seleccionado", () => {
    cy.get(".card-title").contains("Iphone 6 32gb").click();
    cy.get("#tbodyid").should("contain", "Iphone 6 32gb");
    cy.get(".btn-lg").contains("Add to cart").click();
    //cy.wait(500);
  });

  it("Añadir Laptop al carrito y validar que el nombre corresponde al item seleccionado", () => {
    cy.get(".nav-link").contains("Home").click();
    cy.get(".list-group-item").contains("Laptops").click();
    cy.get(".card-title").contains("MacBook Pro").click();
    cy.get("#tbodyid").should("contain", "MacBook Pro");
    cy.get(".btn-lg").contains("Add to cart").click();
    //cy.wait(500);
  });

  it("Añadir Monitor al carrito y validar que el nombre corresponde al item seleccionado", () => {
    cy.get(".nav-link").contains("Home").click();
    cy.get(".list-group-item").contains("Monitors").click();
    cy.get(".card-title").contains("Apple monitor 24").click();
    cy.get("#tbodyid").should("contain", "Apple monitor 24");
    cy.get(".btn-lg").contains("Add to cart").click();
    //cy.wait(500);
  });

  it("Validar lo que hay en el carrito y que el total corresponde", () => {
    cy.get(".nav-link").contains("Cart").click();
  
    let suma = 0;
  
    cy.get("table tbody tr td").each((cell) => {
      const value = parseFloat(cell.text());
      if (!isNaN(value)) {
        suma += value;
      }
    });
  
    cy.get("table tbody tr td").then(() => {
      // Hacer la validación después de la iteración
      cy.get("#totalp").should("contain", suma);
    });
  });
  
  

  it("Completar la compra", () =>{
    cy.get(".nav-link").contains("Cart").click();
    //cy.wait(2000);
    cy.get(".btn-success").contains("Place Order").click();
    cy.get("#name").type('Alejandra Echeverri');
    cy.get("#country").type('Colombia');
    cy.get("#city").type('Manizales');
    cy.get("#card").type('3029-9876-4653');
    cy.get("#month").type('06');
    cy.get("#year").type('2026');
    cy.get(".btn-primary").contains("Purchase").click();
    //cy.wait(1500);
    cy.get(".btn-primary").contains("OK").click();
  })

  it("Enviar un mensaje a través de Contact", () => {
    cy.get(".nav-link").contains("Contact").click();
    //cy.wait(2000);
    cy.get("#recipient-email").type('aleechetorres@gmail.com');
    cy.get("#recipient-name").type('Aleja Echeverri');
    cy.get("#message-text").type('Serás muy buena en QA <3');
    cy.get(".btn-primary").contains("Send message").click();
  })
});
