describe('Автотест на покупку Аватара', () => {
  it('Покупку Аватара для тренера', () => {
    // Переход на главную страницу сайта
    cy.visit('https://pokemonbattle.ru/login');
    // Ввод Email
    cy.get('#k_email').type('artem.alex.11@yandex.ru');
    // Ввод Pass
    cy.get('#k_password').type('pP92u1RTz');
    // Нажать энтер
    cy.get('#k_password').type('{enter}');
    cy.wait(4000);
    // Вход в профиль
    cy.get('.header_card_trainer').click();
    cy.wait(4000);
    // Смена Аратара
    cy.get('.k_mobile > :nth-child(5)').click();
    // Находим первую доступную кнопку в элементах с классом .available
    cy.get('.available > button').first().click();
    // вводим номер карты
    cy.get('.card_number').type('4620869113632996');
     // вводим CVV карты
    cy.get('.card_csv').type('125');
    // вводим срок действия карты
    cy.get('.card_date').type('1226');
    // вводим имя владельца
    cy.get('.card_name').type('NAME');
    // Нажимаем кнопку оплатить
    cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();
    //вводим код подтверждения СМС
    cy.get('.threeds_number').type('56456');
    // нажимаем кнопку Оплатить
    cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();
    // проверяем наличие и видимость сообщения об успешной покупке
    cy.contains('Покупка прошла успешно').should('be.visible');
  })
})