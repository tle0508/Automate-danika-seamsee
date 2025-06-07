describe('seamsee Flow Test', () => {
  it('Show Qr Code after confirm', () => { 
    cy.visit('https://dev-only-danika-seamsee.0jpzrz.easypanel.host/')
    cy.contains('button', 'เข้าสู่หน้าเซียมซี').click()
    cy.contains('span', 'ไทย').click()
    cy.contains('span', 'วัดพระธาตุดอยคำ').click()
    cy.contains('span', '19 บาท').click()
    cy.contains('button', 'ยืนยัน').click()
    cy.wait(3000)
    cy.get('img.rounded-\\[10\\%\\]').should('be.visible')
  })
})