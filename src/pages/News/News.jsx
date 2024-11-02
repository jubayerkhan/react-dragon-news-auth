import { useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import NavBar from "../Shared/Navbar/Navbar";

const News = () => {
    const {id} = useParams();
    return (
        <div>
            <Header></Header>
            <NavBar></NavBar>
            <div className="grid md:grid-cols-4">
                <div className="grid col-span-3 h-12">
                    <h2 className="text-5xl">News detail</h2>
                    <p>{id}</p>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default News;