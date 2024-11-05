import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

const DetailListItem = ({ icon, title, subtitle }) => {
    return (
        <View style={styles.container}>
            <Icon name={icon} size={24} />
            <View style={styles.textContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{subtitle}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    textContainer: {
        marginLeft: 10,
    },
    title: {
        fontWeight: 'bold',
    },
    subtitle: {
        color: 'gray',
    },
});

export default DetailListItem;
