import { useAuth0 } from "@auth0/auth0-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"
import { CircleUserRound } from "lucide-react"
import { Button } from "./ui/button"
import { Link } from "react-router-dom"
import { Separator } from "./ui/separator"

const UsernameMenu = () => {
  const { user, logout } = useAuth0()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items0center px-3 font-bold hover:text-green-600">
        {user?.picture && (
          <div className="flex items-center">
            <img
              src={user?.picture}
              alt="User Profile"
              className="w-14 h-14 rounded-full border-2 border-green-600 mr-2"
            />
            <span className="text-xl">{user.name}</span>
          </div>
        )}
        {!user?.picture && (
          <CircleUserRound className="text-green-600 size-14">
            {user?.email}
          </CircleUserRound>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <Link
            to="/user-profile"
            className="font-bold hover:text-green-600 text-2xl"
          >
            User Profile
          </Link>
        </DropdownMenuItem>
        <Separator />
        <DropdownMenuItem>
          <Button
            onClick={() => logout()}
            className="flex flex-1 font-bold bg-green-600 size-14 text-2xl"
          >
            Log out
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UsernameMenu
