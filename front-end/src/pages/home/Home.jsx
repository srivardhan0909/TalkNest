import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/Sidebar/Sidebar";

const Home = () => {
  return (
    <div className='flex flex-col h-screen overflow-hidden bg-gray-400 bg-opacity-0 rounded-lg justiy-center md:flex-row '>
      <Sidebar className='w-full h-full md:w-3/4' />
      <MessageContainer className='w-full h-full md:w-3/4' />
    </div>
  );
};
export default Home;