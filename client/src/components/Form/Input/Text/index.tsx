export const TextInput = ({
  max,
  min,
  name,
  placeholder,
  register,
  required,
}: InputProps) => {
  console.log(min, max)
  return (
    <input
      {...register(name, { maxLength: max, minLength: min, required: required })}
      placeholder={placeholder}
      type="text"
    />
  );
}
