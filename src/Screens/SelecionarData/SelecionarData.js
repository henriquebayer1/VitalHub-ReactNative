

//import Calendario
import { Calendar, LocaleConfig } from "react-native-calendars";




//import fonts
import {
  useFonts,
  Montserrat_600SemiBold,
} from "@expo-google-fonts/montserrat";

import {
  Quicksand_500Medium,
  Quicksand_600SemiBold,
} from "@expo-google-fonts/quicksand";
import { useState } from "react";import { ContainerSelectDate } from "../../Components/Container/Style";
import { TitleSelectDoctor } from "../../Components/Titles/Style";
import { ContentAccount, TextSelectDatelabel, ViewCalendar } from "./Style";
import { ComponenteSelecionarHora } from "../../Components/ComponenteSelecionarHora/ComponeneteSelecionarHora";
import { ButtonRegister, ButtonTitle } from "../../Components/Buttons/Style";
import { LinkAccount } from "../../Components/Links/Style";
import { ButtonCard } from "../MedicoConsultas/Style";
``


export const SelecionarData = () => {

  const [selectedDate, setSelectedDate] = useState("");

  const [fontsLoaded, fontsError] = useFonts({
    Montserrat_600SemiBold,
    Quicksand_500Medium,
    Quicksand_600SemiBold,
  });

  //fontsLoaded
  if (!fontsLoaded && !fontsError) {
    return null;
  }

  LocaleConfig.locales['pt-br'] = {
    monthNames: [
      "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro".split(
        "_"
      ),
    ],
    monthNames: [
      "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro".split(
        "_"
      ),
    ],
    monthNamesShort: ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez".split("_")],
    dayNames: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
    dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb".split("_")],
  };
  
  LocaleConfig.defaultLocale = 'pt-br';

  return (
    <ContainerSelectDate>
      <TitleSelectDoctor>Selecionar data</TitleSelectDoctor>
      <ViewCalendar>
        <Calendar
           onDayPress={day => {
            setSelectedDate(day.dateString)
        }}
        markedDates={{
            [selectedDate]: { selected: true, selectedColor: "#rgba(96, 191, 197, 1)", selectedTextColor: "#rgba(96, 191, 197, 1)" },
        }}
          hideArrows={true}
          theme={{
            textSectionTitleColor: "#5F5C6B",
            selectedDayBackgroundColor: "green",
            todayTextColor: "red",
            dayTextColor: "black", 
           

            textDayFontFamily: "Quicksand_600SemiBold", 
            textMonthFontFamily: "Montserrat_600SemiBold", 
            textDayHeaderFontFamily: "Quicksand_600SemiBold",
            monthTitleTextStyle: { fontSize: 50 }, // Defina o tamanho da fonte do mês 
            
            
          }}
          monthFormat={"MMMM yyyy"}
        />
      </ViewCalendar>
      <TextSelectDatelabel>Selecione um horário disponível</TextSelectDatelabel>
     <ComponenteSelecionarHora/>
      <ButtonRegister>
        <ButtonTitle>CONFIRMAR</ButtonTitle>
      </ButtonRegister>

      <ButtonCard>
        <LinkAccount>Cancelar</LinkAccount>
      </ButtonCard>
      
    </ContainerSelectDate>
  );
};