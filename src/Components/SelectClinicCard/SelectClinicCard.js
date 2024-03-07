import { AlignBoxClinicComponents, AlignBoxClinicTextEnd, AlignBoxClinicTextStart, BoxClinic, BoxClinicDayBox, BoxClinicDayText, BoxClinicLocation, BoxClinicRateBox, BoxClinicRateText, BoxClinicSelect, BoxClinicTitle } from "../../Screens/SelecionarClinica/Style"
import { FontAwesome6 } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { ButtonCard } from "../../Screens/MedicoConsultas/Style";


export const SelectClinicCard = ({clickButton = false, onPress, name, local, rate, clinicId, index}) => {return(

<ButtonCard clickButton={clickButton} onPress={onPress}>
    <BoxClinic clickButton={clickButton} clinicId={clinicId} index={index}>
        <AlignBoxClinicComponents>
            <AlignBoxClinicTextStart>
                <BoxClinicTitle>{name}</BoxClinicTitle>
                <BoxClinicLocation>{local}</BoxClinicLocation>
            </AlignBoxClinicTextStart>

        <AlignBoxClinicTextEnd>
            <BoxClinicRateBox>
                <Fontisto name="star" size={16} color="#F9A620" />
                <BoxClinicRateText>{rate}</BoxClinicRateText>
            </BoxClinicRateBox>

            <BoxClinicDayBox>
                <FontAwesome6 name="calendar-day" size={12} color="#49B3BA" />
                <BoxClinicDayText>Seg-Sex</BoxClinicDayText>
            </BoxClinicDayBox>
            </AlignBoxClinicTextEnd>
    
        </AlignBoxClinicComponents>
    </BoxClinic>
</ButtonCard>

)}