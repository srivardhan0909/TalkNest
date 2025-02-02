import { useSocketContext } from '../../context/SocketContext'
import useConversation from '../../zustand/useConversation'

const Conversation = ({ conversation, lastIdx }) => {
  const { selectedConversation, setSelectedConversation } = useConversation()

  const isSelected = selectedConversation?._id === conversation._id
  const { onlineUsers } = useSocketContext()
  const isOnline = onlineUsers.includes(conversation._id)

  // Example: You would get this from your messages state/context
  const unreadCount = conversation.unreadCount || 0
  console.log(conversation)

  return (
    <>
      <div
        className={`flex gap-2 items-center hover:bg-gradient-to-r from-blue-400 to-purple-400  rounded p-2 py-1 cursor-pointer
                ${
                  isSelected
                    ? 'bg-gradient-to-r from-[#3b82f6] to-[#a855f7] '
                    : ''
                }
            `}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div
          className={`relative w-12 h-12 rounded-full overflow-hidden ${
            isOnline ? 'border-2 border-green-500' : 'border-1 border-gray-400'
          }`}
        >
          <img
            src={conversation.profilePic}
            alt="user avatar"
            className="w-full h-full object-cover"
          />
          {isOnline && (
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
          )}
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex justify-between items-center gap-3">
            <div className="flex items-center gap-2">
              <p className={`font-bold ${isSelected ? 'text-white' : ''}`}>
                {conversation.fullname}
              </p>
              {unreadCount > 0 && (
                <span
                  className={`px-2 py-0.5 text-xs font-semibold rounded-full 
                  ${
                    isSelected
                      ? 'bg-white text-blue-500'
                      : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                  }`}
                >
                  {unreadCount}
                </span>
              )}
            </div>
            {isOnline && (
              <span className="text-xs text-green-500 font-medium bg-green-100 px-2 py-0.5 rounded-full">
                online
              </span>
            )}
          </div>
        </div>
      </div>

      {!lastIdx && <div className="h-[1px] py-0 my-0 bg-black divider" />}
    </>
  )
}
export default Conversation
