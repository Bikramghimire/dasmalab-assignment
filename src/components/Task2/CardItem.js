import { Card, CardContent, Typography } from "@mui/material";
import React from "react";

const CardItem = ({ issueData }) => {
  return (
    <div>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" component="div">
            {issueData.title}
          </Typography>
          <Typography>Labels:</Typography>
          {issueData.labels?.map((label) => (
            <Typography variant="body2" key={label.name}>
              {label.name}
            </Typography>
          ))}

          <br />
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            ID:{issueData.id}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default CardItem;
