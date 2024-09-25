import { Cctv, ChartNetwork, ChartSpline, Dribbble, Home } from "lucide-react";
import { NavLink } from "react-router-dom";

function MobileNavbar() {

    const isActiveIconClassName = "text-primary-foreground"
    const isNotActiveIconClassName = ""
    const isActiveNavLinkClassName = "mx-auto py-1 px-6 bg-primary rounded-full flex items-center"
    const isNotActiveNavLinkClassName = "mx-auto py-1 px-6 bg-accent rounded-full flex items-center"

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


                {/* <div className="grid place-content-center grid-cols-5">
                    <div>
                        <a
                            href="#"
                            className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground mx-auto"
                        >
                            <Home className="h-4 w-4 transition-all group-hover:scale-110" />
                        </a>
                    </div>
                    <div>
                        <a
                            href="#"
                            className="mx-auto flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                        >
                            <Dribbble className="h-5 w-5" />
                        </a>
                    </div>
                    <div>
                        <a
                            href="#"
                            className="mx-auto flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                        >
                            <ChartArea className="h-5 w-5" />
                        </a>
                    </div>
                    <div>
                        <a
                            href="#"
                            className="mx-auto flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                        >
                            <ChartBar className="h-5 w-5" />
                        </a>
                    </div>
                    <div>
                        <a
                            href="#"
                            className="mx-auto flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                        >
                            <Cctv className="h-5 w-5" />
                        </a>
                    </div>




                </div> */}
            </div>
        </div>
    );
}

export default MobileNavbar;