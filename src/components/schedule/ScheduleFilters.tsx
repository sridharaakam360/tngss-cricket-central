import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";

export interface Filters {
  category: "ALL" | "STARTUP" | "PROFESSIONAL";
  date?: Date;
  teamQuery: string;
}

interface Props {
  value: Filters;
  onChange: (next: Filters) => void;
}

const ScheduleFilters: React.FC<Props> = ({ value, onChange }) => {
  return (
    <div className="bg-card border border-border rounded-lg p-4 shadow-sm flex flex-col md:flex-row gap-3">
      <Select
        value={value.category}
        onValueChange={(v: Filters["category"]) => onChange({ ...value, category: v })}
      >
        <SelectTrigger className="w-full md:w-[180px]">
          <SelectValue placeholder="Category" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="ALL">All Categories</SelectItem>
          <SelectItem value="STARTUP">Startup</SelectItem>
          <SelectItem value="PROFESSIONAL">Professional</SelectItem>
        </SelectContent>
      </Select>

      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={cn(
              "w-full md:w-[220px] justify-start text-left font-normal",
              !value.date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {value.date ? format(value.date, "PPP") : <span>Pick date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={value.date}
            onSelect={(d) => onChange({ ...value, date: d })}
            initialFocus
            className={cn("p-3 pointer-events-auto")}
          />
        </PopoverContent>
      </Popover>

      <Input
        placeholder="Filter by team"
        value={value.teamQuery}
        onChange={(e) => onChange({ ...value, teamQuery: e.target.value })}
        className="w-full"
      />

      <div className="md:ml-auto">
        <Button
          variant="secondary"
          onClick={() => onChange({ category: "ALL", date: undefined, teamQuery: "" })}
        >
          Reset
        </Button>
      </div>
    </div>
  );
};

export default ScheduleFilters;
