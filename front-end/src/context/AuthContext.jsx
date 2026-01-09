import { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => {
	return useContext(AuthContext);
};

// Helper to fix broken avatar URLs
const fixBrokenAvatar = (user) => {
	if (!user) return null;
	if (user.profilePic && user.profilePic.includes('avatar.iran.liara.run')) {
		return {
			...user,
			profilePic: `https://api.dicebear.com/7.x/initials/svg?seed=${user.username || 'default'}&backgroundColor=3b82f6,8b5cf6,06b6d4,10b981,f59e0b&fontFamily=Arial&fontWeight=600`
		};
	}
	return user;
};

export const AuthContextProvider = ({ children }) => {
	const [authUser, setAuthUser] = useState(() => {
		const storedUser = JSON.parse(localStorage.getItem("chat-user")) || null;
		return fixBrokenAvatar(storedUser);
	});

	// Update localStorage when authUser changes with fixed avatar
	useEffect(() => {
		if (authUser) {
			const fixedUser = fixBrokenAvatar(authUser);
			localStorage.setItem("chat-user", JSON.stringify(fixedUser));
		}
	}, [authUser]);

	return <AuthContext.Provider value={{ authUser, setAuthUser }}>{children}</AuthContext.Provider>;
};