import { useParams } from "react-router-dom";
function Profile() {
  const { nickname } = useParams(); 
  return <h2>Trang cá nhân của: {nickname}</h2>;
}

export default Profile;
