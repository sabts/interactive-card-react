import styled from "styled-components";
import { CREDIT_CARD_PHOTO } from "../../styles/credit-card-photo";
import { CREDIT_CARD_SIZE } from "../../styles/credit-card-size";

const StyledCardsBackground = styled.section`
  background: url(${CREDIT_CARD_PHOTO.backgroundMobile});
  background-repeat: no-repeat;

  @media screen and (min-width: 1024px) {
    background: url(${CREDIT_CARD_PHOTO.backgroundDesktop});
    position: sticky;
  }
`;

const StyledCards = styled.div`
  color: #fff;
  display: flex;
  align-items: flex-start;
  align-content: center;
  flex-direction: column;
  padding: 0.6rem;
  width: ${CREDIT_CARD_SIZE.smallWidth}px;
  height: ${CREDIT_CARD_SIZE.smallHeight}px;
`;

const StyledFrontCard = styled(StyledCards)`
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

  @media screen and (min-width: 1024px) {
    top: -150px;
    left: 90px;
  }
`;

const StyledBackCard = styled(StyledCards)`
  position: relative;
  top: 32px;
  left: 73px;
  background-image: url(${CREDIT_CARD_PHOTO.cardBack});
  background-repeat: no-repeat;
  background-size: contain;
  align-items: flex-end;
  justify-content: center;
  padding-right: 2.1rem;

  @media screen and (min-width: 1024px) {
    top: 350px;
    left: 150px;
    padding-right: 3.5rem;
  }
`;

const StyledCardNumbers = styled.span`
  font-size: 1.125rem;
  @media screen and (min-width: 1024px) {
    font-size: 1.75rem;
  }
`;

const StyledDivNameAndExpDate = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 0.5625rem;
  @media screen and (min-width: 1024px) {
    font-size: 0.875rem;
  }
`;

export {
  StyledCardsBackground,
  StyledFrontCard,
  StyledBackCard,
  StyledCardNumbers,
  StyledDivNameAndExpDate,
};
