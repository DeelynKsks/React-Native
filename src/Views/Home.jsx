import React from 'react'
import kny from '../Images/5ede4a3fb760540004f2c5e9.png'
import { View, Image, Text } from 'react-native'
import { styles } from './../styles';
import CoolButton from './../Components/CoolButton';

function Home() {
  return (
    <View>
        <View>
            <Image style={styles.image} source={kny}/>
        </View>
        <View>
            <CoolButton/>
        </View>
    </View>
  )
}

export default Home