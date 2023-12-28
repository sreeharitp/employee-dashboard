import React, { useState } from 'react';
import PersonalInfo from './PersonalInfo';
import Documents from './Documents';
import Employee from './Employee';
import Emergency from './Emergency';
import Roles from './Roles';

const MainForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    phone: '',
  });

  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const submitForm = () => {
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  switch (step) {
    case 1:
      return (
        <PersonalInfo
          formData={formData}
          setForm={setFormData}
          nextStep={nextStep}
        />
      );
    case 2:
      return (
        <Documents
          formData={formData}
          setForm={setFormData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      );
    case 3:
      return (
        <Employee
          formData={formData}
          setForm={setFormData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      );
    case 4:
      return (
        <Emergency
          formData={formData}
          setForm={setFormData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      );
    case 5:
      return (
        <Roles
          formData={formData}
          prevStep={prevStep}
          submitForm={submitForm}
        />
      );
    default:
      return null;
  }
};

export default MainForm;
