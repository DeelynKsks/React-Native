import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get('window')

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
      borderColor: '#000000',
      backgroundColor: '#FAE811'
    },
    image: {
      width: '250px',
      height: '100px'
    },
    card: {
        backgroundColor: '#ffc93c',
        borderRadius: 10,
        padding: 50,
        margin: 10,
        width: (width - 40) / 8,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        alignItems: 'center',
        justifyContent: "center"
    },
    imgCard: {
        width: (width - 40) / 8,
        height: "40px"
    }
  });