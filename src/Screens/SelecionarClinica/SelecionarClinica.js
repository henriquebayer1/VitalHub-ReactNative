import { ScrollView } from "react-native"
import { Container } from "../../Components/Container/Style"
import { Title } from "../../Components/Titles/Style"
import { ButtonLogin, ButtonTitle } from "../../Components/Buttons/Style"
import { CancelLink, LinkBoldN } from "../../Components/Links/Style"
import { AlignBoxClinicComponents, AlignBoxClinicText, AlignBoxClinicTextEnd, AlignBoxClinicTextStart, BoxClinicDayBox, BoxClinicDayText, BoxClinicLocation, BoxClinicRateBox, BoxClinicRateText, BoxClinicSelect, BoxClinicTitle } from "./Style"
import { FontAwesome6 } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { AgendarConsulta } from "../../Components/AgendarConsulta/AgendarConsulta"



export const SelecionarClinica = () => {return(
<ScrollView>
<Container>

<Title>Selecionar Clinica</Title>

<BoxClinicSelect>
    <AlignBoxClinicComponents>
        <AlignBoxClinicTextStart>
            <BoxClinicTitle>Clinica Natureh</BoxClinicTitle>
            <BoxClinicLocation>Sao Paulo, SP</BoxClinicLocation>
        </AlignBoxClinicTextStart>

      <AlignBoxClinicTextEnd>
        <BoxClinicRateBox>
            <Fontisto name="star" size={16} color="#F9A620" />
            <BoxClinicRateText>4,5</BoxClinicRateText>
        </BoxClinicRateBox>

        <BoxClinicDayBox>
            <FontAwesome6 name="calendar-day" size={12} color="#49B3BA" />
            <BoxClinicDayText>Seg-Sex</BoxClinicDayText>
        </BoxClinicDayBox>
        </AlignBoxClinicTextEnd>
   
    </AlignBoxClinicComponents>

   
</BoxClinicSelect>





<ButtonLogin title="">
    <ButtonTitle>Continuar</ButtonTitle>
</ButtonLogin>

        <LinkBoldN>Cancelar</LinkBoldN>


</Container>
</ScrollView>


)}