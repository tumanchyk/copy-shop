import styled from "@emotion/styled"

const Nav = styled.nav`
`
const NavList = styled.ul`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
`
const NavItem = styled.li`
font-size: 16px;
font-weight: 500;
line-height: 16.8px;
letter-spacing: 0.4px;
color: #000;
padding: 26px 20px;

&:first-child{
    color: red;
}

`
export {NavList, NavItem, Nav }