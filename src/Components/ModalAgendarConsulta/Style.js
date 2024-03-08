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
justify-content: center;
align-items: center;
${(props) => props.clickButtonR == true || props.clickButtonE == true || props.clickButtonU == true
      ? css`
          border: 2px solid rgba(96, 191, 197, 1);
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
gap: 34px;
width: 90%;

`
export const BoxLevelAlign = styled.View`
gap: 10px;
width: 100%;

`

export const AlignModal = styled.View`
width: 100%;
height: 518px;
align-items: center;
background-color: #FFFFFF;
border-radius: 10px 10px 0px 0px;
`

export const AlignModalContent = styled.View`
width: 90%;
align-items: center;
gap: 15px;
`