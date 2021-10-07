import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MlkitOcr from 'react-native-mlkit-ocr';


// const resultFromUri = await MlkitOcr.detectFromUri(uri);


export default function App() {
  
const resultFromUri = MlkitOcr.detectFromUri("https://barcode-list.com/barcodeImage.php?barcode=9318011004391");
console.log(resultFromUri)


  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
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
