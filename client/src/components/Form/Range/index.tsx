export const RangeInput = ({
  max,
  min,
  name,
  register,
  required,
}: InputProps) => (
  <input
    {...register(name, { maxLength: max, minLength: min, required: required })}
    max={max}
    min={min}
    type="range"
  />
);
