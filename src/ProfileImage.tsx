import {getProfileImage} from "./api/directus";


const ProfileImage = () => {
const image_uuid = getProfileImage()

  return <img className="rounded-full w-36 h-36 lg:h-56 lg:w-56 border-4 border-black dark:border-yellow-50"
              src={"https://cms.burban.me/assets/"+image_uuid}/>

}

export default ProfileImage;