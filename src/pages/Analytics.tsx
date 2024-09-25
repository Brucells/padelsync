import { FirstChart } from "@/components/analytics/FirstChart";
import { ChartNetwork } from "lucide-react";

function Analytics() {
    return ( 
        <>
            <div className="flex flex-row items-center mb-2">
                <ChartNetwork strokeWidth={2} className="ml-2 mr-1 h-5" />
                <h1 className="text-lg font-semibold md:text-2xl">Analytics</h1>
            </div>
            <FirstChart />
        </>
     );
}

export default Analytics;