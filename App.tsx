import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, TouchableOpacityComponent, View } from 'react-native';

export default function App() {
  const[nome, setnome] = useState('');
  const[idade,setIdade] = useState(0);

  const ValidarIdade = () => {
    if( idade >= 18)
      alert( `${nome}é maior de idade!`)
    else
      alert(`${nome} é menor de idade!`)
   }

  return (
    <View style={styles.container}>
      <Text>Seja bem vindo!</Text>

      <TextInput placeholder='Digite o seu nome' onChangeText={setnome} />
      <Text>Olá {nome}</Text>

      <TextInput placeholder='Digite a sua idade' onChangeText={ id => setIdade(parseInt(id))} />
      <Text>Idade: {idade}</Text>

      <TouchableOpacity onPress={ValidarIdade}>
        <Text>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
