import { ButtonAgendarConsulta } from "./Style";
import { FontAwesome5 } from '@expo/vector-icons';

export const ButtonSchedulleConsult = ({
    textButton,
    clickButton = false,
    onPress,
}) => {
    return (
        <ButtonAgendarConsulta clickButton={clickButton} onPress={onPress}>
            <FontAwesome5 name="stethoscope" size={32} color="#FFFFFF" />
        </ButtonAgendarConsulta>
    );
};