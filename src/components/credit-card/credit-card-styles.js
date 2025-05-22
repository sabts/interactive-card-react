import styled from "styled-components";
import { CREDIT_CARD_PHOTO } from "../../styles/credit-card-photo";
import { CREDIT_CARD_SIZE } from "../../styles/credit-card-size";


const  StyledCards = styled.div`
  color: #fff;
  display: flex;
  align-items: flex-start;
  align-content: center;
  flex-direction: column;
  padding: 0.6rem;
  width: ${CREDIT_CARD_SIZE.smallWidth}px;
  height: ${CREDIT_CARD_SIZE.smallHeight}px;

  &.front {
    position: relative;
    top: -36px;
    left: 17px;
    background-image: url(${CREDIT_CARD_PHOTO.cardFront});
    background-repeat: no-repeat;
    background-size: contain;
    align-items: flex-start;
    justify-content: space-around;

    &::before {
      content: "";
      position: relative;
      width: 54px;
      height: 30px;
      background-image: url(${CREDIT_CARD_PHOTO.logo});
      background-repeat: no-repeat;
      background-size: contain;
      display: block;
    }
  }

  &.back {
    position: relative;
    top: 32px;
    left: 73px;
   background-image: url(${CREDIT_CARD_PHOTO.cardBack});
    background-repeat: no-repeat;
    background-size: contain;
    align-items: flex-end;
    justify-content: center;
    padding-right: 2.1rem;
  }
`;

export {StyledCards}