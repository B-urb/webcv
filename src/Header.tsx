import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core'
import {faCode} from "@fortawesome/free-solid-svg-icons";
import IntroText from "./IntroText";
library.add(faCode)

const Header = () => {

    return <div className="dark:bg-gradient-to-b dark:from-gray-800 dark:to-black min-h-full self-stretch items-center justify-center text-center text-lg md:text-4xl ">
        <h1>Björn Urban</h1>
        <IntroText/>
    </div>




}

export default Header;