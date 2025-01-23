const Message = () => {
    return (
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src="https://cdn3.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png"
            />
          </div>
        </div>
        <div className="text-white bg-blue-500 chat-bubble">Hi! What is up?</div>
      </div>
    );
  };
  
  export default Message;
  