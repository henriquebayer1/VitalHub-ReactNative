import styled from "styled-components";

export const Input = styled.TextInput.attrs({placeholderTextColor: '#34898f' })`
width: 100% ;
height: 53px;
padding: 16px;
margin-top: 15px;

border: 2px solid #49b3ba;
border-radius: 5px;
color: #34898f;
font-size: 16px;
font-family: 'Montserrat_600SemiBold';
`
export const InputGray = styled.TextInput.attrs({placeholderTextColor: '#4E4B59' })`
width: 100% ;
height: 53px;
padding: 16px;
margin-top: 15px;

border: none;
border-radius: 5px;
background-color: #F5F3F3;
font-size: 16px;
font-family: 'Montserrat_600SemiBold';
`
