interface FieldProps {
  label?: string;
  placeholder?: string;
  type: FieldType;
}

type FieldType = "TextInput" | "NumberInput";
