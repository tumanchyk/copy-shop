import React from 'react';
import { CommonSection } from '../../components/LoginAddSection/LoginAddSection.styled';
import LoginAddSection from '../../components/LoginAddSection/LoginAddSection';
import { LoginForm } from '../../components/LoginForm/LoginForm';
const Login: React.FC = () => {
  return (
    <CommonSection>
      <LoginForm/>
      <LoginAddSection />
      </CommonSection>
  );
}

export default Login;