import React from 'react'
import {Text} from 'react-native';
import {LinearGradient} from 'react-native-linear-gradient';
import { styles } from './../styles';

function CoolButton(props) {
    const {action, style} = props
  return (
    // <View>
    //     {/* <TouchableHighlight onPress={action} underlayColor="transparent">
    //         <LinearGradient
    //             colors={['rgba(2,0,36,1)', 'rgba(255,0,0,1)']}
    //             start={{ x: 0, y: 0 }}
    //             end={{ x: 1, y: 0 }}
    //             locations={[0.2, 0.84]}
    //             style={styles.gradient}
    //         >
    //             <Text >
    //                 Press
    //             </Text>
    //         </LinearGradient>
    //     </TouchableHighlight> */}
    //     <Text>
    //         {'Press'}
    //     </Text>
    // </View>
    <Text>
        Hola
    </Text>
  )
}

export default CoolButton