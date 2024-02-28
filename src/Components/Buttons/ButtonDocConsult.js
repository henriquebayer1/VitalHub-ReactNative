import { ButtonConsultas, ButtonTitleConsultas } from "../../Screens/MedicoConsultas/Style";


export const ButtonDocConsult = ({
    textButton,
    clickButton = false,
    onPress,
}) => {
    return (
        <ButtonConsultas clickButton={clickButton} onPress={onPress}>
            <ButtonTitleConsultas clickButton={clickButton}>{textButton}</ButtonTitleConsultas>
        </ButtonConsultas>
    );
};