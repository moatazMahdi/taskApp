import { Dimensions, StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    cardContainer: {
        width: Dimensions.get('window').width / 2 - 20,
        borderRadius: 10,
        shadowOffset: {width: 0, height: 4},
        backgroundColor:"white",
        shadowColor:"#000000",
        shadowOpacity: 0.9,
        shadowRadius: 4,
        elevation: 3,
      },
      cardImage: {
        width: '100%',
        height: 120,
        borderRadius: 10,
      },
      cardTitle: {
        fontSize: 14,
        fontWeight: '500',
        marginVertical: 8,
        marginHorizontal: 10,
        color: "black"
      },
})