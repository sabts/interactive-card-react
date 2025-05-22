import { FORM_VALIDATION } from "../../constants/form_validation";
import { StyledForm, StyledInputBox, StyledLabel, StyledSmallSizeFields, StyledSubmitButton } from "./form-styles";

const Form = ({register, handleSubmit, formState}) => {
  const { errors } = formState;
  const onSubmit = data => console.log(data);
  return (
    <>
    <StyledForm id="form" autoComplete="off"  onSubmit={handleSubmit(onSubmit)}>
        <section>
          <StyledLabel htmlFor="name">Cardholder Name</StyledLabel>
          <StyledInputBox
            type="text"
            placeholder="e.g. John Doe"
            id="name"
            $hasError={errors.name}
            {...register("name", FORM_VALIDATION.NAME)}
          />
          {errors.name && <span>{errors.name.message}</span>}
        </section>

        <section>
        <StyledLabel htmlFor="cardNumbers">Card Number</StyledLabel>
        <StyledInputBox
            type="text"
            placeholder="e.g. 1234 5678 9123"
            id="cardNumbers"
            $hasError={errors.name}
            {...register("cardNumbers", FORM_VALIDATION.CARDNUMBERS)}
          />
          {errors.cardNumbers && <span>{errors.cardNumbers.message}</span>}
        </section>

        <StyledSmallSizeFields>
          <section>
            <StyledLabel>Exp. Date (MM/YY)</StyledLabel>
            <StyledSmallSizeFields>
            <StyledInputBox
                type="text"
                placeholder="MM"
                id="month"
                $expDate
                $hasError={errors.name}
                {...register("month", FORM_VALIDATION.MONTH)}
              />

              <StyledInputBox
                type="text"
                placeholder="YY"
                id="year"
                $expDate
                $hasError={errors.name}
                  {...register("year", FORM_VALIDATION.YEAR)}
              />
            </StyledSmallSizeFields>
            {(errors.month || errors.year) && (
            <span>{errors.month?.message || errors.year?.message}</span>
            )}
          </section>

          <section>
            <StyledLabel htmlFor="cvc">CVC</StyledLabel>
            <StyledInputBox
              type="text"
              placeholder="e.g. 123"
              id="cvc"
              $cvc
              $hasError={errors.name}
                {...register("cvc", FORM_VALIDATION.CVC)}
            />
             {errors.cvc && <span>{errors.cvc.message}</span>}
             </section>
        </StyledSmallSizeFields>

        <StyledSubmitButton>Confirm</StyledSubmitButton>
      </StyledForm >
    </>
  );
};

export default Form;
