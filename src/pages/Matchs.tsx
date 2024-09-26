import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Award, Calendar, ChevronsRight, Clock, Download, Dribbble, Plus, Star, Trophy } from "lucide-react";

function Matchs() {
    return (
        <>
            
            <div className="flex flex-row items-center justify-between mb-2 sticky top-0 bg-white z-10 opacity-65">
                <div className="flex flex-row items-center">
                    <Dribbble strokeWidth={2} className="ml-2 mr-1 h-5" />
                    <h1 className="text-lg font-semibold md:text-2xl">Matchs</h1>
                </div>
                <div className="">
                    <Button variant={'ghost'} className="">
                        <Plus strokeWidth={2} className="h-5" /> 
                    </Button>
                </div>
            </div>

            <Card className="bg-gradient-to-r from-green-50 mb-2 border-l-8 border-l-green-200">
                <div className="flex flex-row items-center justify-between pl-2 pr-1 pt-1">
                    <div className="flex items-center">
                        <Trophy strokeWidth={0.8} className="h-3 text-green-500" />
                        <span className="text-xs font-medium text-green-500">Victoire</span>
                    </div>
                    <div className="flex items-center">
                        <Calendar strokeWidth={0.8} className="h-3" />
                        <span className="text-xs font-normal text-muted-foreground">26 septembre</span>
                    </div>
                    <div className="flex items-center">
                        <Clock strokeWidth={0.8} className="h-3" />
                        <span className="text-xs font-normal text-muted-foreground"> 11:30</span>
                    </div>
                    <ChevronsRight strokeWidth={0.8} className="h-5" />
                </div>
                <div className="flex flex-row items-center justify-between px-2 py-2">
                    <div className="flex flex-col gap-1">
                        <div className="flex flex-row items-center gap-2">
                            <Avatar className="h-5 w-5">
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>J</AvatarFallback>
                            </Avatar>
                            <span className="text-xs font-medium text-primary">Jérémy</span>
                        </div>
                        <div className="flex flex-row items-center gap-2">
                            <Avatar className="h-5 w-5">
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>J</AvatarFallback>
                            </Avatar>
                            <div className="flex flex-row items-center">
                                <span className="text-xs font-medium text-muted-foreground">Momo</span>
                                <Star strokeWidth={0.8} className="h-3" />
                            </div>
                        </div>
                    </div>


                    <div className="flex flex-row items-center ">
                        <div className="flex flex-col border-r-2 px-2">
                            <span className="text-md font-medium text-green-500">6</span>
                            <span className="text-xs font-normal text-muted-foreground">4</span>
                            <span className="text-md font-medium text-green-500">6</span>
                        </div>
                        <div className="flex flex-col px-2">
                            <span className="text-xs font-normal text-muted-foreground">4</span>
                            <span className="text-md font-medium text-green-500">6</span>
                            <span className="text-xs font-normal text-muted-foreground">3</span>
                        </div>
                    </div>


                    <div className="flex flex-col gap-1">
                        <div className="flex flex-row items-center gap-2 justify-end">
                            <div className="flex flex-row items-center">
                                <Award strokeWidth={0.8} className="h-3" />
                                <span className="text-xs font-medium text-muted-foreground">Vassily</span>
                            </div>
                            <Avatar className="h-5 w-5">
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>J</AvatarFallback>
                            </Avatar>
                        </div>
                        <div className="flex flex-row items-center gap-2 justify-end">
                            <span className="text-xs font-medium text-muted-foreground">Clément</span>
                            <Avatar className="h-5 w-5">
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>J</AvatarFallback>
                            </Avatar>
                        </div>
                    </div>
                </div>
            </Card>



            <Card className="bg-gradient-to-r from-green-50 mb-2 border-l-8 border-l-green-200">
                <div className="flex flex-row items-center justify-between pl-2 pr-1 pt-1">
                    <div className="flex items-center">
                        <Trophy strokeWidth={0.8} className="h-3 text-green-500" />
                        <span className="text-xs font-medium text-green-500">Victoire</span>
                    </div>
                    <div className="flex items-center">
                        <Calendar strokeWidth={0.8} className="h-3" />
                        <span className="text-xs font-normal text-muted-foreground">19 septembre</span>
                    </div>
                    <div className="flex items-center">
                        <Clock strokeWidth={0.8} className="h-3" />
                        <span className="text-xs font-normal text-muted-foreground"> 16:30</span>
                    </div>
                    <ChevronsRight strokeWidth={0.8} className="h-5" />
                </div>
                <div className="flex flex-row items-center justify-between px-2 py-2">
                    <div className="flex flex-col gap-1">
                        <div className="flex flex-row items-center gap-2">
                            <Avatar className="h-5 w-5">
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>J</AvatarFallback>
                            </Avatar>
                            <span className="text-xs font-medium text-primary">Jérémy</span>
                        </div>
                        <div className="flex flex-row items-center gap-2">
                            <Avatar className="h-5 w-5">
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>J</AvatarFallback>
                            </Avatar>
                            <div className="flex flex-row items-center">
                                <span className="text-xs font-medium text-muted-foreground">Momo</span>
                                <Star strokeWidth={0.8} className="h-3" />
                            </div>
                        </div>
                    </div>


                    <div className="flex flex-row items-center ">
                        <div className="flex flex-col border-r-2 px-2">
                            <span className="text-md font-medium text-green-500">6</span>
                            <span className="text-xs font-normal text-muted-foreground">4</span>
                            <span className="text-md font-medium text-green-500">6</span>
                        </div>
                        <div className="flex flex-col px-2">
                            <span className="text-xs font-normal text-muted-foreground">4</span>
                            <span className="text-md font-medium text-green-500">6</span>
                            <span className="text-xs font-normal text-muted-foreground">3</span>
                        </div>
                    </div>


                    <div className="flex flex-col gap-1">
                        <div className="flex flex-row items-center gap-2 justify-end">
                            <div className="flex flex-row items-center">
                                <Award strokeWidth={0.8} className="h-3" />
                                <span className="text-xs font-medium text-muted-foreground">Vassily</span>
                            </div>
                            <Avatar className="h-5 w-5">
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>J</AvatarFallback>
                            </Avatar>
                        </div>
                        <div className="flex flex-row items-center gap-2 justify-end">
                            <span className="text-xs font-medium text-muted-foreground">Clément</span>
                            <Avatar className="h-5 w-5">
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>J</AvatarFallback>
                            </Avatar>
                        </div>
                    </div>
                </div>
            </Card>


            <Card className="bg-gradient-to-r from-green-50 mb-2 border-l-8 border-l-green-200">
                <div className="flex flex-row items-center justify-between pl-2 pr-1 pt-1">
                    <div className="flex items-center">
                        <Trophy strokeWidth={0.8} className="h-3 text-green-500" />
                        <span className="text-xs font-medium text-green-500">Victoire</span>
                    </div>
                    <div className="flex items-center">
                        <Calendar strokeWidth={0.8} className="h-3" />
                        <span className="text-xs font-normal text-muted-foreground">13 septembre</span>
                    </div>
                    <div className="flex items-center">
                        <Clock strokeWidth={0.8} className="h-3" />
                        <span className="text-xs font-normal text-muted-foreground"> 21:00</span>
                    </div>
                    <ChevronsRight strokeWidth={0.8} className="h-5" />
                </div>
                <div className="flex flex-row items-center justify-between px-2 py-2">
                    <div className="flex flex-col gap-1">
                        <div className="flex flex-row items-center gap-2">
                            <Avatar className="h-5 w-5">
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>J</AvatarFallback>
                            </Avatar>
                            <span className="text-xs font-medium text-primary">Jérémy</span>
                        </div>
                        <div className="flex flex-row items-center gap-2">
                            <Avatar className="h-5 w-5">
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>J</AvatarFallback>
                            </Avatar>
                            <div className="flex flex-row items-center">
                                <span className="text-xs font-medium text-muted-foreground">Momo</span>
                                <Star strokeWidth={0.8} className="h-3" />
                            </div>
                        </div>
                    </div>


                    <div className="flex flex-row items-center ">
                        <div className="flex flex-col border-r-2 px-2">
                            <span className="text-md font-medium text-green-500">6</span>
                            <span className="text-xs font-normal text-muted-foreground">4</span>
                            <span className="text-md font-medium text-green-500">6</span>
                        </div>
                        <div className="flex flex-col px-2">
                            <span className="text-xs font-normal text-muted-foreground">4</span>
                            <span className="text-md font-medium text-green-500">6</span>
                            <span className="text-xs font-normal text-muted-foreground">3</span>
                        </div>
                    </div>


                    <div className="flex flex-col gap-1">
                        <div className="flex flex-row items-center gap-2 justify-end">
                            <div className="flex flex-row items-center">
                                <Award strokeWidth={0.8} className="h-3" />
                                <span className="text-xs font-medium text-muted-foreground">Vassily</span>
                            </div>
                            <Avatar className="h-5 w-5">
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>J</AvatarFallback>
                            </Avatar>
                        </div>
                        <div className="flex flex-row items-center gap-2 justify-end">
                            <span className="text-xs font-medium text-muted-foreground">Clément</span>
                            <Avatar className="h-5 w-5">
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>J</AvatarFallback>
                            </Avatar>
                        </div>
                    </div>
                </div>
            </Card>


            <Card className="bg-gradient-to-r from-red-50 mb-2 border-l-8 border-l-red-200">
                <div className="flex flex-row items-center justify-between pl-2 pr-1 pt-1">
                    <div className="flex items-center">
                        <Trophy strokeWidth={0.8} className="h-3 text-red-500" />
                        <span className="text-xs font-medium text-red-500">Défaite</span>
                    </div>
                    <div className="flex items-center">
                        <Calendar strokeWidth={0.8} className="h-3" />
                        <span className="text-xs font-normal text-muted-foreground">6 septembre</span>
                    </div>
                    <div className="flex items-center">
                        <Clock strokeWidth={0.8} className="h-3" />
                        <span className="text-xs font-normal text-muted-foreground"> 09:45</span>
                    </div>
                    <ChevronsRight strokeWidth={0.8} className="h-5" />
                </div>
                <div className="flex flex-row items-center justify-between px-2 py-2">
                    <div className="flex flex-col gap-1">
                        <div className="flex flex-row items-center gap-2">
                            <Avatar className="h-5 w-5">
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>J</AvatarFallback>
                            </Avatar>
                            <span className="text-xs font-medium text-primary">Jérémy</span>
                        </div>
                        <div className="flex flex-row items-center gap-2">
                            <Avatar className="h-5 w-5">
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>J</AvatarFallback>
                            </Avatar>
                            <div className="flex flex-row items-center">
                                <span className="text-xs font-medium text-muted-foreground">Momo</span>
                                <Star strokeWidth={0.8} className="h-3" />
                            </div>
                        </div>
                    </div>


                    <div className="flex flex-row items-center ">
                        <div className="flex flex-col border-r-2 px-2">
                            <span className="text-md font-medium text-red-500">6</span>
                            <span className="text-xs font-normal text-muted-foreground">4</span>
                            <span className="text-md font-medium text-red-500">6</span>
                        </div>
                        <div className="flex flex-col px-2">
                            <span className="text-xs font-normal text-muted-foreground">4</span>
                            <span className="text-md font-medium text-red-500">6</span>
                            <span className="text-xs font-normal text-muted-foreground">3</span>
                        </div>
                    </div>


                    <div className="flex flex-col gap-1">
                        <div className="flex flex-row items-center gap-2 justify-end">
                            <div className="flex flex-row items-center">
                                <Award strokeWidth={0.8} className="h-3" />
                                <span className="text-xs font-medium text-muted-foreground">Vassily</span>
                            </div>
                            <Avatar className="h-5 w-5">
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>J</AvatarFallback>
                            </Avatar>
                        </div>
                        <div className="flex flex-row items-center gap-2 justify-end">
                            <span className="text-xs font-medium text-muted-foreground">Clément</span>
                            <Avatar className="h-5 w-5">
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>J</AvatarFallback>
                            </Avatar>
                        </div>
                    </div>
                </div>
            </Card>


            <Card className="bg-gradient-to-r from-green-50 mb-2 border-l-8 border-l-green-200">
                <div className="flex flex-row items-center justify-between pl-2 pr-1 pt-1">
                    <div className="flex items-center">
                        <Trophy strokeWidth={0.8} className="h-3 text-green-500" />
                        <span className="text-xs font-medium text-green-500">Victoire</span>
                    </div>
                    <div className="flex items-center">
                        <Calendar strokeWidth={0.8} className="h-3" />
                        <span className="text-xs font-normal text-muted-foreground">29 aout</span>
                    </div>
                    <div className="flex items-center">
                        <Clock strokeWidth={0.8} className="h-3" />
                        <span className="text-xs font-normal text-muted-foreground"> 11:00</span>
                    </div>
                    <ChevronsRight strokeWidth={0.8} className="h-5" />
                </div>
                <div className="flex flex-row items-center justify-between px-2 py-2">
                    <div className="flex flex-col gap-1">
                        <div className="flex flex-row items-center gap-2">
                            <Avatar className="h-5 w-5">
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>J</AvatarFallback>
                            </Avatar>
                            <span className="text-xs font-medium text-primary">Jérémy</span>
                        </div>
                        <div className="flex flex-row items-center gap-2">
                            <Avatar className="h-5 w-5">
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>J</AvatarFallback>
                            </Avatar>
                            <div className="flex flex-row items-center">
                                <span className="text-xs font-medium text-muted-foreground">Momo</span>
                                <Star strokeWidth={0.8} className="h-3" />
                            </div>
                        </div>
                    </div>


                    <div className="flex flex-row items-center ">
                        <div className="flex flex-col border-r-2 px-2">
                            <span className="text-md font-medium text-green-500">6</span>
                            <span className="text-xs font-normal text-muted-foreground">4</span>
                            <span className="text-md font-medium text-green-500">6</span>
                        </div>
                        <div className="flex flex-col px-2">
                            <span className="text-xs font-normal text-muted-foreground">4</span>
                            <span className="text-md font-medium text-green-500">6</span>
                            <span className="text-xs font-normal text-muted-foreground">3</span>
                        </div>
                    </div>


                    <div className="flex flex-col gap-1">
                        <div className="flex flex-row items-center gap-2 justify-end">
                            <div className="flex flex-row items-center">
                                <Award strokeWidth={0.8} className="h-3" />
                                <span className="text-xs font-medium text-muted-foreground">Vassily</span>
                            </div>
                            <Avatar className="h-5 w-5">
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>J</AvatarFallback>
                            </Avatar>
                        </div>
                        <div className="flex flex-row items-center gap-2 justify-end">
                            <span className="text-xs font-medium text-muted-foreground">Clément</span>
                            <Avatar className="h-5 w-5">
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>J</AvatarFallback>
                            </Avatar>
                        </div>
                    </div>
                </div>
            </Card>


            <Card className="bg-gradient-to-r from-red-50 mb-2 border-l-8 border-l-red-200">
                <div className="flex flex-row items-center justify-between pl-2 pr-1 pt-1">
                    <div className="flex items-center">
                        <Trophy strokeWidth={0.8} className="h-3 text-red-500" />
                        <span className="text-xs font-medium text-red-500">Défaite</span>
                    </div>
                    <div className="flex items-center">
                        <Calendar strokeWidth={0.8} className="h-3" />
                        <span className="text-xs font-normal text-muted-foreground">26 aout</span>
                    </div>
                    <div className="flex items-center">
                        <Clock strokeWidth={0.8} className="h-3" />
                        <span className="text-xs font-normal text-muted-foreground"> 15:30</span>
                    </div>
                    <ChevronsRight strokeWidth={0.8} className="h-5" />
                </div>
                <div className="flex flex-row items-center justify-between px-2 py-2">
                    <div className="flex flex-col gap-1">
                        <div className="flex flex-row items-center gap-2">
                            <Avatar className="h-5 w-5">
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>J</AvatarFallback>
                            </Avatar>
                            <span className="text-xs font-medium text-primary">Jérémy</span>
                        </div>
                        <div className="flex flex-row items-center gap-2">
                            <Avatar className="h-5 w-5">
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>J</AvatarFallback>
                            </Avatar>
                            <div className="flex flex-row items-center">
                                <span className="text-xs font-medium text-muted-foreground">Momo</span>
                                <Star strokeWidth={0.8} className="h-3" />
                            </div>
                        </div>
                    </div>


                    <div className="flex flex-row items-center ">
                        <div className="flex flex-col border-r-2 px-2">
                            <span className="text-md font-medium text-red-500">6</span>
                            <span className="text-xs font-normal text-muted-foreground">4</span>
                            <span className="text-md font-medium text-red-500">6</span>
                        </div>
                        <div className="flex flex-col px-2">
                            <span className="text-xs font-normal text-muted-foreground">4</span>
                            <span className="text-md font-medium text-red-500">6</span>
                            <span className="text-xs font-normal text-muted-foreground">3</span>
                        </div>
                    </div>


                    <div className="flex flex-col gap-1">
                        <div className="flex flex-row items-center gap-2 justify-end">
                            <div className="flex flex-row items-center">
                                <Award strokeWidth={0.8} className="h-3" />
                                <span className="text-xs font-medium text-muted-foreground">Vassily</span>
                            </div>
                            <Avatar className="h-5 w-5">
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>J</AvatarFallback>
                            </Avatar>
                        </div>
                        <div className="flex flex-row items-center gap-2 justify-end">
                            <span className="text-xs font-medium text-muted-foreground">Clément</span>
                            <Avatar className="h-5 w-5">
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>J</AvatarFallback>
                            </Avatar>
                        </div>
                    </div>
                </div>
            </Card>


            <Card className="bg-gradient-to-r from-red-50 mb-2 border-l-8 border-l-red-200">
                <div className="flex flex-row items-center justify-between pl-2 pr-1 pt-1">
                    <div className="flex items-center">
                        <Trophy strokeWidth={0.8} className="h-3 text-red-500" />
                        <span className="text-xs font-medium text-red-500">Défaite</span>
                    </div>
                    <div className="flex items-center">
                        <Calendar strokeWidth={0.8} className="h-3" />
                        <span className="text-xs font-normal text-muted-foreground">17 aout</span>
                    </div>
                    <div className="flex items-center">
                        <Clock strokeWidth={0.8} className="h-3" />
                        <span className="text-xs font-normal text-muted-foreground"> 18:00</span>
                    </div>
                    <ChevronsRight strokeWidth={0.8} className="h-5" />
                </div>
                <div className="flex flex-row items-center justify-between px-2 py-2">
                    <div className="flex flex-col gap-1">
                        <div className="flex flex-row items-center gap-2">
                            <Avatar className="h-5 w-5">
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>J</AvatarFallback>
                            </Avatar>
                            <span className="text-xs font-medium text-primary">Jérémy</span>
                        </div>
                        <div className="flex flex-row items-center gap-2">
                            <Avatar className="h-5 w-5">
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>J</AvatarFallback>
                            </Avatar>
                            <div className="flex flex-row items-center">
                                <span className="text-xs font-medium text-muted-foreground">Momo</span>
                                <Star strokeWidth={0.8} className="h-3" />
                            </div>
                        </div>
                    </div>


                    <div className="flex flex-row items-center ">
                        <div className="flex flex-col border-r-2 px-2">
                            <span className="text-md font-medium text-red-500">6</span>
                            <span className="text-xs font-normal text-muted-foreground">4</span>
                            <span className="text-md font-medium text-red-500">6</span>
                        </div>
                        <div className="flex flex-col px-2">
                            <span className="text-xs font-normal text-muted-foreground">4</span>
                            <span className="text-md font-medium text-red-500">6</span>
                            <span className="text-xs font-normal text-muted-foreground">3</span>
                        </div>
                    </div>


                    <div className="flex flex-col gap-1">
                        <div className="flex flex-row items-center gap-2 justify-end">
                            <div className="flex flex-row items-center">
                                <Award strokeWidth={0.8} className="h-3" />
                                <span className="text-xs font-medium text-muted-foreground">Vassily</span>
                            </div>
                            <Avatar className="h-5 w-5">
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>J</AvatarFallback>
                            </Avatar>
                        </div>
                        <div className="flex flex-row items-center gap-2 justify-end">
                            <span className="text-xs font-medium text-muted-foreground">Clément</span>
                            <Avatar className="h-5 w-5">
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>J</AvatarFallback>
                            </Avatar>
                        </div>
                    </div>
                </div>
            </Card>


            <Card className="bg-gradient-to-r from-green-50 mb-2 border-l-8 border-l-green-200">
                <div className="flex flex-row items-center justify-between pl-2 pr-1 pt-1">
                    <div className="flex items-center">
                        <Trophy strokeWidth={0.8} className="h-3 text-green-500" />
                        <span className="text-xs font-medium text-green-500">Victoire</span>
                    </div>
                    <div className="flex items-center">
                        <Calendar strokeWidth={0.8} className="h-3" />
                        <span className="text-xs font-normal text-muted-foreground">8 aout</span>
                    </div>
                    <div className="flex items-center">
                        <Clock strokeWidth={0.8} className="h-3" />
                        <span className="text-xs font-normal text-muted-foreground"> 17:30</span>
                    </div>
                    <ChevronsRight strokeWidth={0.8} className="h-5" />
                </div>
                <div className="flex flex-row items-center justify-between px-2 py-2">
                    <div className="flex flex-col gap-1">
                        <div className="flex flex-row items-center gap-2">
                            <Avatar className="h-5 w-5">
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>J</AvatarFallback>
                            </Avatar>
                            <span className="text-xs font-medium text-primary">Jérémy</span>
                        </div>
                        <div className="flex flex-row items-center gap-2">
                            <Avatar className="h-5 w-5">
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>J</AvatarFallback>
                            </Avatar>
                            <div className="flex flex-row items-center">
                                <span className="text-xs font-medium text-muted-foreground">Momo</span>
                                <Star strokeWidth={0.8} className="h-3" />
                            </div>
                        </div>
                    </div>


                    <div className="flex flex-row items-center ">
                        <div className="flex flex-col border-r-2 px-2">
                            <span className="text-md font-medium text-green-500">6</span>
                            <span className="text-xs font-normal text-muted-foreground">4</span>
                            <span className="text-md font-medium text-green-500">6</span>
                        </div>
                        <div className="flex flex-col px-2">
                            <span className="text-xs font-normal text-muted-foreground">4</span>
                            <span className="text-md font-medium text-green-500">6</span>
                            <span className="text-xs font-normal text-muted-foreground">3</span>
                        </div>
                    </div>


                    <div className="flex flex-col gap-1">
                        <div className="flex flex-row items-center gap-2 justify-end">
                            <div className="flex flex-row items-center">
                                <Award strokeWidth={0.8} className="h-3" />
                                <span className="text-xs font-medium text-muted-foreground">Vassily</span>
                            </div>
                            <Avatar className="h-5 w-5">
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>J</AvatarFallback>
                            </Avatar>
                        </div>
                        <div className="flex flex-row items-center gap-2 justify-end">
                            <span className="text-xs font-medium text-muted-foreground">Clément</span>
                            <Avatar className="h-5 w-5">
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>J</AvatarFallback>
                            </Avatar>
                        </div>
                    </div>
                </div>
            </Card>


            <Card className="bg-gradient-to-r from-red-50 mb-2 border-l-8 border-l-red-200">
                <div className="flex flex-row items-center justify-between pl-2 pr-1 pt-1">
                    <div className="flex items-center">
                        <Trophy strokeWidth={0.8} className="h-3 text-red-500" />
                        <span className="text-xs font-medium text-red-500">Défaite</span>
                    </div>
                    <div className="flex items-center">
                        <Calendar strokeWidth={0.8} className="h-3" />
                        <span className="text-xs font-normal text-muted-foreground">26 juillet</span>
                    </div>
                    <div className="flex items-center">
                        <Clock strokeWidth={0.8} className="h-3" />
                        <span className="text-xs font-normal text-muted-foreground"> 08:45</span>
                    </div>
                    <ChevronsRight strokeWidth={0.8} className="h-5" />
                </div>
                <div className="flex flex-row items-center justify-between px-2 py-2">
                    <div className="flex flex-col gap-1">
                        <div className="flex flex-row items-center gap-2">
                            <Avatar className="h-5 w-5">
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>J</AvatarFallback>
                            </Avatar>
                            <span className="text-xs font-medium text-primary">Jérémy</span>
                        </div>
                        <div className="flex flex-row items-center gap-2">
                            <Avatar className="h-5 w-5">
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>J</AvatarFallback>
                            </Avatar>
                            <div className="flex flex-row items-center">
                                <span className="text-xs font-medium text-muted-foreground">Momo</span>
                                <Star strokeWidth={0.8} className="h-3" />
                            </div>
                        </div>
                    </div>


                    <div className="flex flex-row items-center ">
                        <div className="flex flex-col border-r-2 px-2">
                            <span className="text-md font-medium text-red-500">6</span>
                            <span className="text-xs font-normal text-muted-foreground">4</span>
                            <span className="text-md font-medium text-red-500">6</span>
                        </div>
                        <div className="flex flex-col px-2">
                            <span className="text-xs font-normal text-muted-foreground">4</span>
                            <span className="text-md font-medium text-red-500">6</span>
                            <span className="text-xs font-normal text-muted-foreground">3</span>
                        </div>
                    </div>


                    <div className="flex flex-col gap-1">
                        <div className="flex flex-row items-center gap-2 justify-end">
                            <div className="flex flex-row items-center">
                                <Award strokeWidth={0.8} className="h-3" />
                                <span className="text-xs font-medium text-muted-foreground">Vassily</span>
                            </div>
                            <Avatar className="h-5 w-5">
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>J</AvatarFallback>
                            </Avatar>
                        </div>
                        <div className="flex flex-row items-center gap-2 justify-end">
                            <span className="text-xs font-medium text-muted-foreground">Clément</span>
                            <Avatar className="h-5 w-5">
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>J</AvatarFallback>
                            </Avatar>
                        </div>
                    </div>
                </div>
            </Card>



            <Card className="bg-gradient-to-r from-green-50 mb-2 border-l-8 border-l-green-200">
                <div className="flex flex-row items-center justify-between pl-2 pr-1 pt-1">
                    <div className="flex items-center">
                        <Trophy strokeWidth={0.8} className="h-3 text-green-500" />
                        <span className="text-xs font-medium text-green-500">Victoire</span>
                    </div>
                    <div className="flex items-center">
                        <Calendar strokeWidth={0.8} className="h-3" />
                        <span className="text-xs font-normal text-muted-foreground">14 juillet</span>
                    </div>
                    <div className="flex items-center">
                        <Clock strokeWidth={0.8} className="h-3" />
                        <span className="text-xs font-normal text-muted-foreground"> 12:00</span>
                    </div>
                    <ChevronsRight strokeWidth={0.8} className="h-5" />
                </div>
                <div className="flex flex-row items-center justify-between px-2 py-2">
                    <div className="flex flex-col gap-1">
                        <div className="flex flex-row items-center gap-2">
                            <Avatar className="h-5 w-5">
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>J</AvatarFallback>
                            </Avatar>
                            <span className="text-xs font-medium text-primary">Jérémy</span>
                        </div>
                        <div className="flex flex-row items-center gap-2">
                            <Avatar className="h-5 w-5">
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>J</AvatarFallback>
                            </Avatar>
                            <div className="flex flex-row items-center">
                                <span className="text-xs font-medium text-muted-foreground">Momo</span>
                                <Star strokeWidth={0.8} className="h-3" />
                            </div>
                        </div>
                    </div>


                    <div className="flex flex-row items-center ">
                        <div className="flex flex-col border-r-2 px-2">
                            <span className="text-md font-medium text-green-500">6</span>
                            <span className="text-xs font-normal text-muted-foreground">4</span>
                            <span className="text-md font-medium text-green-500">6</span>
                        </div>
                        <div className="flex flex-col px-2">
                            <span className="text-xs font-normal text-muted-foreground">4</span>
                            <span className="text-md font-medium text-green-500">6</span>
                            <span className="text-xs font-normal text-muted-foreground">3</span>
                        </div>
                    </div>


                    <div className="flex flex-col gap-1">
                        <div className="flex flex-row items-center gap-2 justify-end">
                            <div className="flex flex-row items-center">
                                <Award strokeWidth={0.8} className="h-3" />
                                <span className="text-xs font-medium text-muted-foreground">Vassily</span>
                            </div>
                            <Avatar className="h-5 w-5">
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>J</AvatarFallback>
                            </Avatar>
                        </div>
                        <div className="flex flex-row items-center gap-2 justify-end">
                            <span className="text-xs font-medium text-muted-foreground">Clément</span>
                            <Avatar className="h-5 w-5">
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>J</AvatarFallback>
                            </Avatar>
                        </div>
                    </div>
                </div>
            </Card>

            <div className="flex justify-center">
                <Button variant={'ghost'} className="my-3">
                    <Download className="mr-2 h-4 w-4" /> Charger plus
                </Button>
            </div>

            {/* <div className="flex flex-row items-center">
                Dates
                <DatePickerWithRange className="ml-auto" />
            </div> */}
        </>
    );
}

export default Matchs;