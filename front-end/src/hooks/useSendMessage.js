import { useState } from "react";
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";

const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  const sendMessage = async (text) => {
    setLoading(true);

    try {
      if (!selectedConversation?._id) {
        throw new Error("No conversation selected");
      }

      if (!text.trim()) {
        throw new Error("Message cannot be empty");
      }

      // Send the message to the backend
      const res = await fetch(`/api/message/send/${selectedConversation._id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
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
      setMessages([...messages, data]);
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
