

const Layouts = (  {children}) => {
  return (
    <div>
        <header className="flex items-center justify-between bg-[#303030] py-2.5 px-5 mb-20 rounded-lg">
            <h1 className="text-white text-2xl font-semibold ">Book App</h1>
            <p className="text-white"><a href="botostart.ir" className="no-underline text-[#6552f4] font-semibold text-lg">Botostart</a> | React.js Full Course</p>
        </header>
        {children} 
        <footer className="text-center bg-[#303030] p-5 mt-20 rounded-lg">
            <p className="text-white">Developed by AMIR With 🤫</p>
        </footer>
    </div>
  )
}

export default Layouts