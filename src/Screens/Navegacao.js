import { Button, View } from "react-native"

export const Navegacao = ({navigation}) => {
return (

        <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>

            <Button
            title="Login"
            onPress={() => {navigation.navigate("Login")}}
            />
            <Button
            title="Splash"
            onPress={() => {navigation.navigate("Splash")}}/>

            <Button
            title="RecuperarSenha"
            onPress={() => {navigation.navigate("RecuperarSenha")}}
            />
            <Button
            title="RedefinirSenha"
            onPress={() => {navigation.navigate("RedefinirSenha")}}
            />
            <Button
            title="VerifiqueSeuEmail"
            onPress={() => {navigation.navigate("VerifiqueSeuEmail")}}
            />
            <Button
            title="CriarConta"
            onPress={() => {navigation.navigate("CriarConta")}}
            />
            <Button
            title="MedicoInsercaoProntuario"
            onPress={() => {navigation.navigate("MedicoInsercaoProntuario")}}
            />

        </View>
    )}

