import React from "react";
import "./App.css";
import PermanentDrawerLeft from "./components/Emailinbox/EmailInbox.js";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [emailData, setEmailData] = useState([]);

  const [selectedEmail, setSelectedEmail] = useState(null);
  const handleEmailSelected = (email) => {
    setSelectedEmail(email);
    console.log(email);
  };

  const deleteEmail = (email) => {
    const emails = emailData;
    const requestOptions = {
      method: "DELETE",
    };
    fetch(`/email/delete/${email.id}`, requestOptions)
      .then((response) => {
        if (response.ok) {
          const idx = emails.indexOf(email);
          emails.splice(idx, 1);
          getData();
        }
      });
  };

  const toggleSeen = (clickedEmail) => {
    const emails = emailData;
    if(clickedEmail.seen === false) {
      clickedEmail.seen = true;
      const requestOptions = {
        method: "PUT",
        headers: { 
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(clickedEmail)
      };
      fetch(`/email/update`, requestOptions)
    }
  };

  const getData = async () => {
    const { data } = await axios.get(`/email/getAll`);
    setEmailData(data);
  };

  useEffect(() => {
    getData();
    // setEmailData(jsonData);
  }, []);

  return (
    <div className="App">
      <PermanentDrawerLeft
        emailData={emailData}
        onEmailSelected={handleEmailSelected}
        deleteEmail={deleteEmail}
        toggleSeen={toggleSeen}
      />
    </div>
  );
}
export default App;
