import { ButtonLogin, ButtonTitle } from "../Buttons/Style"
import { LinkBoldN } from "../Links/Style"
import { BoxInsert, BoxInsertAge, BoxInsertAlignText, BoxInsertEmail, BoxInsertName, InsertRecordImage } from "./Style"

export const InserirProntuario = () => {return(


<BoxInsert>

<InsertRecordImage source={require("../../Assets/InsertRecordImage.png")}/>


<BoxInsertName>Niccole Sarga</BoxInsertName>

<BoxInsertAlignText>
    <BoxInsertAge>22 anos</BoxInsertAge>
    <BoxInsertEmail>niccole.sarga@gmail.com</BoxInsertEmail>
</BoxInsertAlignText>

<ButtonLogin title="">
    <ButtonTitle>Inserir Prontuario</ButtonTitle>
</ButtonLogin>

        <LinkBoldN>Cancelar</LinkBoldN>

</BoxInsert>
)}