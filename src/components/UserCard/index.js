import React, { Component } from 'react';
import { Text, View, Image, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import Styles from "./styles";
import { connect } from 'react-redux';
import { setFavorites } from "../../actions/SetFavorites";

class UserCard extends Component {
    constructor(props)
    {
        super(props);

        this.state = {
            item: props.item,
            favorites: props.favorites
        };
    }

    pressFavorite = item => {
        let { favorites } = this.props;

        let itemFound = favorites.find(u => u.id == item.id);

        if(!itemFound)
            favorites.push(item);
        else
            favorites.splice(favorites.indexOf(itemFound), 1);

        this.setState({ favorites }, () => this.props.setFavorites(favorites));
    }

    render() {
        let { item, index, canFavorite } = this.props;
        let isFavorite = this.state.favorites.find(u => u.id == item.id);

        return (
            <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate("Profile", {user: item})}>
                <View key={index} style={Styles.userContainer}>
                    <View style={Styles.imageContainer}>
                        <Image source={{uri: item._links.avatar.href}} style={{height: "100%", width: "100%"}}/>
                    </View>
                    <Text style={Styles.nameText}>{`${item.first_name} ${item.last_name}`}</Text>
                    {canFavorite ? <TouchableOpacity hitSlop={Styles.hitSlop} style={Styles.favoriteIconContainer} onPress={() => this.pressFavorite(item)}>
                        {isFavorite ? 
                            <Image style={Styles.favoriteIcon} source={require('../../assets/icons/star_active.png')} />
                        :
                            <Image style={Styles.favoriteIcon} source={require('../../assets/icons/star_inactive.png')} />
                        }
                    </TouchableOpacity> : <View/>}
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
  
const mapDispatchToProps = dispatch => {
    return {
      setFavorites: (favorites) => {
        dispatch(setFavorites(favorites))
      }
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(UserCard);