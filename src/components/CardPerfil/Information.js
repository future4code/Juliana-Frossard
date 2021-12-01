import axios from "axios";
import { useState, useEffect } from "react";



export default function Information(props) {
    const [profile, setProfile] = useState([])


    useEffect(() => {
        getProfileToChoose()
    });

    const getProfileToChoose = () => {
        axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:julianaFrossard/person")
            .then((response) => {
                setProfile(response.data.profile)
            }).catch((err) => {
                console.log(err.response)
            })
    }
    const profileList = profile.map(item => {
        return        <div>
            <h3>{item.name},</h3>
            <p>{item.age} anos</p>
            <p>{item.bio}</p>
        </div>
    })
    
    return (
        <div>
            {profileList}
            <div>
                <button>X</button>
                <button>s2</button>
            </div>
            <div>
                
            </div>

        </div>
    )
}