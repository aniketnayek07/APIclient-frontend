import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import * as React from "react";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Checked = DropdownMenuCheckboxItemProps["checked"];
function DropdownMenuCheckboxes() {
  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true);
  const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false);
  const [showPanel, setShowPanel] = React.useState<Checked>(false);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Appearance</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={showStatusBar}
          onCheckedChange={setShowStatusBar}
        >
          Status Bar
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showActivityBar}
          onCheckedChange={setShowActivityBar}
          disabled
        >
          Activity Bar
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showPanel}
          onCheckedChange={setShowPanel}
        >
          Panel
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default function InputWithButton() {
  return (
    <>
      <div
        className="w-full h-screen text-center font-Raleway text-4xl font-semibold pt-6 font"
        style={{ backgroundColor: "black", color: "white" }}
      >
        REQUESTEZ
        <br />
        <div className="text-xl font-medium ">
          Lightweight Browser Based API client
        </div>
        <div className="flex justify-center align-center pt-9">
          <div
            className="flex w-full max-w-sm items-center space-x-2"
            style={{ color: "black" }}
          >
            <DropdownMenuCheckboxes />
            <Input type="link" placeholder="Enter API or paste your link" />
            <Button type="submit" style={{ backgroundColor: "grey" }}>
              Send
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
