import { Modal, ScrollView } from "react-native"
import { Container } from "../../Components/Container/Style"
import { MedicalRecordImage } from "../../Components/Logo/Style"
import { AlignButtons, AlignMedicalRecord, AlignMedicalRecordForm, AlignMedicalRecordText, InputAlignMedicalRecordForm, InputMedicalRecord, LabelMedicalRecordForm, TextMedicalRecord, TitleMedicalRecord } from "./Style"
import { Input, InputGray } from "../../Components/Input/Style"
import { ButtonCamera, ButtonLogin, ButtonTitle } from "../../Components/Buttons/Style"
import { ButtonCard } from "../MedicoConsultas/Style"
import { LinkBoldN } from "../../Components/Links/Style"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from "react"
import Camera from "../../Components/Camera/Camera"
import CameraModal from "../../Components/Camera/Camera"

export const VizualizarPrescricao = ({showModal,}) => {
    
    const [openModal, setOpenModal] = useState(false)


    return (
      <Modal>
        <ScrollView>
      
<Container>
<MedicalRecordImage source={require("../../Assets/MedicalRecord.png")}/>
 


 
    <AlignMedicalRecord>
      <TitleMedicalRecord>Richard Kosta</TitleMedicalRecord>


      <AlignMedicalRecordText>

        <TextMedicalRecord>
            22 anos
        </TextMedicalRecord>

        <TextMedicalRecord>
            richardkosta@gmail.com
        </TextMedicalRecord>

      </AlignMedicalRecordText>

    </AlignMedicalRecord>


<AlignMedicalRecordForm>

    <InputAlignMedicalRecordForm>

        <LabelMedicalRecordForm>Descricao da Consulta</LabelMedicalRecordForm>

        <InputMedicalRecord editable={false} placeholder="Descricao do Paciente" />

    </InputAlignMedicalRecordForm>

    <InputAlignMedicalRecordForm>

        <LabelMedicalRecordForm>Diagnostico do paciente</LabelMedicalRecordForm>

        <InputGray editable={false} placeholder="Diagnostico do paciente" />

    </InputAlignMedicalRecordForm>

    <InputAlignMedicalRecordForm>

        <LabelMedicalRecordForm>Prescricao Medica</LabelMedicalRecordForm>

        <InputMedicalRecord editable={false} placeholder="Prescricao Medica para o paciente" />

    </InputAlignMedicalRecordForm>
    
    <InputAlignMedicalRecordForm>

        <LabelMedicalRecordForm>Exames Medicos</LabelMedicalRecordForm>

        <InputMedicalRecord editable={false} placeholder="Nenhuma foto informada" />

    </InputAlignMedicalRecordForm>
    

<AlignButtons>
    <ButtonCamera onPress={() => {setOpenModal(true)}}>
    <MaterialCommunityIcons name="camera-plus" size={20} color="white" />
      <ButtonTitle>Enviar</ButtonTitle>
    </ButtonCamera>

    <ButtonCard >
    <LinkBoldN>Cancelar</LinkBoldN>
    </ButtonCard>
    </AlignButtons>
    </AlignMedicalRecordForm>

{openModal ? (<CameraModal/>) : (<></>)}

  </Container>
   </ScrollView>

   </Modal>




)}