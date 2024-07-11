import React, { useState, useEffect } from 'react';
import {  View, Text, TouchableOpacity, StyleSheet, Easing, Image, Dimensions,Alert  } from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');


const ThreeDcard = () => {

// this is the score board from 0 to 100 on a users score
// const percentage = 100;
// const percentage = 80;
// const percentage = 60;
const percentage = 40;
// const percentage = 20;
// const percentage = 10;
// const percentage = 0;


  return (
    <View style={[styles.container, {backgroundColor: 'white'}]}>




<View style={{width: '100%', flexDirection: 'row'}}>

<View style={{height: screenWidth * 0.225, width: screenWidth * 0.265, justifyContent: 'center', alignItems: 'center'}}>

</View>


    </View>

<View style={{ width: '100%', backgroundColor: 'lightgray', height: screenWidth * 0.1, 
  borderBottomLeftRadius: screenWidth * 0.04, borderBottomRightRadius: screenWidth * 0.04, }}>
  <View style={{
  backgroundColor: percentage >= 100 ? 'gold' :
    (percentage >= 75 ? 'green' :
      (percentage >= 25 ? 'orange' : 'red')),
  width: `${percentage}%`,
  height: '100%',
  position: 'absolute',
  left: 0,
  top: 0
}}></View>

</View>


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    width: screenWidth * 0.75,
    height: screenWidth * 1.05,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: screenWidth * 0.04, 
  },


});

export default ThreeDcard;