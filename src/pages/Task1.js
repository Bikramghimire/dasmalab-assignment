import { Button, LinearProgress, Slider, Typography } from "@mui/material";
import { Box } from "@mui/system";

import React, { useState } from "react";

const Task1 = () => {
  const [valueRange, setValueRange] = useState(0);
  const [loadingIcons, setLoadingIcons] = useState(false);
  const [progress, setProgress] = React.useState(50);
  const [starting, setStarting] = useState(false);
  const handlebutton = () => {
    setStarting(true);
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          setStarting(false);
          return window.location.reload(false);
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  };
  const handleSliderChange = (e) => {
    const sliderRange = e.target.value;
    setValueRange(sliderRange);
  };
  const handleIcon = () => {
    setLoadingIcons(true);
    setTimeout(() => {
      setLoadingIcons(false);
    }, 5000);
  };
  return (
    <div>
      <Box>
        <p>task1</p>
        <Slider
          sx={{ width: 300 }}
          value={valueRange}
          onChange={handleSliderChange}
          aria-labelledby="input-slider"
          step={20}
          marks
          min={0}
          max={100}
        />
        <Typography variant="h5">{valueRange}</Typography>
      </Box>
      <Box sx={{ mt: "20px" }}>
        {loadingIcons ? (
          <i
            className="fa fa-refresh fa-spin"
            style={{ marginRight: "5px", width: "50px" }}
          />
        ) : (
          ""
        )}

        <Button variant="outlined" onClick={handleIcon} disabled={loadingIcons}>
          loading Icon
        </Button>
      </Box>
      <Box sx={{ width: "500px", margin: "50px auto" }}>
        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{ height: "8px" }}
        />
        <Button
          onClick={handlebutton}
          disabled={starting}
          variant="outlined"
          sx={{ mt: "20px" }}
        >
          click me
        </Button>
      </Box>
    </div>
  );
};

export default Task1;
