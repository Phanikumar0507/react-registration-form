import React, { useState } from 'react';
import PersonalForm from './PersonalForm';
import ContactForm from './ContactForm';
import AddressForm from './AddressForm';
import Preview from './Preview';
import Buttons from './Buttons';

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [wizardData, setWizardData] = useState({});
  const [error, setError] = useState({
    isError: false,
    errorMessage: '',
  });

  const handlePrevStep = () => {
    if (currentStep === 1) {
      return false;
    } else {
      setCurrentStep((currentStep) => currentStep - 1);
    }
  };

  const handleNextStep = () => {
    if (currentStep == 4) {
      return false;
    } else {
      let errorMessage = '';
      let isError = false;
      if (currentStep === 1) {
        if (wizardData.personalDetails === undefined) {
          isError = true;
          errorMessage = 'Please enter all the mandatory fileds.';
        } else if (wizardData.personalDetails.name === '') {
          isError = true;
          errorMessage = 'Please enter Name.';
        } else if (wizardData.personalDetails.age === '') {
          isError = true;
          errorMessage = 'Please enter Age.';
        } else if (!/^[1-9]?[0-9]{1}$/.test(wizardData.personalDetails.age)) {
          isError = true;
          errorMessage = 'Please enter valid age.';
        } else if (wizardData.personalDetails.dateOfBirth === '') {
          isError = true;
          errorMessage = 'Please enter Date of Birth.';
        } else {
          setCurrentStep((currentStep) => currentStep + 1);
        }
      } else if (currentStep === 2) {
        if (wizardData.contactDetails === undefined) {
          isError = true;
          errorMessage = 'Please enter all the mandatory fileds.';
        } else if (wizardData.contactDetails.phoneNumber === '') {
          isError = true;
          errorMessage = 'Please enter phone number.';
        } else if (
          !/^[6-9][0-9]{9}/.test(wizardData.contactDetails.phoneNumber)
        ) {
          isError = true;
          errorMessage = 'Please enter valid phone number.';
        } else if (wizardData.contactDetails.email === '') {
          isError = true;
          errorMessage = 'Please enter email.';
        } else if (
          !/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(
            wizardData.contactDetails.email
          )
        ) {
          isError = true;
          errorMessage = 'Please enter valid email.';
        } else {
          setCurrentStep((currentStep) => currentStep + 1);
        }
      } else if (currentStep === 3) {
        if (wizardData.addressDetails === undefined) {
          isError = true;
          errorMessage = 'Please enter all the mandatory fileds.';
        } else if (wizardData.addressDetails.street === '') {
          isError = true;
          errorMessage = 'Please enter street.';
        } else if (wizardData.addressDetails.city === '') {
          isError = true;
          errorMessage = 'Please enter city.';
        } else if (wizardData.addressDetails.state === '') {
          isError = true;
          errorMessage = 'Please enter state.';
        } else if (wizardData.addressDetails.zip === '') {
          isError = true;
          errorMessage = 'Please enter zip.';
        } else {
          setCurrentStep((currentStep) => currentStep + 1);
        }
      }
      setError({
        isError,
        errorMessage,
      });
    }
  };

  const handleDetailsUpdate = (updatedDetails) => {
    setWizardData({
      ...wizardData,
      ...updatedDetails,
    });
  };

  const handleSubmit = () => {
    window.alert('Are you sure!! do you want to submit the data?');
    console.log(wizardData);
  };

  const renderSwitch = () => {
    switch (currentStep) {
      case 1:
        return (
          <PersonalForm
            savedDetails={wizardData.personalDetails}
            onDetailsUpdate={handleDetailsUpdate}
          />
        );
      case 2:
        return (
          <ContactForm
            savedDetails={wizardData.contactDetails}
            onDetailsUpdate={handleDetailsUpdate}
          />
        );
      case 3:
        return (
          <AddressForm
            savedDetails={wizardData.addressDetails}
            onDetailsUpdate={handleDetailsUpdate}
          />
        );
      case 4:
        return <Preview previewData={wizardData} />;
      default:
      // do nothing
    }
  };

  return (
    <div className="multi-step-wizard-wrapper">
      {renderSwitch()}
      {error.isError && (
        <div className="error-message">{error.errorMessage}</div>
      )}
      <Buttons
        currentStep={currentStep}
        onPrevStep={handlePrevStep}
        onNextStep={handleNextStep}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default MultiStepForm;
