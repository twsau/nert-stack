export const EmailInput = ({
  max,
  min,
  name,
  placeholder,
  register,
  required,
}: InputProps) => (
  <input
    {...register(name, {
      maxLength: max,
      minLength: min,
      pattern: {
        message: "invalid email",
        value: /^\S+@\S+$/i,
      },
      required: {
        message: "this field is required",
        value: required,
      },
    })}
    placeholder={placeholder}
    type="email"
  />
);
