import { Modal } from "react-native"
import { ButtonCard } from "../../Screens/MedicoConsultas/Style"
import { ButtonLogin, ButtonTitle } from "../Buttons/Style"
import { BoxInsert, BoxInsertAge, BoxInsertAlignText, BoxInsertEmail, BoxInsertName, InsertRecordImage } from "../InserirProntuario/Style"
import { LinkBoldN } from "../Links/Style"

export const ModalViewLocal = ({navigation, hideModal}) => {return(

<Modal>
<BoxInsert>

<InsertRecordImage source={require("../../Assets/InsertRecordImage.png")}/>


<BoxInsertName>Medico Nome</BoxInsertName>

<BoxInsertAlignText>
    <BoxInsertAge>22 anos</BoxInsertAge>
    <BoxInsertEmail>niccole.sarga@gmail.com</BoxInsertEmail>
</BoxInsertAlignText>

<ButtonLogin onPress={() => {navigation.navigate("Mapa")}}>
    <ButtonTitle>Ver Local da Consulta</ButtonTitle>
</ButtonLogin>
        <ButtonCard onPress={hideModal}>
        <LinkBoldN >Cancelar</LinkBoldN>
        </ButtonCard>
</BoxInsert>
</Modal>
)}