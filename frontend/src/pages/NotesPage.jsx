import React from "react";
import { useParams } from "react-router-dom";

const NotesPage = () => {
  const {userId} = useParams();

  return (
    <div>
      <h1>Notes for user {userId}</h1>
    </div>
  );
};

export default NotesPage;
