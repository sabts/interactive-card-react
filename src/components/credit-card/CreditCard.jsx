import { StyledCardNumbers, StyledCards, StyledCardsBackground, StyledDivNameAndExpDate } from "./credit-card-styles";

const CreditCard = ({cardData}) => {
  return (
    <>
      <section>
        <StyledCards className="back">
          <span id="cvc">{cardData.cvc || '000'}</span>
        </StyledCards>
        <StyledCards className="front">
          <StyledCardNumbers id="numbers">{cardData.cardNumbers || '0000 0000 0000 0000'}</StyledCardNumbers>
          <StyledDivNameAndExpDate>
            <span id="name">{cardData.name || "User Name"}</span>
            <div>
              <span id="month">{cardData.month || "00"}</span>
              <span> / </span>
              <span id="year">{cardData.year || "00"}</span>
            </div>
            </StyledDivNameAndExpDate>
          </StyledCards>
      </section>
    </>
  );
};

export default CreditCard;
