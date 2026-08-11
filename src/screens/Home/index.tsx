import { useEffect } from "react";
import { Platform, } from "react-native";
import styled from "styled-components/native";
import { Customer } from "../../components/customer";

export function Home() {
  useEffect(() => {
    console.log("Home screen mounted");
  }, []);
  
  function handleAddCustomer() {
    return console.log("Add customer button pressed");
  }
  
  return (
    <Container>
      <Input 
        placeholder="Nome completo" 
        returnKeyLabel={Platform.OS === "ios" ? "Return" : "Done"  } 
      />

      <AddButton onPress={handleAddCustomer}>
        <ButtonText>+</ButtonText>
      </AddButton>

      <Customer name="João Silva" />
      <Customer name="Maria Oliveira" />
      <Customer name="Carlos Santos" />
      <Customer name="Ana Costa" />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: #fffcfe;
  align-items: center;
  justify-content: center;
`;

const Input = styled.TextInput`
  border: 1px solid #000;
  padding: 10px;
  border-radius: 12px;
`;

const AddButton = styled.TouchableOpacity`
  background-color: #0af134;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 14px;
  padding-right: 14px;
  border-radius: 12px;
  margin-top: 10px;
`;

const ButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;