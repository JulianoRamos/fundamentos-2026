import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Input } from "../../components/ui/input";
import { Container } from "./styles";

export function Product() {
  return (
    <SafeAreaView edges={["top"]} style={{ flex: 1 }}>
      <Container>
        <Input label="Título" placeholder="Digite o título do produto" />

        <View>
          <Input label="Preço" placeholder="Digite o preço do produto" />

          <Input label="Categoria" placeholder="Digite a categoria do produto" />
        </View>

        <Input label="Descrição" placeholder="Digite a descrição do produto" />
   
        <View>
          <Text>Imagem</Text>
          <TextInput />
        </View>
      </Container>

      <TouchableOpacity>
        <Text>Salvar produto</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}