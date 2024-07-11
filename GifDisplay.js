import React, { useState } from 'react';
import { View, Button, Image, StyleSheet } from 'react-native';

const GifDisplay = () => {
  const [key, setKey] = useState(0);

  const handlePress = () => {
    setKey(prevKey => prevKey + 1);
  };

  return (
    <View style={styles.container}>
      <Image
        key={key}
        style={styles.gif}
        source={require('./World.gif')}
      />
      <Button title="Play" onPress={handlePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  gif: {
    width: 200,
    height: 200,
  },
});

export default GifDisplay;