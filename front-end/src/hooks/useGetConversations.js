import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetConversations = () => {
	const [loading, setLoading] = useState(false);
	const [conversations, setConversations] = useState([]);

	useEffect(() => {
		const getConversations = async () => {
			setLoading(true);
			try {
				const res = await fetch('/api/user', {
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
					},
					credentials: 'include', // Ensures cookies are sent with the request.
				});

				if (!res.ok) {
					 // Log the status and statusText for more information
					console.error(`Error: ${res.status} ${res.statusText}`);
					// If the response status is not in the 200-299 range, throw an error.
					throw new Error("Failed to fetch conversations.");
				}

				const data = await res.json();
				setConversations(data);
			} catch (error) {
				console.error("Error fetching conversations:", error);
			} finally {
				setLoading(false);
			}
		};

		getConversations();
	}, []);

	return { loading, conversations };
};

export default useGetConversations;
