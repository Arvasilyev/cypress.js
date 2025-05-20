describe('Тестирование формы логина и пароля', function(){
it('1. Позитивный кейс авторизации', function() {
    // Переход на главную страницу сайта
    cy.visit('https://login.qa.studio');
    // Ввод Email
    cy.get('#mail').type('german@dolnikov.ru');
    // Ввод Pass
    cy.get('#pass').type('iLoveqastudio1');
    // Нажатие на кнопку войти
    cy.get('#loginButton').click();
    // Проверка увторизации
    cy.contains('Авторизация прошла успешно').should('be.visible');
    // Проверка наличия кнопки крестик
    cy.get('#exitMessageButton > .exitIcon').should('exist');
    })
it('2. Проверка логики восстановления пароля', function() {
    // Переход на главную страницу сайта
    cy.visit('https://login.qa.studio');
    // Нажать на кнопку "Забыли пароль"
    cy.get('#forgotEmailButton').click();
    // Ввод Email
    cy.get('#mailForgot').type('ger@dol.ru');
    // Нажать энтер
    cy.get('#mailForgot').type('{enter}');
    // Проверка сообщения о восстановлении
    cy.contains('Успешно отправили пароль на e-mail').should('be.visible');
    // Проверка наличия кнопки крестик
    cy.get('#exitMessageButton > .exitIcon').should('exist');
    })
it('3. Проверка негативного кейса авторизации(Не верный пароль)', function() {
    // Переход на главную страницу сайта
    cy.visit('https://login.qa.studio');
    // Ввод Email
    cy.get('#mail').type('german@dolnikov.ru');
    // Ввод Pass
    cy.get('#pass').type('iLoveqa');
    // Нажать энтер
    cy.get('#pass').type('{enter}');
    // Проверка сообщения о некоректных данных
    cy.contains('Такого логина или пароля нет').should('be.visible');
    // Проверка наличия кнопки крестик
    cy.get('#exitMessageButton > .exitIcon').should('exist');
    })
it('4. Проверка негативного кейса авторизации(Не верный логин)', function() {
    // Переход на главную страницу сайта
    cy.visit('https://login.qa.studio');
    // Ввод Email
    cy.get('#mail').type('ger@dol.ru');
    // Ввод Pass
    cy.get('#pass').type('iLoveqastudio1');
    // Нажать энтер
    cy.get('#loginButton').click();
    // Проверка сообщения о некоректных данных
    cy.contains('Такого логина или пароля нет').should('be.visible');
    // Проверка наличия кнопки крестик
    cy.get('#exitMessageButton > .exitIcon').should('exist');
    })
it('5. Проверка негативного кейса авторизации(Без @ в Email)', function() {
    // Переход на главную страницу сайта
    cy.visit('https://login.qa.studio');
    // Ввод Email
    cy.get('#mail').type('gerdol.ru');
    // Ввод Pass
    cy.get('#pass').type('iLoveqastudio1');
    // Нажать энтер
    cy.get('#loginButton').click();
    // Проверка сообщения о некоректных данных
    cy.contains('Нужно исправить проблему валидации').should('be.visible');
    // Проверка наличия кнопки крестик
    cy.get('#exitMessageButton > .exitIcon').should('exist');
    })
it('6. Приведение к строчным буквам поля Email', function() {
    // Переход на главную страницу сайта
    cy.visit('https://login.qa.studio');
    // Ввод Email
    cy.get('#mail').type('GerMan@Dolnikov.ru');
    // Ввод Pass
    cy.get('#pass').type('iLoveqastudio1');
    // Нажатие на кнопку войти
    cy.get('#loginButton').click();
    // Проверка увторизации
    cy.contains('Авторизация прошла успешно').should('be.visible');
    // Проверка наличия кнопки крестик
    cy.get('#exitMessageButton > .exitIcon').should('exist');
    })
})