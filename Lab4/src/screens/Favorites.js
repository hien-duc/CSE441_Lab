import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import { useSelector } from 'react-redux';
import ContactListItem from '../components/ContactListItem';

const Favorites = ({ navigation }) => {
    const favorites = useSelector(state => state.contacts.favorites);

    const handleContactPress = (contact) => {
        navigation.navigate('ProfileContact', { contact });
    };

    if (favorites.length === 0) {
        return (
            <View style={styles.emptyContainer}>
                <Text style={styles.emptyText}>No favorites yet</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={favorites}
                keyExtractor={(item) => item.login.uuid}
                renderItem={({ item }) => (
                    <ContactListItem
                        contact={item}
                        onPress={() => handleContactPress(item)}
                    />
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    emptyText: {
        fontSize: 16,
        color: '#666',
    },
});

export default Favorites;