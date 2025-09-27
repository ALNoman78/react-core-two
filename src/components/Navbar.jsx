

const Navbar = () => {
    const list = <>
        <li className='text-[1rem]'><a>Home</a></li>
        <li className='text-[1rem]'><a>About Us</a></li>
        <li className='text-[1rem]'><a>Projects</a></li>
        <li className='text-[1rem]'><a>Skill</a></li>
        <li className='text-[1rem]'><a>Education</a></li>
        <li className='text-[1rem]'><a>Certificates</a></li>
    </>
    return (
        <div className="navbar md:w-[1360px] mx-auto bg-white py-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {list}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Name</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {list}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Contact Me</a>
            </div>
        </div>
    )
}

Navbar.propTypes = {}

export default Navbar