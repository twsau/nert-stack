interface FieldProps {
  max?: number | string;
  min?: number | string;
  name: string;
  error: FieldError;
  placeholder?: string;
  required?: boolean;
  register?: UseFormRegister<FieldValues>;
  type: FieldType;
}

type FieldType = "EmailInput" | "TextInput" | "NumberInput" | "RangeInput";
