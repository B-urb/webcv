import {getProfileImage} from "./api/directus";


const ProfileImage = () => {
const image_uuid = getProfileImage()

  return <img className="rounded-full w-32 h-32 border-4 border-yellow-50"
              src={"https://cms.burban.me/assets/"+image_uuid}/>


}

export default ProfileImage;