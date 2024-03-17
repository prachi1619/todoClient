import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../services/auth.api";
import { TextField, Button, Typography } from "@mui/material";
import "./Auth.css";
import { toast } from "react-toastify";

export default function Login() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
      };
      const response = await login(userData);
      console.log(response,'response');
      if(response){
          toast.success("Login successful");
          navigate("/todo");
        } else {
          toast.error("Login failed");
          console.error("Login failed", response);
        }

    } catch (error) {
      toast.error("Login failed");
      console.error("Login failed", error);
    }
  };

  return (
    <div className="wrapper signIn">
      <div className="form">
        <Typography variant="h5">LOGIN</Typography>
        <form onSubmit={handleSubmit}>
          <div>
            <TextField
              label="Name"
              variant="outlined"
              id="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
          </div>
          <div>
            <TextField
              label="Email"
              variant="outlined"
              id="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
            />
          </div>
          <div>
            <TextField
              label="Password"
              variant="outlined"
              id="password"
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
            />
          </div>

          <div>
            <TextField
              label="Confirm Password"
              variant="outlined"
              id="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
            />
          </div>
          <Button variant="contained" type="submit">Submit</Button>
        </form>
        <Typography>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </Typography>
      </div>
    </div>
  );
}
