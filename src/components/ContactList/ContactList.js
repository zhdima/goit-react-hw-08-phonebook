import { ContactItem } from '../ContactItem/ContactItem';
import { ListItem } from './ContactList.styled';
import { useSelector } from "react-redux";
import { selectVisibleContacts } from "../../redux/contacts/selectors";

export const ContactList = () => {

  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <ul>
      {visibleContacts.map(contact => (
        <ListItem key={contact.id}>
          <ContactItem contact={contact} />
        </ListItem>
      ))}
    </ul>
  );
};
