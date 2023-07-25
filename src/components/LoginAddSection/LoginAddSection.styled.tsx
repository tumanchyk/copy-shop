import styled from "@emotion/styled"
import {IoMailOpenOutline } from "react-icons/io5";
import { LiaSearchPlusSolid, LiaHistorySolid } from "react-icons/lia";
import { Link } from "react-router-dom";

export const CommonSection = styled.div`
display: flex;
height: 100vh;
`
const Section = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
width: 50%;
background-color: rgb(243, 243, 245);
`
const SectionTitle = styled.h2`
    letter-spacing: 0.9px;
    margin-bottom: 55px;
    font-size: 18px;
    font-weight: 600;
    line-height: 1;
    text-align: center;
    color: black;
`
const SectionBtn = styled(Link)`
display: flex;
align-items: center;
justify-content: center;
padding: 15px 30px;
width: 400px;
background-color: transparent;
color: #000;
box-sizing: border-box;
font-size: 16px;
font-weight: 600;
letter-spacing: 0.6px;
border: 2px solid #000;
transition: all 300ms ease-in-out;
margin-bottom: 40px;
&:hover{
background-color: #000;
color: #fff;

}
`
const AdvantagesSection = styled.div`

`
const AdvantagesTitle = styled.h3`
font-size: 13px;
color: #777;
font-weight: 500;
line-height: 1.46;
letter-spacing: 0.7px;
padding-bottom: 45px;

`
const AdvantagesList = styled.ul`
width: 340px;
color: rgb(35, 31, 32);
`

const AdvantagesItem = styled.li`
display: flex;
align-items: center;
padding-bottom: 33px;
`
const AdvantagesText = styled.p`
color: inherit;
font-size: 14px;
`
const NewletterIcon = styled(IoMailOpenOutline)`
color: inherit;
margin-right: 20px;
width: 24px;
height: 24px;
`
const SearchIcon = styled(LiaSearchPlusSolid)`
color: inherit;
margin-right: 20px;
width: 24px;
height: 24px;
`
const HistoryIcon = styled(LiaHistorySolid)`
color: inherit;
margin-right: 20px;
width: 24px;
height: 24px;
`
export {Section, SectionTitle, SectionBtn, AdvantagesSection, AdvantagesTitle, AdvantagesList, AdvantagesItem, AdvantagesText, NewletterIcon, SearchIcon, HistoryIcon}