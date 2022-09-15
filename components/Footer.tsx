import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import {faGithub, faLinkedin, faTwitter, faInstagram, faGitlab} from "@fortawesome/free-brands-svg-icons";
import * as url from "url";
import * as inspector from "inspector";

library.add(faGithub, faLinkedin)

const socialLinks = [{
  url: "https://gitlab.com/bjoern_urban_5",
  icon: faGitlab
}, {
  url: "https://github.com/B-urb",
  icon: faGithub
}, {
  url: "https://www.linkedin.com/in/bj%C3%B6rn-u-3a9347113",
  icon: faLinkedin
},
  {
    url: "https://twitter.com/bambusbijoern",
    icon: faTwitter
  },
  {
    url: "https://www.instagram.com/bambusbijoern/",
    icon: faInstagram
  }

]


const Footer = () => {
  return <div
      className="dark:bg-gradient-to-b flex justify-center from-black to-gray-700 text-2xl md:text-4xl dark:text-amber-50">
    <ul className="flex">{socialLinks.map((social, key) =>
        <li key={key} onClick={() => window.open(social.url)}
            className="m-1 sm:m-3 hover:cursor-pointer"><FontAwesomeIcon icon={social.icon}/></li>
    )
    }
    </ul>
  </div>

}

export default Footer;