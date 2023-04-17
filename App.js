import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {

  const [desc, setDesc] = useState('')
  const [data, setData] = useState([])

  return (
    <View style={styles.container}>
      <Text>Ola, esta es mi app</Text>
      <TextInput onChangeText={setDesc} style={styles.input} />
      <Button style={styles.button} title='MANDALE MECHA' onPress={() => setData([...data, desc])} />
        {
          data.map((texto, index) => {
            return (
              <Text id={index} key={index}>
                {texto}
                <Button color={'#FAE811'} title='Borrar este dato' onPress={() => {
                  const lista = data.filter(a => a !== texto)
                  setData(lista)
                }}/>
              </Text>
            )
          })    
        }
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
  input: {
    borderColor: '#000000',
    backgroundColor: '#FAE811'
  }
});
