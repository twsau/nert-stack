export const NumberInput = ({
  max,
  min,
  name,
  placeholder,
  register,
  required,
}: InputProps) => (
  <input
    {...register(name, {
      max: {
        message: `number exceeds maximum value (${max})`,
        value: max,
      },
      min: {
        message: `number is below the minimum value (${min})`,
        value: min,
      },
      required: {
        message: "this field is required",
        value: required,
      },
    })}
    placeholder={placeholder}
    type="number"
  />
);
