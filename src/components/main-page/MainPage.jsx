import { useForm } from "react-hook-form";
import CreditCard from "../credit-card/CreditCard";
import Form from "../form/Form";

const MainPage = () => {  
  const {
      handleSubmit,
      register, watch,
      formState
    } = useForm({ mode: "onChange" });

    const watchAllFields = watch();
  return (
    <>
      <CreditCard cardData={watchAllFields} />
      <Form 
       register={register}
       handleSubmit={handleSubmit}
       formState={formState}
       />
    </>
  );
};

export default MainPage;
