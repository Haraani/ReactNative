import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <Image source={require('./images/Nebula.jpg')} style={styles.tinyLogo}/>
        
      </View>
      {/* <View style={{flexDirection: 'row-reverse', justifyContent:'center'}}>
        <Button title='Switch ON'/>
      </View> */}
      <View style={{flexDirection: 'row-reverse', justifyContent:'space-between'}}>
        <Button color="red" title="Order on Amazon" disabled/>
        <Button title="Order on Nebula" />
      </View>
      <View style={styles.buttonContainer}>
        <View
          style={{
            backgroundColor: 'red', 
            width: 100,
            height: 100,
            alignItems: 'center',
          }}
        >
          <Text> Spray </Text>
        </View>
        <View
          style={{
            backgroundColor: 'blue',
            width: 100,
            height: 100,
            alignItems: 'center',
          }}
        >
          <Text> Foot Trigger </Text>
        </View>
        <View
          style={{
            backgroundColor: 'pink',
            width: 100,
            height: 100,
            alignItems: 'center',
          }}
        >
          <Text> Approach </Text>
        </View>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex:1,
    padding: 50,
    paddingHorizontal: 20,
    backgroundColor: '#231f20',
  },
  inputContainer: {
    flex: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '80%',
    padding: 10,
  },
  buttonContainer:{
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center',
    justifyContent: 'space-between',
  },
  tinyLogo: {
    width: 250,
    height: 250,
  }
});
