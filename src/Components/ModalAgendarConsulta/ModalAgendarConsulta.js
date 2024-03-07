import { ButtonCard } from "../../Screens/MedicoConsultas/Style";
import {
  InputAlignMedicalRecordForm,
  LabelMedicalRecordForm,
} from "../../Screens/MedicoInsercaoProntuario/Style";
import { ButtonLogin, ButtonTitle } from "../Buttons/Style";
import { Container } from "../Container/Style";
import { Input } from "../Input/Style";
import { LinkBoldN } from "../Links/Style";
import { TitleModalAgendarConsulta } from "../Titles/Style";
import {
  AlignLevel,
  BoxLevelAlign,
  LevelSelectBox,
  LevelSelectBoxText,
  LocationBox,
  TextN,
} from "./Style";

export const ModalAgendarConsulta = ({ onPress, onPress1, onPress2, onPress3, clickButton = false, clickButton1 = false, clickButton2 = false, clickButton3 = false, }) => {
  return (
    <>
      <TitleModalAgendarConsulta>Agendar Consulta</TitleModalAgendarConsulta>

      <BoxLevelAlign>
        <TextN>Qual o nivel da Consulta</TextN>

        <AlignLevel>
          <ButtonCard clickButtonR={clickButton1} onPress={onPress1}>
            <LevelSelectBox clickButtonR={clickButton1} >
              <LevelSelectBoxText>Rotina</LevelSelectBoxText>
            </LevelSelectBox>
          </ButtonCard>

          <ButtonCard clickButtonE={clickButton2} onPress={onPress2}>
            <LevelSelectBox clickButtonE={clickButton2} >
              <LevelSelectBoxText>Exame</LevelSelectBoxText>
            </LevelSelectBox>
          </ButtonCard>

          <ButtonCard clickButtonU={clickButton3} onPress={onPress3}>
            <LevelSelectBox clickButtonU={clickButton3} >
              <LevelSelectBoxText>Urgencia</LevelSelectBoxText>
            </LevelSelectBox>
          </ButtonCard>
        </AlignLevel>
      </BoxLevelAlign>

      <InputAlignMedicalRecordForm>
        <LabelMedicalRecordForm>
          Informe a localizacao desejada
        </LabelMedicalRecordForm>

        <Input placeholder="Informe a localizao" />
      </InputAlignMedicalRecordForm>
    </>
  );
};
