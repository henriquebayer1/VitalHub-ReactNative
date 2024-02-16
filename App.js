import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Navegacao } from './src/Screens/Navegacao';
import { Login } from './src/Screens/Login';
import { Splash } from './src/Screens/Splash';
import { useFonts,  } from 'expo-font';
import {Montserrat_400Regular, Montserrat_500Medium, Montserrat_600SemiBold, Montserrat_700Bold} from "@expo-google-fonts/montserrat"
import { Quicksand_400Regular, Quicksand_600SemiBold, Quicksand_500Medium} from "@expo-google-fonts/quicksand"
import { RecuperarSenha } from './src/Screens/RecuperarSenha/RecuperarSenha';
import { RedefinirSenha } from './src/Screens/RedefinirSenha/RedefinirSenha';
import { VerifiqueSeuEmail } from './src/Screens/VerifiqueSeuEmail/VerifiqueSeuEmail';
import { CriarConta } from './src/Screens/CriarConta/CriarConta';
import { MedicoInsercaoProntuario } from './src/Screens/MedicoInsercaoProntuario/MedicoInsercaoProntuario';
import { MedicoConsultas } from './src/Screens/MedicoConsultas/MedicoConsultas';



export default function App() {
const Stack = createNativeStackNavigator();
const [fontLoaded, fontError] = useFonts({Montserrat_600SemiBold, Montserrat_500Medium, Montserrat_700Bold, Quicksand_400Regular, Quicksand_600SemiBold, Quicksand_500Medium})


if (!fontLoaded && !fontError) {

  return null;
  
}
  return (
  

      <NavigationContainer>


   <Stack.Navigator>

    <Stack.Screen
    //Titulo da tela
    options={{title: "Navegacao"}}
    //nome da tela
    name='Navegacao'
    //Componente da Tela
    component={Navegacao}
    />

    <Stack.Screen
    options={{title: "Login"}}
    name='Login'
    component={Login}
    />
    <Stack.Screen
    options={{title: "Splash"}}
    name='Splash'
    component={Splash}
    />
    <Stack.Screen
    options={{title: "RecuperarSenha"}}
    name='RecuperarSenha'
    component={RecuperarSenha}
    />

    <Stack.Screen
    options={{title: "RedefinirSenha"}}
    name='RedefinirSenha'
    component={RedefinirSenha}
    />

    <Stack.Screen
    options={{title: "VerifiqueSeuEmail"}}
    name='VerifiqueSeuEmail'
    component={VerifiqueSeuEmail}
    />

    <Stack.Screen
    options={{title: "CriarConta"}}
    name='CriarConta'
    component={CriarConta}
    />

    <Stack.Screen
    options={{title: "MedicoInsercaoProntuario"}}
    name='MedicoInsercaoProntuario'
    component={MedicoInsercaoProntuario}
    />
    <Stack.Screen
    options={{title: "MedicoConsultas"}}
    name='MedicoConsultas'
    component={MedicoConsultas}
    />

   </Stack.Navigator>

      </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
