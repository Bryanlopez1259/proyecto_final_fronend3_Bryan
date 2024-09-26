import React, { useState } from "react";
import Form from "../Components/Form";

const Contact = () => {
  const [submittedData, setSubmittedData] = useState(null);

  return (
    <section className="container-main">
      <div className="container">
        <h2>¿Quieres mas información?</h2>
        <p>Envíanos tus dudas y nos pondremos en contacto contigo</p>
        <Form setSubmittedData={setSubmittedData} />
        {submittedData && (
          <span>
            Gracias {submittedData.name}, te contactaremos.
          </span>
        )}
      </div>
    </section>
  );
};

export default Contact;
