
import styled from "styled-components/native";

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

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 10px;
  border: 1px solid #b7b4b4;
  border-radius: 12px;
  margin-top: 10px;
`;

const Title = styled.Text`
  font-size: 16px;
  font-weight: semi-bold;
  margin-right: 10px;
  color: #9f9797;
`;

const RemoveButton = styled.TouchableOpacity`
  background-color: #ff4c4c;
  padding: 5px 10px;
  border-radius: 8px;
`;

const RemoveButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;