import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../Button";
import { Field } from "./Field";
import { FormActions } from "./styles";

export const Form = ({ fields, onSubmit, showReset = false }: FormProps) => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState();
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fields.map(({ name, placeholder, required, type }) => (
        <Field
          key={name}
          name={name}
          placeholder={placeholder}
          register={register}
          required={required}
          type={type}
        />
      ))}
      <FormActions>
        {showReset && (
          <Button onClick={() => console.log("reset")} type="reset">
            reset
          </Button>
        )}

        <Button onClick={handleSubmit(onSubmit)} type="submit">
          submit
        </Button>
      </FormActions>
    </form>
  );
};
