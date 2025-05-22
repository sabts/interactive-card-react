import styled from "styled-components";
import { CREDIT_CARD_PHOTO } from "../../styles/credit-card-photo";

const StyledMainContainer = styled.main`
display: flex;
justify-content: center;
flex-direction: column;

  @media screen and (min-width: 1024px){
   min-height: 100vh;
  align-items: center;
  padding-left: 550px;
  flex-direction: row;
  }
`
const StyledCardsBackground = styled.section`
  background: url(${CREDIT_CARD_PHOTO.backgroundMobile});
  background-repeat: no-repeat;

   @media screen and (min-width: 1024px) {
   background: url(${CREDIT_CARD_PHOTO.backgroundDesktop});
   position: fixed; 
   top: 0;
   left: 0;
   background-repeat: no-repeat;
   height: 55vw;
   }
`
const StyledformContainer = styled.section`
position:fixed; `


export {StyledMainContainer, StyledCardsBackground}