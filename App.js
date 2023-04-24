import { library } from './src/Library/library'
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Text, View, TextInput, Button, Image } from 'react-native';
import ffiv from './src/Images/ZUUtGzH.png'
import { styles } from './src/styles';
import ViewComponent from './src/Components/ViewComponent';

export default function App() {

  const [desc, setDesc] = useState('')
  const [data, setData] = useState([])
  const url = "https://xivapi.com/Item/1675"
  library.consume(url)

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={ffiv}/>
      <ViewComponent/>
      {/* 
      
      Del primer trabajo
      
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
      <StatusBar style="auto" /> */}
    </View>
  );
}