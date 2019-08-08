import { StyleSheet } from "react-native";
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { moderateScale as ms } from "react-native-size-matters"; 
import Colors from "../../constants/colors";

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        marginTop: getStatusBarHeight(),
        backgroundColor: Colors.dirtyWhite,
    },
    headerContainer: {
        width: "100%",
        backgroundColor: Colors.darkBlue,
        height: ms(125),
        paddingBottom: ms(15),
        paddingLeft: ms(20)
    },
    headerTitle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        paddingTop: ms(10),
        paddingBottom: ms(15),
        fontSize: ms(14)
    },
    searchContainer: {
        flexDirection: "row",
        flex: 1
    },
    filtersContainer: {
        flexDirection: "row",
        flex: 1
    },
    searchInput: {
        backgroundColor: Colors.grey,
        flex: 0.85,
        height: "100%",
        paddingHorizontal: ms(10),
        textAlign: "center",
        fontWeight: "bold",
        color: "white",
        borderRadius: ms(4)
    },
    filterIconContainer: {
        flex: 0.15,
        alignItems: "center",
        justifyContent: "center"
    },
    filterIcon: {
        height: ms(25),
        width: ms(25),
    },
    listContainer: {
        paddingHorizontal: ms(20),
        flex: 1,
        width: "100%",
    },
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
    listContentContainer: {
        paddingTop: ms(15)
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
    },
    clearTextContainer: {
        position: "absolute",
        right: ms(60),
        top: ms(10)
    },
    clearTextIcon: {
        width: ms(15),
        height: ms(15)
    }
})