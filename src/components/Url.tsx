import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import * as React from "react";
import { CaretDownIcon } from "@radix-ui/react-icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function Url() {
  const [position, setPosition] = React.useState("post");
  return (
    <div className="flex justify-center align-center mt-8">
      <div
        className="flex w-full max-w-4xl items-center space-x-2"
        style={{ color: "black" }}
      >
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              {position.toUpperCase()}{" "}
              <CaretDownIcon className="ml-1 text-2xl" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>HTTP METHOD</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup
              value={position}
              onValueChange={setPosition}
            >
              <DropdownMenuRadioItem value="post">POST</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="get">GET</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="delete">
                DELETE
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="put">PUT</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="patch">PATCH</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>

        <Input type="link" placeholder="Enter API or paste your link" />
        <Button type="submit" style={{ backgroundColor: "grey" }}>
          Send
        </Button>
      </div>
    </div>
  );
}

export default Url;
