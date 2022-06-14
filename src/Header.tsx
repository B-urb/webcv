import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core'
import {faCode} from "@fortawesome/free-solid-svg-icons";
library.add(faCode)

const Header = () => {

    return <div className="bg-gradient-to-b from-gray-800 to-black min-h-full self-stretch items-center justify-center text-green-500 text-center text-4xl">
        <h1>Björn Urban</h1>
        <FontAwesomeIcon icon={faCode}/>
    </div>




}

export default Header;