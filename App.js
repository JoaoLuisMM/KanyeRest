import React,{useState, useEffect} from 'react';
import { Text, View , StyleSheet, Button, TouchableOpacity, StatusBar} from 'react-native';
import axios from 'axios';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function App(){
  const [quote, setQuote] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchKanyeQuote = async () => {
    setLoading(true);

    const response = await axios.get('https://api.kanye.rest/');
    setQuote(response.data.quote);
  };

  return (
    <View style={styles.containerPrincipal} className="App">
      <View style={styles.segundoContainer}>
        <StatusBar barStyle="light-content" />
        <View>
          <Text style={styles.KanyeREST}>Kanye REST</Text>
          <FontAwesome5 name="quote-left" style={{fontSize: 15, marginBottom: -12}} color={'#000'}/>
          <Text style={styles.frase}>{quote}</Text>
        <FontAwesome5 name="quote-right" style={{fontSize: 15, textAlign: 'right', marginTop: -20, marginBottom: 20}} color={'#000'}/>
        <Text style={styles.nomeAutor}>-- Kanye West</Text>
        <TouchableOpacity onPress={( ) => {fetchKanyeQuote()}} style={styles.botao}>
          <Text style={styles.textoBotao}>O que o gênio disse?</Text>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerPrincipal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5372F0',
  },
  segundoContainer: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20
  },
  KanyeREST: {
    textAlign: 'center',
    fontSize: 26,
    fontWeight: "600",
    color: '#333',
    marginBottom: 20
  },
  frase: {
    color: '#000',
    fontSize: 16,
    lineHeight: 26,
    letterSpacing: 1.1,
    fontWeight: "400",
    textAlign: 'center',
    marginBottom: 10,
    paddingHorizontal: 30
  },
  botao: {
    backgroundColor: '#5372F0',
    padding: 20,
    borderRadius: 30,
    marginVertical: 20
  },
  textoBotao: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center'
  },
  nomeAutor: {
    textAlign: 'right',
    fontWeight: "300",
    fontStyle: "italic",
    fontSize: 16,
    color: '#000',
  }

})



