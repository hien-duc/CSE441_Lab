import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import axios from 'axios';
import { Menu, MenuProvider, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
];

const Item = ({ title }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);

const HomeScreen = () => {
    return (

        <View >
            <View style={styles.head}>
            </View>
            <Text>Danh sách dịch vụ</Text>
            <FlatList
                data={DATA}
                renderItem={({ item }) => <Item title={item.title} />}
            />
        </View>

    );
};
const styles = StyleSheet.create({
    head: {
        color: '#dd7878',
        width: '200px',
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
});

export default HomeScreen;