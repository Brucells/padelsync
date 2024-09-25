import { Outlet } from "react-router-dom";

function MainContent() {
    return (
        <div className="h-full overflow-y-auto px-2">
            <Outlet />
        </div>
    );
}

export default MainContent;