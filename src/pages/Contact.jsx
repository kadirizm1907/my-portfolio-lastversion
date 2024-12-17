import React, { useState } from "react";
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_h1o97vr',
      'template_5506f4t',
      {
        email: formData.email,
        message: formData.message,
      },
      '1OI1--sd6KotH18ot'
    )
      .then(() => {
        setIsSent(true);
        setFormData({ email: '', message: '' });
      })
      .catch((error) => console.error('Error:', error));
  };

  return (
    <div className=" mb-5 mt-5 pt-5 d-flex align-items-center justify-content-center">
      <div className="container container-sm">
        <h1 className="text-center mt-4">Send Email</h1>
        {isSent && <p className="text-center bg-success fw-bolder font-monospace w-25 align-items-center rounded-2">Your message has been sent ✔✔</p>}
        <form onSubmit={handleSubmit}>

          <div className="mb-3">
            <legend htmlFor="email" className="form-label">
              Your Email
            </legend>
            <input
              name="email"
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-1">
            <legend legendhtmlFor="message">
              Your message...
            </legend>
            <textarea rows={15}
              name="message"
              type="message"
              className="form-control"
              id="message"
              placeholder="Write your message here"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <div className="text-center mb-5">
            <button type="submit" className="btn btn-success mb-4 fw-bolder font-monospace display-1 ">Send</button>
          </div>
        </form>
      </div>
    </div>

  );
};

export default Contact;
