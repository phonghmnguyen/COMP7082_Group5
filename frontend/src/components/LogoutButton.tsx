import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@/components/ui/button"

const LogoutButton = ({ text }: { text: string }) => {
    const { logout } = useAuth0();

    return (
        <Button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
            {text}
        </Button>
    );
};

export default LogoutButton;