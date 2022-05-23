import React, { useEffect, useState } from 'react';

const PersonalForm = ({ savedDetails, onDetailsUpdate }) => {
  const date = new Date();
  const today = `${date.getFullYear()}-${(date.getMonth() + 1)
    .toString()
    .padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
  const [personalDetails, setPersonalDetails] = useState({
    name: '',
    age: '',
    dateOfBirth: '',
  });

  useEffect(() => {
    if (savedDetails) {
      setPersonalDetails(savedDetails);
    }
  }, [savedDetails]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    const updatedDetails = {
      ...personalDetails,
      [name]: value,
    };
    setPersonalDetails(updatedDetails);
    onDetailsUpdate({ personalDetails: updatedDetails });
  };

  return (
    <form>
      <h2>Personal Details</h2>
      <div className="form-container">
        <div className="form-group">
          <label className="required">Name</label>
          <input
            type="text"
            name="name"
            value={personalDetails.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label className="required">Age</label>
          <input
            type="number"
            name="age"
            value={personalDetails.age}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label className="required">Date Of Birth</label>
          <input
            type="date"
            name="dateOfBirth"
            max={today}
            value={personalDetails.dateOfBirth}
            onChange={handleChange}
          />
        </div>
      </div>
    </form>
  );
};

export default PersonalForm;
