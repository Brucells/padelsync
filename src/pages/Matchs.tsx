import { DatePickerWithRange } from "@/components/matchs/DateRangePicker";
import { Dribbble } from "lucide-react";

function Matchs() {
    return (
        <>
            <div className="flex flex-row items-center mb-2">
                <Dribbble strokeWidth={2} className="ml-2 mr-1 h-5" />
                <h1 className="text-lg font-semibold md:text-2xl">Matchs</h1>
            </div>
            <div className="flex flex-row items-center">
                Dates
                <DatePickerWithRange className="ml-auto" />
            </div>
        </>
    );
}

export default Matchs;