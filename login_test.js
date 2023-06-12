Feature('login');

Scenario('Login com sucesso',  ({ I }) => {
    I.amOnPage('http://automationpratice.com.br/')
    I.click('Login')
    I.waitForText('Login', 10) //Aguardar texto informado no parametro aparece na tela, e depois seguir para o proximo passo
    I.fillField('#user','rluanafreitas@gmail.com')
    I.fillField('#password', secret('123456'))
    I.click('#btnLogin')
    I.waitForText('Login realizado')

}).tag('@loginok')

Scenario('Tentando Logar digitando apenas o e-mail',  ({ I }) => {
    I.amOnPage('http://automationpratice.com.br/')
    I.click('Login')
    I.waitForText('Login', 10) //Aguardar texto informado no parametro aparece na tela, e depois seguir para o proximo passo
    I.fillField('#user','rluanafreitas@gmail.com')
    I.click('#btnLogin')
    I.waitForText('Senha inválida', 3)

}).tag('@sem-email');

Scenario('Tentando logar sem digitar e-mail e senha',  ({ I }) => {
    I.amOnPage('http://automationpratice.com.br/')
    I.click('Login')
    I.waitForText('Login', 10)
    I.click('#btnLogin')
    I.waitForText('E-mail inválido.', 3)

}).tag('@sememailesenha')

Scenario('Tentando Logar digitando apenas a senha',  ({ I }) => {
    I.amOnPage('http://automationpratice.com.br/')
    I.click('Login')
    I.waitForText('Login', 10)
    I.fillField('#password', secret('123456'))
    I.click('#btnLogin')
    I.waitForText('E-mail inválido.', 3)

}).tag('@apenassenha')

