function sendMail() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const service = document.getElementById("service").value;
    const phone = document.getElementById("phone").value;


    if (!name || !email || !phone || !service || !selectedSlot) {
        alert("Please fill in all required fields.");
        return;
    }

    let parms = {
        to_name: name,
        to_email: email,
        service: service,
        phone: phone,
        time: `${selectedSlot.startTime} - ${selectedSlot.endTime}`, // Access startTime and endTime directly
        from_name: "David",
        from_email: "davidcruzsantiago@berkeley.edu",
        reply_to: "davidcruzsantiago@berkeley.edu",
    };

    emailjs.send("service_qm42joz", "template_6qf3mux", parms)
        .then((response) => {
            console.log("Email sent successfully!", response.status, response.text);
            alert("Email Sent Successfully!");
        })
        .catch((error) => {
            console.error("Failed to send email", error);
            alert("Failed to send email. Please try again later.");
        });
}
