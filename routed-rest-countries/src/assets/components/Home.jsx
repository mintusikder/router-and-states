import { Outlet } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h3>This is home</h3>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;