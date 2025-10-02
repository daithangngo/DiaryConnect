import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

const NotesPage = () => {
  const {userId} = useParams();
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Notes for user {userId}</h1>
    </div>
  );
};

export default NotesPage;
