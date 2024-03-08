import { Text } from "react-native"
import { Button, View } from "react-native"
import { Container, ContainerLogin } from "../Components/Container/Style"
import { Logo } from "../Components/Logo/Style"
import { Title } from "../Components/Titles/Style"
import { Input } from "../Components/Input/Style"
import { AccountText, ContentAccount, LinkBold, LinkMedium } from "../Components/Links/Style"
import { ButtonGoogle, ButtonLogin, ButtonTitle, ButtonTitleGoogle } from "../Components/Buttons/Style"
import { AntDesign } from '@expo/vector-icons';
import { ModalAgendarConsulta } from "../Components/ModalAgendarConsulta/ModalAgendarConsulta"
import { ButtonCard } from "./MedicoConsultas/Style"

export const Login = ({navigation}) =>  {


    async function CreateAccount() {
        try {
    
            navigation.replace("CriarConta")
            
        } catch (error) {
            
        }
    }


return (

    
<Container>

<ContainerLogin>

            <Text>Login Screen</Text>

            <Logo source={require("../Assets/Logo.png")}/>

            <Title>Entrar ou criar conta</Title>

            <Input
                placeholder="Usuario ou Email"
            />

            <Input
            placeholder="Senha"
            secureTextEntry/>


             <LinkMedium>Esqueceu sua senha?</LinkMedium>

             <ButtonLogin
             title=""
             >
                <ButtonTitle onPress={() => {navigation.replace("Main")}}>Entrar</ButtonTitle>

             </ButtonLogin>

             <ButtonGoogle>
             <AntDesign name="google" size={24} color="#496BBA" />
                <ButtonTitleGoogle>Entrar com o google</ButtonTitleGoogle>

            </ButtonGoogle>
            
<ContentAccount>

<AccountText>Nao tem conta? 
    <ButtonCard onPress={() => {CreateAccount()}}>
    <LinkBold > Crie uma conta agora!</LinkBold>
    </ButtonCard>
</AccountText>

</ContentAccount>

</ContainerLogin>
</Container>
    
)

}