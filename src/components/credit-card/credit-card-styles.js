import styled from "styled-components";
import { CREDIT_CARD_PHOTO } from "../../styles/credit-card-photo";
import { CREDIT_CARD_SIZE } from "../../styles/credit-card-size";

const StyledCards = styled.div`
display: flex;
    align-items: flex-start;
    align-content: center;
    flex-direction: column;
    padding: 0.6rem;
    width: ${CREDIT_CARD_SIZE.smallWidth}px;
    height: ${CREDIT_CARD_SIZE.smallHeight}px;
`