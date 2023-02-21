import React from 'react';

export default function Contact() {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>Feel free to get in touch with us using the contact form below.</p>
      <form>
        <div className="form-group">
          <label htmlFor="nameInput">Name</label>
          <input type="text" className="form-control" id="nameInput" />
        </div>
        <div className="form-group">
          <label htmlFor="emailInput">Email address</label>
          <input type="email" className="form-control" id="emailInput" />
        </div>
        <div className="form-group">
          <label htmlFor="messageInput">Message</label>
          <textarea className="form-control" id="messageInput" rows="3"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}
