import styled, { css } from "styled-components";


export const TextN = styled.Text`  
font-family: "Quicksand_600SemiBold";
font-size: 16px;
color: #FFFFFF;
align-self: flex-start;`

export const LevelSelectBox = styled.View`
width: 88px;
height: 40px;
border-radius: 5px;
${(props) => props.clickButtonR == true || props.clickButtonE == true || props.clickButtonU == true
      ? css`
          border: 2px solid red;
        `
      : css`
          border: none;
        `}
`;

export const LocationBox = styled(LevelSelectBox)`
width: 316px;
height: 53px;

`;

export const LevelSelectBoxText = styled.Text`
font-family: "Montserrat_600SemiBold";
font-size: 14px;
color: #FFFFFF;

`


export const AlignLevel = styled.View`
flex-direction: row;
gap: 50px;
width: 100%;

`
export const BoxLevelAlign = styled.View`
gap: 40px;
width: 100%;

`
