import React, { Component } from 'react';
import { Text, View, Platform, Image, TouchableOpacity, ScrollView } from 'react-native';
import Styles from "./styles";
import Colors from "./../../constants/colors";
import Strings from "../../constants/strings";

export default class Profile extends Component {
    constructor(props)
    {
        super(props);

        this.state = {
            user: this.props.navigation.state.params.user
        };
    }

    renderBackButton = () => {
        let source = Platform.OS == "android" ? require('../../assets/icons/back_android.png') : require('../../assets/icons/back_ios.png');

        return (
            <Image style={Styles.backIcon} source={source} />
        );
    }

    render() {
        let { user } = this.state;

        return (
            <View contentContainerStyle={Styles.container}>
                <TouchableOpacity style={Styles.backButtonContainer} onPress={() => this.props.navigation.goBack()}>
                    {this.renderBackButton()}
                </TouchableOpacity>
                <ScrollView showsVerticalScrollIndicator={false} bounces={false} contentContainerStyle={Styles.innerContainer}>
                    <View style={Styles.headerContainer}>
                        <Image style={{width: "100%", height: "100%"}} source={{ uri: user._links.avatar.href}}/>
                        <View style={Styles.headerInnerContainer}>
                            <View style={Styles.profilePhotoContainer}>
                                <Image style={{width: "100%", height: "100%"}} source={{ uri: user._links.avatar.href}} />
                            </View>
                            <Text style={Styles.nameText}>{`${user.first_name} ${user.last_name}`}</Text>
                        </View>
                    </View>
                    <View style={Styles.userInfoContainer}>
                        <View style={Styles.userDetailContainer}>
                            <Text style={Styles.userDetailLabel}>{Strings.firstName.toUpperCase()}</Text>
                            <Text>{user.first_name}</Text>
                        </View>
                        <View style={Styles.itemSeparator}/>
                        <View style={Styles.userDetailContainer}>
                            <Text style={Styles.userDetailLabel}>{Strings.lastName.toUpperCase()}</Text>
                            <Text>{user.last_name}</Text>
                        </View>
                        <View style={Styles.itemSeparator}/>
                        <View style={Styles.userDetailContainer}>
                            <Text style={Styles.userDetailLabel}>{Strings.gender.toUpperCase()}</Text>
                            <Text>{user.gender}</Text>
                        </View>
                        <View style={Styles.itemSeparator}/>
                        <View style={Styles.userDetailContainer}>
                            <Text style={Styles.userDetailLabel}>{Strings.email.toUpperCase()}</Text>
                            <Text>{user.email}</Text>
                        </View>
                        <View style={Styles.itemSeparator}/>
                        <View style={Styles.userDetailContainer}>
                            <Text style={Styles.userDetailLabel}>{Strings.telephone.toUpperCase()}</Text>
                            <Text>{user.phone}</Text>
                        </View>
                        
                    </View>
                </ScrollView>
            </View>
        )
    }
}
