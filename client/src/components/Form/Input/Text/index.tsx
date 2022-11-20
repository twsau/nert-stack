export const TextInput = ({ name, placeholder, register, required }: InputProps) => (
  <input
    {...register(name, { required: required })}
    placeholder={placeholder}
    type="text"
  />
);
