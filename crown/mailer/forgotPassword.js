// import nodemailer from 'nodemailer'


// let testAccount = await nodemailer.createTestAccount();

// const transporter = nodemailer.createTransport({
//     host: "smtp.ethereal.email",
//     port: '',
//     secure: false,
//     auth: {
//         user: 'rhianna.langworth98@ethereal.email',
//         pass: 'f9tHVmFUuNHfRGnsCk'
//     }
// })

// export const onForgotPassword = async () => {
//     try {
//         await transporter.sendMail({
//             from: '"Fred Foo 👻" <foo@example.com>', // sender address
//             to: "rhianna.langworth98@ethereal.email", // list of receivers
//             subject: "Hello ✔", // Subject line
//             text: "Hello world?", // plain text body
//             html: "<b>Hello world?</b>", // html body
//         })
//         return 'Success'
//     } catch (ex) {
//         console.log(ex)
//         return "Failed"
//     }
// }

import sendgrid from '@sendgrid/mail'

sendgrid.setApiKey(process.env.SENDGRID_API_KEY)


export const onForgotPassword = (user, token) => {
    const url = `http://localhost:6000/reset-password?token=${token}`
    const msg = {
        from: '"Crown Store" <no-reply@crown.io>', // sender address
        to: user.email, // list of receivers
        subject: "Forgot Password", // Subject line
        text: "bla bla", // plain text body
        html: `<b>Dear ${user.firstName + " " + user.lastName} ,<br>You can reset the password by going to this link <a href=${url}>Click me</a></b>`, // html body
    }

    sendgrid.send(msg)
}

