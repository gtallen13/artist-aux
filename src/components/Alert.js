import React from 'react'
import { Dimensions } from 'react-native';
import { StyleSheet, View, Text } from "react-native";
const {width} = Dimensions.get('screen');

const Alert = ({ type, title }) => {

  let background = "";
  let colorText = "";


  if (type === "error") { 
    colorText = "red";
  } else if (type === "warning") {
    colorText = "#CA9E16";

  } else if (type === "info") {
    colorText = "#2D70AB";
  } else if (type === "success") {
    background = "#C0EEC1";
 
    
  }

  return (
    <View style={[styles.container, { backgroundColor: background}]}>
  
      <Text style={[{color:colorText}]}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    maxWidth: width*.8,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end"
  }, 
});

export {Alert};