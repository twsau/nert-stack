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
      pattern: /^\S+@\S+$/i,
      required: required,
    })}
    placeholder={placeholder}
    type="email"
  />
);
