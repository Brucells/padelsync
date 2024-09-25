import { BasicAccuracyChart } from "@/components/analytics/BasicAccuracyChart";
import { SpecialAccuracyChart } from "@/components/analytics/SpecialAccuracyChart";
import { ChartNetwork } from "lucide-react";

function Analytics() {
    return ( 
        <>
            <div className="flex flex-row items-center mb-2">
                <ChartNetwork strokeWidth={2} className="ml-2 mr-1 h-5" />
                <h1 className="text-lg font-semibold md:text-2xl">Analytics</h1>
            </div>
            <BasicAccuracyChart />
            <SpecialAccuracyChart />
        </>
     );
}

export default Analytics;