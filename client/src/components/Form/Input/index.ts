import { EmailInput } from "./Email";
import { NumberInput } from "./Number";
import { TextInput } from "./Text";

const allInputs: Record<string, ({ placeholder }: InputProps) => JSX.Element> =
  { EmailInput, NumberInput, TextInput };

export default allInputs;
