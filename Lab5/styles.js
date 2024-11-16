import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#E91E63',
        marginBottom: 16,
    },
    input: {
        height: 50,
        borderColor: '#E91E63',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 16,
    },
    button: {
        backgroundColor: '#E91E63',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    },
    serviceItem: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#E91E63',
    },
    serviceName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    servicePrice: {
        fontSize: 16,
        color: '#888',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#E91E63',
        padding: 16,
    },
    headerTitle: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    addButton: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: '#E91E63',
        borderRadius: 50,
        padding: 15,
    },
    detailContainer: {
        marginVertical: 10,
    },
    label: {
        fontWeight: 'bold',
    },
    value: {
        marginBottom: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    editButton: {
        backgroundColor: '#4CAF50',
    },
    deleteButton: {
        backgroundColor: '#F44336',
    },
    cancelButton: {
        backgroundColor: '#9E9E9E',
    },
    deleteButtonText: {
        color: '#fff',
    },
    cancelButtonText: {
        color: '#fff',
    },
});