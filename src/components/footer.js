import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "black"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        p: 6,
      }}
    >
      <Container maxWidth="lg" marginTop="10%"  >
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{color:"white"}}>
            Welcome to Agrobees, your ultimate online shopping destination designed to redefine your digital shopping experience. At JustWatch, we're not just an e-commerce platform; we're your virtual marketplace, offering a seamless and enjoyable way to discover, explore, and shop for a wide array of products.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{color:"white"}}>
            Agrobee Inc.
            172,periyar Street,
            Erode, Tamil Nadu.
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{color:"white"}}>
              Email: agrobeespvt@gmail.com
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{color:"white"}}>
              Phone: +91-9345874606
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Follow Us
            </Typography >
            <Link href="https://www.facebook.com/" color="inherit" sx={{color:"white"}}>
              <Facebook />
            </Link>
            <Link
              href="https://www.instagram.com/"
              color="inherit"
              sx={{color:"white"}}
             
            >
              <Instagram />
            </Link>
            <Link href="https://www.twitter.com/" color="inherit" sx={{color:"white"}}>
              <Twitter />
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center" sx={{color:"white"}}>
            {"Copyright © "}
            <Link color="inherit" href="https://your-website.com/" sx={{color:"white"}}>
              Your Website
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}