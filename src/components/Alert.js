import React from 'react'
import { StyleSheet, View, Text } from "react-native";


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
  
      <Text style={[styles.textColor ,  {color:colorText}]}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end"
    
  },
  icon: {

  },
 
});

export {Alert};