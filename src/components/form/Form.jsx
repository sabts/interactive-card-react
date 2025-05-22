import { FORM_VALIDATION } from "../../constants/form_validation";

const Form = ({register, handleSubmit, formState}) => {
  const { errors } = formState;
  const onSubmit = data => console.log(data);
  return (
    <>
      <form id="form" autoComplete="off"  onSubmit={handleSubmit(onSubmit)}>
        <section>
          <label htmlFor="name">Cardholder Name</label>
          <input
            type="text"
            placeholder="e.g. John Doe"
            id="name"
            {...register("name", FORM_VALIDATION.NAME)}
          />
          {errors.name && <span>{errors.name.message}</span>}
        </section>

        <section>
          <label htmlFor="cardNumbers">Card Number</label>
          <input
            type="text"
            placeholder="e.g. 1234 5678 9123"
            id="cardNumbers"
            {...register("cardNumbers", FORM_VALIDATION.CARDNUMBERS)}
          />
          {errors.cardNumbers && <span>{errors.cardNumbers.message}</span>}
        </section>

        <section>
          <section>
            <label>Exp. Date (MM/YY)</label>
            <div>
              <input
                type="text"
                placeholder="MM"
                id="month"
                {...register("month", FORM_VALIDATION.MONTH)}
              />

              <input
                type="text"
                placeholder="YY"
                id="year"
                  {...register("year", FORM_VALIDATION.YEAR)}
              />
            </div>
            {(errors.month || errors.year) && (
            <span>{errors.month?.message || errors.year?.message}</span>
            )}
          </section>

          <section>
            <label htmlFor="cvc">CVC</label>
            <input
              type="text"
              placeholder="e.g. 123"
              id="cvc"
                {...register("cvc", FORM_VALIDATION.CVC)}
            />
             {errors.cvc && <span>{errors.cvc.message}</span>}
          </section>
        </section>

        <input type="submit" value="Confirm" />
      </form>
    </>
  );
};

export default Form;
