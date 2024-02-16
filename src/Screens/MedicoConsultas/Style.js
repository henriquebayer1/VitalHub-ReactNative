import styled from "styled-components"
import { LinearGradient } from "expo-linear-gradient"


export const HeaderBackground = styled(LinearGradient).attrs({
colors : [ '#60BFC5', '#496BBA'],
start : {x: -0.05, y: 1.00},
end : {x: 1, y: 0}

})`
width: 100%;
padding: 22px;
padding-bottom: 20px;
height: 144px;
flex-direction:row ;
align-items: center;
justify-content: center;
border-radius: 8px;
box-shadow: 0px 15px 4px;
`
export const PatientCard = styled.View`
width: 90%;
height: 144px;
background-color: white;
padding: 22px;
padding-bottom: 20px;
flex-direction: row;
align-items: center;
justify-content: center;
border-radius: 5px;
box-shadow: 4px 15px 4px;
margin: 100px 0px 30px 0px;
`
export const PatientCardTimeBox = styled.View`
width: 100px;
height: 26px;
background-color: #E8FCFD;
flex-direction: row;
align-items: center;
border-radius: 5px;
gap: 8px;

`
export const TimeBoxText = styled.Text`
color: #49B3BA;
font-size: 14px;
font-family: 'Quicksand_600SemiBold';


`

export const AgePatientCard = styled.Text`
color: #8C8A97;
font-size: 14px;
font-family: 'Quicksand_400Regular';
`

export const TypePatientCard = styled.Text`
color: #8C8A97;
font-size: 14px;
font-family: 'Quicksand_500Medium';`

export const AlignPatientCardText = styled.View`
width: 90%;
flex-direction: row;
align-items: flex-start;
gap: 5px;

`

export const AlignMedicalAppointmentForm = styled.View`
width: 90%;
align-items: center;
gap: 10px;
margin-top: 15px;

`


export const TitleMedicalAppointment = styled.Text`
color: #33303E;
font-size: 16px;
font-family: 'Montserrat_600SemiBold';


`

export const TextMedicalAppointment = styled.Text`
color: #4E4B59;
font-size: 14px;
font-family: "Quicksand_500Medium";
text-align: justify;

`

export const AlignMedicalAppointment = styled.View`
width: 90%;
align-items: center;
gap: 10px;
margin-top: 20px;
flex-direction: row;


`

export const AlignMedicalAppointmentText = styled.View`
width: 80%;
align-items: flex-start;
gap: 10px;
justify-content: center;

`

export const AlignMedicalAppointmentHeader = styled.View`
flex-direction: row;
gap: 15px;
height: 110px;
margin-top: 15px;

`

export const InputAlignMedicalAppointmentForm = styled.View`
width: 90%;
align-content: center;


`
export const LabelMedicalAppointmentForm = styled.Text`
font-family: "Quicksand_600SemiBold";
font-size: 16px;
color: #33303E;

`
export const InputMedicalAppointment = styled.TextInput.attrs({placeholderTextColor: '#34898f' })`
width: 100% ;
height: 121px;
padding: 16px;
margin-top: 5px;
border: 2px solid #49b3ba;
border-radius: 5px;
color: #34898f;
font-size: 16px;
font-family: 'Montserrat_600SemiBold';
`

export const MedicalAppointmentImage = styled.Image`
width: 60px;
height: 60px;
align-self: flex-start;

`
export const ButtonConsultas = styled.TouchableOpacity`
width: 100px;
height: 41px;
background-color: #fbfbfb;
padding: 12px 8px 12px 8px;
border-radius: 5px;
border: 2px solid #607EC5;
justify-content: center;
flex-direction: row;
gap: 10px;
`

export const ButtonTitleConsultas = styled.Text`
font-family: 'Montserrat_600SemiBold';
color: #607EC5;
font-size: 12px;
text-align: center;
flex-direction: row;

`
export const ButtonConsultasBlue = styled.TouchableOpacity`
width: 100px;
height: 41px;
background-color: #496BBA;
padding: 12px 8px 12px 8px;
border-radius: 5px;
justify-content: center;
flex-direction: row;
gap: 10px;
`

export const ButtonTitleConsultasBlue = styled.Text`
font-family: 'Montserrat_600SemiBold';
color: #fbfbfb;
font-size: 12px;
text-align: center;
flex-direction: row;

`
export const ButtonConsultasAlign = styled.View`
width: 90%;
align-items: center;
justify-content: center;
gap: 10px;
flex-direction: row;
`

export const Footer = styled.View`
width: 100%;
height: 60px;
align-items: center;
justify-content: center;
flex-direction: row;
background-color: #FFFFFF;
`

export const FooterNav = styled.View`
width: 90%;
align-items: center;
justify-content: space-evenly;
flex-direction: row;

`

export const FooterComponent = styled.View`
width: 92px;
height: 33px;
background-color: #ECF2FF;
flex-direction: row;
align-items: center;
justify-content: center;
border-radius: 20px;
gap: 8px;

`
export const FooterComponentText = styled.Text`
color: #607EC5;
font-size: 12px;
font-family: 'Quicksand_500Medium';


`