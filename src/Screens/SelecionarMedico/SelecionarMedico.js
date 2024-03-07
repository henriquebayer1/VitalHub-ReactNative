import { ScrollView } from "react-native"
import { Container } from "../../Components/Container/Style"
import { AlignBoxSelectDoctorComponents, AlignSelectDoctorText, BoxSelectDoctorN, BoxSelectDoctorName, BoxSelectDoctorSelected, BoxSelectDoctorType, SelectDoctorImage } from "./Style"
import { ButtonLogin, ButtonTitle } from "../../Components/Buttons/Style"
import { LinkBoldN } from "../../Components/Links/Style"
import { useState } from "react"
import { DoctorCard } from "../../Components/DoctorCard/DoctorCard"
import { ListComponent } from "../../Components/List/List"
import { ButtonCard } from "../MedicoConsultas/Style"
import { ModalAgendarConsulta } from "../../Components/ModalAgendarConsulta/ModalAgendarConsulta"


export const SelecionarMedico = ({navigation}) => {

    const Medicos = [
        { id: 0, nome: "Lucas Lacerda", especialidade: "Dermatologa, Esteticista" },
        { id: 1, nome: "Uiara Ambrosio", especialidade: "Endocrino" },
        { id: 2, nome: "Silvia Ribeiro", especialidade: "Ortorrino" },
        { id: 3, nome: "Tadeu LACERDA", especialidade: "Dermatologa, Esteticista" },
      ];



const [selectDoctor, setSelectDoctor] = useState();

const [idConfirm, setIdConfirm] = useState();


return(

        <Container>
 
        <ListComponent
        data={Medicos}
        keyExtractor={(item) => item.id}
        renderItem={({item}) =>
          (
            <DoctorCard
              doctorId={item.id}
              index={idConfirm}
              nome={item.nome}
              especialidade={item.especialidade}
              clickButton={selectDoctor === true}
              onPress={() => {setSelectDoctor(true); setIdConfirm(item.id)}}
             
            />
          )
        }
      />

<ButtonLogin title="">
      <ButtonTitle>Confirmar</ButtonTitle>
    </ButtonLogin>
    

    <ButtonCard onPress={() => {navigation.navigate("MedicoConsultas")}}>
    <LinkBoldN >Cancelar</LinkBoldN>
    </ButtonCard>
            




        </Container>
    



)}