import { ButtonCard } from "../../Screens/MedicoConsultas/Style"
import { AlignBoxSelectDoctorComponents, AlignSelectDoctorText, BoxSelectDoctorN, BoxSelectDoctorName, BoxSelectDoctorType, SelectDoctorImage } from "../../Screens/SelecionarMedico/Style"



export const DoctorCard = ({nome, especialidade, doctorId, index, onPress, clickButton = false}) => {return(

<ButtonCard clickButton={clickButton} onPress={onPress}>
<BoxSelectDoctorN clickButton={clickButton} doctorId={doctorId} index={index}>
    <AlignBoxSelectDoctorComponents>

        <SelectDoctorImage source={require("../../Assets/SelectDoctor.png")}/>

        <AlignSelectDoctorText>
            <BoxSelectDoctorName>{nome}</BoxSelectDoctorName>
            <BoxSelectDoctorType>{especialidade}</BoxSelectDoctorType>
        </AlignSelectDoctorText>
    </AlignBoxSelectDoctorComponents>
</BoxSelectDoctorN>
</ButtonCard>

)}