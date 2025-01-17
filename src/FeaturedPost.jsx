import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { useNavigate } from "react-router-dom";

function FeaturedPost({ post }) {
  let navigate = useNavigate();
  let imgUrl;
  let navUrl;
  if (post.images) {
    imgUrl = post.images[0];
    navUrl = `/package/${post.id}`;
  } else {
    imgUrl = post.image;
    navUrl = `/tour/${post.id}`;
  }
  function exploreHandler() {
    if (post.images) navigate(navUrl);
  }

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a" href={navUrl}>
        <Card sx={{ display: { xs: "none", sm: "flex" } }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              {post.name ? post.name : post.title}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {post.description.substring(0, 80)}...
            </Typography>
            <Typography
              variant="subtitle1"
              color="primary"
              onClick={exploreHandler}
            >
              Explore
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            sx={{
              width: 160,
              maxHeight: 170,
              objectFit: "cover",
              display: { xs: "none", sm: "flex" },
            }}
            image={imgUrl}
            alt={post.imageLabel}
          />
        </Card>

        <Card
          sx={{
            maxWidth: 360,
            marginX: "auto",
            display: { xs: "block", sm: "none" },
          }}
        >
          <CardMedia
            component="img"
            height="250"
            image={imgUrl}
            alt={post.imageLabel}
          />
          <CardContent>
            <Typography variant="h5" component="h2">
              {post.name ? post.name : post.title}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {post.description.substring(0, 197)} ...
            </Typography>
            <Typography
              variant="subtitle1"
              color="primary"
              onClick={exploreHandler}
            >
              Explore
            </Typography>
          </CardContent>
        </Card>
      </CardActionArea>
    </Grid>
  );
}

export default FeaturedPost;
