import React, { Component } from 'react';
import { Text, View, Keyboard, TouchableWithoutFeedback, TouchableOpacity, FlatList, Alert } from 'react-native';
import Styles from "./styles";
import { connect } from 'react-redux';
import Strings from '../../constants/strings';
import UserList from "../../components/UserList";

class Favorites extends Component {
    constructor(props)
    {
        super(props);

        this.state = {
            favorites: props.favorites
        };
    }

    componentDidMount()
    {
        this.willFocus = this.props.navigation.addListener(
            'willFocus',
            payload => {
                this.forceUpdate();
            }
          );
    }

    componentWillUnmount()
    {
        this.willFocus.remove();
    }

    renderEmptyList()
    {
        return (
            <View style={Styles.emptyListContainer}>
                <Text style={Styles.noFavoritesText}>{Strings.noFavorites}</Text>
            </View>
        );
    }

    render() {
        let { favorites } = this.state;

        return (
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={Styles.container}>
                    <View style={Styles.headerContainer}>
                        <Text style={Styles.headerTitle}>{Strings.favorites}</Text>
                    </View>

                    <UserList 
                        emptyListComponent={this.renderEmptyList()}
                        navigation={this.props.navigation}
                        users={favorites}
                    />
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const mapStateToProps = state => {

    return {
      favorites: state.favorites.favorites
    }
}
  
export default connect(mapStateToProps, null)(Favorites);