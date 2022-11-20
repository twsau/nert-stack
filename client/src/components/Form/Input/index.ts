import React from "react";
import { NumberInput } from "./Number";
import { TextInput } from "./Text";

const allInputs: Record<string, ({ placeholder }: InputProps) => JSX.Element> =
  { NumberInput, TextInput };

export default allInputs;
