import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Navegacao } from './src/Screens/Navegacao';
import { Login } from './src/Screens/Login';
import { Splash } from './src/Screens/Splash';
import { useFonts,  } from 'expo-font';
import {Montserrat_400Regular, Montserrat_500Medium, Montserrat_600SemiBold, Montserrat_700Bold} from "@expo-google-fonts/montserrat"
import { Quicksand_400Regular, Quicksand_600SemiBold, Quicksand_500Medium, Quicksand_700Bold} from "@expo-google-fonts/quicksand"
import { RecuperarSenha } from './src/Screens/RecuperarSenha/RecuperarSenha';
import { RedefinirSenha } from './src/Screens/RedefinirSenha/RedefinirSenha';
import { VerifiqueSeuEmail } from './src/Screens/VerifiqueSeuEmail/VerifiqueSeuEmail';
import { CriarConta } from './src/Screens/CriarConta/CriarConta';
import { MedicoInsercaoProntuario } from './src/Screens/MedicoInsercaoProntuario/MedicoInsercaoProntuario';
import { MedicoConsultas } from './src/Screens/MedicoConsultas/MedicoConsultas';
import { SelecionarClinica } from './src/Screens/SelecionarClinica/SelecionarClinica';
import { SelecionarMedico } from './src/Screens/SelecionarMedico/SelecionarMedico';
import { SelecionarData } from './src/Screens/SelecionarData/SelecionarData';
import { Main } from './src/Screens/Main/Main';
import Mapa from './src/Screens/Mapa/Map';
import { LocalConsulta } from './src/Screens/LocalConsulta/LocalConsulta';




export default function App() {
const Stack = createNativeStackNavigator();
const [fontLoaded, fontError] = useFonts({Montserrat_600SemiBold, Montserrat_500Medium, Montserrat_700Bold, Quicksand_400Regular, Quicksand_600SemiBold, Quicksand_500Medium, Quicksand_700Bold})


if (!fontLoaded && !fontError) {

  return null;
  
}
  return (
  

      <NavigationContainer>


   <Stack.Navigator>

   <Stack.Screen
    options={{title: "LocalConsulta"}}
    name='LocalConsulta'
    component={LocalConsulta}
    />

   <Stack.Screen
    options={{title: "Login"}}
    name='Login'
    component={Login}
    />

<Stack.Screen
    options={{title: "Map"}}
    name='Map'
    component={Mapa}
    />


   <Stack.Screen
    //Titulo da tela
    options={{title: "Main"}}
    //nome da tela
    name="Main"
    //Componente da Tela
    component={Main}
    />

    <Stack.Screen
    //Titulo da tela
    options={{title: "Navegacao"}}
    //nome da tela
    name='Navegacao'
    //Componente da Tela
    component={Navegacao}
    />
    <Stack.Screen
    //Titulo da tela
    options={{title: "CriarConta"}}
    //nome da tela
    name='CriarConta'
    //Componente da Tela
    component={CriarConta}
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
    options={{title: "MedicoInsercaoProntuario"}}
    name='MedicoInsercaoProntuario'
    component={MedicoInsercaoProntuario}
    />

   
  <Stack.Screen
  options={{title: "SelecionarClinica"}}
  name="SelecionarClinica"
  component={SelecionarClinica}
  />

  <Stack.Screen
  options={{title: "SelecionarMedico"}}
  name="SelecionarMedico"
  component={SelecionarMedico}
  />
  <Stack.Screen
  options={{title: "SelecionarData"}}
  name="SelecionarData"
  component={SelecionarData}
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
