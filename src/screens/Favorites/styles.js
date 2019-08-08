import { StyleSheet, Platform } from "react-native";
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { moderateScale as ms } from "react-native-size-matters"; 
import Colors from "../../constants/colors";

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        marginTop: Platform.OS == "ios" ? getStatusBarHeight() : 0,
        backgroundColor: Colors.dirtyWhite,
    },
    headerContainer: {
        width: "100%",
        backgroundColor: Colors.darkBlue,
        height: ms(40),
        paddingBottom: ms(15),
    },
    headerTitle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        paddingTop: ms(10),
        paddingBottom: ms(15),
        fontSize: ms(14)
    },
    emptyListContainer: {
        alignSelf: "center",
        paddingTop: ms(10)
    },
    noFavoritesText: {
        fontWeight: "bold",
        fontSize: ms(12)
    }
})