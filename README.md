# Desafio de Automação de Teste Mobile

Este repositório tem como objetivo a validação do app ([nativo-demo-app](https://github.com/webdriverio/native-demo-app/releases)) focando nos contextos de login/cadastro, navegação, preenchimento de formulário e validação de mensagem de erros [Cobretura realizada](#cenários-de-teste). 
<br>`OBS:` por falta dos recursos necessários não foi executado os testes no device iOS. Foi disponibilizado um .zip pelo *native-demo-app* para o iOS, mas o mesmo não é executado via BrowserStack.

## Instalando o projeto

1. Clone o projeto

```sh
git clone https://github.com/leeo-sf/desafio_de_automacao_de_teste_mobile.git
```

2. Instalar dependências

```sh
npm install
```

## Como executar o projeto

1. Execução local

    - Abra o arquivo `./configs/local/androidwdio.android.local.config.js` e insira as informações de capabilities do emulador `appium:deviceName` e `appium:platformVersion`
      ```js
      config.capabilities = [{
          'appium:automationName': 'UiAutomator2',
          'appium:deviceName': 'samsung SM-S911B (Android 13)',
          'appium:platformVersion': '14',
          platformName: 'Android',
          'appium:appPackage': 'com.wdiodemoapp',
          'appium:app': path.resolve("./apps/android/android.wdio.native.app.v1.0.8.apk")
      }]
      ```
    - Disparar a execução
      ```sh
      npm run android-local
      ```
2. Execução no BrowserStack

   - Crie um arquivo `.env` na raiz do projeto e preencha com as informações abaixo. [Manage access keys](https://www.browserstack.com/docs/iaam/security/manage-access-keys). [Upload files](https://www.browserstack.com/docs/app-automate/espresso/upload-files).
     ```js
     BROWSERSTACK_KEY=key
     BROWSERSTACK_USER=user
     APP_ID=bs://<APP_ID>
      ```
   - Disparar execução
      ```sh
      npm run android-browserstack
      ```

## Gerar relatório

1. Relatório de execução local
   - Após a execução, os dados estaram disponíveis para o relatório. Execute o comando para gera-lo.
     ```sh
      npm run allure-generate
      ```
   - Você pode executar o comando abaixo para abrir o relatório em seu navegador.
     ```sh
      npm run allure-open-in-browser
      ```

1. Relatório de execução no BrowserStack
   - Após a execução, os dados estaram disponíveis para o relatório. Execute o comando para gera-lo.
     ```sh
      npm run allure-open-in-browser
      ```
   - Você pode executar o comando abaixo para abrir o relatório em seu navegador.
     ```sh
      npm run allure-open-in-browser-browserstack
      ```

## Cenários de teste

1. Login
   - *validaInformacoesDoLogin.test.js*. - Valida as informações da tela de login.
   - *validaLoginComSucesso.test.js*. - Valida o login com sucesso.
   - *validaLoginEmailInvalido.test.js*. - Valida o login com endereço de email inválido.
   - *validaLoginSenhaCurta.test.js*. - Valida o login com a senha inferior a 8 caracteres.

2. Sign up
   - *validaInformacoesDoSignup.test.js*. - Valida as informações da tela de sign up.
   - *validaSignupComSucesso.test.js*. - Valida o sign up com sucesso.
   - *validaSignupEmailInvalido.test.js*. - Valida o sign up com endereço de email inválido.
   - *validaSignupSenhaCurta.test.js*. - Valida o sign up com a senha inferior a 8 caracteres.
   - *validaSignupSenhaIncompativel.test.js*. - Valida sign up com senha e confirma senha incompatível.

2. Forms
   - *validaInformacoesForms.test.js*. - Valida as informações da tela de forms.
   - *validaMudancaSwitch.test.js*. - Valida comportamento de mudança do switch.
   - *validaSelecaoDropdown.test.js*. - Valida seleção de opção do dropdown.
   - *validaSincroniaDeTxtEntreCampos.test.js*. - Valida se texto digitado corresponde ao texto do campo "You have typed".

3. Drag
   - *validaMontagemDragAndDrop.test.js*. - Valida montagem completa do "Quebra-cabeça".

4. Swipe
   - *validaSwipe.test.js*. - Valida navegação de ida e volta do carousel.
   - *validaSwipeCompleto.test.js*. - Valida navegação completa do carousel.