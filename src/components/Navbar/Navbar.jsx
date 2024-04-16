import { Tag } from "lucide-react";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "../ui/sheet";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center w-9/12 mx-auto py-5">
      <Link to='/' className="flex items-center gap-2 cursor-pointer">
        <Tag className="rotate-90" />
        <h2 className="text-2xl font-semibold font-mono">Elevate</h2>
      </Link>
      <div className="hidden lg:flex items-center gap-5 ">
        <Link to="/complete-task">
          <Button className="px-4 w-full">My Progress</Button>
        </Link>
        <Link to="/tags-card">
          <Button className="px-4 w-full">My Tasks</Button>
        </Link>
        <img
          src="https://i.ibb.co/9WTdd0b/download-18.jpg"
          className="w-10 h-10 rounded-full cursor-pointer"
          alt=""
        />
      </div>
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <img
              src="https://i.ibb.co/9WTdd0b/download-18.jpg"
              className="w-10 h-10 rounded-full cursor-pointer"
              alt=""
            />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetDescription>
                <Link to="/complete-task">
                  <Button className="px-4 w-full">My Progress</Button>
                </Link>
              </SheetDescription>
              <SheetDescription>
                <Link to="/tags-card">
                  <Button className="px-4 w-full">My Tasks</Button>
                </Link>
              </SheetDescription>
              <SheetDescription>
                <Button className="px-4 w-full">LogOut</Button>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Navbar;
