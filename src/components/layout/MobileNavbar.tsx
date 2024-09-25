import { Cctv, ChartArea, ChartBar, Dribbble, Home } from "lucide-react";

function MobileNavbar() {
    return (
        <div className="w-full">
            <div className="block py-1 md:hidden">
                <div className="grid place-content-center grid-cols-5">
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




                </div>
            </div>
        </div>
    );
}

export default MobileNavbar;