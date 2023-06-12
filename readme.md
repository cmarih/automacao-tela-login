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
<p>Instalar o Node, na versão atualizada:</p>


`````
    sudo apt install nodejs

`````

<p>Ferramenta utilizada para o codigo é o: <strong>Visual Studio Code</strong></p>
<br>

<p> Instalar o codeceptjs e o playwrite</p>

`````
    npm install codeceptjs playwright --save

`````

<p>Após baixar o projeto para a sua máquina local, e configura-la conforme informações acima, execute o comando abaixo no terminal para iniciar a validação dos testes.</p>

`````
  npx codeceptjs run --steps

`````


<p>Por conta da instalação do <strong>xvfb</strong>, o comando para startar os passos no WSL2:</p>

`````
    xvfb-run -a npx codeceptjs run --steps

`````

<img src='/img/Screenshot_3.png'>

<br>
<p>Caso queira executar apenas um passo dos testes, execute o comando abaixo, efetuando a troca da tag <strong><'@loginok'></strong>.</p>
<p>Comando para executar uma tag especifica, sem precisar executar o codigo inteiro:</p>

`````
    npx codeceptjs run --grep '@loginok'

`````
<img src='/img/Screenshot_4.png'>
<br>
<hr>
<h2>Planejamento dos cenários utilizando GHERKIN</h2>
<p><strong>Feature: </strong> Login</p>
<br>
<p><strong>Cenário  1: </strong> Login com sucesso </p>
<p>
DADO que o usuário esteja na tela de inicial do sistema

E acesse a tela de login

QUANDO informar os dados para logar

ENTÃO deve ser apresentado a tela de usuário logado
</p>

<br>
<p>Validação do passo:</p>

`````
    npx codeceptjs run --grep '@loginok'

`````
<img src='/img/login-ok.png'>

<br>

<p><strong>Cenário  2: </strong> Tentando Logar digitando apenas o e-mail </p>
<p>
DADO que o usuário esteja na tela de inicial do sistema

E acesse a tela de login

QUANDO o usuário digitar apenas o E-mail para logar

ENTÃO deve ser apresentada a mensagem “Senha inválida.”
</p>

<br>
<p>Validação do passo:</p>

`````
    npx codeceptjs run --grep '@sem-email'

`````
<img src='/img/sem-email.png'>

<br>

<p><strong>Cenário  3: </strong> Tentando logar sem digitar e-mail e senha </p>
<p>
DADO que o usuário esteja na tela de inicial do sistema

E acesse a tela de login

QUANDO clicar em “Login” sem digitar usuário e senha

ENTÃO deve ser apresentada a mensagem “E-mail inválido.”
</p>

<br>
<p>Validação do passo:</p>

`````
    npx codeceptjs run --grep '@sememailesenha'

`````
<img src='/img/sememailesenha.png'>

<br>

<p><strong>Cenário  4: </strong> Tentando Logar digitando apenas a senha </p>
<p>
DADO que o usuário esteja na tela de inicial do sistema

E acesse a tela de login

QUANDO o usuário digitar apenas a Senha para logar

ENTÃO deve ser apresentada a mensagem “E-mail inválido.”
</p>

<br>
<p>Validação do passo:</p>

`````
    npx codeceptjs run --grep '@apenassenha'

`````
<img src='/img/apenassenha.png'>

<br>

