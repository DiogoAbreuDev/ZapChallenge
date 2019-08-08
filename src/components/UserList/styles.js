import { StyleSheet } from "react-native";
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { moderateScale as ms } from "react-native-size-matters"; 

export default styles = StyleSheet.create({
    listContainer: {
        paddingHorizontal: ms(20),
        flex: 1,
        width: "100%",
    },
    listContentContainer: {
        paddingTop: ms(15)
    },
})