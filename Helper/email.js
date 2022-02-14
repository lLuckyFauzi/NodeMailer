const nodemailer = require('nodemailer');

const sendmail = async () => {
    const coba = nodemailer.createTransport({
      host: "smtp.mailgun.org",
      port: 587,
      secure: false, 
      auth: {
        user: "postmaster@sandbox95b1fb9f26af4508bed3573fe5eeda1b.mailgun.org", // generated ethereal user
        pass: "47e41ab8ddf72b721082da7911753562-c250c684-4246d846", // generated ethereal password
      }})
      let info = await coba.sendMail({
          from: '"Its Me👺" <noreply@itsme.com>', // sender address
          to: "anindyanasywa2005@gmail.com", // list of receivers
          subject: "Assalamualaikum!!", // Subject line
          text: "Haiiii, Keep Strong, and get well soon :), if u miss me, i will in your dream, but, i think u not miss me, bruhh no problem, just keep your spirit up, and get well soon ;)", // plain text body
          html: "<b>Semangad Mesantren nyaaa kawanddd</b>", // html body
        });
        console.log("Message sent: %s", info.messageId);
  }
    

module.exports = sendmail