import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/ContactList/Filter/Filter';

const ContactsView = () => {
  return (
    <>
      <div className="Container">
        <section title="Phonebook" className="Phonebook__section">
          <ContactForm />
        </section>
        <section title="Contacts" className="Contacts">
          <Filter />
          <ContactList />
        </section>
      </div>
    </>
  );
};
export default ContactsView;
