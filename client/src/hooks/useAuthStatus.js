import { useAuthContext } from "../contexts/AuthContext.jsx";

export default function useAuthStatus() {
    const { user, isAuthenticated } = useAuthContext();

    return {
        isAuthenticated,
        isGuest: !isAuthenticated,
        email: user?.email || '',
        user,
    };
}