import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContactsSuccess } from './Store';
import ContactListItem from './ContactListItem';

const keyExtractor = ({ phone }) => phone;

const Contacts = ({ navigation }) => {
  const [contacts, setContacts] = useState([]);
  const dispatch = useDispatch();
  const contactsUrl = 'https://randomuser.me/api/?results=50';

  useEffect(() => {
    console.log("Fetching contact data...");
    fetch(contactsUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response is not OK');
        }
        return response.json();
      })
      .then(d => {
        console.log("Data fetched successfully:", d.results.length);
        setContacts(d.results);
        dispatch(fetchContactsSuccess(d.results));
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [dispatch]);

  const renderContacts = ({ item }) => {
    const { name, picture, phone } = item;
    return (
      <ContactListItem
        name={`${name.first} ${name.last}`}
        avatar={picture.thumbnail}
        phone={phone}
        onPress={() => navigation.navigate('ProfileContact', { contact: item })}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={contacts}
        keyExtractor={keyExtractor}
        renderItem={renderContacts}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export default Contacts;