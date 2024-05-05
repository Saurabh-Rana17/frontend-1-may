import {
  Box,
  Button,
  OutlinedInput,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Inquiry() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const [query, setQuery] = useState("");
  const [queryDetail, setQueryDetail] = useState("");
  const [empty, setEmpty] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleClick() {
    setEmpty(false);
    if (!query || !queryDetail) {
      setEmpty(true);
    }
    if (!user) {
      navigate("/signup");
    } else {
      setIsSubmitting(true);
      const response = await fetch("http://localhost:8080/inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: user.email,
          summary: query,
          description: queryDetail,
        }),
      });
      const res = await response.json();
      setIsSubmitting(false);
      navigate("/inquirysuccess");
    }
  }

  return (
    <>
      <div style={{ margin: "auto" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginY: "5rem",
            flexDirection: "row",
          }}
        >
          <Paper
            sx={{
              padding: {
                xs: "1rem",
                sm: "2rem",
              },
            }}
            elevation={3}
          >
            <Typography
              sx={{
                marginBottom: {
                  xs: "1rem",
                  sm: "2rem",
                },
              }}
              gutterBottom
              variant="h5"
            >
              Have any doubts or questions ? Contact us
            </Typography>
            <TextField
              sx={{ marginBottom: "1.5rem" }}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              fullWidth
              required
              label="Enter Question"
            />
            <TextField
              value={queryDetail}
              onChange={(e) => setQueryDetail(e.target.value)}
              fullWidth
              required
              multiline
              rows={4}
              label="Describe your Question"
            />
            {empty && (
              <Typography paddingTop={1} align={"center"} sx={{ color: "red" }}>
                Please enter a value
              </Typography>
            )}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "2rem",
              }}
            >
              <Button
                disabled={isSubmitting}
                sx={{ width: "6rem" }}
                onClick={handleClick}
                variant="contained"
              >
                {isSubmitting ? "Sending" : "Send"}
              </Button>
            </Box>
          </Paper>
        </Box>
      </div>
    </>
  );
}
