import Favourite from "./favourites";
import Heading from "./heading";
import Search from "./search";

export default function Sidebar() {
  return (
    <div className="bg-gray-200 w-1/5 h-screen px-6 py-7 space-y-5">
      <Heading />
      <Search />
      <Favourite />
    </div>
  );
}
