import { MouseEvent, useContext } from "react"
import GlobalContext from "../context/GlobalContext"

type Props = {}

const UserChange = (props: Props) => {

    const {username, setUsername} = useContext(GlobalContext)


   const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    console.log("click")
    setUsername(username + " - pepe")
    }
  

  return (
    <div>
        <h3>UserChange</h3>
        <button onClick={handleClick}>Cambiar</button>
    </div>
  )
}

export default UserChange