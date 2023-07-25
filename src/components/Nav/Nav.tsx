import React from 'react';
import { Link } from 'react-router-dom';
import { headerNav } from '../../helpers/navList.tsx';
import { NavList, NavItem, Nav  } from './Nav.styled.tsx';

const Navigation: React.FC = () => {
    return <Nav>
            <NavList>
                {headerNav.map(({ category, id }) => {
                    return <NavItem key={id}><Link to='/'>{category}</Link></NavItem>
                } )}
            </NavList>
        </Nav>
}
 export default Navigation