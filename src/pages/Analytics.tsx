import AccuracyCollapse from "@/components/analytics/accuracy/AccuracyCollapse";
import PositionCollapse from "@/components/analytics/postion/PositionCollapse";
import ServiceCollapse from "@/components/analytics/service/ServiceCollapse";
import { ChartNetwork } from "lucide-react";

function Analytics() {
    return (
        <>
            <div className="flex flex-row items-center my-2">
                <ChartNetwork strokeWidth={2} className="ml-2 mr-1 h-5" />
                <h1 className="text-lg font-semibold md:text-2xl">Analytics</h1>
            </div>

            <AccuracyCollapse />
            <PositionCollapse />
            <ServiceCollapse />
        </>
    );
}

export default Analytics;