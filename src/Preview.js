import React from 'react';

const Preview = ({ previewData }) => {
  return (
    <div className="preview-container">
      <h2>Preview</h2>
      <div className="details-container">
        <div className="personal-details">
          <div className="flex-row">
            <label>Name</label>
            <span>{previewData.personalDetails.name}</span>
          </div>
          <div className="flex-row">
            <label>Age</label>
            <span>{previewData.personalDetails.age}</span>
          </div>
          <div className="flex-row">
            <label>Date Of Birth</label>
            <span>{previewData.personalDetails.dateOfBirth}</span>
          </div>
        </div>
        <hr />
        <div className="contact-details">
          <div className="flex-row">
            <label>Phone Number</label>
            <span>{previewData.contactDetails.phoneNumber}</span>
          </div>
          <div className="flex-row">
            <label>Email</label>
            <span>{previewData.contactDetails.email}</span>
          </div>
        </div>
        <hr />
        <div className="address-details">
          <div className="flex-row">
            <label>Street</label>
            <span>{previewData.addressDetails.street}</span>
          </div>
          <div className="flex-row">
            <label>City</label>
            <span>{previewData.addressDetails.city}</span>
          </div>
          <div className="flex-row">
            <label>State</label>
            <span>{previewData.addressDetails.state}</span>
          </div>
          <div className="flex-row">
            <label>ZIP</label>
            <span>{previewData.addressDetails.zip}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
