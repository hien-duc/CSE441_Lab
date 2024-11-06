import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../Store';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ContactListItem = ({ contact, onPress }) => {
    const dispatch = useDispatch();
    const favorites = useSelector(state => state.contacts.favorites);
    const isFavorite = favorites.some(fav => fav.login.uuid === contact.login.uuid);

    const handleFavoritePress = () => {
        dispatch(toggleFavorite(contact));
    };

    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Image
                source={{ uri: contact.picture.thumbnail }}
                style={styles.thumbnail}
            />
            <View style={styles.contactInfo}>
                <Text style={styles.name}>
                    {contact.name.first} {contact.name.last}
                </Text>
                <Text style={styles.phone}>{contact.phone}</Text>
            </View>
            <TouchableOpacity onPress={handleFavoritePress} style={styles.favoriteButton}>
                <Icon
                    name={isFavorite ? 'star' : 'star-border'}
                    size={24}
                    color={isFavorite ? '#FFD700' : '#ccc'}
                />
            </TouchableOpacity>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    thumbnail: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    contactInfo: {
        flex: 1,
        marginLeft: 15,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    phone: {
        fontSize: 14,
        color: '#666',
        marginTop: 2,
    },
    favoriteButton: {
        padding: 10,
    },
});

export default ContactListItem;