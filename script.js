document.addEventListener('DOMContentLoaded', () => {
    const options = {
      strings: ["a Software Developer", "a Frontend Developer", "a UI/UX Designer"],
      typeSpeed: 50, // Speed of typing
      backSpeed: 45, // Speed of erasing
      backDelay: 1500, // Delay before backspacing
      loop: true // Keep looping through the strings
    };
  
    new Typed(".text", options);

    const form = document.querySelector('form');

    function sendMail(event) {
        event.preventDefault();
        let params = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            subject: document.getElementById("subject").value,
            message: document.getElementById("message").value
        };
        const serviceID = "service_xsty791";
        const templateID = "template_pwulohr";
        emailjs
        .send(serviceID, templateID, params)
        .then ((Response)=> {
            document.getElementById("name").value="";
            document.getElementById("email").value="";
            document.getElementById("subject").value="";
            document.getElementById("message").value="";
            console.log(Response);
            alert("your message send successfully");
        })
        .catch((error) => console.log(error));
    };

    form.addEventListener('submit', sendMail);
});