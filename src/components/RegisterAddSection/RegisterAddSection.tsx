import React from 'react';
import {SectionBtn, SectionTitle } from '../LoginAddSection/LoginAddSection.styled';
import { RegisterSection } from './RegisterAddSection.styled';
const RegisterAddSection: React.FC = () => {
  return (
      <RegisterSection>
          <SectionTitle>Ви користувач?</SectionTitle>
          <SectionBtn to='/login'>Увійдіть</SectionBtn>
      </RegisterSection>
  )
}

export default RegisterAddSection;