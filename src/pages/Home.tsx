import { useSelector } from "react-redux";
import SearchCard from "../components/Search/Card";

const Home = () => {
  const { username } = useSelector((state: any) => state.auth.token.user);
  const profile = username[0].toUpperCase();

  return (
    <div className="bg-white h-screen px-4 md:px-16">
      <div className="flex justify-between  items-center">
        <div>
          <h1 className="text-secondary text-[46px]">Menu</h1>
          <p className="text-gray-300 text-[12px]">
            SnapBite - Feast The Essence
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div
            className={`rounded-full main-text h-16 w-16 bg-secondary text-white flex items-center justify-center text-3xl cursor-pointer`}
          >
            {username && <h1>{profile}</h1>}
          </div>
          <div className="extra-text text-secondary">
            {username && <h1>{username}</h1>}
          </div>
        </div>
      </div>
      <SearchCard />
    </div>
  );
};

export default Home;
