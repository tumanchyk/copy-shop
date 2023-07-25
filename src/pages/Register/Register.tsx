import React from 'react';
import { CommonSection } from '../../components/LoginAddSection/LoginAddSection.styled';
import RegisterAddSection from '../../components/RegisterAddSection/RegisterAddSection';
import { RegisterForm } from '../../components/RegisterForm/RegisterForm';
const Register: React.FC = () => {
  return (
    <CommonSection>
        <RegisterAddSection/>
        <RegisterForm/>
     </CommonSection>
  );
}

export default Register;