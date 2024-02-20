import { ButtonLogin, ButtonTitle } from "../Buttons/Style"
import { LinkBoldN } from "../Links/Style"
import { Title } from "../Titles/Style"
import { BoxCancel, BoxCancelText } from "./Style"


export const CancelarConsulta = () => {
return(

    <BoxCancel>

        <Title>Cancelar consulta</Title>

        <BoxCancelText>
            Ao cancelar essa consulta, abrirá uma possível disponibilidade no seu horário, deseja mesmo cancelar essa consulta?
        </BoxCancelText>
        
        <ButtonLogin title="">
            <ButtonTitle>Confirmar</ButtonTitle>
        </ButtonLogin>

        <LinkBoldN>Cancelar</LinkBoldN>

    </BoxCancel>




)}