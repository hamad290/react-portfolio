const recipient = "hamad290k@gmail.com";

module.exports = async function handler(request, response) {
  if (request.method !== "POST") {
    return response.status(405).json({ message: "Method not allowed." });
  }

  const { firstName, lastName, email, phone, message } = request.body || {};

  if (!firstName || !lastName || !email || !phone || !message) {
    return response.status(400).json({ message: "Please complete all form fields." });
  }

  if (!process.env.RESEND_API_KEY) {
    return response.status(500).json({ message: "Email service is not configured." });
  }

  try {
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Portfolio contact <onboarding@resend.dev>",
        to: [recipient],
        reply_to: email,
        subject: `Portfolio contact from ${firstName} ${lastName}`,
        html: `
          <h2>New portfolio contact message</h2>
          <p><strong>First name:</strong> ${escapeHtml(firstName)}</p>
          <p><strong>Last name:</strong> ${escapeHtml(lastName)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Contact number:</strong> ${escapeHtml(phone)}</p>
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
        `,
      }),
    });

    const result = await resendResponse.json();

    if (!resendResponse.ok) {
      console.error("Resend error:", result);
      return response.status(502).json({
        message: result.message || "Email provider rejected the message.",
      });
    }

    return response.status(200).json({ message: "Message sent successfully." });
  } catch (error) {
    console.error("Contact API error:", error);
    return response.status(500).json({ message: "Unable to send the message." });
  }
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}