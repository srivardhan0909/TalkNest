const MessageSkeleton = () => {
	return (
		<>
			{/* Left side loading skeleton */}
			<div className="flex items-center gap-4 animate-pulse">
				{/* Avatar Skeleton */}
				<div className="w-12 h-12 rounded-full bg-gradient-to-r from-gray-300 to-gray-500"></div>

				{/* Message text skeleton */}
				<div className="flex flex-col gap-2">
					<div className="w-40 h-4 bg-gradient-to-r from-gray-300 to-gray-500 rounded-full"></div>
					<div className="w-36 h-4 bg-gradient-to-r from-gray-300 to-gray-500 rounded-full"></div>
				</div>
			</div>

			{/* Right side loading skeleton */}
			<div className="flex items-center justify-end gap-4 animate-pulse">
				{/* Message text skeleton */}
				<div className="flex flex-col gap-2">
					<div className="w-40 h-4 bg-gradient-to-r from-gray-300 to-gray-500 rounded-full"></div>
				</div>

				{/* Avatar Skeleton */}
				<div className="w-12 h-12 rounded-full bg-gradient-to-r from-gray-300 to-gray-500"></div>
			</div>
		</>
	);
};
export default MessageSkeleton;
