import { ScrollView } from "react-native"
import { Container } from "../../Components/Container/Style"
import { AlignBoxSelectDoctorComponents, AlignSelectDoctorText, BoxSelectDoctorName, BoxSelectDoctorSelected, BoxSelectDoctorType, SelectDoctorImage } from "./Style"
import { ButtonLogin, ButtonTitle } from "../../Components/Buttons/Style"
import { LinkBoldN } from "../../Components/Links/Style"


export const SelecionarMedico = () => {
return(

    <ScrollView>
        <Container>


            <BoxSelectDoctorSelected>

            <AlignBoxSelectDoctorComponents>

                    <SelectDoctorImage source={require("../../Assets/SelectDoctor.png")}/>

                    <AlignSelectDoctorText>
                        <BoxSelectDoctorName>Dra Alessandra</BoxSelectDoctorName>
                        <BoxSelectDoctorType>Demartologa, Esteticista</BoxSelectDoctorType>
                    </AlignSelectDoctorText>
            </AlignBoxSelectDoctorComponents>
                
 


            </BoxSelectDoctorSelected>




        </Container>
    </ScrollView>



)}