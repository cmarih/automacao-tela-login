<div align=center>
<h1> Projeto de automação simples - TELA DE LOGIN </h1>

<p> Projeto de automação para validação dos campos de Login.</p>

<img src='/img/login.png'>

</div>


<h2><strong>1º Passo: </strong> Configurar Ambiente de teste</h2>

<p>
    No projeto foi utilizado a biblioteca Node Codeceptjs com pacotes do <a href="https://codecept.io/playwright/#setup">Playwright.</a>
    Na minha máquina utilizo o WSL2, e precisei instalar um servidor qualquer, para que o mesmo pudesse executar os comando codeceptjs.
    No caso o <strong>xvfb</strong>, utilizando o código abaixo:

</p>

`````
    sudo apt-get install xvfb

`````

<br>
<h3>Instalar o Node, na versão atualizada:</h3>


`````
    sudo apt install nodejs

`````

<h3>Ferramenta utilizada para o codigo é o: <strong>Visual Studio Code</strong></h3>
<br>

<h3> Instalar o codeceptjs e o playwrite</h3>

`````
    npm install codeceptjs playwright --save

`````

<h3>Após baixar o projeto para a sua máquina local, e configura-la conforme informações acima, execute o comando abaixo no terminal para iniciar a validação dos testes.</h3>

`````
  npx codeceptjs run --steps

`````


<h3>Por conta da instalação do <strong>xvfb</strong>, o comando para startar os passos no WSL2:</h3>

`````
    xvfb-run -a npx codeceptjs run --steps

`````

<img src='/img/Screenshot_3.png'>

<br>
<h3>Caso queira executar apenas um passo dos testes, execute o comando abaixo, efetuando a troca da tag <strong><'@loginok'></strong>.</h3>
<h3>Comando para executar uma tag especifica, sem precisar executar o codigo inteiro:</h3>

`````
    npx codeceptjs run --grep '@loginok'

`````
<img src='/img/Screenshot_4.png'>
<br>
<hr>
<h2>Planejamento dos cenários utilizando GHERKIN</h2>
<h3><strong>Feature: </strong> Login</h3>
<br>
<h3><strong>Cenário  1: </strong> Login com sucesso </h3>
<p>
DADO que o usuário esteja na tela de inicial do sistema

E acesse a tela de login

QUANDO informar os dados para logar

ENTÃO deve ser apresentado a tela de usuário logado
</p>

<br>
<h3>Validação do passo:</h3>

`````
    npx codeceptjs run --grep '@loginok'

`````
<img src='/img/login-ok.png'>

<br>

<h3><strong>Cenário  2: </strong> Tentando Logar digitando apenas o e-mail </h3>
<p>
DADO que o usuário esteja na tela de inicial do sistema

E acesse a tela de login

QUANDO o usuário digitar apenas o E-mail para logar

ENTÃO deve ser apresentada a mensagem “Senha inválida.”
</p>

<br>
<h3>Validação do passo:</h3>

`````
    npx codeceptjs run --grep '@sem-email'

`````
<img src='/img/sem-email.png'>

<br>

<h3><strong>Cenário  3: </strong> Tentando logar sem digitar e-mail e senha </h3>
<p>
DADO que o usuário esteja na tela de inicial do sistema

E acesse a tela de login

QUANDO clicar em “Login” sem digitar usuário e senha

ENTÃO deve ser apresentada a mensagem “E-mail inválido.”
</p>

<br>
<h3>Validação do passo:</h3>

`````
    npx codeceptjs run --grep '@sememailesenha'

`````
<img src='/img/sememailesenha.png'>

<br>

<h3><strong>Cenário  4: </strong> Tentando Logar digitando apenas a senha </h3>
<p>
DADO que o usuário esteja na tela de inicial do sistema

E acesse a tela de login

QUANDO o usuário digitar apenas a Senha para logar

ENTÃO deve ser apresentada a mensagem “E-mail inválido.”
</p>

<br>
<h3>Validação do passo:</h3>

`````
    npx codeceptjs run --grep '@apenassenha'

`````
<img src='/img/apenassenha.png'>

<br>

