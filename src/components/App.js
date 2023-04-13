import { Layout } from './Layout';
import { ContactList } from "./ContactList/ContactList";
import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { Loader } from './Loader/Loader';
import { ErrorInfo } from './GlobalStyle';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "redux/operations";
import { selectIsLoading, selectError } from "redux/selectors";

export const App = () => {

  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Layout>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading ? <Loader />
        : error ? <ErrorInfo>{error}</ErrorInfo> 
          : <ContactList />
      }
    </Layout>
  );
};
