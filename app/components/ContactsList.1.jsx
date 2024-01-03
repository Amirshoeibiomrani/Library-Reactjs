import React from "react";

export function ContactsList({ contacts }) {
  console.log(contacts);
  return (
    <div>
      <h1>Contacts List</h1>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>{contact.name}</li>
        ))}
      </ul>
    </div>
  );
}
