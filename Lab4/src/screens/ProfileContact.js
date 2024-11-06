import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../Store';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ProfileContact = ({ route }) => {
    const { contact } = route.params;
    const dispatch = useDispatch();
    const favorites = useSelector(state => state.contacts.favorites);
    const isFavorite = favorites.some(fav => fav.login.uuid === contact.login.uuid);

    const handleFavoritePress = () => {
        dispatch(toggleFavorite(contact));
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Image
                    source={{ uri: contact.picture.large }}
                    style={styles.profileImage}
                />
                <Text style={styles.name}>
                    {contact.name.first} {contact.name.last}
                </Text>
                <TouchableOpacity onPress={handleFavoritePress} style={styles.favoriteButton}>
                    <Icon
                        name={isFavorite ? 'star' : 'star-border'}
                        size={30}
                        color={isFavorite ? '#FFD700' : '#ccc'}
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.infoSection}>
                <InfoItem icon="phone" label="Phone" value={contact.phone} />
                <InfoItem icon="email" label="Email" value={contact.email} />
                <InfoItem
                    icon="location-on"
                    label="Address"
                    value={`${contact.location.street.number} ${contact.location.street.name}, ${contact.location.city}`}
                />
                <InfoItem icon="cake" label="Birthday" value={new Date(contact.dob.date).toLocaleDateString()} />
            </View>
        </ScrollView>
    );
};

const InfoItem = ({ icon, label, value }) => (
    <View style={styles.infoItem}>
        <Icon name={icon} size={24} color="#666" style={styles.infoIcon} />
        <View style={styles.infoContent}>
            <Text style={styles.infoLabel}>{label}</Text>
            <Text style={styles.infoValue}>{value}</Text>
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        alignItems: 'center',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 75,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 10,
    },
    favoriteButton: {
        marginTop: 10,
        padding: 10,
    },
    infoSection: {
        padding: 20,
    },
    infoItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    infoIcon: {
        marginRight: 15,
    },
    infoContent: {
        flex: 1,
    },
    infoLabel: {
        fontSize: 14,
        color: '#666',
    },
    infoValue: {
        fontSize: 16,
        marginTop: 2,
    },
});

export default ProfileContact;