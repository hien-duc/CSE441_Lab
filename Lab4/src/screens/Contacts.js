import React, { useEffect } from 'react';
import { View, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setContacts } from '../Store';
import ContactListItem from '../components/ContactListItem';

const Contacts = ({ navigation }) => {
    const dispatch = useDispatch();
    const contacts = useSelector(state => state.contacts.contacts);
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        fetchContacts();
    }, []);

    const fetchContacts = async () => {
        try {
            const response = await fetch('https://randomuser.me/api/?results=50');
            const data = await response.json();
            dispatch(setContacts(data.results));
        } catch (error) {
            console.error('Error fetching contacts:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleContactPress = (contact) => {
        navigation.navigate('ProfileContact', { contact });
    };

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#e91e63" />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={contacts}
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
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
});

export default Contacts;