import {
  faGithub,
  faGitlab,
  faInstagram,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const socialLinks = [
  {
    url: 'https://gitlab.com/bjoern_urban_5',
    icon: faGitlab,
  },
  {
    url: 'https://github.com/B-urb',
    icon: faGithub,
  },
  {
    url: 'https://www.linkedin.com/in/bj%C3%B6rn-u-3a9347113',
    icon: faLinkedin,
  },
  {
    url: 'https://twitter.com/bambusbijoern',
    icon: faTwitter,
  },
  {
    url: 'https://www.instagram.com/bambusbijoern/',
    icon: faInstagram,
  },
];

const Footer = () => {
  return (
    <div className=" dark:text-dark-4 flex justify-center text-2xl md:text-4xl">
      <ul className="flex">
        {socialLinks.map((social, key) => (
          <li key={key} className="m-1 hover:cursor-pointer sm:m-3">
            <a href={social.url} target="_blank">
              <FontAwesomeIcon icon={social.icon} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
