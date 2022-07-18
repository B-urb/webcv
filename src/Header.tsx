import { library } from '@fortawesome/fontawesome-svg-core'
import {faCode} from "@fortawesome/free-solid-svg-icons";

library.add(faCode)

const Header = () => {

    return <h1 className="text-lg md:text-6xl">Björn Urban</h1>
}

export default Header;