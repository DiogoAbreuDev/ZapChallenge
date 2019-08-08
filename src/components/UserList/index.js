import React, { Component } from 'react';
import { FlatList, View, RefreshControl } from 'react-native';
import UserCard from "../UserCard";
import Styles from "./styles";

export default class UserList extends Component {
    constructor(props)
    {
        super(props);

        this.state = {
            users: props.users
        };
    }

    refreshList()
    {
        this.props.refreshList();
    }    

    renderItem = (item, index) => {
        item = item.item;

        return (
            <UserCard key={index} canFavorite={this.props.canFavorite} navigation={this.props.navigation} item={item} index={index} />
        )
    }

    componentWillReceiveProps(nextProps)
    {
        this.setState({ users: nextProps.users });
    }

    render() {
        let { refreshing, emptyListComponent } = this.props;
        let { users } = this.state;

        return (
            <View style={Styles.listContainer}>
                <FlatList
                    ListEmptyComponent={emptyListComponent || null}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={Styles.listContentContainer}
                    data={users}
                    keyExtractor={item => item.id}
                    extraData={this.state}
                    removeClippedSubviews
                    renderItem={(item, index) => this.renderItem(item, index)}
                    refreshControl={this.props.hasRefresh ? 
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={() => this.refreshList()}
                        /> : null
                    }
                />
            </View>
        )
    }
}
