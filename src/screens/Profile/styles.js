import { StyleSheet, Platform } from "react-native";
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { moderateScale as ms } from "react-native-size-matters"; 
import Colors from "../../constants/colors";

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        marginTop: Platform.OS == "ios" ? getStatusBarHeight() : 0,
        backgroundColor: Colors.dirtyWhite
    },
    headerContainer: {
        width: "100%",
        height: ms(200),
    },
    backButtonContainer: {
        position: "absolute",
        top: ms(12) + (Platform.OS == "ios" ? getStatusBarHeight() : 0),
        left: ms(12),
        zIndex: 1
    },
    backIcon: {
        height: ms(25),
        width: ms(25)
    },
    headerTransparency: {
        position: "absolute",
        width: "100%",
        height: "100%",
        backgroundColor: Colors.darkBlue,
        opacity: 0.8,
    },
    headerInnerContainer: {
        paddingTop: ms(30),
        position: "absolute",
        backgroundColor: Colors.darkBlue,
        opacity: 0.8,
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center"
    },  
    profilePhotoContainer: {
        // backgroundColor: "white",
        height: ms(120),
        width: ms(120),
        borderRadius: Math.floor(ms(120/2)),
        overflow: "hidden"
    },
    innerContainer: {
        marginTop: Platform.OS == "ios" ? getStatusBarHeight() : 0,
    },
    nameText: {
        color: "white",
        fontWeight: "bold",
        paddingTop: ms(8),
        fontSize: ms(15)
    },  
    userInfoContainer: {
        paddingHorizontal: ms(25),
        paddingVertical: ms(35),
    },
    userDetailContainer: {
        flexDirection: "row",
    },
    userDetailLabel: {
        // backgroundColor: "blue",
        width: ms(100),
        color: "grey",
        fontWeight: "bold",
        fontSize: ms(13)
    },
    itemSeparator: {
        height: 1,
        width: "100%",
        backgroundColor: "#CDCDCD",
        marginVertical: ms(20)
    }
})