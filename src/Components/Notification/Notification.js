import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

//importar a biblioteca 
import * as Notifications from 'expo-notifications'


//Pedir a permissao para notificacoes
Notifications.requestPermissionsAsync();

//Definir como as notificacoes serao tratadas quando recebidas
Notifications.setNotificationHandler({

  handleNotification: async () => ({

    //Mostra o alerta quando a notificacao for recebida
    shouldShowAlert: true,

    //som da notificacao
    shouldPlaySound: true,

    //Altera a figura do numero de notificacoes no icone do app
    shouldSetBadge: false

  })
})


export default function NotificationComponent() {

  const handleCallNotifications = 
  async () => {

    //Saber se o user permitiu o uso de notificacoes
    const {status} = await Notifications.getPermissionsAsync();


    if (status != "granted")
    {alert("Voce nao deixou as notificacoes ativas.");
  return;}

  //Agendar uma notificacao depois de 5 segundos
  await Notifications.scheduleNotificationAsync({

content: {
  
  title: "Hello world",
  body: "Criando uma POC para implementar expo-notifications"
},

trigger: {seconds: 5
}

  })

  

  }


  return (
    <View style={styles.container}>
      
<TouchableOpacity onPress={() => handleCallNotifications()} style={styles.button}>
<Text style={styles.text}>Mandar Notificacao</Text>

</TouchableOpacity>
<StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    height: 80,
    backgroundColor: 'green',
  

  },
  text: {
color: "#ffffff",


  }
});
