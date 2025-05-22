import { useForm } from "react-hook-form";
import CreditCard from "../credit-card/CreditCard";
import Form from "../form/Form";
import { StyledCardsBackground, StyledMainContainer } from "./main-page-styles";

const MainPage = () => {  
  const {
      handleSubmit,
      register, watch,
      formState
    } = useForm({ mode: "onChange" });

    const watchAllFields = watch();
  return (
  <StyledMainContainer>
    <StyledCardsBackground>
      <CreditCard cardData={watchAllFields} />
      </StyledCardsBackground>
      <Form 
       register={register}
       handleSubmit={handleSubmit}
       formState={formState}
       />
   </StyledMainContainer>
  );
};

export default MainPage;
