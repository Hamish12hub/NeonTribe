import React from 'react';
import { View, StyleSheet } from 'react-native';
import GifDisplay from './GifDisplay';
import ThreeDcard from './ThreeDcard';

const App = () => {
  return (
    <View style={styles.container}>


{/* for this try and make it consolo log when the gif is finished and 
dont usew a timer or numbers 
like after 3000ms consol log done as
I want multiple gifs which are diffrent lengths
you might need to convert this image to a json it dosent matter. */}


       <GifDisplay /> 



      {/* for this try and make the view look 3d  */}





      <ThreeDcard />




    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'lightblue',
  },
});

export default App;
