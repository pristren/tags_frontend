import { Infinity } from "lucide-react";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "../ui/sheet";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const Navbar = () => {
  const navigate = useNavigate();
  const userInfo = JSON.parse(localStorage.getItem("user"));
  const { user } = useAuth();
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };
  const [open, setOpen] = useState(false);
  return (
    <div className="flex justify-between items-center w-9/12 mx-auto py-5">
      <Link to="/" className="flex items-center gap-2 cursor-pointer">
        <Infinity className="size-8" />
        <h2 className="text-2xl font-semibold font-mono">Elevate</h2>
      </Link>
      <div className="hidden lg:flex items-center gap-5 ">
        <Link to="/complete-task">
          <Button className="px-4 w-full">My Progress</Button>
        </Link>
        <Link to="/tags-card">
          <Button className="px-4 w-full">My Tasks</Button>
        </Link>
        {userInfo ? (
          <div className="relative">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <img
                  onClick={() => setOpen(!open)}
                  src="https://i.ibb.co/9WTdd0b/download-18.jpg"
                  className="w-10 h-10 rounded-full cursor-pointer"
                  alt=""
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                    className="w-full mb-2 text-center cursor-pointer font-semibold"
                    onClick={handleLogout}>

                    Logout
                </DropdownMenuItem>
                  {user?.role === "admin" && (
                <DropdownMenuItem                     className="w-full mb-2 text-center cursor-pointer font-semibold"
                >
                    <Link to="/all-users">
                        All Users
                    </Link>
                </DropdownMenuItem>
                  )}
              </DropdownMenuContent>
            </DropdownMenu>

            <div
              className={`shadow-md rounded-md py-2 px-3 absolute z-[999] ${
                open ? "" : "hidden"
              }`}
            ></div>
          </div>
        ) : (
          <Link to="/login">
            <Button className="px-4 w-full">Login</Button>
          </Link>
        )}
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
              {user?.role === "admin" && (
                <SheetDescription>
                  <Button className="px-4 w-full">All Users</Button>
                </SheetDescription>
              )}
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Navbar;
