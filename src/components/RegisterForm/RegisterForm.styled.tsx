import styled from '@emotion/styled';

export const FormContainer = styled.div`
width: 50%;
padding: 125px 0;
background-color: rgb(243, 243, 245);
`
export const Form = styled.form`
display: flex;
width: 400px;
margin: 0 auto;
flex-direction: column;
`;

export const LabelIcon = styled.svg`
  width: 18px;
  height: 18px;
  fill: var(--background-authForm-color);
  stroke: var(--white-color);
  opacity: 0.8;

  position: absolute;
  top: 15px;
  left: 26px;


  @media (min-width: 768px) {
    width: 24px;
    height: 24px;

    top: 18px;
    left: 46px;
  }

  @media (min-width: 1280px) {
    width: 24px;
    height: 24px;
    top: 18px;
    left: 46px;
  }
`;

export const InputField = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
  position: relative;
  width: 100%;

`;
export const Label = styled.span`
position: absolute;
left: 0;
bottom: 11px;
color: black;
margin: 0 auto;
font-family: inherit;
font-size: 15px;
font-weight: 500;
transition: all 0.15s ease-in-out 0s, color 0.15s ease-in-out 0s;


`
export const Input = styled.input`
  width: 100%;
  height: 100%;
  color: black;
  margin: 0 auto;
  font-family: inherit;
  font-size: 15px;
  background-color: transparent;
  border: none;
  padding: 11px 0;
  border-bottom: 1px solid rgb(200, 199, 199);
  transition: all 0.15s ease-in-out 0s, color 0.15s ease-in-out 0s;
  outline: 0px;
  font-weight: 400;

  &:focus,
  :hover {
    border-color: #000;
  }
  &:focus + span {
    font-size: 11px;
    bottom: 40px;
  }

`;

export const InputWrapper = styled.div`
display: flex;
`
export const ErrMessage = styled.span`
  color: #e74a3b;
  margin-left: 17px;
  font-size: 14px;

  @media (min-width: 768px) {
    margin-left: 37px;
  }
`;

export const WarnMessage = styled.span`
  color: #f6c23e;
  margin-left: 13px;
  font-size: 14px;

  @media (min-width: 768px) {
    margin-left: 37px;
  }

  @media (min-width: 1280px) {
    margin-left: 33px;
  }
`;

export const BtnSubmit = styled.button`
display: inline-block;
padding: 15px 30px;
margin-top: 15px;
background-color: #000;
color: #fff;
font-weight: 600;
transition: all 500ms ease-in-out;

&:hover{
opacity: 0.8;
}
`;