import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Home = () => {
  const authInfo = useContext(AuthContext);
  return (
    <div>
      <h2 className="text-center text-2xl">
        This is Home for
      </h2>
    </div>
  );
};

export default Home;
