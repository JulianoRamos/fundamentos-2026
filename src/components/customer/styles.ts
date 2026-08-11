import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 10px;
  border: 1px solid #b7b4b4;
  border-radius: 12px;
  margin-top: 10px;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: semi-bold;
  margin-right: 10px;
  color: #9f9797;
`;

export const RemoveButton = styled.TouchableOpacity`
  background-color: #ff4c4c;
  padding: 5px 10px;
  border-radius: 8px;
`;

export const RemoveButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;