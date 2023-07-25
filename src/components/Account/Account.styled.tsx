import styled from "@emotion/styled"
import { BsPerson} from "react-icons/bs";
import { Link } from "react-router-dom";

const AccountDropdown = styled.div`
display: none;
position: absolute;
top: 33px;
transform: translate(-260px , 0);
border: 1px solid rgb(243, 243, 245);
opacity: 0;
transition: all 300ms ease-in-out;
&:hover{
    display: block;
    opacity: 1;    
}
`
const AccountWrapper = styled.div`
position: relative;
display: flex;
align-items: center;
padding: 0 40px;
padding-bottom: 7px;
&:hover div{
    display: block;
    opacity: 1;    
}
&:hover span {
    opacity: 1;
}

`
const AccountIcon = styled(BsPerson)`
width: 25px;
height: 25px;
margin-right: 8px;
`
const LoginContainer = styled.div`
background-color: #fff;
padding: 40px;
`
const RegisterContainer = styled.div`
background-color: rgb(243, 243, 245);
padding: 40px;
`
const DropdownMainText = styled.p`
font-size: 16px;
font-weight: 600;
color: #000;

`
const DropdownText = styled.p`
width: 300px;
color: rgb(71, 71, 71);
font-size: 13px;
margin-top: 40px;

`
const LoginBtn = styled(Link)`
display: inline-block;
padding: 15px 30px;
margin-top: 40px;
background-color: #000;
color: #fff;
font-weight: 600;
transition: all 500ms ease-in-out;

&:hover{
opacity: 0.8;
}
`
const RegisterBtn = styled(Link)`
display: inline-block;
padding: 15px 30px;
background-color: rgb(243, 243, 245);
color: #000;
margin-top: 40px;
font-weight: 600;
border: 2px solid #000;
transition: all 300ms ease-in-out;

&:hover{
background-color: #000;
color: #fff;

}
`
export{AccountWrapper, AccountIcon, AccountDropdown, LoginContainer, LoginBtn, RegisterContainer, RegisterBtn, DropdownText, DropdownMainText}