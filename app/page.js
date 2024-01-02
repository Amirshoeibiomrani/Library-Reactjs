import React from "react";
import Header from "./components/Header";
import Contacts from "./components/Contacts";
import ContactsList from "./components/ContactsList";

function HomePage() {
  return (
    <div>
      <Header />
      <Contacts />
      <ContactsList />
    </div>
  );
}

export default HomePage;
