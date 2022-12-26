import React from "react";
import "./Dashboard.css";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
export default function Dashboard() {
  return (
    <Box sx={{ display: "flex" }}>
      <Box
        sx={{
          width: "100%",
          maxWidth: 250,
          bgcolor: "background",
        }}
      >
        <nav aria-label="main mailbox folders">
          <List>
            <ListItem disablePadding>
              <ListItemButton bgcolor="#C5C5C5">
                <ListItemText primary="Our Top Categories" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Women's Cloths" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Men's Cloths" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Kid's Cloths" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Accessories" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Beauty Products" />
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
      </Box>
      <Box
        component="main"
        sx={{ width: "100%", bgcolor: "background.default", p: 3 }}
      >
        <Typography paragraph>
          <div>
            <img
              className="center"
              // src="https://png.pngtree.com/background/20210714/original/pngtree-merry-christmas-banner-template-picture-image_1222678.jpg"
              // src="https://thumbs.dreamstime.com/z/merry-christmas-card-cartoon-hand-drawn-style-vector-illustration-merry-christmas-card-cartoon-hand-drawn-style-164602729.jpg"
              src="https://png.pngtree.com/background/20210714/original/pngtree-merry-christmas-snowy-background-picture-image_1253397.jpg"
              height={380}
            />
          </div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo vel. Risus at
          ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
          quisque non tellus. Convallis convallis tellus id interdum velit
          laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
          adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
          integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
          eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
          quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
          vivamus at augue. At augue eget arcu dictum varius duis at consectetur
          lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
          faucibus et molestie ac.
        </Typography>
      </Box>
    </Box>
  );
}
