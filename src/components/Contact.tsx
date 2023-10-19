import React from "react";
import "../styles/Contact.scss";

const Contact = () => {
  return (
    <div className="containercontact" id="Contact">
      <h3>[ Contact ]</h3>
      <div className="contact">
        <p>
          Para obtener mas información sobre mi puedes escribirme al siguiente
          correo o por Linkedin
        </p>
        <p>
          <a href={"mailto: javiazagra12@gmail.com"}>javiazagra12@gmail.com</a>
        </p>
        <p>
          <a
            href="https://www.linkedin.com/in/javier-azagra-garc%C3%ADa/"
            target="_blank"
          >
            Linkedin
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
