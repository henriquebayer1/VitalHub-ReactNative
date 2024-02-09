import { Text } from "react-native";
import { ButtonLogin, ButtonTitle } from "../../Components/Buttons/Style";
import { Container } from "../../Components/Container/Style";
import { Input } from "../../Components/Input/Style";
import { Logo } from "../../Components/Logo/Style";
import { AlignGetPassword, AlignGetPasswordForm, AlignGetPasswordHeader, TextGetPassword, TitleGetPassword } from "./Style";
import { FontAwesome5 } from '@expo/vector-icons';

export const RecuperarSenha = () => {
    return (
      <Container>
        <AlignGetPasswordHeader>
        <FontAwesome5 name="arrow-alt-circle-left" size={24} color="#34898F" style={{backgroundColor:"#49B3BA", height: 25, borderRadius: 18,  marginTop: 20 }} />
        <Logo source={require("../../Assets/Logo.png")} />
        </AlignGetPasswordHeader>
  
        <AlignGetPassword>
          <TitleGetPassword>Recuperar senha</TitleGetPassword>
  
          <TextGetPassword>
            Digite abaixo seu email cadastrado que enviaremos um link para
            recuperação de senha
          </TextGetPassword>
        </AlignGetPassword>
  

  <AlignGetPasswordForm>
        <Input placeholder="Usuário ou E-mail" />
  
        <ButtonLogin title="">
          <ButtonTitle>Continuar</ButtonTitle>
        </ButtonLogin>
        </AlignGetPasswordForm>
      </Container>
    );
  };