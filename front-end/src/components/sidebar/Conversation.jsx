import { useSocketContext } from '../../context/SocketContext'
import useConversation from '../../zustand/useConversation'

const Conversation = ({ conversation, lastIdx }) => {
  const { selectedConversation, setSelectedConversation } = useConversation()

  const isSelected = selectedConversation?._id === conversation._id
  const { onlineUsers } = useSocketContext()
  const isOnline = onlineUsers.includes(conversation._id)
  // console.log(isOnline)

  return (
    <>
      <div
        className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer
                ${isSelected ? 'bg-sky-500' : ''}
            `}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div
          className={`relative w-12 h-12 rounded-full overflow-hidden ${
            isOnline ? 'border-2 border-green-500' : 'border-3 border-gray-400'
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
          <div className="flex justify-between gap-3">
            <p className="font-bold text-black">{conversation.fullname}</p>
          </div>
        </div>
      </div>

      {!lastIdx && <div className="h-[1px] py-0 my-0 bg-black divider" />}
    </>
  )
}
export default Conversation
