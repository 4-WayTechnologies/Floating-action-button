import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Linking} from 'react-native';
import FloatingButton  from "react-native-social-fab";
export default function App() {
  return (
    <View style={styles.container}>
    <FloatingButton 
    onPressFacebook= { () => Linking.openURL('https://www.facebook.com/login/')}
    onPressTwitter= { () => Linking.openURL('https://twitter.com/i/flow/login')}
    onPressInstagram= { () => Linking.openURL('https://www.instagram.com/accounts/login/')}

  />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
