import React, { useEffect, useState } from 'react';

const ContactForm = ({ savedDetails, onDetailsUpdate }) => {
  const [contactDetails, setContactDetails] = useState({
    phoneNumber: '',
    email: '',
  });

  useEffect(() => {
    if (savedDetails) {
      setContactDetails(savedDetails);
    }
  }, [savedDetails]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    const updatedDetails = {
      ...contactDetails,
      [name]: value,
    };
    setContactDetails(updatedDetails);
    onDetailsUpdate({ contactDetails: updatedDetails });
  };

  return (
    <form>
      <h2>Contact Details</h2>
      <div className="form-container">
        <div className="form-group">
          <label className="required">Phone Number</label>
          <input
            type="text"
            name="phoneNumber"
            value={contactDetails.phoneNumber}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label className="required">Email Address</label>
          <input
            type="email"
            name="email"
            value={contactDetails.email}
            onChange={handleChange}
          />
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
