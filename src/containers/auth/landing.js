import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";
import appRoutes from "../../lib/appRoutes";

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="container text-center pb-5">
      <h1 className="mt-5 text-primary">Ejara Coding Challenge</h1>
      <h6 className="mt-5">Applicant</h6>
      <h3 className="mb-4">Borel Tchassem G.</h3>

      <Card sx={{ maxWidth: 345, margin: "0 auto" }}>
        <CardActionArea onClick={() => navigate(appRoutes.notes)}>
          <CardMedia
            component="img"
            height="140"
            image="https://img.freepik.com/free-photo/encouragement-quote-on-note-starting-with-dear_23-2150105092.jpg?w=360&t=st=1694518802~exp=1694519402~hmac=12cdf11ba8aa65a767646102d4280483020b51297bec72d7aaeed7f1a16ced82"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Google Keep App
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {
                " Save a Note - Color your Notes - Archive your notes - Delete old notes"
              }
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default Landing;
