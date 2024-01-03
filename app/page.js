import React from "react";
import Header from "./components/Header";
import Contacts from "./components/Contacts";
import ContactsList from "./components/ContactsList.1";
import ReContacts from "./components/ReContacts";

function HomePage() {
  return (
    <div>
      <Header />
      {/* <Contacts /> */}
      <ReContacts />
      <ContactsList />
    </div>
  );
}

export default HomePage;
