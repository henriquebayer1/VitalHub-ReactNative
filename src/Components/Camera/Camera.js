import { Camera, CameraType } from "expo-camera";
import { useEffect, useRef, useState } from "react";
import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as MediaLibrary from 'expo-media-library'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';




export default function CameraModal() {
  const [tipoCamera, setTipoCamera] = useState(Camera.Constants.Type.front);
  const [photo, setPhoto] = useState(null);
  const [openModal, setOpenModal] = useState(false)
  const cameraRef = useRef(null)

async function SavePhoto() {
  if (photo) {

    await MediaLibrary.createAssetAsync(photo).then(() => {alert("Sucesso", 'Foto salva na galeria').catch(error => {alert('Erro ao processar a foto')})})
    
  }
}

  async function CaptureFoto()
  {
    
if(cameraRef)
{const photo = await cameraRef.current.takePictureAsync();
  setPhoto(photo.uri)
  setOpenModal(true)
console.log(photo)
}
  }

  async function ClearPhoto()
  {setPhoto(null)
  
    setOpenModal(false)
  }

  useEffect(() => {
    (async () => {
      const { status: cameraStatus } = await Camera.requestCameraPermissionsAsync();
    const {status: mediaStatus} =  await MediaLibrary.requestPermissionsAsync()
    
    })();

      
  }, []);

  return (
    <View style={styles.container}>
      <Camera ref={cameraRef} style={styles.camera} type={tipoCamera} ratio="16:9">
        <TouchableOpacity
          style={styles.btnFlip}
          onPress={() => {
            setTipoCamera(tipoCamera == CameraType.front? CameraType.back : CameraType.front);}}
        >
          <Text style={styles.txtFlip}>Trocar</Text>
        </TouchableOpacity>
      </Camera>
<TouchableOpacity  style={styles.btnCaptura} onPress={() => CaptureFoto()}>
      <AntDesign name="camera" size={24} color="black" />
      </TouchableOpacity>

<Modal animationType="slide" transparent={false} visible={openModal}>
  <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', padding: 30}}>
    <Image style={{width: '100%', height: 500, borderRadius: 10}} source={{uri : photo}}/>

    <View style={{margin: 15, flexDirection: 'row',}}>
  <TouchableOpacity style={styles.btnUpload} onPress={() => SavePhoto()}>
  <Entypo name="save" size={24} color="black" />
      </TouchableOpacity>

  <TouchableOpacity style={styles.btnCancel} onPress={() => ClearPhoto()}>
  <FontAwesome name="trash" size={24} color="black" />
      </TouchableOpacity>
</View>

  </View>
</Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  camera: {
    flex: 1,
    width: "100%",
    height: "80%",
    alignItems: "center",
    justifyContent: 'flex-end',
    
  },

  viewFlip: {
    flex: 1,
    backgroundColor: "transparent",
    alignItems: "flex-end",
    justifyContent: "center",
    flexDirection: "row",
  },

  btnFlip: {
    padding: 15,
  },

  txtFlip: {
    fontSize: 20,
    marginBottom: 20,
    color: "#ffffff",
  },
  btnCaptura: {
margin: 20,
padding: 20,
borderRadius: 15,
backgroundColor: '#121212',
    alignItems: "center",
    justifyContent:"center",
  },

  btnUpload: {padding: 20,
  borderRadius: 15,
backgroundColor: 'transparent',
alignItems: 'center',
justifyContent: 'center'},

  btnCancel: {padding: 20,
    borderRadius: 15,
  backgroundColor: 'transparent',
  alignItems: 'center',
  justifyContent: 'center'},
});
