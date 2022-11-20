import { EmailInput } from "./Email";
import { NumberInput } from "./Number";
import { RangeInput } from "../Range";
import { TextInput } from "./Text";

const allInputs: Record<string, ({ placeholder }: InputProps) => JSX.Element> =
  { EmailInput, NumberInput, TextInput, RangeInput };

export default allInputs;
