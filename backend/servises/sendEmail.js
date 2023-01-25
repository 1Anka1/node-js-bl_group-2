


const nodemailer = require("nodemailer");

async function sendEmail({userEmail, userName, userText}) {
 

  let transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "elena_goit_49@outlook.com", // generated ethereal user
      pass: "qweasdzxc123", // generated ethereal password
    },
  });
    
    


let output = `<p>Ви отримали листа від ${userName}</p>
   <p>Контактний email ${userEmail}</p>
   <p>Текст листа ${userText}</p>`
    
  let info = await transporter.sendMail({
    from: "elena_goit_49@outlook.com", // sender address
    to: "elenholz@gmail.com", // list of receivers
    subject: "The first intergalactic conference in 2023. Discussed breakouts of planets, galaxies, universes", // Subject line
    text: userText, // plain text body
    html: output, 
  });

  console.log("Message sent: %s", info.messageId);
  
}

module.exports = sendEmail;