export const TextInput = ({
  minLength,
  name,
  placeholder,
  register,
  required,
}: InputProps) => (
  <input
    {...register(name, {
      minLength: {
        message: `value must be at least ${minLength} letters long`,
        value: minLength,
      },
      required: {
        message: "this field is required",
        value: required,
      },
    })}
    placeholder={placeholder}
    type="text"
  />
);
