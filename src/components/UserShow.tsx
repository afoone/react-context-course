import { useContext } from "react"
import GlobalContext from "../context/GlobalContext"

type Props = {}

const UserShow = (props: Props) => {

    const {username, roles} = useContext(GlobalContext)

  return (
      <div>
          <h2>user show</h2>
          <div> el username es : {username}</div>
      </div>
  )
}

export default UserShow