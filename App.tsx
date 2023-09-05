/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Dimensions
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : "#ecf0c6",
  };

  return (
   <Text style ={styles.sectionContainer} >
    hi komal
   </Text>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    //marginTop: 32,
    paddingHorizontal: 24,
    height: Dimensions.get('window').height,
    width:Dimensions.get('window').width,
    //alignItems:'center',
    alignContent:'center',
    backgroundColor: "#ecf0c6",
  },
});

export default App;
