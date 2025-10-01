import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, createUser, deleteUser } from "../features/users/userSlice";
import { Link } from "react-router-dom";
const UsersPage = () => {
  const dispatch = useDispatch();

  //get state from redux store
  const {list, loading, error} = useSelector((state)=>state.users);

  //local state for creating a new user
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
  });

  //load users when component mounts
  useEffect(()=>{
    dispatch(fetchUsers())
  }, [dispatch]);

  //handle form submission (creating user)
  const handleSubmit = async (e)=>{
    e.preventDefault();

    try{
      //dispatch createUser thunk
    await dispatch(createUser(form)).unwrap();
    //clear form 
    setForm({
    firstName: "",
    lastName: "",
    username: "",
    password: "",})
    } catch(err){
      alert("Error creating user: " + err.message)
    }
  }

  // Handle user deletion
  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this user?")) {
      dispatch(deleteUser(id));
    }
  };

  return (
    <div>UsersPage</div>
  );
};

export default UsersPage;
