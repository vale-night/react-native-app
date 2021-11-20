import React from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 
import AppDefaultStyles from '../../../constants/AppDefaultStyles';

const UserProfileMenuList = ({menuItems, parentStyles}) => {

    const renderMenuItem = ({item}) => {
        return (
            <TouchableOpacity 
                onPress={item.onPress}
                style={styles.item}>
                <FontAwesome name={item.iconName} size={24} color={AppDefaultStyles.textColor}/>
                <Text style={styles.itemText}>{item.text}</Text>
                <FontAwesome name="arrow-circle-right" size={24} color={AppDefaultStyles.textColor} />
            </TouchableOpacity>
        )
    }

    return (
        <View style={{...styles.container, ...parentStyles}}>
            <FlatList 
                data={menuItems}
                renderItem={renderMenuItem}
                keyExtractor={item => item.text}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 335,
        // maxHeight: 180,
        // flex: 1,
        shadowColor: '#e7eaf0',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        backgroundColor: "#ffffff",
        overflow: "hidden",
        borderRadius: 10,
    },
    item: {
        flex: 1,
        padding: 10, 
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    itemText: {
        flexBasis: 200, 
        // flexGrow: 1
        color: AppDefaultStyles.textColor
    }
});

export default UserProfileMenuList;