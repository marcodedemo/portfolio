import React from "react";
import { Button } from "@mui/material";

function Contacts() {
  return (
    <>
      Contacts
      <Button
        sx={(theme) => ({
          color: "#fff",
          backgroundColor: theme.palette.primary.main,
          "&:hover": {
            boxShadow: theme.shadows[3],
            backgroundColor: theme.palette.primary.dark,
          },
        })}
      >
        Submit
      </Button>
    </>
  );
}

export default Contacts;
