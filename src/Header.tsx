import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core'
import {faCode} from "@fortawesome/free-solid-svg-icons";
import IntroText from "./IntroText";
import LightDarkSwitch from "./LightDarkSwitch";
import {useQuery, useQueryClient} from "react-query";
import {start} from "./api/directus";
library.add(faCode)

const Header = () => {

    return <div className="dark:bg-gradient-to-b dark:from-gray-800 dark:to-black min-h-full font-roboto self-stretch items-center justify-center text-center text-lg md:text-6xl ">
        <h1>Björn Urban</h1>
        <IntroText/>
        <LightDarkSwitch/>
    </div>



}

export default Header;