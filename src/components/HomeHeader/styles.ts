import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");


export const styles = StyleSheet.create({
    container: {
      alignItems: "center",
      marginTop: 20,
    },
    Text:{
        fontSize:18,
        fontWeight:"500",
        color:"black"
    }
  });