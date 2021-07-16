const axios = require("axios");

export default async function handler(req, res) {
  if (req.method == "POST") {
    const body = JSON.parse(req.body);

    var params = {
      service_id: process.env.EMAIL_SERVICE_ID,
      template_id: process.env.EMAIL_TEMPLATE_ID,
      user_id: process.env.EMAIL_USER_ID,
      accessToken: process.env.EMAIL_ACCESS_TOKEN,
      template_params: {
        name: body.name,
        email: body.email,
        subject: body.subject,
        message: body.message,
        recipient: process.env.EMAIL_RECIPIENT,
      },
    };

    await axios
      .post("https://api.emailjs.com/api/v1.0/email/send", params)
      .then((response) => {
        if (response.status === 200) {
          res.status(200).json({ message: "Email successfully sent" });
        }
      })
      .catch((error) => res.status(500).json({ error }));
  } else {
    res.status(400).json({ message: "Wrong request method" });
  }
}
