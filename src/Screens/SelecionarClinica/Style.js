import styled, { css } from "styled-components";



export const BoxClinicSelect = styled.View`
background-color: #FFFFFF;
height: 84px;
width: 90%;
border: 2px solid #496BBA;
border-radius: 5px;
box-shadow: 4px 15px 4px ;
align-items: center;
justify-content: center;
margin: 15px 0px 15px 0px;
`
export const BoxClinic = styled.View`
background-color: #FFFFFF;
height: 84px;
width: 90%;
border-radius: 5px;
box-shadow: 4px 15px 4px ;
align-items: center;
justify-content: space-evenly;
margin: 15px 0px 15px 0px;
${(props) =>
    props.clickButton === true && props.clinicId == props.index
      ? css`
          border: 2px solid #496BBA;
        `
      : css`
          border: none
        `}
`;

export const AlignBoxClinicTextStart = styled.View`
align-items: flex-start;
gap: 5px;
`
export const AlignBoxClinicTextEnd = styled.View`
align-items: flex-end;
gap: 5px;

`
export const AlignBoxClinicComponents = styled.View`
width: 90%;
flex-direction: row;
align-items: center;
justify-content: space-between;
gap: 5px;
`

export const BoxClinicTitle = styled.Text`
color: #33303E;
font-size: 16px;
font-family: 'Montserrat_600SemiBold';
`

export const BoxClinicLocation = styled.Text`
color: #4E4B59;
font-size: 14px;
font-family: 'Quicksand_600SemiBold';`



export const BoxClinicDayBox = styled.View`
width: 100px;
height: 26px;
background-color: #E8FCFD;
flex-direction: row;
align-items: center;
border-radius: 5px;
gap: 8px;
align-items: center;
justify-content: center;
`
export const BoxClinicDayText = styled.Text`
color: #49B3BA;
font-size: 14px;
font-family: 'Quicksand_600SemiBold';


`
export const BoxClinicRateBox = styled.View`
width: 49px;
height: 22px;
flex-direction: row;
align-items: center;
gap: 7px;
align-items: center;
justify-content: center;
`
export const BoxClinicRateText = styled.Text`
color: #F9A620;
font-size: 14px;
font-family: 'Quicksand_600SemiBold';


`