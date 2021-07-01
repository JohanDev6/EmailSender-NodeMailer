const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const path = require("path");

require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

const senderData = nodemailer.createTransport({
  host: process.env.HOST,
  service: process.env.SERVICE,
  port: 587,
  secure: false,
  secureConnection: false,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  },
  tls: {
    ciphers: "SSLv3"
  }
});

router.post("/send", function (req, res, next) {
  const emailSent = {
    from: req.body.email,
    to: process.env.EMAIL,
    subject: `[${req.body.subject}] - ${req.body.name}`,
    text: req.body.desc
  };

  senderData.sendMail(emailSent, function (err) {
    if (err) {
      console.log("ERROR", err);
      return res.status(404).json({ error: "Falha ao enviar o email!" });
    }

    return res.status(201).json({ response: "Email enviado com sucesso" });
  });
});

module.exports = router;
