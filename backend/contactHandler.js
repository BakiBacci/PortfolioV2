const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();

router.post('/', async (req, res) => {
    const { civilité, user_msg, user_name, user_email } = req.body;

    
   if (!user_email) {
    return res.status(400).json({
        message: 'Veuillez renseigner votre email',
        success: false,
        errorCode: 'MISSING_EMAIL'
    });
}

if (!user_name) {
    return res.status(400).json({
        message: 'Veuillez renseigner votre nom',
        success: false,
        errorCode: 'MISSING_NAME'
    });
}

if (!user_msg) {
    return res.status(400).json({
        message: 'Veuillez laisser un message',
        success: false,
        errorCode: 'MISSING_MESSAGE'
    });
}

    
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASS
        }
    });

    try {
        const info = await transporter.sendMail({
            from: `"${user_name}" <${user_email}>`,
            to: process.env.GMAIL_USER,
            subject: `Message de ${user_name} (${civilité})`,
            text: user_msg,
            html: `<p>${user_msg}</p>`
        });

        console.log('Email envoyé:', info.messageId);
        return res.json({ success: true });

    } catch (error) {
        console.error('Erreur SMTP:', {
            code: error.code,
            message: error.message
        });

        return res.status(500).json({
            success: false,
            message: "Erreur d'envoi"
        });
    }
});

module.exports = router;