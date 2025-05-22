import styled from "styled-components";
import { CREDIT_CARD_PHOTO } from "../../styles/credit-card-photo";

export const StyledMainContainer = styled.main`
display: flex;
justify-content: center;
flex-direction: column;

  @media screen and (min-width: 1024px){
  flex-direction: row;
  }
`
export const StyledCardsBackground = styled.section`
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