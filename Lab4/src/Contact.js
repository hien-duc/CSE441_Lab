import React, { useEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContactsSuccess } from './ContactsSlice';
import ContactListItem from './ContactListItem';

const keyExtractor = ({ phone }) => phone;

const fetchContacts = async () => {
  const data = await fetch('https://randomuser.me/api/?results=50');
  const ContactData = await data.json();
  return ContactData.results.map(Contacts);
};

const Contacts = ({ navigation }) => {
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchContacts()
      .then(contacts => {
        console.log(contacts); // Check if contacts are fetched
        dispatch(fetchContactsSuccess(contacts));
      })
      .catch(e => {
        console.error(e); // Log any error in fetching contacts
      });
  }, [dispatch]);

  const renderContacts = ({ item }) => {
    const { name, avatar, phone } = item;
    return (
      <ContactListItem
        name={name}
        avatar={avatar}
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
