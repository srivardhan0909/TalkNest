import { useEffect, useRef } from 'react'
import useGetMessages from '../../hooks/useGetMessages'
import MessageSkeleton from '../skeletons/MessageSkeleton'
import Message from './Message'
import useListenMessages from '../../hooks/useListenMessages'

const Messages = () => {
  const { messages, loading } = useGetMessages()
  useListenMessages()
  const lastMessageRef = useRef()

  useEffect(() => {
    if (messages.length > 0) {
      setTimeout(() => {
        lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }, [messages])

  return (
    <div className="flex-1 px-4 overflow-auto text-black">
      {messages.length > 0 ? null : (
        <div className="flex items-center justify-center ">
          <p className="text-center text-gray-700">Send a message to start the conversation</p>
        </div>
      )}

      {/* Show skeleton loaders */}
      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
      {/* Show messages */}
      {!loading &&
        messages.length > 0 &&
        messages.map((message, idx) => (
          <div
            key={message._id || idx}
            ref={idx === messages.length - 1 ? lastMessageRef : null}
          >
            <Message message={message} />
          </div>
        ))}

      {/* Show no message text */}
      
    </div>
  )
}

export default Messages
