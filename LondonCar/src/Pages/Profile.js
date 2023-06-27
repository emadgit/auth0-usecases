import * as React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: 60,
  lineHeight: "60px",
}));

const darkTheme = createTheme({ palette: { mode: "dark" } });
const lightTheme = createTheme({ palette: { mode: "light" } });

export const Profile = (props) => {
  console.log("props: ", props)
  return (
    <Grid container spacing={1}>
      {[darkTheme].map((theme, index) => (
        <Grid item xs={12} key={index}>
          <ThemeProvider theme={theme}>
          <Item square={true} sx={{ height: "160px" }} key={1} elevation={1}>
              <img
                className="roundedProfileImage"
                src={props.user.picture}
              />
            </Item>
            <Box
              sx={{
                p: 2,
                bgcolor: "background.default",
                display: "grid",
                gridTemplateColumns: { md: "1fr 1fr" },
                gap: 2,
              }}
              square={false}
            >
              
              <Item key={1} elevation={1}>
                {`Email: ${props.user.email}`}
              </Item>
              <Item key={2} elevation={2}>
                {`is email verified: ${props.user.email_verified}`}
              </Item>
              <Item key={3} elevation={3}>
                {`Name: ${
                  props.user.name
                }`}
              </Item>
              <Item key={2} elevation={2}>
                {`Last update: ${props.user.updated_at}`}
              </Item>
              <Item key={3} elevation={3}>
                {`sub: ${
                  props.user.sub
                }`}
              </Item>
              <Item key={3} elevation={3}>
                {`Nickname: ${
                   props.user.nickname
                }`}
              </Item>L
            </Box>
          </ThemeProvider>
        </Grid>
      ))}
    </Grid>
  );
};
