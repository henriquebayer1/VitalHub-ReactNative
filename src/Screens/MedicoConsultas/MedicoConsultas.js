
import { Fontisto } from '@expo/vector-icons';
import { ScrollView } from 'react-native';
import { Container } from '../../Components/Container/Style';
import { AgePatientCard, AlignMedicalAppointment, AlignMedicalAppointmentForm, AlignMedicalAppointmentText, AlignPatientCardText, ButtonConsultas, ButtonConsultasAlign, ButtonConsultasBlue, ButtonTitleConsultas, ButtonTitleConsultasBlue, Footer, FooterBox, FooterComponent, FooterComponentText, FooterNav, HeaderBackground,
InputAlignMedicalAppointmentForm, InputMedicalAppointment, LabelMedicalAppointmentForm, MedicalAppointmentImage, 
PatientCard, 
PatientCardBox, 
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
import { ButtonDocConsult } from '../../Components/Buttons/ButtonDocConsult';
import { useState } from 'react';
import { ListComponent } from '../../Components/List/List';
import { PatientCardComponent } from '../../Components/PatientCard/PatientCard';
import { MedicoInsercaoProntuario } from '../MedicoInsercaoProntuario/MedicoInsercaoProntuario';
import { ButtonSchedulleConsult } from '../../Components/Buttons/ButtonSchedulleConsult';
import { ModalAgendarConsulta } from '../../Components/ModalAgendarConsulta/ModalAgendarConsulta';



export const MedicoConsultas = ({navigation}) => {


  const Consultas = [
    { id: 1, nome: "Lucas Lacerda", situacao: "pendente", tipo: "Paciente"},
    { id: 2, nome: "Uiara Ambrosio", situacao: "cancelado", tipo: "Medico" },
    { id: 3, nome: "Silvia Ribeiro", situacao: "realizado", tipo: "Paciente" },
    { id: 4, nome: "Tadeu LACERDA", situacao: "pendente", tipo: "Paciente" },
  ];

  
  const [user, setUser] = useState("Paciente")

  const [statusLista, setStatusLista] = useState("");
  const [activeIcon, setActiveIcon] = useState("agenda"); // Estado para armazenar o ícone ativo

  //states para os Modais
  const [showModalCancel, setShowModalCancel] = useState(false);
  const [showModalAppointment, setShowModalAppointment] = useState(false);


  const [statusLevel, setStatusLevel] = useState(false);
  const [statusLevel2, setStatusLevel2] = useState(false);
  const [statusLevel3, setStatusLevel3] = useState(false);

return(

<Container>
{/* 
  <ModalAgendarConsulta
  clickButton1={statusLevel}
  clickButton2={statusLevel2 }
  clickButton3={statusLevel3 }
  onPress1={() => {setStatusLevel(true)}}
  onPress2={() => {setStatusLevel2(true)}}
  onPress3={() => {setStatusLevel3(true)}}

 
  /> */}


 {showModalAppointment ? 

(<>
 <MedicoInsercaoProntuario
 hideModal={() => {setShowModalAppointment(false)}}
 />

</>) : 
(<></>)}




      


     
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
          <ButtonDocConsult 
          textButton={"Agendadas"}
          clickButton={statusLista === "pendente"}
          onPress={() => {setStatusLista("pendente");}}
          >
            <ButtonTitleConsultas clickButton={statusLista === "realizado"}>Pendente</ButtonTitleConsultas>
          </ButtonDocConsult>

 <ButtonDocConsult
 textButton={"Realizados"}
 clickButton={statusLista === "realizado"}
 onPress={() => {
   setStatusLista("realizado");
 }}
 > 
      <ButtonTitleConsultas clickButton={statusLista === "realizado"}>Realizados</ButtonTitleConsultas>
  </ButtonDocConsult>

<ButtonDocConsult
 textButton={"Cancelados"}
 clickButton={statusLista === "cancelado"}
 onPress={() => {
   setStatusLista("cancelado");
 }}
 >
      <ButtonTitleConsultas clickButton={statusLista === "realizado"}>Realizados</ButtonTitleConsultas>
  </ButtonDocConsult>
</ButtonConsultasAlign>

<ListComponent
        data={Consultas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) =>
          statusLista === item.situacao && (
            <PatientCardComponent 
              nome={item.nome}
              situacao={item.situacao}
              onPressCancel={() => setShowModalCancel(true)}
              onPressAppointment={user === "Paciente" ? () => setShowModalAppointment(true) : () => {navigation.replace("SelecionarClinica")}}
             
            />
          )
        }
      />
      
{showModalCancel ? 

(<>
 <CancelarConsulta
 hideModal={() => {setShowModalCancel(false)}}
 />

</>) : 
(<></>)}

{statusLista === "pendente" ?  (<><ButtonSchedulleConsult
onPress={() => {navigation.navigate("SelecionarClinica")}}
/></>):
(<></>)}









{/* <Footer>
  <FooterNav>

    <FooterComponent>
      <FontAwesome5 name="calendar-check" size={22} color="#607EC5" />
      <FooterComponentText>Agenda</FooterComponentText>
    </FooterComponent>


    <FontAwesome5 name="hospital" size={22} color="#4E4B59" />

    <FontAwesome5 name="user-circle" size={22} color="#4E4B59" />

  </FooterNav>
</Footer> */}



         </Container>
      



)}