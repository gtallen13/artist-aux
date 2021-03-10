import React from 'react'
import { StyleSheet, View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const Alert = ({ type, title }) => {
  // Iconos
  // error --> error-outline #fdecea
  // warning --> warning #fff4e5
  // info --> info-outline #e8f4fd
  // success --> check-circle-outline #edf7ed
  let background = "";
  let icon = "";
  let color = "";

  if (type === "error") {
   
   
  } else if (type === "warning") {
    background = "#fff4e5";
    icon = "warning";
  } else if (type === "info") {
    background = "#e8f4fd";
    icon = "info-circle";
  } else if (type === "success") {
    background = "#edf7ed";
    icon = "check-circle";
  }

  return (
    <View style={[styles.container, { backgroundColor: background}]}>
      <Icon name={icon} style={styles.icon} />
      <Text style={styles.textColor}>{title}</Text>
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
  textColor:{
    color:'#97221f'
  }
});

export {Alert};