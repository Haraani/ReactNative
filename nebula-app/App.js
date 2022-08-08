import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Your Course Goals" />
        <Button title="Add Goal" />
      </View>
      <View style={styles.inputContainer}>
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
      <View style={{flexDirection: 'row-reverse', justifyContent:'space-between'}}>
        <Button color="red" title="Order on Amazon" disabled/>
        <Button title="Order on Nebula" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
    paddingHorizontal: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '80%',
    padding: 10,
  },
});
