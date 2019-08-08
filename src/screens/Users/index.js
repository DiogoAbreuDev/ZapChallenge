import React, { Component } from 'react';
import { Text, View, TextInput, Image, Keyboard, TouchableWithoutFeedback, TouchableOpacity, FlatList, Alert } from 'react-native';
import Styles from "./styles";
import axios from "axios";
import { URL, ACCESS_TOKEN } from "../../network";
import Strings from '../../constants/strings';
import UserList from "../../components/UserList";

export default class Users extends Component {
    constructor(props)
    {
        super(props);

        this.state = {
            strSearch: "",
            users: [],
            refreshing: true,
            favorites: props.favorites
        };
    }

    componentDidMount()
    {
        this.refreshList();
    }

    refreshList = () => {
        axios.get(URL + "?_format=json&access-token=ldGt35UyBxjCwVVDMGDhDEG_vu1bozFxmBKQ", { 
            // headers: {
            //     "_format": "json",
            //     "access-token": ACCESS_TOKEN
            // }
        }).then(response => {
            if(response.status === 200 && !response.data.result.status)
                this.setState({ users: response.data.result, refreshing: false });
            else
            {
                Alert.alert("Network request error", response.data.result.message);
            }
        });
    }

    render() {
        let { strSearch, users, refreshing } = this.state;

        return (
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={Styles.container}>
                    <View style={Styles.headerContainer}>
                        <Text style={Styles.headerTitle}>{Strings.usersList}</Text>
                        <View style={Styles.searchContainer}>
                            <TextInput 
                                aautoCompleteType={"off"}
                                placeholderTextColor={"white"} 
                                underlineColorAndroid={"transparent"} 
                                style={Styles.searchInput} 
                                placeholder={"Search"} 
                                value={strSearch}
                                onChangeText={value => this.setState({ strSearch: value })}
                            />
                            {!!strSearch && <TouchableOpacity style={Styles.clearTextContainer} onPress={() => this.setState({ strSearch: '' })}>
                                <Image style={Styles.clearTextIcon} source={require('../../assets/icons/cancel.png')}/>
                            </TouchableOpacity>}
                            <TouchableOpacity style={Styles.filterIconContainer}>
                                <Image style={Styles.filterIcon} source={require('../../assets/icons/controls_inactive.png')}/>
                            </TouchableOpacity>
                        </View>
                        <View style={Styles.filtersContainer}>
                        </View>
                    </View>

                    <UserList 
                        navigation={this.props.navigation}
                        hasRefresh 
                        canFavorite
                        users={users.filter(u => (u.first_name + " " + u.last_name).toLowerCase().includes(strSearch.toLowerCase()))}
                        refreshing={refreshing}
                        refreshList={() => this.setState({refreshing: true}, () => this.refreshList())}
                    />
                </View>
            </TouchableWithoutFeedback>
        )
    }
}