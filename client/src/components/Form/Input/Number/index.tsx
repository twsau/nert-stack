export const NumberInput = ({
  max,
  min,
  name,
  placeholder,
  register,
  required,
}: InputProps) => (
  <input
    {...register(name, { max: max, min: min, required: required })}
    placeholder={placeholder}
    type="number"
  />
);
