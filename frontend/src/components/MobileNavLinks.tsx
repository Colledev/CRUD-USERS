import { Link } from "react-router-dom"
import { Button } from "./ui/button"
import { useAuth0 } from "@auth0/auth0-react"

const MobileNavLinks = () => {
  const { logout } = useAuth0()
  return (
    <div className="flex flex-col items-center w-full">
      <Link
        to="/user-profile"
        className="flex bg-white text-2xl text-black font-bold hover:text-green-600"
      >
        User Profile
      </Link>
      <Button
        onClick={() => logout()}
        className="flex font-bold bg-green-600 text-2xl mt-2 h-12 w-full"
      >
        Log Out
      </Button>
    </div>
  )
}

export default MobileNavLinks
