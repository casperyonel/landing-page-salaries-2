import NavBar from "./NavBar";
import Waitlist from "./Waitlist";
import Graphic from "./Graphic";

const Home = () => {
    return (
        <div>
            <div className ="block1">
                <NavBar />
            </div>
            <div className ="block2">
                <Waitlist title="Enter email address"/>
                <Graphic />
            </div>
        </div>
    )
}

export default Home
