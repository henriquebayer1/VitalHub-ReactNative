import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { ContentIcon, TextIcon } from './Style'
import {FontAwesome, FontAwesome5 } from "@expo/vector-icons"
import { CriarConta } from '../CriarConta/CriarConta'
import { Login } from '../Login'
import { MedicoConsultas } from '../MedicoConsultas/MedicoConsultas'
import { VerifiqueSeuEmail } from '../VerifiqueSeuEmail/VerifiqueSeuEmail'
const BottomTab = createBottomTabNavigator()

export const Main = ({}) => {
    
    
    
    
    return(
<BottomTab.Navigator
initialRouteName="Home"

screenOptions={({route}) => ({
tabBarStyle: {backgroundColor: "#FFFFFF", height: 80, paddingTop: 10},
tabBarActiveBackgroundColor: "Transparent",
tabBarShowLabel: false,
headerShown: false,

tabBarIcon: ({focused}) => {

if (route.name === "Home") {
    return(
        <ContentIcon
            tabBarActiveBackgroundColor={focused ? "#ECF2FF" : "transparent" }
        >
            <FontAwesome name='calendar' size={18} color={"#4E4B59"}/>
            {focused && <TextIcon>Agenda</TextIcon>}
        </ContentIcon>
    )
    
}
else{ return(
    <ContentIcon
        tabBarActiveBackgroundColor={focused ? "#ECF2FF" : "transparent" }
    >
        <FontAwesome5 name='user-circle' size={22} color={"#4E4B59"}/>
        {focused && <TextIcon>perfil</TextIcon>}
    </ContentIcon>
)}
}

})}

>



    <BottomTab.Screen
    name="Home"
    component={MedicoConsultas}
    />
    <BottomTab.Screen
    name="Profile"
    component={VerifiqueSeuEmail}
    />









</BottomTab.Navigator>




)}