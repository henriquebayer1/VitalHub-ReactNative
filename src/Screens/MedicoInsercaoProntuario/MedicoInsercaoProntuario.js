import { ScrollView } from "react-native"
import { ButtonLogin, ButtonTitle } from "../../Components/Buttons/Style"
import { Container } from "../../Components/Container/Style"
import { Input } from "../../Components/Input/Style"
import { LinkBoldN } from "../../Components/Links/Style"
import { Logo, MedicalRecordImage } from "../../Components/Logo/Style"
import { AlignMedicalRecord, AlignMedicalRecordForm, AlignMedicalRecordHeader, AlignMedicalRecordText, InputAlignMedicalRecordForm, InputMedicalRecord, LabelMedicalRecordForm, TextMedicalRecord, TitleMedicalRecord } from "./Style"
import { ButtonCard } from "../MedicoConsultas/Style"


export const MedicoInsercaoProntuario = ({hideModal,}) => {
    
    return (
      
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

        <InputMedicalRecord placeholder="Descricao" />

    </InputAlignMedicalRecordForm>

    <InputAlignMedicalRecordForm>

        <LabelMedicalRecordForm>Diagnostico do paciente</LabelMedicalRecordForm>

        <Input placeholder="Diagnostico do paciente" />

    </InputAlignMedicalRecordForm>

    <InputAlignMedicalRecordForm>

        <LabelMedicalRecordForm>Prescricao Medica</LabelMedicalRecordForm>

        <InputMedicalRecord placeholder="Prescricao Medica" />

    </InputAlignMedicalRecordForm>
    


    <ButtonLogin title="">
      <ButtonTitle>Salvar</ButtonTitle>
    </ButtonLogin>
    </AlignMedicalRecordForm>

    <ButtonCard onPress={hideModal}>
    <LinkBoldN>Cancelar</LinkBoldN>
    </ButtonCard>
    
  </Container>
   </ScrollView>






)}