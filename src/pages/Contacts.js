import React from "react";
import "../styles/Contacts.css";

function Contacts() {
  return (
    <div className="contacts">
      <h1>Contact Us</h1>
      <p>
        Feel free to get in touch with us for any inquiries, feedback, or
        special requests. Our team is here to assist you and ensure that your
        experience with us is exceptional.
      </p>
      <p>You can reach us through the following channels:</p>
      <ul>
        <li>Email: office@meating.com</li>
        <li>Phone: +1 (156) 785-8962</li>
        <li>Address: 74 Main Street, Cluj-Napoca, Romania</li>
      </ul>
      <p>
        Whether you have questions about our menu, want to book a reservation,
        or simply want to say hello, we'd love to hear from you!
      </p>
    </div>
  );
}

export default Contacts;
