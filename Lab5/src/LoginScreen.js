import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    ScrollView,
    TouchableOpacity,
    Alert
} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './Style.js';

const LoginScreen = () => {
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [responseData, setResponseData] = useState(null);
    const [error, setError] = useState(null);

    const handleLogin = async () => {
        setLoading(true);
        const data = {
            phone: phone,
            password: password
        };

        const config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://kami-backend-5rs0.onrender.com/auth',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        try {
            const response = await axios(config);
            setResponseData(response.data);
            console.log(response.data);
            Alert.alert("Success", "Logged in successfully!");
            await AsyncStorage.setItem('authToken', response.data.token);
        } catch (err) {
            setError(err);
            console.error('Error:', err);
            Alert.alert("Error", "Login failed. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <Text style={styles.title}>Login</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Phone"
                    value={phone}
                    onChangeText={setPhone}
                    keyboardType="phone-pad"
                    editable={!loading}
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    editable={!loading}
                    autoCapitalize="none"
                />
                <TouchableOpacity
                    style={[styles.button, loading && styles.buttonDisabled]}
                    onPress={handleLogin}
                    disabled={loading}
                >
                    <Text style={styles.buttonText}>
                        {loading ? 'Loading...' : 'Login'}
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default LoginScreen;
