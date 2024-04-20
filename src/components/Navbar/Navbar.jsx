import { Infinity, Tally3 } from "lucide-react";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  // SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "../ui/sheet";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const Navbar = () => {
  const navigate = useNavigate();
  const userInfo = JSON.parse(localStorage.getItem("user"));
  const { user } = useAuth();
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("userTags");
    navigate("/login");
  };
  // console.log(user);
  // const [open, setOpen] = useState(false);
  return (
    <div className="flex justify-between items-center w-full px-5 md:px-0 md:w-9/12 mx-auto py-5">
      <Link to="/" className="flex items-center gap-2 cursor-pointer">
        <Infinity className="size-8" />
        <h2 className="text-2xl font-semibold font-mono">Elevate</h2>
      </Link>
      <div className="hidden md:flex items-center ">
        {userInfo ? (
          <div className="relative flex gap-5 ">
            <Link to="/complete-task">
              <Button className="px-4 w-full">My Progress</Button>
            </Link>
            <Link to="/tags-card">
              <Button className="px-4 w-full">My Tasks</Button>
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <img
                  src="https://github.com/shadcn.png "
                  alt=""
                  className="h-10 w-10 rounded-full cursor-pointer border border-gray-300"
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {user?.role === "admin" && (
                  <DropdownMenuItem
                    asChild
                    className="w-full   text-center cursor-pointer font-semibold"
                  >
                    <Link to="/all-users">All Users</Link>
                  </DropdownMenuItem>
                )}
                {/* <DropdownMenuSeparator /> */}
                <DropdownMenuItem
                  className="w-full  text-center cursor-pointer font-semibold"
                  onClick={handleLogout}
                >
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <div
              className={`shadow-md rounded-md py-2 px-3 absolute z-[999] `}
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
            <Tally3 className="rotate-90" />
          </SheetTrigger>
          <SheetContent>
            {userInfo ? (
              <SheetHeader className="pt-4">
                <SheetClose asChild>
                  <Link to="/complete-task">
                    <Button className="px-4 w-full">My Progress</Button>
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link to="/">
                    <Button className="px-4 w-full">My Tasks</Button>
                  </Link>
                </SheetClose>

                {user?.role === "admin" && (
                  <SheetClose asChild>
                    <Link to="/all-users">
                      <Button className="px-4 w-full">All Users</Button>
                    </Link>
                  </SheetClose>
                )}
                <SheetClose asChild>
                  <Button className="px-4 w-full" onClick={handleLogout}>
                    LogOut
                  </Button>
                </SheetClose>
              </SheetHeader>
            ) : (
              <SheetHeader className="pt-4">
                <SheetClose asChild>
                  <Link to="/login">
                    <Button className="px-4 w-full">Login</Button>
                  </Link>
                </SheetClose>
              </SheetHeader>
            )}
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Navbar;
