export const EmailInput = ({
  name,
  placeholder,
  register,
  required,
}: InputProps) => (
  <input
    {...register(name, { required: required })}
    placeholder={placeholder}
    type="email"
  />
);
