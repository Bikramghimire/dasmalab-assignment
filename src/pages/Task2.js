import React, { useEffect, useState } from "react";
import axios from "axios";
import CardItem from "../components/Task2/CardItem";
import { Box } from "@mui/system";

const Task2 = () => {
  const [FBIssues, setFBIssues] = useState(null);
  const [searchORnot, setSearchORnot] = useState(false);
  const [searchResult, setSearchResult] = useState(null);
  const [optionValue, setOptionValue] = useState("select the issues");

  useEffect(() => {
    axios
      .get(`https://api.github.com/repos/facebook/react/issues`)
      .then((res) => {
        const facebookIssues = res.data;
        setFBIssues(facebookIssues);
      })
      .catch((err) => console.log(err));
  }, []);
  const handleSearch = (e) => {
    setSearchORnot(true);
    setOptionValue(e.target.value);
    const result = FBIssues.filter(
      (d) => d.labels.filter((dd) => dd.name === `${e.target.value}`).length
    );
    setSearchResult(result);
  };
  let arr = [];
  return (
    <div>
      <p>Task2</p>
      <label>Choose an issues: </label>
      <select id="issues" value={optionValue} onChange={handleSearch}>
        {FBIssues
          ? FBIssues.map((item) =>
              item.labels.map((label) => {
                if (!arr.includes(label.name)) {
                  arr.push(label.name);
                }
              })
            )
          : null}
        {arr != null
          ? arr.map((label) => (
              <option key={label} value={label}>
                {label}
              </option>
            ))
          : ""}
      </select>
      <Box
        sx={{
          padding: "20px",
          display: "grid",
          gridTemplateColumns: "auto auto auto",
          gridGap: "20px",
        }}
      >
        {searchORnot
          ? searchResult?.map((issue) => (
              <CardItem
                issueData={issue}
                key={issue.id}
                sx={{ maxWidth: "400px" }}
              />
            ))
          : FBIssues?.map((issue) => (
              <CardItem
                issueData={issue}
                key={issue.id}
                sx={{ maxWidth: "400px" }}
              />
            ))}
      </Box>
    </div>
  );
};

export default Task2;
