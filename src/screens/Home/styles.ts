import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #fffcfe;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.TextInput`
  border: 1px solid #000;
  padding: 10px;
  border-radius: 12px;
`;

export const AddButton = styled.TouchableOpacity`
  background-color: #0af134;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 14px;
  padding-right: 14px;
  border-radius: 12px;
  margin-top: 10px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;