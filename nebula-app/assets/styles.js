import { StyleSheet } from "react-native";

export default StyleSheet.create({
    appContainer: {
      flex: 1,
      padding: 50,
      paddingHorizontal: 20,
      backgroundColor: '#ffffff',
    },
    inputContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    thumbContainer:{
      flex: 1,
      // flexWrap: 'wrap',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      justifyContent:'space-between',
    },
    textInput: {
      borderWidth: 1,
      borderColor: '#cccccc',
      width: '80%',
      padding: 10,
    },
    buttonContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    tinyLogo: {
      width: 250,
      height: 250,
    },
    thumblogo:{
      width: 100,
      height: 100
    },
  });