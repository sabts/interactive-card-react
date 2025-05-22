import { useState } from "react";
import CreditCard from "../credit-card/CreditCard";
import Form from "../form/Form";

const MainPage = () => {
  const [creditCardData, setCreditCardData] = useState({});
  
  return (
    <>
      <CreditCard cardData={creditCardData}/>
      <Form currentCardInformation={(data) => handleCreditCardData(data, setCreditCardData)}/>
    </>
  );
};

const handleCreditCardData = (data, setCreditCardData) => {
  setCreditCardData(data);
};

export default MainPage;
