import { useEffect, useState, useCallback } from "react";
import toast from "react-hot-toast";
import { getApiUrl, getAuthToken } from "../utils/api";
import { useAuthContext } from "../context/AuthContext";

const useGetConversations = () => {
	const [loading, setLoading] = useState(false);
	const [conversations, setConversations] = useState([]);
	const { authUser } = useAuthContext();

	const fetchConversations = useCallback(async () => {
		const token = getAuthToken();
		
		// Don't fetch if no token available
		if (!token) {
			console.log("No auth token found, skipping conversations fetch");
			return;
		}
		
		setLoading(true);
		try {
			const res = await fetch(getApiUrl('/api/user'), {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': `Bearer ${token}`,
				},
				credentials: 'include',
			});

			if (!res.ok) {
				console.error(`Error: ${res.status} ${res.statusText}`);
				throw new Error("Failed to fetch conversations.");
			}

			const data = await res.json();
			setConversations(data);
		} catch (error) {
			console.error("Error fetching conversations:", error);
		} finally {
			setLoading(false);
		}
	}, []);

	useEffect(() => {
		if (authUser) {
			fetchConversations();
		}
	}, [authUser, fetchConversations]);

	return { loading, conversations, refetch: fetchConversations };
};

export default useGetConversations;
