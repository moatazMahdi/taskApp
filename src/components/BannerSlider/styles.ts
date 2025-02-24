import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");


export const styles = StyleSheet.create({
    container: {
      alignItems: "center",
      marginTop: 20,
    },
    image: {
      width: width,
      height: 200,
      resizeMode: "cover",
    },
    dotContainer: {
      flexDirection: "row",
      position: "absolute",
      bottom: 10,
      alignSelf: "center",
    },
    dot: {
      width: 10,
      height: 10,
      borderRadius: 5,
      backgroundColor: "#ccc",
      marginHorizontal: 5,
    },
    activeDot: {
      backgroundColor: "#001A6E",
    },
  });