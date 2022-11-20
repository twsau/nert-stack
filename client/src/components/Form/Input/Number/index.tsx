export const NumberInput = ({
  max,
  min,
  name,
  placeholder,
  register,
  required,
}: InputProps) => (
  <input
    {...register(name, { required: required })}
    max={max}
    min={min}
    placeholder={placeholder}
    type="number"
  />
);
