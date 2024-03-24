import React, { useState } from "react";
import "../../styles/NewQuestion.css";
import {
  TextField,
  Checkbox,
  Button,
  FormControlLabel,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const NewQuestion = () => {
  const navigate = useNavigate("");
  const [question, setQuestion] = useState("");
  const [isPublished, setIsPublished] = useState(false);
  const [answer, setAnswer] = useState("");

  const handleQuestion = (event) => {
    setQuestion(event.target.value);
    console.log(question);
  };

  const handlePublished = (event) => {
    setIsPublished(event.target.checked);
    console.log(isPublished);
  };
  const handleAnswer = (event) => {
    setAnswer(event.target.value);
    console.log(answer);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(question);
    console.log(isPublished);
    console.log(answer);
  };
  const handleBack = () => {
    navigate("/");
  };
  return (
    <div className="newQuestion_Page">
      <div className="Back">
        <Button onClick={handleBack}>Back</Button>
      </div>
      <div className="newQuestion_Form">
        <Typography variant="h4" align="center" gutterBottom>
          Add New Question
        </Typography>
        <form
          onSubmit={handleSubmit}
          style={{ maxWidth: "600px", margin: "auto" }}
        >
          <TextField
            label="Question"
            variant="outlined"
            fullWidth
            value={question}
            onChange={handleQuestion}
            style={{ marginBottom: "20px" }}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={isPublished}
                onChange={handlePublished}
                color="primary"
              />
            }
            label="Published"
            style={{ marginBottom: "20px" }}
          />
          <TextField
            label="Answer"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            value={answer}
            onChange={handleAnswer}
            style={{ marginBottom: "20px" }}
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            sx={{ width: "100%", margin: "0 auto" }}
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default NewQuestion;
