
import { Fontisto } from '@expo/vector-icons';
import { ScrollView } from 'react-native';
import { Container } from '../../Components/Container/Style';
import { AgePatientCard, AlignMedicalAppointment, AlignMedicalAppointmentForm, AlignMedicalAppointmentText, AlignPatientCardText, ButtonConsultas, ButtonConsultasAlign, ButtonConsultasBlue, ButtonTitleConsultas, ButtonTitleConsultasBlue, Footer, FooterBox, FooterComponent, FooterComponentText, FooterNav, HeaderBackground,
InputAlignMedicalAppointmentForm, InputMedicalAppointment, LabelMedicalAppointmentForm, MedicalAppointmentImage, 
PatientCard, 
PatientCardTimeBox, 
TextMedicalAppointment, TimeBoxText, TitleMedicalAppointment, TitlePatientCard, TypePatientCard } from './Style';
import { ButtonGoogle, ButtonLogin, ButtonTitle, ButtonTitleGoogle } from "../../Components/Buttons/Style"
import { Input } from "../../Components/Input/Style"
import { CancelLink, LinkBoldN } from "../../Components/Links/Style"
import { AntDesign } from '@expo/vector-icons';
import CalendarList from '../../Components/Calendar/CalendarList';
import { FontAwesome5 } from '@expo/vector-icons';
import { CancelarConsulta } from '../../Components/CancelarConsulta/CancelarConsulta';
import { InserirProntuario } from '../../Components/InserirProntuario/InserirProntuario';



export const MedicoConsultas = () => {
return(
<>



      
      <Container>

     
    <HeaderBackground>
      <AlignMedicalAppointment>
        <MedicalAppointmentImage source={require("../../Assets/MedicalAppointmentDoctor.png")}/>

            <AlignMedicalAppointmentText>
              <TextMedicalAppointment>
                Bem vindo
              </TextMedicalAppointment>

              <TitleMedicalAppointment>
                Dr. Claudio
              </TitleMedicalAppointment>
            </AlignMedicalAppointmentText>
      </AlignMedicalAppointment>

        <Fontisto name="bell-alt" size={24} color="white" style={{marginTop: 23}} />
        
    </HeaderBackground>

<CalendarList/>

<ButtonConsultasAlign>
  <ButtonConsultasBlue>
        <ButtonTitleConsultasBlue>Agendadas</ButtonTitleConsultasBlue>
  </ButtonConsultasBlue>

  <ButtonConsultas>
        <ButtonTitleConsultas>Realizadas</ButtonTitleConsultas>
    </ButtonConsultas>
    
    <ButtonConsultas>
        <ButtonTitleConsultas>Canceladas</ButtonTitleConsultas>
    </ButtonConsultas>
</ButtonConsultasAlign>

    <PatientCard>
      <AlignMedicalAppointment>
          <MedicalAppointmentImage source={require("../../Assets/MedicalAppointmentPatient.png")}/>

        <AlignMedicalAppointmentText>
             <TitleMedicalAppointment>Richard Kosta</TitleMedicalAppointment>

          <AlignPatientCardText>
              <AgePatientCard>28 anos</AgePatientCard>
              <TypePatientCard>Urgencia</TypePatientCard>
          </AlignPatientCardText>
           
          <PatientCardTimeBox>
              <AntDesign name="clockcircle" size={24} color="#49B3BA" />
              <TimeBoxText>15:00</TimeBoxText>
          </PatientCardTimeBox>
        </AlignMedicalAppointmentText>
      
      </AlignMedicalAppointment>
      <CancelLink>Cancelar</CancelLink>
    </PatientCard>

<Footer>
  <FooterNav>

    <FooterComponent>
      <FontAwesome5 name="calendar-check" size={22} color="#607EC5" />
      <FooterComponentText>Agenda</FooterComponentText>
    </FooterComponent>


    <FontAwesome5 name="hospital" size={22} color="#4E4B59" />

    <FontAwesome5 name="user-circle" size={22} color="#4E4B59" />

  </FooterNav>
</Footer>


        </Container>
         
      
</>


)}