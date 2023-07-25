import styled from "@emotion/styled"
import { Link } from "react-router-dom"
import { BiHelpCircle } from "react-icons/bi";
import { LuSearch } from "react-icons/lu";
import { BsBag} from "react-icons/bs";

const HeaderEl = styled.header`
display: flex;
align-items: center;
flex-direction: column;
margin: 0 auto;
padding: 0 45px;
padding-top: 40px;
`
const LogoBrand = styled.img`
position: absolute;
left: 50%;
bottom: 13px;
transform: translate(-50%, 0);
height: 20px;
max-width: 100%;
`
const HeaderWrapper = styled.div`
position: relative;
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
`
const HelpContainer = styled(Link)`
display: flex;
align-items: center;
&:hover span {
    opacity: 1;
}
padding-bottom: 5px;

`
const Text = styled.p`
position: relative;
font-size: 14px;
font-weight: 500;
line-height: 22px;
letter-spacing: 0.14px;
`
const UnderLine = styled.span`
position: absolute;
bottom: 3px;
display: block;
opacity: 0;
width: 100%;
height: 0.5px;
background: #000;
transition: all 300ms ease-in-out;
`
const Icon = styled(BiHelpCircle)`
color: #000;
width: 16px;
height: 16px;
margin-right: 8px;
`
const AdditionalContainer = styled.div`
display: flex;
align-items: center;
`
const SearchWrapper = styled.div`
position: relative;
width: 240px;
display: flex;
align-items: center;
padding-bottom: 7px;

`
const SearchField = styled.input`
width: 100%;
border: none;
outline: none;
background: none;
border-bottom: 1px solid rgb(188, 189, 190);
padding: 0px 0px 12px 42px;
&::placeholder{
    font-size: 14px;
}
`
const SearchIcon = styled(LuSearch)`
position: absolute;
left: 12px;
bottom: 18px;
width: 20px;
height: 20px;
`
const CartLink = styled(Link)`
display: flex;
align-items: center;
padding-bottom: 7px;
&:hover span {
    opacity: 1;
}

`
const CartIcon = styled(BsBag)`
width: 20px;
height: 20px;
margin-right: 8px;
`
export{HeaderEl, LogoBrand, HeaderWrapper, HelpContainer, Text, UnderLine, Icon, SearchWrapper, SearchField, SearchIcon, CartLink, CartIcon, AdditionalContainer}