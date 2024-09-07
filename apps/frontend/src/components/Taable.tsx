import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import Tablerowentry from "./Tablerowentry";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

export function Taable() {
  
  const addarray = ["Tablerowentry"];
  function handleaddrow(): void {
    addarray.push(" ")
  }
  return (
    <div className="flex  flex-col justify-center items-center">
      <Table className="w-[900px]">
        <TableHeader>
          <TableRow>
            <TableHead>Key</TableHead>
            <TableHead>Value</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {addarray.map((row, index) => {
            return <Tablerowentry key={index} />;
          })}
        </TableBody>
      </Table>
      <Button className="text-2xl w-fit" 
      onClick={handleaddrow}>+</Button>
    </div>
  );
}

export default Taable;
