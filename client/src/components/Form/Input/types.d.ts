interface InputProps {
  max?: number | string;
  min?: number | string;
  name: string;
  placeholder?: string | undefined;
  register?: UseFormRegister<FieldValues>;
  required?: boolean;
}
