import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchNotes } from "../../redux/slices/noteSlice";

const NotesPage = () => {
  const { userId } = useParams(); // Get userId from URL
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes.list); // Get notes from Redux store

  // Fetch notes when component mounts or userId changes
  useEffect(() => {
    if (userId) {
      dispatch(fetchNotes(userId));
    }
  }, [dispatch, userId]);

  return (
    <div>
      <h1>Posts of user {userId} </h1>

      <ul>
        {notes.map((post) => (
          <li key={post.id}>
            <strong>{post.postTitle}</strong>
            <br />
            <br />
            {post.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotesPage;
