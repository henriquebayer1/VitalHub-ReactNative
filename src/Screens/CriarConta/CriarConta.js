
import { AntDesign } from '@expo/vector-icons';
import { Container } from '../../Components/Container/Style';
import { AlignCreateAccount, AlignCreateAccountForm, AlignCreateAccountHeader, TextCreateAccount, TitleCreateAccount } from './Style';
import { Logo } from '../../Components/Logo/Style';
import { Input } from '../../Components/Input/Style';
import { ButtonLogin, ButtonTitle } from '../../Components/Buttons/Style';
import { LinkBoldN } from '../../Components/Links/Style';

export const CriarConta = () => {
return (

    <Container>
    <AlignCreateAccountHeader>
    <AntDesign name="close" size={24} color="#34898F" style={{backgroundColor:"#49B3BA", height: 25, borderRadius: 18, marginTop: 20  }} />
    <Logo source={require("../../Assets/Logo.png")} />
    </AlignCreateAccountHeader>

    <AlignCreateAccount>
      <TitleCreateAccount>Criar Conta</TitleCreateAccount>

      <TextCreateAccount>
     Insira seu endereco de E-mail e senha para realizar seu cadastro.
      </TextCreateAccount>
    </AlignCreateAccount>


<AlignCreateAccountForm>
    <Input placeholder="Usuario ou E-mail" />

    <Input placeholder="Senha" />

    <Input placeholder="Confirmar senha" />

    <ButtonLogin title="">
      <ButtonTitle>Cadastrar</ButtonTitle>
    </ButtonLogin>
    </AlignCreateAccountForm>

    
    <LinkBoldN>Cancelar</LinkBoldN>
  </Container>



)}