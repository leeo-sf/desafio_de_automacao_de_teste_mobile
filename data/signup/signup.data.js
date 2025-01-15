export const signup = {
    pageTitle: "Login / Sign up Form",
    option: {
        signUp: "sign-up"
    },
    alertMsgAfterSignUp: {
        title: { androidId: "alertTitle", text: "Signed Up!" },
        message: { androidId: "message", text: "You successfully signed up!" }
    },
    lblShortPassword: {
        leastEightCharacters: 'Please enter at least 8 characters',
        samePassword: 'Please enter the same password'
    },
    lblValidEmailAddress: 'Please enter a valid email address',
    btnSend: {
        btnSignUp: "SIGN UP"
    }
}

export const testDataValidaSignupComSucesso = {
    email: "teste@gmail.com",
    password: "senhaComMaisDe8Caracteres",
    confirmPassword: "senhaComMaisDe8Caracteres"
}

export const testDataValidaSignupEmailInvalido = {
    email: "testegmail.com",
    password: "senhaComMaisDe8Caracteres",
    confirmPassword: "senhaComMaisDe8Caracteres"
}

export const testDataValidaSignupSenhaCurta = {
    email: "teste@gmail.com",
    password: "senha",
    confirmPassword: "senha"
}

export const testDataValidaSignupSenhaIncompativel = {
    email: "teste@gmail.com",
    password: "senhaComMaisDe8Caracteres",
    confirmPassword: "senha"
}