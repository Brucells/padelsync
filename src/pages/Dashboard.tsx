import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Diameter, DollarSign, Dribbble, LayoutDashboard, Timer, TrendingDown, TrendingUp, Trophy } from "lucide-react";

function Dashboard() {
    return (
        <>
            <div className="flex flex-row items-center mb-2">
                <LayoutDashboard strokeWidth={2} className="ml-2 mr-1 h-5" />
                <h1 className="text-lg font-semibold md:text-2xl">Dashboard</h1>
            </div>

            <div className=" ">

                <Card className="bg-gradient-to-r from-accent mb-2">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Matchs</CardTitle>
                        <Dribbble strokeWidth={1.25} className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">12</div>
                    </CardContent>
                </Card>

                <Card className="bg-gradient-to-r from-accent mb-2">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Temps de jeu</CardTitle>
                        <Timer strokeWidth={1.25} className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="flex w-full items-center gap-2">
                            <div className="grid flex-1 auto-rows-min gap-0.5">
                                <div className="flex items-baseline gap-1 text-2xl font-bold tabular-nums leading-none">
                                    2
                                    <span className="text-sm font-normal text-muted-foreground">
                                        jrs
                                    </span>
                                </div>
                            </div>
                            <Separator orientation="vertical" className="mx-0 h-8 w-px" />
                            <div className="grid flex-1 auto-rows-min gap-0.5">
                                <div className="flex items-baseline gap-1 text-2xl font-bold tabular-nums leading-none">
                                    18
                                    <span className="text-sm font-normal text-muted-foreground">
                                        hrs
                                    </span>
                                </div>
                            </div>
                            <Separator orientation="vertical" className="mx-0 h-8 w-px" />
                            <div className="grid flex-1 auto-rows-min gap-0.5">
                                <div className="flex items-baseline gap-1 text-2xl font-bold tabular-nums leading-none">
                                    14
                                    <span className="text-sm font-normal text-muted-foreground">
                                        min
                                    </span>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="bg-gradient-to-r from-accent to-green-50 mb-2">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium flex flex-row items-center">
                            PadelSync Elo
                            <TrendingUp className="ml-2 h-4 w-4 text-success" />
                        </CardTitle>
                        <Diameter strokeWidth={1.25} className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">1.22</div>
                        <p className="text-xs text-muted-foreground">
                            + 0.11 depuis le dernier match
                        </p>
                    </CardContent>
                </Card>

                <Card className="bg-gradient-to-r from-accent to-red-50 mb-2">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium flex flex-row items-center">
                            Winrate
                            <TrendingDown className="ml-2 h-4 w-4 text-destructive" />
                        </CardTitle>
                        <Trophy strokeWidth={1.25} className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">67%</div>
                        <p className="text-xs text-muted-foreground">
                            -12% par rapport au mois dernier
                        </p>
                    </CardContent>
                </Card>

                <Card className="bg-gradient-to-r from-accent to-red-50 mb-2">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium flex flex-row items-center">
                            Dépenses du mois
                            <TrendingUp className="ml-2 h-4 w-4 text-destructive" />
                        </CardTitle>
                        <DollarSign strokeWidth={1.25} className="h-4 w-4 text-muted-foreground" />

                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">46.89€</div>
                        <p className="text-xs text-muted-foreground">
                            +20.1% par rapport au mois dernier
                        </p>
                    </CardContent>
                </Card>


                <Card className="bg-gradient-to-r from-accent mb-2">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium flex flex-row items-center">
                            Dépenses totales

                        </CardTitle>
                        <DollarSign strokeWidth={1.25} className="h-4 w-4 text-muted-foreground" />

                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">228.61€</div>

                    </CardContent>
                </Card>

            </div>
        </>
    );
}

export default Dashboard;