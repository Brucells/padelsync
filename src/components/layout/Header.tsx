import { Diameter, Settings2 } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

function Header() {
    return (
        <div className="sticky top-0 w-full">
            <div className="flex items-center py-3 px-4">
                <Avatar className="h-6 w-6">
                    <AvatarImage src="https://github.com/shadczdzdn.png" />
                    <AvatarFallback>J</AvatarFallback>
                </Avatar>
                <div className="ml-auto flex items-center">
                    <Diameter strokeWidth={1.25} className="h-4 w-4 mr-1" />
                    <h2 className="ml-auto">PadelSync</h2>
                </div>
                <Settings2 strokeWidth={1.25} className="ml-auto h-5 w-5" />

            </div>
        </div>
    );
}

export default Header;