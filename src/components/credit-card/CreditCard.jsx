const CreditCard = ({cardData}) => {
  const {  name, cardNumbers, month, year, cvc } = cardData;
  return (
    <>
      <section>
        <div>
          <span id="cvc">cvc</span>
        </div>
        <div>
          <span id="numbers">{cardData.cardNumbers || '0000 0000 0000 0000'}</span>
          <div>
            <span id="name">User Name</span>
            <div>
              <span id="month"> 00 </span>
              <span> / </span>
              <span id="year"> 00</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CreditCard;
