import { useState } from 'react'
import { BsSend } from 'react-icons/bs'
import useSendMessage from '../../hooks/useSendMessage'

const MessageInput = () => {
  const [message, setMessage] = useState('')
  const { loading, sendMessage } = useSendMessage()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!message) return
    await sendMessage(message)
    setMessage('')
  }

  return (
    <form
      className="px-4 py-3 border-t border-gray-200 bg-white"
      onSubmit={handleSubmit}
    >
      <div className="relative flex items-center">
        <input
          type="text"
          className="w-full px-4 py-2.5 text-gray-900 bg-gray-50 border-2 border-gray-400 rounded-full focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className="absolute right-2 p-2 text-blue-600 hover:text-blue-700 transition-colors duration-300"
          disabled={loading}
        >
          {loading ? (
            <div className="w-5 h-5 border-t-2 border-blue-500 border-solid rounded-full animate-spin"></div>
          ) : (
            <BsSend className="w-5 h-5" />
          )}
        </button>
      </div>
    </form>
  )
}

export default MessageInput
