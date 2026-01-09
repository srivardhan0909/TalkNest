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
	
	// Fallback avatar using DiceBear - also handles broken avatar.iran.liara.run URLs
	const getProfilePic = () => {
		const pic = fromMe ? authUser?.profilePic : selectedConversation?.profilePic;
		const name = fromMe ? authUser?.username : selectedConversation?.username;
		// Check if pic is missing or uses the broken avatar service
		if (!pic || pic.includes('avatar.iran.liara.run')) {
			return `https://api.dicebear.com/7.x/initials/svg?seed=${name || 'default'}&backgroundColor=3b82f6,8b5cf6,06b6d4,10b981,f59e0b&fontFamily=Arial&fontWeight=600`;
		}
		return pic;
	};
	const profilePic = getProfilePic();
	
	const bubbleBgColor = fromMe ? "bg-blue-500" : "bg-purple-500";
  // console.log(authUser)
  // console.log(localStorage.getItem("profilePic"));
  // console.log(localStorage.getItem("chat-user"));



	const shakeClass = message.shouldShake ? "shake" : "";

  return (
    <div className={`flex ${chatClassName} mb-4 mt-3`}>
      <div className='flex-shrink-0'>
        <img className='w-10 h-10 rounded-full' alt='Profile' src={profilePic} />
      </div>
      {/* <p className='text-xs text-gray-500'>{message.senderId === authUser._id ? "You" : message.senderId}</p> */}
      <div className={`ml-3 p-3 rounded-lg ${bubbleBgColor} ${shakeClass} text-white`}>
        <p>{message.text}</p>
        <span className='block mt-1 text-[10px]  text-black'>{formattedTime}</span>
      </div>
    </div>
  );
};
export default Message;