import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";
import theme from "../style/Theme";

export const WelcomePage = () => {
  const theme = useTheme();
  const classes = useStyles();
  return (
   <Box mt={5} sx={{px: theme.customSpacing.pagePadding}}>
    <Container className={classes.Container}>
    <Box maxWidth='500px'>
    <Typography variant="h4">Laborum enim laboris culpa laborum in excepteur non.</Typography>
    <Typography variant="h6">Ex deserunt et velit do nisi. Labore officia ipsum cupidatat culpa consectetur dolor sit.</Typography>
    </Box>
    <Box>
    <img src="" width="500px" height="600px" alt="dashboard-image" />
    </Box>
    </Container>
   </Box>
  )
};

const useStyles = makeStyles(() => {
  return (
    createStyles({
      Container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        [theme.breakpoints.down("md")]: {
          flexDirection: "column"
      },
      Heading: {
        color: "#FFFFFF",
        fontSize: "1.5rem",
        fontWeight: "bold",
        textAlign: "center",
      },
    }})
  );
})
