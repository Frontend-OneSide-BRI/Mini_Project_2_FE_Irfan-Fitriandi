const Loading = () => {
  return (
    <div className="absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2 ">
      <div className="border-t-transparent border-solid animate-spin  rounded-full border-black border-8 w-24 h-24"></div>
    </div>
  );
};

export default Loading;
