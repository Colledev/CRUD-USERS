import { CircleUserRound, Menu } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet"
import { Separator } from "@radix-ui/react-separator"
import { Button } from "./ui/button"
import MobileNavLinks from "./MobileNavLinks"
import { useAuth0 } from "@auth0/auth0-react"

const MobileNav = () => {
  const { isAuthenticated, loginWithRedirect, user } = useAuth0()
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-green-600" />
      </SheetTrigger>
      <SheetContent className="space-y-3">
        <SheetTitle className="w-full">
          {user?.picture && (
            <div className="flex flex-col items-center w-full">
              <img
                src={user?.picture}
                alt="User Profile"
                className="w-14 h-14 rounded-full border-2 border-green-600 mr-2"
              />
              <span className="text-xl">{user.name}</span>
            </div>
          )}
          {!user?.picture && (
            <CircleUserRound className="text-green-600 size-14 flex flex-col w-full">
              {user?.email}
            </CircleUserRound>
          )}
        </SheetTitle>
        <Separator />
        <SheetDescription className="flex">
          {isAuthenticated ? (
            <MobileNavLinks />
          ) : (
            <Button
              onClick={() => loginWithRedirect()}
              className="flex-1 font-bold bg-green-600 size-12 text-2xl"
            >
              Log In
            </Button>
          )}
        </SheetDescription>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
