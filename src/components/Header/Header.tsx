import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderEl, LogoBrand, HeaderWrapper, AdditionalContainer, HelpContainer, Text, Icon, SearchWrapper, SearchField, SearchIcon, CartLink, CartIcon, UnderLine } from './Header.styled.tsx'
import Account from '../Account/Account.tsx';
import Navigation from '../Nav/Nav.tsx';


const Header: React.FC = () => {
    return <HeaderEl>
        <HeaderWrapper>
            <HelpContainer to='/'>
                <Icon />
                <Text>Довідка
                    <UnderLine/>
                </Text>
            </HelpContainer>
            <Link to='/'>
                <LogoBrand src='https://www.reserved.com/skin/frontend/6.17.0/narch/public/images/logo-reserved.30BCcIA.svg' height='15'/>
            </Link>
            <AdditionalContainer>
                 <SearchWrapper>
                    <SearchIcon/>
                    <SearchField placeholder='Шукати'/>
                </SearchWrapper>
                <Account/>
                <CartLink to='/'>
                    <CartIcon />
                    <Text>Кошик
                        <UnderLine/>
                    </Text>
                </CartLink>
           </AdditionalContainer>
        </HeaderWrapper>
        <Navigation/>
    </HeaderEl>
}

export default Header
