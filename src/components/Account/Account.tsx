import React from 'react';
import { AccountWrapper, AccountIcon, AccountDropdown, LoginContainer, LoginBtn, RegisterContainer, RegisterBtn, DropdownText, DropdownMainText } from './Account.styled';
import { Text, UnderLine } from '../Header/Header.styled';


const Account: React.FC = () => {
    return <>
        <AccountWrapper>
                    <AccountIcon />
            <Text>Акаунт
                <UnderLine/>
            </Text>
            <AccountDropdown>
            <LoginContainer>
                <DropdownMainText>Ви зареєстровані?</DropdownMainText>
                <LoginBtn to='/login'>Увійти</LoginBtn>
            </LoginContainer>
            <RegisterContainer>
                <DropdownMainText>Вперше на сайті?</DropdownMainText>
                <DropdownText>Після швидкої реєстрації ви отримаєте доступ до багатьох функцій та додаткових переваг.</DropdownText>
                <RegisterBtn to='/register'>Зареєструватись</RegisterBtn>
            </RegisterContainer>
        </AccountDropdown>
        </AccountWrapper>
    </>
}
 export default Account