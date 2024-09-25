import { Cctv, ChartNetwork, ChartSpline, Dribbble, Home } from "lucide-react";
import { NavLink } from "react-router-dom";

function MobileNavbar() {

    const isActiveIconClassName = "text-primary-foreground"
    const isNotActiveIconClassName = ""
    const isActiveNavLinkClassName = "mx-auto py-1 px-4 bg-primary rounded-full flex items-center"
    const isNotActiveNavLinkClassName = "mx-auto py-1 px-4 rounded-full flex items-center"

    return (
        <div className="w-full">
            <div className="block md:hidden">
                <div className="flex items-center px-4 py-2">

                    <NavLink to="/" className={({ isActive }) => isActive ? isActiveNavLinkClassName : isNotActiveNavLinkClassName }>
                        {({ isActive }) => (
                            <Home strokeWidth={1.25} className={isActive ? isActiveIconClassName : isNotActiveIconClassName} />
                        )}
                    </NavLink>

                    <NavLink to="/matchs" className={({ isActive }) => isActive ? isActiveNavLinkClassName : isNotActiveNavLinkClassName }>
                        {({ isActive }) => (
                            <Dribbble strokeWidth={1.25} className={isActive ? isActiveIconClassName : isNotActiveIconClassName} />
                        )}
                    </NavLink>

                    <NavLink to="/analytics" className={({ isActive }) => isActive ? isActiveNavLinkClassName : isNotActiveNavLinkClassName }>
                        {({ isActive }) => (
                            <ChartNetwork strokeWidth={1.25} className={isActive ? isActiveIconClassName : isNotActiveIconClassName} />
                        )}
                    </NavLink>

                    <NavLink to="/progression" className={({ isActive }) => isActive ? isActiveNavLinkClassName : isNotActiveNavLinkClassName }>
                        {({ isActive }) => (
                            <ChartSpline strokeWidth={1.25} className={isActive ? isActiveIconClassName : isNotActiveIconClassName} />
                        )}
                    </NavLink>

                    <NavLink to="/videos" className={({ isActive }) => isActive ? isActiveNavLinkClassName : isNotActiveNavLinkClassName }>
                        {({ isActive }) => (
                            <Cctv strokeWidth={1.25} className={isActive ? isActiveIconClassName : isNotActiveIconClassName} />
                        )}
                    </NavLink>

                </div>
            </div>
        </div>
    );
}

export default MobileNavbar;