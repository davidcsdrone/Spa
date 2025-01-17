function sendMail() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;



    if (!name || !email || !phone || !subject || !message) {
        alert("Please fill in all required fields.");
        return;
    }

    let parms = {
        to_name: name,
        to_email: email,
        subject: subject,
        message: message,
        phone: phone,
        from_name: "David",
        from_email: "davidcruzsantiago@berkeley.edu",
        reply_to: "davidcruzsantiago@berkeley.edu",
    };

    emailjs.send("service_qm42joz", "template_foo1mya", parms)
        .then((response) => {
            console.log("Email sent successfully!", response.status, response.text);
            alert("Email Sent Successfully!");
        })
        .catch((error) => {
            console.error("Failed to send email", error);
            alert("Failed to send email. Please try again later.");
        });
}
