import { Container, RemoveButton, RemoveButtonText, Title } from "./styles";

interface CustomerProps {
  name: string;
  onRemove?: () => void;
}

export function Customer({ name, onRemove }: CustomerProps) {
  return (
    <Container>
      <Title>{name}</Title>

      <RemoveButton onPress={onRemove}>
        <RemoveButtonText>-</RemoveButtonText>
      </RemoveButton>
    </Container>
  );
}
