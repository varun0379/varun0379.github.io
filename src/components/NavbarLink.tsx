import { Button } from "@mui/material";

export default function NavBarLink({children} : any) {
    return (
        <>
            <Button color="inherit" style={{fontSize: "1.5rem", fontWeight: "bold"}}>
                {children}
            </Button>
        </>
    );
}