import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import {faGithub, faLinkedin, faTwitter, faInstagram} from "@fortawesome/free-brands-svg-icons";
library.add(faGithub, faLinkedin)
const Footer = () => {
    return <div className="relative bottom-0 from-black to-gray-700 text-2xl text-amber-50 self-stretch w-screen flex items-center text-center">
            <ul className="relative bottom-0 inline">
                <li key={0} onClick={()=> window.open("https://github.com")} className="inline m-1 sm:m-8"><FontAwesomeIcon icon={faGithub}/></li>
                <li key={1} className="inline m-1 sm:m-3"><FontAwesomeIcon icon={faLinkedin}/></li>
                <li key={2} className="inline m-1 sm:m-3"><FontAwesomeIcon icon={faTwitter}/></li>
                <li key={3} className="inline m-1 sm:m-3"><FontAwesomeIcon icon={faInstagram}/></li>
            </ul>
        </div>

}

export default Footer;