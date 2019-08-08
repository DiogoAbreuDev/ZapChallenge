import { StyleSheet } from "react-native";
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { moderateScale as ms } from "react-native-size-matters"; 
import Colors from "../../constants/colors";

export default styles = StyleSheet.create({
    userContainer: {
        width: "100%",
        height: ms(70),
        borderRadius: ms(8),
        backgroundColor: "white",
        marginVertical: ms(5),
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: ms(10)
    },
    imageContainer: {
        width: ms(50),
        height: ms(50),
        borderRadius: Math.floor(ms(50)),
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden"
    },
    favoriteIcon: {
        height: ms(25),
        width: ms(25)
    },
    hitSlop: {
        top: ms(5),
        left: ms(5),
        right: ms(5),
        bottom: ms(5)
    },
    nameText: {
        fontWeight: "bold"
    }
})