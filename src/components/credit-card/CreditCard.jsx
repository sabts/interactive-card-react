import { StyledBackCard, StyledCardNumbers, StyledDivNameAndExpDate, StyledFrontCard } from "./credit-card-styles";

const CreditCard = ({cardData}) => {

  const formattedCardNumber = formatCardNumber(cardData.cardNumbers);

  return (
    <>
      <section>
        <StyledBackCard>
          <span id="cvc">{cardData.cvc || '000'}</span>
        </StyledBackCard >
        <StyledFrontCard>
          <StyledCardNumbers id="numbers">{ formattedCardNumber || '0000 0000 0000 0000'}</StyledCardNumbers>
          <StyledDivNameAndExpDate>
            <span id="name">{cardData.name || "User Name"}</span>
            <div>
              <span id="month">{cardData.month || "00"}</span>
              <span> / </span>
              <span id="year">{cardData.year || "00"}</span>
            </div>
            </StyledDivNameAndExpDate>
          </StyledFrontCard>
      </section>
    </>
  );
};

const formatCardNumber = (cardNumbers) => {
  if (!cardNumbers) return;
  return cardNumbers.match(/\d{1,4}/g).join(" ");
};


export default CreditCard;
