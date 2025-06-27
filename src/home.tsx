import Middle from "@/src/Components/main/middle"; 
import Sidebar from "@/src/Components/left/sidebar";

export default function Home(){
    return(
        <div className="flex min-h-screen">
          <Sidebar />
          <Middle />
        </div>
    )
}
