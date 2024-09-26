import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, ChevronUp, HandPlatter } from "lucide-react";
import { useState } from "react";

function ServiceCollapse() {
    const [isOpen, setIsOpen] = useState(true)

    return (
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
            <Card className="bg-gradient-to-r from-accent mb-2 border-l-4">
                <div className="flex justify=between items-center pl-2 pr-1 pt-1">
                    <HandPlatter strokeWidth={1.2} className="h-4" />
                    <span className="text-md font-normal text-muted-forregrond ml-auto">Service</span>
                    <CollapsibleTrigger asChild className="w-full">
                        <Button variant="ghost" size="sm" className="w-9 p-0 ml-auto">
                            {
                                isOpen ? <ChevronUp strokeWidth={1.2} className="h-4" />
                                    : <ChevronDown strokeWidth={1.2} className="h-4" />
                            }
                            <span className="sr-only">Toggle</span>
                        </Button>
                    </CollapsibleTrigger>
                </div>
            </Card>
            <CollapsibleContent>
            </CollapsibleContent>
        </Collapsible>
    );
}

export default ServiceCollapse;