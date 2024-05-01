import Header from "./Header.jsx";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Chip, CircularProgress, Link } from "@mui/material";
import Stack from "@mui/material/Stack";
import { useEffect, useState } from "react";
import Loader from "./Loader.jsx";

export default function Details() {
  const params = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:8080/tour/${params.id}`);
      const result = await response.json();
      setData(result);
      setLoading(false);
    };
    fetchData();
  }, []);

  const handleClick = (category) => {
    navigate("/category/" + category);
  };
  return (
    <>
      {loading ? (
        <>
          {" "}
          <Loader />{" "}
        </>
      ) : (
        <Box>
          <Paper sx={{ border: "1px solid grey.500", p: 3 }}>
            <Typography component="h1" variant="h4" align="center">
              {data.title}
            </Typography>
            <CardMedia
              component="img"
              sx={{
                width: "70vw",
                height: "auto",
                mx: "auto",
                display: { xs: "none", sm: "flex" },
              }}
              image={data.image}
              alt="image"
            />
            <CardMedia
              component="img"
              sx={{
                width: "85vw",
                height: "50vh",
                mx: "auto",
                display: { xs: "flex", sm: "none" },
              }}
              image={data.image}
              alt="image"
            />
            <pre style={{ textWrap: "wrap" }}>
              <Typography
                sx={{ p: { xs: 0, sm: 2 }, textAlign: "justify" }}
                variant="h6"
                paragraph
              >
                {data.description}
              </Typography>
            </pre>

            <Stack direction="row" spacing={1}>
              {data.category.map((item) => (
                <Chip
                  key={item}
                  label={item.toUpperCase()}
                  onClick={() => handleClick(item)}
                />
              ))}
            </Stack>
            <Box py={"2rem"} textAlign={"center"}>
              <Button
                onClick={() => navigate(`/book/${params.id}`)}
                variant="contained"
                sx={{}}
              >
                Book Now
              </Button>
            </Box>
          </Paper>
        </Box>
      )}
    </>
  );
}
