import { ButtonLogin, ButtonTitle } from "../../Components/Buttons/Style"
import { Container } from "../../Components/Container/Style"
import { Input } from "../../Components/Input/Style"
import { Logo } from "../../Components/Logo/Style"
import { AlignNewPassword, AlignNewPasswordForm, AlignNewPasswordHeader, TextNewPassword, TitleNewPassword } from "./Style"
import { AntDesign } from '@expo/vector-icons';

export const RedefinirSenha = () => {
return (
    <Container>
    <AlignNewPasswordHeader>
    <AntDesign name="close" size={24} color="#34898F" style={{backgroundColor:"#49B3BA", height: 25, borderRadius: 18, marginTop: 20  }} />
    <Logo source={require("../../Assets/Logo.png")} />
    </AlignNewPasswordHeader>

    <AlignNewPassword>
      <TitleNewPassword>Redefinir senha</TitleNewPassword>

      <TextNewPassword>
      Insira e confirme a sua nova senha
      </TextNewPassword>
    </AlignNewPassword>


<AlignNewPasswordForm>
    <Input placeholder="Nova Senha" />

    <Input placeholder="Confirmar nova senha" />

    <ButtonLogin title="">
      <ButtonTitle>Confirmar nova senha</ButtonTitle>
    </ButtonLogin>
    </AlignNewPasswordForm>
  </Container>




)}