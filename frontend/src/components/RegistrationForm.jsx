import { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser, fetchUsers } from "../redux/slices/userSlice";

const UserForm = () => {
  const dispatch = useDispatch();

  // Local form state
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Dispatch async thunk to create user
      await dispatch(createUser(form)).unwrap();

      // Reset form fields
      setForm({
        firstName: "",
        lastName: "",
        username: "",
        password: "",
      });

      // Refresh users list
      dispatch(fetchUsers());
    } catch (err) {
      alert("Registration Error: " + err.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        marginBottom: 30,
        padding: 20,
        border: "1px solid #ccc",
        borderRadius: 5,
      }}
    >
      <h3>Create Account</h3>
      <div style={{ marginBottom: 10 }}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={form.firstName}
          onChange={handleInputChange}
          required
          style={{ marginRight: 10, padding: 5 }}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={form.lastName}
          onChange={handleInputChange}
          required
          style={{ marginRight: 10, padding: 5 }}
        />
      </div>
      <div style={{ marginBottom: 10 }}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleInputChange}
          required
          style={{ marginRight: 10, padding: 5 }}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleInputChange}
          required
          style={{ marginRight: 10, padding: 5 }}
        />
      </div>
      <button
        type="submit"
        style={{
          padding: "5px 15px",
          backgroundColor: "#007BFF",
          color: "white",
          border: "none",
          borderRadius: 3,
          cursor: "pointer",
        }}
      >
        Register
      </button>
    </form>
  );
};

export default UserForm;
