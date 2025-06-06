export const loginData = {
    pageTitle: "Login / Sign up Form",
    option: {
        login: "login"
    },
    alertDetails: {
        title: { androidId: "alertTitle", text: "Success" },
        message: { androidId: "message", text: "You are logged in!" }
    },
    lblShortPassword: {
        leastEightCharacters: 'Please enter at least 8 characters'
    },
    lblValidEmailAddress: 'Please enter a valid email address',
    lblAboutBiometrics: 'When the device has Touch/FaceID (iOS) or FingerPrint enabled a biometrics button will be shown to use and test the login.',
    btnSend: {
        btnLogin: "LOGIN"
    },
    option: "teste"
}

export const testDataValidaLoginComSucesso = {
    email: "teste@gmail.com",
    password: "senhaComMaisDe8Caracteres"
}

export const testDataValidaLoginSenhaCurta = {
    email: "teste@gmail.com",
    password: "senha"
}

export const testDataValidaLoginEmailInvalido = {
    email: "testegmail.com",
    password: "senhaComMaisDe8Caracteres"
}