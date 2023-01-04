import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
// import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import PropTypes from "prop-types";
import logo from "./assets/logo.png";
import {
  Avatar,
  Stack,
  Typography,
  useMediaQuery,
  Paper,
  Button,
} from "@mui/material";
import "./Dropdown.css";
import { HashLink } from "react-router-hash-link";
import MyMenu from "../../MyMenu/MyMenu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CustomDrawer from "./CustomDrawer";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

import rank from "./assets/rank.png";
import PersonaleTimeline from "./PersonaleTimeline";
import GlobalTimeline from "./GlobalTimeline";
import CustomDrawerTwo from "./CustomDrawerTwo";
import { AppContext } from "../../../utils";
import { useContext, useState } from "react";

const drawerWidth = 260;

const openedMixin = (theme) => ({
  width: drawerWidth,
  background: "#2E2F42",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    // marginLeft: drawerWidth,
    width: `100%`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  background: "#2E2F42",

  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer(props) {
  const matches1 = useMediaQuery("(max-width:1050px)");
  const { window, children } = props;
  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const { disconnect } = useContext(AppContext);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        sx={{
          background: "#1E1D28",
          // zIndex: 100,
        }}
        position="fixed"
        open={open}
      >
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {matches1 && <CustomDrawerTwo />}
          <Box>
            <Box>
              {/* <img width={matches1 ? "160px" : ""} src={logo} alt="" /> */}
              <Typography variant="h2" color="white">
                DEFI <span style={{ color: "#E37336" }}>FIRE</span>
              </Typography>
            </Box>
          </Box>

          {matches1 ? (
            <CustomDrawer />
          ) : (
            <Stack
              direction={"row"}
              alignItems="center"
              justifyContent={"space-evenly"}
            >
              <Box px="10px">
                {" "}
                <div class="dropdown1">
                  <button class="dropbtn1">
                    COMMISSION <KeyboardArrowDownIcon sx={{ pt: "13px" }} />{" "}
                  </button>
                  <div class="dropdown-content1">
                    <a>
                      {" "}
                      <HashLink
                        to={"/dashbord"}
                        style={{
                          textDecoration: "none",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        DASHBORD
                      </HashLink>{" "}
                    </a>
                    <a>
                      <HashLink
                        to={"/dashbord/profitoverview"}
                        style={{
                          textDecoration: "none",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        PROFIT OVERVIEW
                      </HashLink>{" "}
                    </a>
                    <a>
                      <HashLink
                        to={"/dashbord/profitearning"}
                        style={{
                          textDecoration: "none",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        PROFIT EARNINGS
                      </HashLink>{" "}
                    </a>
                  </div>
                </div>
              </Box>
              <Box px="10px">
                <div class="dropdown1">
                  <button class="dropbtn1">
                    INFORMATION <KeyboardArrowDownIcon sx={{ pt: "13px" }} />{" "}
                  </button>
                  <div class="dropdown-content1">
                    <a>
                      {" "}
                      <HashLink
                        to={"/dashbord/information/transaction"}
                        style={{
                          textDecoration: "none",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        TRANSACTIONS
                      </HashLink>{" "}
                    </a>
                    <a>
                      <HashLink
                        to={"/dashbord/information/salesstatsrics"}
                        style={{
                          textDecoration: "none",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        SALE STATSTICS
                      </HashLink>{" "}
                    </a>
                    <a>
                      <HashLink
                        to={"/dashbord/information/personaledownline"}
                        style={{
                          textDecoration: "none",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        PERSONALE DOWNLINE
                      </HashLink>{" "}
                    </a>
                  </div>
                </div>
              </Box>
              <Box px="10px">
                <HashLink
                  to={"/member"}
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <Button
                    sx={{
                      width: "80px",
                      height: "30px",
                      background: "#840a9f",
                      borderRadius: "6px",
                      color: "white",
                      px: "50px",
                      py: "20px",
                      "&:hover": {
                        background: "#840a9f",
                      },
                    }}
                  >
                    EDUCATION
                  </Button>
                </HashLink>
              </Box>
              <Box px="10px">
                <div class="dropdown1">
                  <button class="dropbtn1">
                    LEADERBOARD <KeyboardArrowDownIcon sx={{ pt: "13px" }} />{" "}
                  </button>
                  <div class="dropdown-content1">
                    <a>
                      {" "}
                      <HashLink
                        to={"/dashbord/leaderbord/allincome"}
                        style={{
                          textDecoration: "none",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        ALL TIME-INCOME
                      </HashLink>{" "}
                    </a>
                    <a>
                      <HashLink
                        to={"/dashbord/leaderbord/alltimepersonalesales"}
                        style={{
                          textDecoration: "none",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        ALL TIME PERSONALE-SALES
                      </HashLink>{" "}
                    </a>
                    <a>
                      <HashLink
                        to={"/dashbord/leaderbord/last30dayspersonalesales"}
                        style={{
                          textDecoration: "none",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        LAST 30-DAYS PERSONALE SALES
                      </HashLink>{" "}
                    </a>
                    <a>
                      <HashLink
                        to={"/dashbord/leaderbord/last30daysincome"}
                        style={{
                          textDecoration: "none",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        LAST 30-DAYS INCOME
                      </HashLink>{" "}
                    </a>
                    <a>
                      <HashLink
                        to={"/dashbord/leaderbord/topperformerbonus"}
                        style={{
                          textDecoration: "none",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        TOP PERFORMER BONUS
                      </HashLink>{" "}
                    </a>
                  </div>
                </div>
              </Box>
              <Box pt="6px" px="10px">
                <div class="dropdown1">
                  <button
                    style={{ display: "flex", alignItems: "center" }}
                    class="dropbtn1"
                  >
                    <Avatar
                      src="data:image/png;base64,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"
                      sx={{
                        border: "2px solid #ec9f40",
                        px: "5px",
                      }}
                    />
                    <span style={{ margin: "0px  10px" }}>Account #1</span>
                    <KeyboardArrowDownIcon
                      sx={{ pt: "0px", ml: "30px" }}
                    />{" "}
                  </button>
                  <div class="dropdown-content1">
                    <a>
                      {" "}
                      <HashLink
                        to={"/dashbord/account-information"}
                        style={{
                          textDecoration: "none",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        ACCOUNT INFORMATION
                      </HashLink>{" "}
                    </a>
                    <a>
                      <HashLink
                        to={"/dashbord/notifications"}
                        style={{
                          textDecoration: "none",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        NOTIFICATIONS
                      </HashLink>{" "}
                    </a>
                    <a>
                      <HashLink
                        to={"/dashbord/profile-settings"}
                        style={{
                          textDecoration: "none",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        PROFILE SETTINGS
                      </HashLink>{" "}
                    </a>
                    <a>
                      <HashLink
                        to={"/dashbord/affiliate-settings"}
                        style={{
                          textDecoration: "none",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        AFFILIATE SETTINGS
                      </HashLink>{" "}
                    </a>
                    <a>
                      <HashLink
                        to={"/dashbord/rank"}
                        style={{
                          textDecoration: "none",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        RANK
                      </HashLink>{" "}
                    </a>
                    <a>
                      <HashLink
                        to={"/login"}
                        style={{
                          textDecoration: "none",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                        onClick={disconnect}
                      >
                        LOGOUT
                      </HashLink>{" "}
                    </a>
                  </div>
                </div>
              </Box>
            </Stack>
          )}
        </Toolbar>
      </AppBar>

      {!matches1 && (
        <Drawer
          variant="permanent"
          // anchor="right"
          className="side_drawer"
          open={open}
          sx={{
            background: "#2E2F42",
          }}
        >
          <Box position={"relative"}>
            {!open ? (
              <>
                <IconButton
                  sx={{
                    position: "absolute",
                    right: "-10px",
                    top: "100px",
                    ...(open && { display: "none" }),
                    "&:hover": {
                      backgroundColor: "transparent",
                    },
                    zIndex: "10000000 !important ",
                  }}
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  edge="start"
                >
                  {/* <ChevronRightIcon /> */}
                  <Box
                    component={Paper}
                    sx={{
                      clipPath:
                        "polygon(0 25%, 50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%)",
                      backgroundColor: "#840a9f",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "38px",
                      height: "40px",
                      boxShadow: "5",
                      "&:hover": {
                        backgroundColor: "#840a9f",
                      },
                    }}
                  >
                    <MenuOpenIcon
                      sx={{
                        fontSize: "27px",
                        color: "white",
                        transform: "rotate(180deg)",
                      }}
                    />
                  </Box>
                </IconButton>
              </>
            ) : (
              <>
                <IconButton
                  sx={{
                    position: "absolute",
                    right: "-10px",
                    top: "100px",
                    "&:hover": {
                      backgroundColor: "transparent",
                    },
                    zIndex: "10000000 !important",
                  }}
                  onClick={handleDrawerClose}
                >
                  <Box
                    component={Paper}
                    sx={{
                      clipPath:
                        "polygon(0 25%, 50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%)",
                      backgroundColor: "#840a9f",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "38px",
                      height: "40px",
                      boxShadow: "5",
                      "&:hover": {
                        backgroundColor: "#840a9f",
                      },
                    }}
                  >
                    <MenuOpenIcon
                      sx={{
                        fontSize: "27px",
                        color: "white",
                        // transform: "rotate(180deg)",
                      }}
                    />
                  </Box>
                </IconButton>
              </>
            )}
          </Box>
          <Box
            py="20px"
            height={"100%"}
            sx={{
              background: "#2E2F42",
            }}
          >
            <Box display={!open ? "none" : ""} px="10px">
              <Stack pt="100px" alignItems={"center"} justifyContent="center">
                <img src={rank} alt="" />
              </Stack>
              <Box mt="5px">
                <Typography
                  variant="subtitle2"
                  textAlign={"center"}
                  color="#81758D"
                  sx={{
                    borderBottom: "1px #81758D solid",
                  }}
                >
                  RANK:
                  <span>
                    <HashLink
                      style={{
                        textDecoration: "none",
                        fontWeight: "600",
                        fontSize: "16px",
                        color: "white",
                        "&:hover": {
                          color: "#81758D",
                        },
                      }}
                      to={"/dashbord/rank"}
                    >
                      GOLD
                    </HashLink>
                  </span>
                </Typography>
                <Typography
                  variant="body2"
                  textAlign={"center"}
                  color="#81758D"
                >
                  <HashLink
                    style={{
                      textDecoration: "none",
                      color: "#81758D",
                    }}
                    to={"/dashbord/account-information"}
                  >
                    Affiliate Details
                  </HashLink>
                </Typography>
              </Box>
              <Box mt="30px">
                <Typography variant="h4" color="white">
                  Personal Statistics:
                </Typography>

                <Box ml="-20px" mt="20px">
                  <PersonaleTimeline />
                </Box>
              </Box>
              <Box mt="30px">
                <Typography variant="h4" color="white">
                  Global Statistics:
                </Typography>

                <Box ml="-20px" mt="20px">
                  <GlobalTimeline />
                </Box>
              </Box>
            </Box>
          </Box>
        </Drawer>
      )}

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          // backgroundColor: "red",
          // background:
          //   "linear-gradient(90deg, rgba(54,49,105,1) 0%, rgba(38,28,80,1) 35%)",
          width: {
            xs: "100%",
            sm: `calc(100% - ${drawerWidth}px)`,
            md: `calc(100% - ${drawerWidth}px)`,
          },
          height: "100%",
          zindex: "1 !important",
        }}
        // border="1px solid red"
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}
MiniDrawer.propTypes = { window: PropTypes.func };
