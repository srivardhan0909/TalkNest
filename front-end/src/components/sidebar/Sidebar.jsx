import Conversations from './Conversations'
import LogoutButton from './LogoutButton'
import SearchInput from './SearchInput'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { MessageSquare } from 'lucide-react'

const Sidebar = () => {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="flex flex-col h-full">
      {/* Header with gradient */}
      <div className="px-4 py-3 w-[339px] bg-gradient-to-r from-blue-500 to-purple-500  rounded-t-2xl">
	  <h1 className="text-2xl font-bold text-white flex items-center gap-2">
          <MessageSquare className="w-16 h-8 " />
          TalkNest
        </h1>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col p-4">
        <SearchInput />
        <div className="px-3 divider"></div>
        <Conversations />
        <LogoutButton />
      </div>
    </div>
  )
}

export default Sidebar
