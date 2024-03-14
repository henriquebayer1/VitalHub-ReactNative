import styled from "styled-components";

export const Button = styled.TouchableOpacity`
  width: 90%;
  height: 44px;
  background-color: #496bba;
  justify-content: center;
  align-items: center;
  border-color: #496bba;
  border-radius: 5px;
  margin-top: 15px;
`;


export const ButtonRegister = styled(Button)`
  margin-top: 30px;
`;

export const ButtonLogin = styled.TouchableOpacity`
width: 90%;
height: 44px;
background-color: #496BBA;
padding: 12px 8px 12px 8px;
border-radius: 5px;
margin-top: 10px;
`
export const ButtonLoginModalAgendarConsulta = styled(ButtonLogin)`
margin-top: 110px;
`

export const ButtonTitle = styled.Text`
font-family: 'Montserrat_700Bold';
color: white;
font-size: 14px;
text-align: center;
text-transform: uppercase;
`
export const ButtonGoogle = styled.TouchableOpacity`
width: 90%;
height: 50px;
background-color: #fafafa;
padding: 12px 8px 12px 8px;
border-radius: 5px;
border: 1px solid #496BBA;
margin-top: 15px;
justify-content: center;
flex-direction: row;
gap: 10px;
`

export const ButtonTitleGoogle = styled.Text`
font-family: 'Montserrat_700Bold';
color: #496BBA;
font-size: 18px;
text-align: center;

text-transform: uppercase;
flex-direction: row;

`

export const ButtonAgendarConsulta = styled.TouchableOpacity`
width: 60px;
height: 60px;
border-radius: 7px;
justify-content: center;
align-items: center;
background-color: #49B3BA;
position: fixed;
left: 130px;
bottom: 10px;
`;
