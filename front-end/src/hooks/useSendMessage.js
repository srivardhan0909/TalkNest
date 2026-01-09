import { useState } from "react";
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";
import { getApiUrl, getAuthToken } from "../utils/api";

const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { setMessages, selectedConversation } = useConversation();

  const sendMessage = async (text) => {
    setLoading(true);

    try {
      if (!selectedConversation?._id) {
        throw new Error("No conversation selected");
      }

      if (!text.trim()) {
        throw new Error("Message cannot be empty");
      }

      const token = getAuthToken();
      if (!token) {
        throw new Error("Not authenticated");
      }

      // Send the message to the backend
      const res = await fetch(getApiUrl(`/api/message/send/${selectedConversation._id}`), {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        credentials: 'include',
        body: JSON.stringify({ text }),
      });

      // Check if the response status is OK
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Failed to send the message");
      }

      const data = await res.json();

      // Add the new message to the messages list
      setMessages((prevMessages) => [...(prevMessages || []), data]);
    } catch (error) {
      // Display the error to the user
      toast.error(error.message || "Something went wrong while sending the message");
    } finally {
      setLoading(false);
    }
  };

  return { sendMessage, loading };
};

export default useSendMessage;
