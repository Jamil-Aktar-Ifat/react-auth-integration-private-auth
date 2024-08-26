import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h2 className="text-2xl text-center">
        Your Personal Profile of {user.displayName}
      </h2>
    </div>
  );
};

export default Profile;
