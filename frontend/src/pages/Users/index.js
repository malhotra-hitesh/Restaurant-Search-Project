import {useEffect} from "react";

const Users = () => {
    const fetchUsers = async () => {
        const response = await fetch('https://dummyjson.com/products/1');
        const data = await response.json()
        console.log(data)

    }c
    useEffect(() => {
        fetchUsers()
    }, []);

    return <div>Users</div>;
};
export default Users;