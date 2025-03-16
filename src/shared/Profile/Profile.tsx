import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import "./Profile.css";

interface IUser {
  name: string;
  email: string;
  role: string;
  image: string;
}

export function Profile() {
    const [user, setUser] = useState<IUser>()
    const navigate = useNavigate()

    console.log("uusuer",user)


    useEffect(() => {
        const userData = localStorage.getItem("user")
        if (userData) {
          setUser(JSON.parse(userData))
        } else {
          navigate("/login")
        }
    }, [navigate])

    if (!user) {
        return <div>Loading...</div>
    }

    return (
        <div className="profile-container">
            <h1>Profile</h1>
            <div className="profile-info">
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Role:</strong> {user.role}</p>
                <img src={user.image}/>
            </div>

            <button onClick={() => navigate("/posts")} className="buttondetailed">Back to Posts</button>
      </div>
    )
}