import { ButtonLogin, ButtonTitle } from "../../Components/Buttons/Style"
import { Container } from "../../Components/Container/Style"
import { LinkBold, LinkBoldN } from "../../Components/Links/Style"
import { Logo } from "../../Components/Logo/Style"
import { AlignVerifyEmail, AlignVerifyEmailForm, AlignVerifyEmailHeader, ButtonEmail, InputEmail, TextVerifyEmail, TitleVerifyEmail } from "./Style"
import { AntDesign } from '@expo/vector-icons';

export const VerifiqueSeuEmail = () => {
return(
    <Container>
    <AlignVerifyEmailHeader>
    <AntDesign name="close" size={24} color="#34898F" style={{backgroundColor:"#49B3BA", height: 25, borderRadius: 18, marginTop: 20 }} />
    <Logo source={require("../../Assets/Logo.png")} />
    </AlignVerifyEmailHeader>

    <AlignVerifyEmail>
      <TitleVerifyEmail>Redefinir senha</TitleVerifyEmail>

      <TextVerifyEmail>
      Insira e confirme a sua nova senha
      </TextVerifyEmail>
    </AlignVerifyEmail>


<AlignVerifyEmailForm>
    <InputEmail placeholder="" />
    <InputEmail placeholder="" />
    <InputEmail placeholder="" />
    <InputEmail placeholder="" />

    
    </AlignVerifyEmailForm>
    <ButtonEmail title="">
      <ButtonTitle>Confirmar nova senha</ButtonTitle>
    </ButtonEmail>

    <LinkBoldN>Reenviar Codigo</LinkBoldN>
  </Container>
)}