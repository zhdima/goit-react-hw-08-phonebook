import { ContactList } from '../components/ContactList/ContactList';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { Filter } from '../components/Filter/Filter';
import { Loader } from '../components/Loader/Loader';
import { ErrorInfo } from '../components/GlobalStyle';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { selectIsLoading, selectError } from 'redux/contacts/selectors';

const Contacts = () => {

  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading ? <Loader />
        : error ? <ErrorInfo>{error}</ErrorInfo> 
          : <ContactList />
        }
    </>
  );
};

export default Contacts;
