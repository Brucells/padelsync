import { Crosshair } from "lucide-react"
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts"

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A radar chart with a grid filled"

const chartData = [
    { shot: "Vibora", desktop: 22 },
    { shot: "Smash", desktop: 48 },
    { shot: "Chiquita", desktop: 17 },
    { shot: "Bandeja", desktop: 12 },
    { shot: "All", desktop: 24 },
]

const chartConfig = {
    desktop: {
        label: "%",
        color: "hsl(var(--primary))",
    },
} satisfies ChartConfig

export function SpecialAccuracyChart() {
    return (
        <Card className="bg-gradient-to-b from-accent mb-3">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Précision des coups spéciaux</CardTitle>
                <Crosshair strokeWidth={1.25} className="h-4 w-4 text-muted-foreground" />
            </CardHeader>

            <CardContent className="pb-0">
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square max-h-[300px]"
                >
                    <RadarChart data={chartData}>
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <PolarGrid gridType="circle" className="" />
                        <PolarAngleAxis dataKey="shot" />
                        <Radar
                            dataKey="desktop"
                            fill="var(--color-desktop)"
                            fillOpacity={0.6}
                            dot={{
                                r: 4,
                                fillOpacity: 1,
                            }}
                        />
                    </RadarChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}
