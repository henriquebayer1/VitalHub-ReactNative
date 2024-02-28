import styled from "styled-components";

export const LinkMedium = styled.Text`
font-family: 'Montserrat_500Medium';
margin-top: 10px;
margin-left: 10px;
color: #8c8a97;
font-size: 14px;
align-self: flex-start;
text-decoration: underline;

`

export const LinkBold = styled.Text`
font-family: 'Montserrat_600SemiBold';
margin-top: 10px;
margin-left: 10px;
color: #496BBA;
font-size: 14px;
align-self: flex-start;
text-decoration: underline;

`
export const LinkBoldPatient = styled.Text`
font-family: 'Montserrat_500Medium';
margin-top: 10px;
color: ${(props) => props.situacao == "pendente" ? "#c81d25" : "#344f8f"} ;
font-size: 12px;
margin-top: 80px;

`


export const LinkBoldN = styled.Text`
font-family: 'Montserrat_600SemiBold';
margin-top: 15px;
margin-bottom: 20px;
margin-left: 10px;
color: #496BBA;
font-size: 14px;
text-decoration: underline;

`
export const ContentAccount = styled.View`
width: 90%;
align-items: center;
flex-direction: row;
justify-content: center;

margin-top: 30px;




`
export const AccountText = styled.Text`
font-family: 'Montserrat_600SemiBold';

`

export const CancelLink = styled.Text`
font-family: 'Montserrat_500Medium';
color: #C81D25;
font-size: 12px;
align-self: flex-end;
margin-bottom: 5px;
`