import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import {faGithub, faLinkedin, faTwitter, faInstagram} from "@fortawesome/free-brands-svg-icons";
library.add(faGithub, faLinkedin)
const Footer = () => {
    return <div className="relative bottom-0 from-black to-gray-700 text-4xl text-amber-50 self-stretch w-screen text-center">
            <ul className="relative bottom-0 inline">
                <li onClick={()=> window.open("https://github.com")} className="inline m-1"><FontAwesomeIcon icon={faGithub}/></li>
                <li className="inline m-1"><FontAwesomeIcon icon={faLinkedin}/></li>
                <li className="inline m-1"><FontAwesomeIcon icon={faTwitter}/></li>
                <li className="inline m-1"><FontAwesomeIcon icon={faInstagram}/></li>
            </ul>
        </div>

}

export default Footer;