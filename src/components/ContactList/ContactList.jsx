import { ContactListItem } from "components/ContactListItem/ContactListItem"

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactListItem
            key={id}
            id={id}
            name={name}
            phone={number}
            onDelete={onDeleteContact}
          />
        );
      })}
    </ul>
  );
};