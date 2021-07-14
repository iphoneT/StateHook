/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import { View,Text,Button } from 'react-native';

function App() {
  const [count, setCount]=useState(1)
  return (
    <View>s
    <Text style={{fontSize: 25, margin: 50}}> {count} </Text>
    <Button title="+ Count" onPress= {()=> setCount(count+1)}/>
    <Button title="- Count" onPress= {()=> setCount(count-1)}/>
    </View>
  );
}

export default App;

