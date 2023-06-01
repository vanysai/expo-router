import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import { Link } from "expo-router";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Tela do Cadastro</Text>
      <Image style={styles.image} source={require('../assets/chopper.png')}></Image>

      <br></br>
      <TextInput style={styles.input} placeholder="Seu e-mail" />
      <TextInput style={styles.input} placeholder="Sua senha" />
      <TextInput style={styles.input} placeholder="Confirmar senha" />
      <Link href="/" style={styles.buttonText}>Voltar para a Home</Link>
      <TouchableOpacity style={styles.buttonText}>Clique para se cadastrar</TouchableOpacity>
      <StatusBar style="auto" />
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
  titulo: {
    fontSize: 26,
    color: '#ff747a',
    fontWeight: 'bold',
  },
  input: {
    fontSize: 15,
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#ff747a',
    borderRadius: 20,
    width: '80%',
  },
  buttonText: {
    backgroundColor: 'transparent',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#f49ac1',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
    shadowColor: '#f49ac1',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
    color: '#f49ac1',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image:{
    width: 220,
    height: 150,
  }
});