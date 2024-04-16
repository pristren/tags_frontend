import { Tag } from "lucide-react";
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
        {userInfo ? (
          <div className="relative">
            <img
              onClick={() => setOpen(!open)}
              src="https://i.ibb.co/9WTdd0b/download-18.jpg"
              className="w-10 h-10 rounded-full cursor-pointer"
              alt=""
            />
            <div
              className={`shadow-md rounded-md py-2 px-3 absolute ${
                open ? "z-10" : "hidden"
              }`}
            >
              <Button variant="secondary" className="w-full mb-2" onClick={handleLogout}>
                Logout
              </Button>

              {user && user.role === "admin" && (
                <Link to="/all-users"><Button variant="secondary"className="w-full mb-2" >All Users</Button></Link>
              )}
            </div>
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
              {user && user.role === "admin" && (
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
