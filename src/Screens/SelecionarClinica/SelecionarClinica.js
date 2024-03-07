import { ScrollView } from "react-native"
import { Container } from "../../Components/Container/Style"
import { Title } from "../../Components/Titles/Style"
import { ButtonLogin, ButtonTitle } from "../../Components/Buttons/Style"
import { CancelLink, LinkBoldN } from "../../Components/Links/Style"
import { AlignBoxClinicComponents, AlignBoxClinicText, AlignBoxClinicTextEnd, AlignBoxClinicTextStart, BoxClinicDayBox, BoxClinicDayText, BoxClinicLocation, BoxClinicRateBox, BoxClinicRateText, BoxClinicSelect, BoxClinicTitle } from "./Style"
import { AgendarConsulta } from "../../Components/AgendarConsulta/AgendarConsulta"
import { ButtonCard } from "../MedicoConsultas/Style"
import { SelectClinicCard } from "../../Components/SelectClinicCard/SelectClinicCard"
import { ListComponent } from "../../Components/List/List"
import { useState } from "react"



export const SelecionarClinica = ({navigation}) => {
    
    const Clinicas = [
        { id: 0, name: "Clinica 1", local: "Sao Paulo, SP", rate: "4,1" },
        { id: 1, name: "Clinica 2", local: "Sao Paulo, SP", rate: "4,2" },
        { id: 2, name: "Clinica 3", local: "Sao Paulo, SP", rate: "4,3" },
        { id: 3, name: "Clinica 4", local: "Sao Paulo, SP", rate: "4,4" },
      ];
    

      const [selectClinic, setSelectClinic] = useState();
      const [idConfirm, setIdConfirm] = useState();

    return(

<Container>

<Title>Selecionar Clinica</Title>

<ListComponent
        data={Clinicas}
        keyExtractor={(item) => item.id}
        renderItem={({item}) =>
          (
            <SelectClinicCard
              clinicId={item.id}
              index={idConfirm}
              name={item.name}
              local={item.local}
              rate={item.rate}
              clickButton={selectClinic === true}
              onPress={() => {setSelectClinic(true); setIdConfirm(item.id)}}
             
            />
          )
        }
      />





<ButtonLogin onPress={() => {navigation.navigate("SelecionarMedico")}}>
      <ButtonTitle>Confirmar</ButtonTitle>
    </ButtonLogin>
    

    <ButtonCard onPress={() => {navigation.navigate("MedicoConsultas")}}>
    <LinkBoldN>Cancelar</LinkBoldN>
    </ButtonCard>


</Container>



)}