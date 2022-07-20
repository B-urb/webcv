import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import {faGithub, faLinkedin, faTwitter, faInstagram} from "@fortawesome/free-brands-svg-icons";
library.add(faGithub, faLinkedin)
const Footer = () => {
    return <div className="from-black to-gray-700 text-2xl md:text-4xl dark:text-amber-50">
            <ul className="flex">
                <li key={0} onClick={()=> window.open("https://github.com/B-urb")} className="m-1 sm:m-3 hover:cursor-crosshair"><FontAwesomeIcon icon={faGithub}/></li>
                <li key={1} onClick={()=> window.open("https://www.linkedin.com/in/bj%C3%B6rn-u-3a9347113")} className="m-1 sm:m-3 hover:cursor-crosshair"><FontAwesomeIcon icon={faLinkedin}/></li>
                <li key={2} onClick={()=> window.open("https://twitter.com/bambusbijoern")} className="m-1 sm:m-3 hover:cursor-crosshair"><FontAwesomeIcon icon={faTwitter}/></li>
                <li key={3} onClick={()=> window.open("https://www.instagram.com/bambusbijoern/")} className="m-1 sm:m-3 hover:cursor-crosshair"><FontAwesomeIcon icon={faInstagram}/></li>
            </ul>
        </div>

}

export default Footer;