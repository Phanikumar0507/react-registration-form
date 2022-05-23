import React, { useEffect, useState } from 'react';

const AddressForm = ({ savedDetails, onDetailsUpdate }) => {
  const [addressDetails, setAddressDetails] = useState({
    street: '',
    city: '',
    state: '',
    zip: '',
  });

  useEffect(() => {
    if (savedDetails) {
      setAddressDetails(savedDetails);
    }
  }, [savedDetails]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    const updatedDetails = {
      ...addressDetails,
      [name]: value,
    };
    setAddressDetails(updatedDetails);
    onDetailsUpdate({ addressDetails: updatedDetails });
  };

  return (
    <form>
      <h2>Address Details</h2>
      <div className="form-container">
        <div className="form-group">
          <label className="required">Street</label>
          <input
            type="text"
            name="street"
            value={addressDetails.street}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label className="required">City</label>
          <input
            type="text"
            name="city"
            value={addressDetails.city}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label className="required">State</label>
          <input
            type="text"
            name="state"
            value={addressDetails.state}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label className="required">ZIP</label>
          <input
            type="number"
            name="zip"
            value={addressDetails.zip}
            onChange={handleChange}
          />
        </div>
      </div>
    </form>
  );
};

export default AddressForm;
