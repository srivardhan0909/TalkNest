import { motion } from "framer-motion";
import useGetConversations from "../../hooks/useGetConversations";
import Conversation from "./Conversation";

const Conversations = () => {
	const { loading, conversations } = useGetConversations();

	return (
		<motion.div
			className="flex flex-col py-2 overflow-auto max-h-[calc(100vh-150px)] scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900"
			initial={{ opacity: 0, y: 10 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.3 }}
		>
			{/* Animate each conversation */}
			{conversations.map((conversation, idx) => (
				<motion.div
					key={conversation._id}
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: idx * 0.05, duration: 0.3 }}
				>
					<Conversation
						conversation={conversation}
						lastIdx={idx === conversations.length - 1}
					/>
				</motion.div>
			))}

			{/* Animated Loading Spinner */}
			{loading && (
				<motion.span
					className="mx-auto loading loading-spinner text-sky-500"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.3, repeat: Infinity }}
				></motion.span>
			)}
		</motion.div>
	);
};

export default Conversations;
