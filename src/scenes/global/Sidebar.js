// Desc: Sidebar for the app
// Path: src/scenes/global/Sidebar.js
// Compare this snippet from src/App.js:
import { useState } from "react";
// import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar"; //react side bar \
import { ProSidebar, Menu, MenuItem} from 'react-pro-sidebar';
// import "react-pro-sidebar/dist/css/styles.css"; //react side bar
import 'react-pro-sidebar/dist/css/styles.css';
import { Box, IconButton, Typography, useTheme } from "@mui/material"
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import HomeOutlined from "@mui/icons-material/HomeOutlined";
import PeopleOutlined from "@mui/icons-material/PeopleOutlined";
import ContactsOutlined from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlined from "@mui/icons-material/ReceiptOutlined";
import PersonOutlined from "@mui/icons-material/PersonOutlined";
import CalendarOutlined from "@mui/icons-material/CalendarOutlined";
import HelpOutlined from "@mui/icons-material/HelpOutlined";
import BarChartOutlined from "@mui/icons-material/BarChartOutlined";
import PieChartOutlined from "@mui/icons-material/PieChartOutlined";
import TimeLineOutlined from "@mui/icons-material/TimeLineOutlined";
import MenuOutlined from "@mui/icons-material/MenuOutlined";
import MapOutlined from "@mui/icons-material/MapOutlined";





const Sidebar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Dashboard");


    return (
        <Box
            sx={{
                "& .pro-sidebar-inner": {
                    background: `${colors.primary[400]} !important`
                },
                "& .pro-icon-wallpaper": {
                    backgroundColor: `transparent !important   `
                },
                "& .pro-inner-item": {
                    padding: " 5px 35px 5px 20px  !important"
                },
                "& .pro-inner-item:hover": {
                    color: "#868dfb !important "
                },
                "& .pro-menu-item.active": {
                    color: "#6870fa !important "
                },
            }}
        >

            <ProSidebar collapsed={isCollapsed}>
                <Menu iconShape="square">
                    {/* Logo and Menu icon */}
                    <MenuItem
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        icon={isCollapsed ? <MenuOutlined /> : undefined}
                        style={{
                            margin: "10px 0 20px 0",
                            color: colors.grey[100],
                        }}
                    >
                        {!isCollapsed && (
                            <Box
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"
                                ml="15px"
                            >
                                <Typography variant="h3" color={colors.grey[100]}>ADMINS</Typography>
                                <IconButton
                                    onClick={() => setIsCollapsed(!isCollapsed)}>
                                    <MenuOutlined />
                                </IconButton>
                            </Box>
                        )}

                    </MenuItem>

                    {/* User */}
                    {!isCollapsed && (
                        <Box mb="25px">
                            <Box
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                            >
                                <img
                                    alt="profile-user"
                                    width="400px"
                                    height="100px"
                                    src={`../../assets/user.jpg`}
                                    style={{ cursor: "pointer", borderRadius: "50%" }}
                                />
                            </Box>


                            <Box textAlign="center">
                                <Typography
                                    variant="h2"
                                    color={colors.grey[100]}
                                    fontWeight="bold"
                                    sx={{ m: "10px 0 0 0" }}>

                                    Sandeep Kumar Sahoo</Typography>

                                <Typography variant="h5" color={colors.greenAccent[500]}>Fancy Admin </Typography>

                            </Box>


                        </Box>
                    )}


                </Menu>

            </ProSidebar>

        </Box>
    )
}

export default Sidebar;
