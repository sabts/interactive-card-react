import { useForm } from "react-hook-form";
import { FORM_VALIDATION } from "../../constants/form_validation";

const Form = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const onSubmit = data => console.log(data);

  return (
    <>
      <form id="form" autocomplete="off" onSubmit={handleSubmit(onSubmit)}>
        <section>
          <label htmlFor="name">Cardholder Name</label>
          <input
            type="text"
            placeholder="e.g. John Doe"
            value=""
            id="name"
            {...register("name", FORM_VALIDATION.NAME)}
          />
          {/*<span id="card-name-error">Can't be blank</span>*/}
        </section>

        <section>
          <label htmlFor="cardNumbers">Card Number</label>
          <input
            type="text"
            placeholder="e.g. 1234 5678 9123"
            value=""
            maxlength="16"
            id="cardNumbers"
            {...register(" cardNumbers", FORM_VALIDATION.CARDNUMBERS)}
          />
          {/*<span id="card-name-error">Can't be blank</span>*/}
        </section>

        <section>
          <section>
            <label>Exp. Date (MM/YY)</label>
            <div>
              <input
                type="text"
                placeholder="MM"
                maxlength="2"
                value=""
                id="month"
                {...register("month"), FORM_VALIDATION.MONTH}
              />

              <input
                type="text"
                placeholder="YY"
                maxlength="2"
                value=""
                id="year"
                  {...register("year"), FORM_VALIDATION.YEAR}
              />
            </div>
            {/*<span id="card-name-error">Can't be blank</span>*/}
          </section>

          <section>
            <label htmlFor="cvc">CVC</label>
            <input
              type="text"
              placeholder="e.g. 123"
              maxlength="3"
              value=""
              id="cvc"
                {...register("cvc"), FORM_VALIDATION.CVC}
            />
            {/*<span id="card-name-error">Can't be blank</span>*/}
          </section>
        </section>

        <input type="submit" value="Confirm" />
      </form>
    </>
  );
};

export default Form;
