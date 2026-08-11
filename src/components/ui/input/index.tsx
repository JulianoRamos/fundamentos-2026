import { TextInputProps } from "react-native";
import { Container, Label, TextInput } from "./styles";

interface InputProps extends TextInputProps {
  label: string;
}

export function Input({ label, ...rest }: InputProps) {
  return (
    <Container>
      <Label>{label}</Label>
      <TextInput {...rest} />
    </Container>
  );
}