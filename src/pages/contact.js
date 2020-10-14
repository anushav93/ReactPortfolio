import React, { useState, useEffect, useParams } from "react";
export default function Contact(props) {
  // Declare a new state variable, which we'll call "count"  const [count, setCount] = useState(0);
  //const { addToast } = useToasts()

  const [contact_first_name, setContactFirstName] = useState("");
  const [contact_last_name, setContactLastName] = useState("");
  const [contact_email, setContactEmail] = useState("");
  const [contact_comments, setContactComments] = useState("");
  const [contact_phone, setContactPhone] = useState("");

  const handleSubmit = (fn, ln, email, comments, phone) => {
    console.log(fn);
  };

  return (
    <div className="page-content container">
      <div className="row">
        <div className="col-12 mt-3">
          <h4 className="mb-2">How Can We Contact You?</h4>

          <div className="row">
            <div className="col-md-6 mb-2">
              <input
                name="first name"
                type="text"
                className="form-control"
                id="contact_first_name"
                placeholder="First Name"
                value={contact_first_name}
                onChange={(e) => setContactFirstName(e.target.value)}
              />
            </div>
            <div className="col-md-6 mb-2">
              <input
                name="last name"
                type="text"
                className="form-control"
                id="contact_last_name"
                placeholder="Last Name"
                value={contact_last_name}
                onChange={(e) => setContactLastName(e.target.value)}
              />
            </div>
            <div className="col-md-6 mb-2">
              <input
                name="email"
                type="text"
                className="form-control"
                id="contact_email"
                placeholder="Email Address"
                value={contact_email}
                onChange={(e) => setContactEmail(e.target.value)}
              />
            </div>
            <div className="col-md-6 mb-2">
              <input
                name="number"
                type="text"
                className="form-control"
                id="contact_phone"
                placeholder="Phone Number"
                value={contact_phone}
                onChange={(e) => setContactPhone(e.target.value)}
                required
              />
            </div>
          </div>
          <h4 className="mt-3 mb-2">How Can We Help You?</h4>
          <div className="row">
            <div className="col-12 mb-2">
              <div className="form-group">
                <textarea
                  name="additional information"
                  type="text"
                  className="form-control"
                  value={contact_comments}
                  id="contact_comments"
                  placeholder="Additional information"
                  onChange={(e) => setContactComments(e.target.value)}
                />
              </div>
            </div>
            <div className="col-12 mb-3 text-center">
              <button
                onClick={() =>
                  handleSubmit(
                    contact_first_name,
                    contact_last_name,
                    contact_email,
                    contact_phone,
                    contact_comments
                  )
                }
                className="btn btn-primary"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
