import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';

import { selectContacts, selectFilter, selectUserToken } from 'redux/selectors';

import Filter from 'components/Filter/Filter';
import Section from 'components/Section/Section';
import Container from 'components/Container/Container';
import HeadTilte from 'components/HeadTilte/HeadTilte';
import ContactList from 'components/Contacts/ContactList';
import FormAddContact from 'components/Forms/FormAddContact';
import Notification from 'components/Notification/Notification';
import { setFilter } from 'redux/contacts/filterSlice';
import {
    addContactThunk,
    deleteContactThunk,
    getAllContactThunk,
} from 'redux/contacts/contactOperations';

export default function Contacts() {
    const token = useSelector(selectUserToken);
    const { items, error } = useSelector(selectContacts);
    const filter = useSelector(selectFilter);

    const dispatch = useDispatch();

    useEffect(() => {
        if (!token) return;

        dispatch(getAllContactThunk());
    }, [token, dispatch]);

    useEffect(() => {
        if (!!error) {
            toast.dismiss();
            toast.error(error);
        }
    }, [error]);

    const onAddContact = contactData => {
        const findUser = items.find(el => el.name === contactData.name.trim());

        if (findUser) {
            toast.dismiss();
            toast.warning(
                <>
                    <b>{findUser.name}</b> is already in contacts!
                </>
            );
            return;
        }
        dispatch(addContactThunk(contactData));
    };

    const onRemoveContact = contactId => {
        dispatch(deleteContactThunk(contactId));
    };

    const onFilter = filterTerm => {
        dispatch(setFilter(filterTerm));
    };

    const filteredContacts = () => {
        if (!!filter) {
            return items.filter(contact => {
                return (
                    contact.name
                        .toLowerCase()
                        .includes(filter.toLowerCase().trim()) ||
                    contact.number.includes(filter.trim())
                );
            });
        }
        return items;
    };
    return (
        <>
            <Section>
                <Container>
                    <HeadTilte title="Phonebook" />
                    <FormAddContact onAddContact={onAddContact} />
                </Container>
            </Section>
            {!!items.length ? (
                <Section>
                    <Container>
                        <HeadTilte title="Contacts" />
                        <Filter filter={filter} onFilterChange={onFilter} />
                        <ContactList
                            contacts={filteredContacts()}
                            onRemoveContact={onRemoveContact}
                        />
                    </Container>
                </Section>
            ) : (
                <Section>
                    <Container>
                        <HeadTilte title="No contacts" />
                    </Container>
                </Section>
            )}
            <Notification />
        </>
    );
}
