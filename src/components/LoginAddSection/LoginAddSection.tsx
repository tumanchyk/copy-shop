import React from 'react';
import { Section, SectionTitle, SectionBtn, AdvantagesSection, AdvantagesTitle, AdvantagesList, AdvantagesItem, AdvantagesText, NewletterIcon, SearchIcon, HistoryIcon } from './LoginAddSection.styled';
const LoginAddSection: React.FC = () => {
  return (
      <Section>
          <SectionTitle>Це ваш перший візит?</SectionTitle>
          <SectionBtn to='/register'>Створити обліковий запис</SectionBtn>
          <AdvantagesSection>
              <AdvantagesTitle>ПЕРЕВАГИ</AdvantagesTitle>
              <AdvantagesList>
                  <AdvantagesItem><NewletterIcon/><AdvantagesText>Знижка 10 % за підписку на розсилку новин</AdvantagesText></AdvantagesItem>
                  <AdvantagesItem><SearchIcon/><AdvantagesText>Зручний спосіб відстеження свого замовлення</AdvantagesText></AdvantagesItem>
                  <AdvantagesItem><HistoryIcon/><AdvantagesText>Легкий доступ до історії замовлень</AdvantagesText></AdvantagesItem>
              </AdvantagesList>
            </AdvantagesSection>
      </Section>
  );
}

export default LoginAddSection;