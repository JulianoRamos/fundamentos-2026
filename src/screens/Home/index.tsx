import { useEffect } from "react";
import { FlatList, Platform, Text, } from "react-native";
import { Customer } from "../../components/customer";
import { AddButton, ButtonText, Container, Input } from "./styles";

export function Home() {
  useEffect(() => {
    console.log("Home screen mounted");
  }, []);
  
  function handleAddCustomer() {
    return console.log("Add customer button pressed");
  }

  function handleRemoveCustomer() {
    return console.log("Remove customer button pressed");
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

      <FlatList
        data={[{ id: "1", name: "Juliano" }, { id: "2", name: "Maria" }, { id: "3", name: "Pedro" }]}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Customer name={item.name} onRemove={handleRemoveCustomer} />
        )}
        ListEmptyComponent={() => (<Text>Nenhum cliente cadastrado</Text>)}
      />
    </Container>
  );
}
