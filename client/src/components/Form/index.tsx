import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../Button";
import { Field } from "./Field";
import { FormActions } from "./styles";

export const Form = ({ fields, onSubmit, showReset = false }: FormProps) => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState();
  return (
    <form onSubmit={onSubmit}>
      {fields.map(({ label, placeholder, type }) => (
        <Field label={label} placeholder={placeholder} type={type} />
      ))}
      <FormActions>
        {showReset && (
          <Button onClick={() => console.log("reset")} type="reset">
            reset
          </Button>
        )}

        <Button onClick={onSubmit} type="submit">
          submit
        </Button>
      </FormActions>
    </form>
  );
};
