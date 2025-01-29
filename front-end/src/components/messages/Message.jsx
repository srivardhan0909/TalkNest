import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";
import useConversation from "../../zustand/useConversation";

const Message = ({ message }) => {
  // console.log(message)
	const { authUser } = useAuthContext();
	const { selectedConversation } = useConversation();
	const fromMe = message.senderId === authUser._id;
	const formattedTime = extractTime(message.createdAt);
  const chatClassName = fromMe ? "justify-end" : "justify-start";
	const profilePic = fromMe ? authUser?.profilePic : selectedConversation?.profilePic;
	const bubbleBgColor = fromMe ? "bg-blue-500" : "bg-gray-400";
  // console.log(authUser)
  // console.log(localStorage.getItem("profilePic"));
  // console.log(localStorage.getItem("chat-user"));



	const shakeClass = message.shouldShake ? "shake" : "";

  return (
    <div className={`flex ${chatClassName} mb-4`}>
      <div className='flex-shrink-0'>
        <img className='w-10 h-10 rounded-full' alt='Profile' src={profilePic} />
      </div>
      {/* <p className='text-xs text-gray-500'>{message.senderId === authUser._id ? "You" : message.senderId}</p> */}
      <div className={`ml-3 p-3 rounded-lg ${bubbleBgColor} ${shakeClass} text-white`}>
        <p>{message.text}</p>
        <span className='block mt-1 text-[10px] text-black'>{formattedTime}</span>
      </div>
    </div>
  );
};
export default Message;