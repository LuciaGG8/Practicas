describe('template spec', () => {


  it('añadir tarea', () => {
    cy.visit('https://todomvc.com/examples/typescript-react/#/')
    cy.get('.new-todo').type("comprar pan{enter}")
    cy.get('.new-todo').type("tirar basura")
    
  })

  it('selecionar tarea', () => {
    cy.visit('https://todomvc.com/examples/typescript-react/#/')
    cy.get('.new-todo').type("comprar pan{enter}")
    cy.get('.toggle').click()
})

it('cerrar tarea', () => {
  cy.visit('https://todomvc.com/examples/typescript-react/#/')
  cy.get('.new-todo').type("comprar pan{enter}")
  cy.get('.toggle').click()
  cy.get('.clear-completed').click()

})


})