/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';



declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <>
    <View style={styles.background}>
      <Text style={styles.mote}>
        Aportando
      </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#11f9af',
    display: 'flex',
    height: '100%',
  },
  mote: {
    fontSize: 60,
    alignSelf: 'center',
    paddingTop: '60%',
    color: '#f91136',
    
  }
});

export default App;
