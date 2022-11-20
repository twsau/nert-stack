import allInputs from "../Input";

export const Field = ({ name, placeholder, register, type }: FieldProps) => {
  const Input = allInputs[type];

  return (
    <label>
      {name}
      <Input name={name} placeholder={placeholder} register={register} />
    </label>
  );
};
