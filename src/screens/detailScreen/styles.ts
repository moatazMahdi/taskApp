import { Dimensions, StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
      },
      image:{
        width:"100%",
        height:260
      },
      textContainer:{
        padding:16
      },
      textTitle:{
        fontSize:16,
        color:"black",
        fontWeight:"600"
      },
      textDescription:{
        fontSize:12,
        color:"black",
        fontWeight:"300",
        marginVertical:8
      }
})