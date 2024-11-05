import { createSlice } from '@reduxjs/toolkit';
import { v4 } from 'uuid';

export const mapContacts = contact => {
    const { name, picture, phone, cell, email } = contact;
    return {
        id: v4(),
        name: name.first + ' ' + name.last,
        avatar: picture.large,
        phone,
        cell,
        email,
        favorite: Math.random() < 0.1 ? true : false,
    };
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: [],
    },
    reducers: {
        fetchContactsSuccess: (state, action) => {
            state.contacts = action.payload;
        },
        addContact: (state, action) => {
            state.contacts.push(action.payload);
        },
        removeContact: (state, action) => {
            state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
        },
        toggleFavorite: (state, action) => {
            const contact = state.contacts.find(contact => contact.id === action.payload);
            if (contact) {
                contact.favorite = !contact.favorite;
            }
        },
    },
});

export const { fetchContactsSuccess, addContact, removeContact, toggleFavorite } = contactsSlice.actions;
export default contactsSlice.reducer; 