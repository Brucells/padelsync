function Navbar() {
    return ( 
        <div className="hidden h-full flex-[0.3] md:block">
            <div className="grid h-full place-content-center bg-blue-200">
                <h1 className="text-xl">Left</h1>
                <h1 className="text-xl">Sidebar</h1>
            </div>
        </div>
     );
}

export default Navbar;