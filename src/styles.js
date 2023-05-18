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
      width: 350,
      height: 330
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
    },
    knyText: {
      fontFamily: ''
    },
    buttonSpace: {
      paddingTop: 10
    },
    coolButton: {
      border: '10px',
      borderRadius: '5px',
      marginTop: '40px',
      padding: '10px',
      marginLeft: '50px',
      marginRight: '50px',
      backgroundColor: 'linear-gradient(0deg, rgba(2,0,36,1) 20%, rgba(255,0,0,1) 84%)'
    },
    gradient: {
      ...StyleSheet.absoluteFillObject,
    }
  });