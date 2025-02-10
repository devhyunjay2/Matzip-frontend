import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

function App() {
  return (
    <View style={styles.container}>
      <Text>텍스트</Text>
      <Button
        title="버튼이름"
        onPress={() => {
          console.log('버튼글릭');
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    backgroundColor: 'red',
  },
});

export default App;
