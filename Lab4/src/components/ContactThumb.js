import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const ContactThumb = ({ image, size }) => {
    return (
        <View style={[styles.thumbnailContainer, { width: size, height: size }]}>
            <Image
                source={{ uri: image }}
                style={[styles.thumbnail, { width: size, height: size }]}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    thumbnailContainer: {
        borderRadius: 1000,
        overflow: 'hidden',
    },
    thumbnail: {
        resizeMode: 'cover',
    },
});

export default ContactThumb;