import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import 'react-pro-sidebar/dist/css/styles.css';
import { Box, IconButton, Typography, useTheme } from "@mui/material";
// import { Link } from "react-router-dom";
import { tokens } from "../../theme";
// import HomeOutlineIcon from "@mui/icons-material/HomeOutlined";
// import PeopleOutlineIcon from "@mui/icons-material/PeopleOutlined";
// import ContactsOutlineIcon from "@mui/icons-material/ContactsOutlined";
// import ReceiptOutlineIcon from "@mui/icons-material/ReceiptOutlined";
// import PersonOutlineIcon from "@mui/icons-material/PersonOutlined";
// import CalendarTodayOutlineIcon from "@mui/icons-material/CalendarTodayOutlined";
// import HelpOutlineIcon from "@mui/icons-material/HelpOutlined";
// import BarChartOutlineIcon from "@mui/icons-material/BarChartOutlined";
// import PieChartOutlineIcon from "@mui/icons-material/PieChartOutlined";
// import TimelineOutlineIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlineIcon from "@mui/icons-material/MenuOutlined";
// import MapOutlineIcon from "@mui/icons-material/MapOutlined";

export const Sidebar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    // const [selected, setSelected] = useState('Dashboard');

    return (
        <Box
            sx={{
                "& .pro-sidebar-inner": {
                    background: `${colors.primary[400]} !important`
                },
                "& .pro-icon-wrapper": {
                    background: `transparent !important`
                },
                "& .pro-inner-item": {
                    padding: "5px 35px 5px 20px !important"
                },
                "& .pro-inner-item:hover": {
                    color: "#868dfb !important"
                },
                "& .pro-menu-item.active": {
                    color: "6870fa !important"
                }
            }}
        >
            <ProSidebar collapsed={isCollapsed}>
                <Menu iconShape="square">
                    <MenuItem
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        icon={isCollapsed ? <MenuOutlineIcon/> : undefined}
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
                                <Typography variant="h3" color={colors.grey[100]}>
                                    ADMINIS
                                </Typography>
                                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                                    <MenuOutlineIcon/>
                                </IconButton>
                            </Box>
                        )}
                    </MenuItem>
                    {!isCollapsed && (
                        <Box mb="25px">
                            <Box display="flex" justifyContent="center" alignItems="center">
                                <img
                                    alt="profile-user"
                                    width="100px"
                                    height="100px"
                                    src={`../../images/user.png`}
                                    style={{cursor: "pointer", borderRadius: "50%"}}
                                />
                            </Box>

                            <Box textAlign="center">
                                <Typography
                                    variant="h2"
                                    color={colors.grey[100]}
                                    fontWeight="bold"
                                    sx={{m: "10px 0 0 0"}}
                                >
                                    Ed Roh
                                </Typography>
                                <Typography
                                    variant="h5"
                                    color={colors.greenAccent[500]}
                                >
                                    VP Admin
                                </Typography>
                            </Box>
                        </Box>
                    )}
                </Menu>
            </ProSidebar>
        </Box>
    );
}
