import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.upperOne}></View>
      <Image
        source={require('./assets/mymoney-logo.png')}
        style={styles.logoImg}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  logoImg: {
    position:'absolute',
    marginLeft:19,
    width: 363,
    height: 268,
    left: 0,
    top: 275,

  },
  container: {
    flex: 1,
    alignItems:'center'
  },

});
