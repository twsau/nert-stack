interface InputProps {
  max?: number | string;
  min?: number | string;
  minLength?: number;
  name: string;
  placeholder?: string | undefined;
  register?: UseFormRegister<FieldValues>;
  required?: boolean;
}
