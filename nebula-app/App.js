import { StatusBar } from 'expo-status-bar';
import Video from 'react-native-video';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TextInput,
  Linking,
  TouchableOpacity,
} from 'react-native';
import styles from './assets/styles';


export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TouchableOpacity onPress={()=> Linking.openURL('https://www.youtube.com')}>
        <Image
          source={require('./images/Nebula.jpg')}
          style={styles.tinyLogo}
        />
        </TouchableOpacity>
      </View>



      <View style={styles.thumbContainer}>
        <TouchableOpacity onPress={()=> Linking.openURL('https://www.youtube.com')}>
        <Image
          source={require('./images/Nebula.jpg')}
          style={styles.thumblogo}
        />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> Linking.openURL('https://www.nebulamat.com')}>
        <Image
          source={require('./images/Nebula.jpg')}
          style={styles.thumblogo}
        />
        </TouchableOpacity>
      </View>




      <View
        style={{
          flexDirection: 'row-reverse',
          justifyContent: 'space-between',
        }}
      >
        <Button
          title="Order on Amazon"
          onPress={() => Linking.openURL('https://www.amazon.com')}
        />
        <Button
          title="Order on Nebula"
          onPress={() =>
            Linking.openURL('https://www.nebulamat.com/shop-nebula')
          }
        />
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