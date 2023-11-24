import { AppBar, Grid, Toolbar } from "@mui/material";
import NavBarLink from "./NavbarLink";

export default function NavBar({children} : any) {
    return (
        <>
        <AppBar position="absolute" color="transparent" className="flex fixed w-screen" elevation={3}>
            <Toolbar sx={{justifyContent:"center"}}>
                <Grid container>
                    <Grid item xs>
                        <NavBarLink >
                            Home
                        </NavBarLink>
                    </Grid>
                    <Grid item xs>
                        <NavBarLink>
                            About
                        </NavBarLink>
                    </Grid>
                    <Grid item xs>
                        <NavBarLink >
                            Experience
                        </NavBarLink>
                    </Grid>
                    <Grid item xs>
                        <NavBarLink>
                            Projects
                        </NavBarLink>
                    </Grid>
                    <Grid item xs>
                        <NavBarLink>
                            Contact
                        </NavBarLink>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
        </>
    );
}