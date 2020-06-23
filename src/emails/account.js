const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'mike_taylor308@hotmail.co.uk',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'mike_taylor308@hotmail.co.uk',
        subject: 'Sorry to see you go!',
        text: `We see that you've cancelled your account with us, ${name}. If you have time, we'd love to hear what we could do better!`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}