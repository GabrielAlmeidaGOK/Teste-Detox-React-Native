import React, {useState} from 'react';
import {Image, TextInput, View, Text, SafeAreaView, Alert, TouchableOpacity} from 'react-native';

const App = () => {

  const [input, setInput] = useState('');

  return (

    <SafeAreaView style={{flex: 1}}>

      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'black'}}>
        
        <Image
          testID="image"
          source={require('./assets/gok.jpeg')}
          style={{height: '30%'}}
        />

        <Text testID="title" style={{fontSize: 26, textAlign: 'center', color: 'white'}}>
          Olá Goker, digite seu nome
        </Text>

        <TextInput
          testID="input"
          placeholder="Nome"
          value={input}
          onChangeText={setInput}
          style={{marginTop: 18, backgroundColor: 'white', width: '80%', borderRadius: 10}}
        />
        <TouchableOpacity 
          onPress={() => Alert.alert(input)}
          disabled={!input}
          testID="button"
          style={{width: '80%', height: 50, backgroundColor:'green', borderRadius: 10 ,marginTop: 18}}
        >
          <Text style={{textAlign: 'center', paddingTop: 10, fontSize: 18, color: 'white'}}>Enviar</Text>
        </TouchableOpacity>
       
     
        

      </View>

    </SafeAreaView>
  );
};

export default App;
