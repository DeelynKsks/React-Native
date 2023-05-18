import React, { useEffect, useState } from 'react'
import { View, FlatList, Image, Text, Button } from 'react-native'
import { styles } from '../styles'
import { library } from '../Library/library'
import Home from '../Views/Home'

function ViewComponent() {

    // const [list, setList] = useState([])
    
    // const url = "https://xivapi.com/Item"

    // const handleButtonList = async() => {
    //     const data = await library.consume(url).then(a=>a)

    //     setList(data)
        // const lista2 = []

        // for (let i = 0; i < 20; i++) {
        //     lista2.push(lista1[i])
        // }

    // }

    // const renderItem = ({ item }) => {
        
    //     const image = item.urlImage

    //     return(
    //         <View style={styles.card}>
    //             <Image style={styles.imgCard} source={{ uri: image}} />
    //             <Text>{item.Name}</Text>
    //         </View>
    //     )
    // }

  return (
    <View style={styles.container}>
        <Home />
    </View>
  )
}

export default ViewComponent