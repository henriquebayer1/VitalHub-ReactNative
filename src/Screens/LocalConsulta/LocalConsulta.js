import { SafeAreaView, View } from "react-native"
import { BoxAgendarConsulta, BoxAgendarConsultaAlign, BoxAgendarConsultaInfoAlign, BoxAgendarConsultaInfoText, BoxAgendarConsultaInfoTitle, BoxAgendarConsultaSubTitle, BoxAgendarConsultaTitle } from "../../Components/AgendarConsulta/Style"
import { ButtonLogin, ButtonTitle } from "../../Components/Buttons/Style"
import { Container } from "../../Components/Container/Style"
import { LinkBoldN } from "../../Components/Links/Style"
import { ButtonCard } from "../MedicoConsultas/Style"
import { BoxLocal, BoxLocalAlign } from "./Style"
import Mapa from "../Mapa/Map"


export const LocalConsulta = () => {
    
    
    return (
<Container>
    <BoxLocalAlign>
<Mapa/>

<BoxLocal>

<BoxAgendarConsultaAlign>
        <BoxAgendarConsultaTitle>Agendar consulta</BoxAgendarConsultaTitle>
        <BoxAgendarConsultaSubTitle>Consulte os dados selecionados para a sua consulta.</BoxAgendarConsultaSubTitle>
</BoxAgendarConsultaAlign>

<BoxAgendarConsultaInfoAlign>
        <BoxAgendarConsultaInfoTitle>Data da consulta</BoxAgendarConsultaInfoTitle>
        <BoxAgendarConsultaInfoText>1 de Novembro de 2023</BoxAgendarConsultaInfoText>
</BoxAgendarConsultaInfoAlign>
<BoxAgendarConsultaInfoAlign>
        <BoxAgendarConsultaInfoTitle>Data da consulta</BoxAgendarConsultaInfoTitle>
        <BoxAgendarConsultaInfoText>1 de Novembro de 2023</BoxAgendarConsultaInfoText>
</BoxAgendarConsultaInfoAlign>
<BoxAgendarConsultaInfoAlign>
        <BoxAgendarConsultaInfoTitle>Data da consulta</BoxAgendarConsultaInfoTitle>
        <BoxAgendarConsultaInfoText>1 de Novembro de 2023</BoxAgendarConsultaInfoText>
</BoxAgendarConsultaInfoAlign>
<BoxAgendarConsultaInfoAlign>
        <BoxAgendarConsultaInfoTitle>Data da consulta</BoxAgendarConsultaInfoTitle>
        <BoxAgendarConsultaInfoText>1 de Novembro de 2023</BoxAgendarConsultaInfoText>
</BoxAgendarConsultaInfoAlign>

<ButtonLogin >
    <ButtonTitle>Continuar</ButtonTitle>
</ButtonLogin>

        <LinkBoldN>Cancelar</LinkBoldN>


</BoxLocal>
</BoxLocalAlign>
</Container>



)}