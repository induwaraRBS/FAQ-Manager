import React from "react";
import "../../styles/Navbar.css";
import Button from "@mui/material/Button";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate("");

  const handleNavigate = () => {
    navigate("/Signin");
  };

  const handleAddNewQuestion = () => {
    navigate("/Newquestion");
  };
  return (
    <div className="Navbar">
      <div className="Left_Section">
        <h3>FAQ Manager - iLabs</h3>
      </div>
      <div className="Middle_Section">
        <Button variant="contained" onClick={handleNavigate}>
          Sign In
        </Button>
      </div>
      <div className="Right_Section">
        <Button
          variant="outlined"
          startIcon={<AddCircleIcon />}
          sx={{
            borderRadius: "5px",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
          }}
          onClick={handleAddNewQuestion}
        >
          Add New Question
        </Button>
      </div>
    </div>
  );
};

export default NavBar;
