import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Link } from "expo-router";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Tela C</Text>
      <Image style={styles.image} source={require('../assets/Botao1.png')}></Image>
      <br></br>
      <Text style={styles.paragraph}>Blablablablablabal </Text>
      <br></br>
      <Link href="/TelaD" style={styles.buttonText}>Ir para a tela de cadastro</Link>
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
  titulo:{
    fontSize: 26,
    color: '#ff747a',
    fontWeight: 'bold',

  },
  paragraph:{
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'bold'
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
    width: 200,
    height: 150,
  }
});