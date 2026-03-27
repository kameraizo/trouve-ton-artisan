const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

// Configuration du transporteur email
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// POST envoyer un email
router.post('/', async (req, res) => {
    const { nom, email, objet, message, destinataire } = req.body;
    console.log('Données reçues :', req.body); 

    try {
        await transporter.sendMail({
            from: email,
            to: destinataire,
            subject: objet,
            text: `Message de ${nom} (${email}) :\n\n${message}`
        });
        res.json({ message: 'Email envoyé avec succès' });
    } catch (err) {
        res.status(500).json({ message: 'Erreur lors de l\'envoi', error: err });
    }
});

module.exports = router;