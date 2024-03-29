import { useLoaderData } from "react-router-dom";
import User from "./User";


const Users = () => {
    const users = useLoaderData()
    console.log(users)
    return (
        <div>
            <h3>user</h3>
            {
                users.map(user => <User
                key={user.id}
                user={user}
                ></User>)
            }
        </div>
    );
};

export default Users;