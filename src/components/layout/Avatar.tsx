export function Avatar() {
  return (
    <button className="cursor-pointer bg-gradient-start/10 hover:bg-gradient-start md:hover:bg-transparent p-2 md:bg-transparent md:p-0 w-full md:w-auto  flex gap-3 items-center">
      <div className="h-10 w-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 overflow-hidden">
        <img
          src="https://randomuser.me/api/portraits/women/44.jpg"
          alt="User avatar"
          className="h-full w-full object-cover"
        />
      </div>
      <span className="md:hidden text-2xl text-white font-semibold">Mill Jones</span>
    </button>
  );
}
