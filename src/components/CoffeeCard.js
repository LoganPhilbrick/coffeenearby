import React from "react";
import { Typography, Card, CardActionArea, CardMedia, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Zero, One, OneHalf, Two, TwoHalf, Three, ThreeHalf, Four, FourHalf, Five, YelpLogo } from "../assets/images";

const CoffeeCard = ({ name, rating, distance, imageUrl, address, count, id }) => {
  const miles = (distance * 0.000621371192).toFixed(1);

  const navigate = useNavigate();

  const toDetails = () => {
    localStorage.setItem("storeId", id);
    navigate(`/details/${id}`, { state: { id: `${id}` } });
  };

  let newRating;

  switch (Math.floor(rating) + 0.5) {
    case 5 && 5.5:
      newRating = <img alt="rating" src={Five} />;
      break;
    case 4.5:
      newRating = <img alt="rating" src={FourHalf} />;
      break;
    case 4:
      newRating = <img alt="rating" src={Four} />;
      break;
    case 3.5:
      newRating = <img alt="rating" src={ThreeHalf} />;
      break;
    case 3:
      newRating = <img alt="rating" src={Three} />;
      break;
    case 2.5:
      newRating = <img alt="rating" src={TwoHalf} />;
      break;
    case 2:
      newRating = <img alt="rating" src={Two} />;
      break;
    case 1.5:
      newRating = <img alt="rating" src={OneHalf} />;
      break;
    case 1:
      newRating = <img alt="rating" src={One} />;
      break;
    default:
      newRating = <img alt="rating" src={Zero} />;
      break;
  }

  return (
    <Card
      sx={{ maxWidth: 345 }}
      style={{ border: "none", boxShadow: "none" }}
      onClick={() => {
        toDetails();
      }}
    >
      <CardActionArea>
        <CardMedia component="img" height="170" image={imageUrl} style={{ borderRadius: "5px" }} />
        <Grid container justifyContent="flex-start" marginTop="15px">
          <Typography gutterBottom component="div" fontWeight="700" style={{ fontWeight: "700" }}>
            {name}
          </Typography>
          <Grid container>
            <Grid container direction="row">
              <Grid item>{newRating}</Grid>
              <Grid item style={{ marginLeft: "10px" }}>
                {count} Reviews
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="body1" color="text.secondary" style={{ display: "flex", alignItems: "center" }}>
                {`${miles} mi`}
              </Typography>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="space-between">
            <Grid item xs={12}>
              <Typography variant="body1" color="text.secondary" style={{}}>
                {address}
              </Typography>
            </Grid>
            <Grid item>
              <img alt="Yelp Logo" src={YelpLogo} style={{ maxWidth: "55px" }} />
            </Grid>
          </Grid>
        </Grid>
      </CardActionArea>
    </Card>
  );
};

export default CoffeeCard;
