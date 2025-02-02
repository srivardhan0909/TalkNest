import { useState } from 'react'
import { IoSearchSharp } from 'react-icons/io5'
import { IoClose } from 'react-icons/io5'
import { motion } from 'framer-motion'
import useConversation from '../../zustand/useConversation'
import useGetConversations from '../../hooks/useGetConversations'
import toast from 'react-hot-toast'

const SearchInput = () => {
  const [search, setSearch] = useState('')
  const { setSelectedConversation } = useConversation()
  const { conversations } = useGetConversations()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!search) return
    if (search.length < 3) {
      return toast.error('Search term must be at least 3 characters long')
    }

    const conversation = conversations.find((c) =>
      c.fullname.toLowerCase().includes(search.toLowerCase())
    )

    if (conversation) {
      setSelectedConversation(conversation)
      setSearch('')
    } else {
      toast.error('No such user found!')
    }
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="flex items-center gap-2 text-black bg-white-800 px-4 py-2 rounded-full shadow-lg border border-gray-300"
      initial={{ opacity: -10, y: -10 }}
      animate={{ opacity: 1, y: 1 }}
      transition={{ duration: 0.3 }}
    >
      <input
        type="text"
        placeholder="Search..."
        className="flex-1 px-4 py-2 text-black bg-transparent  focus:outline-none placeholder-gray-600"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Clear Button (Optional) */}
      {search && (
        <motion.button
          type="button"
          className="p-1 text-gray-400 hover:text-white"
          whileHover={{ scale: 1.2 }}
          onClick={() => setSearch('')}
        >
          <IoClose className="w-5 h-5" />
        </motion.button>
      )}

      <motion.button
        type="submit"
        className="p-2 text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <IoSearchSharp className="w-5 h-5" />
      </motion.button>
    </motion.form>
  )
}

export default SearchInput
