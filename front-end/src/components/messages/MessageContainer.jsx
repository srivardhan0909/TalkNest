import { useEffect } from 'react'
import useConversation from '../../zustand/useConversation'
import MessageInput from './MessageInput'
import Messages from './Messages'
import { TiMessages } from 'react-icons/ti'
import { useAuthContext } from '../../context/AuthContext'

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation()

  useEffect(() => {
    // Cleanup function (unmounts)
    return () => setSelectedConversation(null)
  }, [setSelectedConversation])

  return (
    <div className="flex flex-col h-full">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          {/* Header */}
          <div className="px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-500 shadow-md">
            <span className="text-white font-medium">To: </span>
            <span className="text-white font-semibold">
              {selectedConversation.fullname}
            </span>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto bg-gray-50">
            <Messages />
          </div>

          {/* Message Input */}
          <MessageInput />
        </>
      )}
    </div>
  )
}

const NoChatSelected = () => {
  const { authUser } = useAuthContext()
  return (
    <div className="flex items-center justify-center w-full h-full bg-gray-50">
      <div className="flex flex-col items-center gap-4 px-6 font-semibold text-center text-gray-800 sm:text-lg md:text-xl">
        <p className="text-lg sm:text-xl">Welcome 👋 {authUser.fullname} ❄</p>
        <p className="text-gray-500">Select a chat to start messaging</p>
        <TiMessages className="text-4xl md:text-6xl text-blue-600 transition duration-300 hover:scale-110" />
      </div>
    </div>
  )
}

export default MessageContainer
