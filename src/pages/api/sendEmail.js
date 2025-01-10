import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, cod, cel, city, email, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'nucleoseguridad@gmail.com', // Cambia esto al correo remitente real
        pass: 'mtwmbsbjidwiqjqi', // Cambia esto a la contraseña real
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    const constentHTML = `
      <p><strong>Nombre:</strong> ${name}</p>
      <p><strong>Celular:</strong>${cod} ${cel}</p>
      <p><strong>Ciudad:</strong> ${city}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Mensaje:</strong> ${message}</p>
    `

    const mailOptions = {
      from: email,
      to: 'nucleoseguridad@gmail.com', // Agrega la dirección de correo del destinatario
      subject: `Mensaje de ${name}`, // Agrega el asunto del correo
      html: constentHTML,
    };

    try {
      const info = await transporter.sendMail(mailOptions);
      console.log('Correo enviado:', info);
      res.status(200).json({ success: true });
    } catch (error) {
      console.error('Error al enviar el correo:', error);
      res.status(500).json({ success: false, error: 'Error al enviar el correo' });
    }
  } else {
    res.status(405).json({ error: 'Método no permitido' });
  }
}
