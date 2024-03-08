import { AgePatientCard, AlignMedicalAppointment, AlignMedicalAppointmentText, AlignPatientCardText, ButtonCard, MedicalAppointmentImage, PatientCardBox, PatientCardTimeBox, TextButtonCard, TimeBoxText, TitleMedicalAppointment, TypePatientCard } from "../../Screens/MedicoConsultas/Style"
import { AntDesign } from '@expo/vector-icons';
import { LinkBoldN, LinkBoldPatient } from "../Links/Style";


export const PatientCardComponent = ({situacao ,
onPressCancel,
onPressAppointment,
nome,
tipo}) => {return(


<PatientCardBox tipo={tipo}>
      <AlignMedicalAppointment>
          <MedicalAppointmentImage source={require("../../Assets/MedicalAppointmentPatient.png")}/>

        <AlignMedicalAppointmentText>
             <TitleMedicalAppointment>{nome}</TitleMedicalAppointment>

          <AlignPatientCardText>
              <AgePatientCard>28 anos</AgePatientCard>
              <TypePatientCard>Urgencia</TypePatientCard>
          </AlignPatientCardText>
           
          <PatientCardTimeBox situacao={situacao}>
              <AntDesign name="clockcircle" size={24} color={situacao == "pendente" ? "#49b3ba" : "#8C8A97"} />
              <TimeBoxText situacao={situacao}>15:00</TimeBoxText>
          </PatientCardTimeBox>
        </AlignMedicalAppointmentText>
      
      </AlignMedicalAppointment>
      {situacao === "cancelado" ? (
            <></>
          ) : situacao === "pendente" ? (
            <ButtonCard onPress={onPressCancel}>
              <LinkBoldPatient situacao={situacao}>Cancelar</LinkBoldPatient>
            </ButtonCard>
          ) : (
            <ButtonCard onPress={onPressAppointment}>
              <LinkBoldPatient situacao={situacao} tipo={tipo}>Ver Prontuário</LinkBoldPatient>
            </ButtonCard>
          )}
    </PatientCardBox>

)}