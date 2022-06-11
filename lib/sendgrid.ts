const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
console.log("Hola!, soy sengrid",sgMail);

export { sgMail };