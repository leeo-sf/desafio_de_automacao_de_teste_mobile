export const timeoutMsg = {
    menu: {
        msgOptionNotFound: (text) => 'A opção do menu ' + text + ' não foi exibida!'
    },
    login: {
        msgInpEmail: 'O campo "Email" na tela de login não foi exibido!',
        msgInpPassowrd: 'O campo "Password" na tela de login não foi exibido!',
        msgBtnLogin: 'O botão "Login" na tela de login não foi exibido!',
        msgBtnOk: 'O botão "OK" na tela de login não foi exibido!',
        msgShortPassword: 'A label "Please enter at least 8 characters" não foi exibida!',
        msgPageTitle: 'O título "Login / Sign up Form" na pagina de login não foi exibido!',
        msgAboutBiometrics: 'A descrição sobre a biometria não foi exibida!',
        msgOption: (option) => `A opção "${option}" não foi exibida!`
    },
    signup: {
        msgInpRepeatPassword: 'O campo "Confirm password" na tela de sign up não foi exibido!',
        msgBtnSignup: 'O botão "Sign up" na tela de login não foi exibido!',
    },
    forms: {
        msgTypeSomething: 'O campo de texto "Type Something" não foi exibido!',
        msgYouHaveTyped: 'O títlo do campo "You have typed" não foi exibido!',
        msgBtnSwitch: 'O botão "Switch" na tela de forms não foi exibido!',
        msgLblSwitch: 'O texto "Click to turn the switch $status" do campo "Switch" não foi exibido!',
        msgDropdown: 'O dropdown não foi exibido!',
        msgOptionDropdown: 'O texto da opção selecionada não foi exibido!'
    },
    drag: {
        msgLabel: (text) => `A label com a mensagem ${text} não foi exibida!`
    }
}