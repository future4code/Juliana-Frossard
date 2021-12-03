import axios from "axios";
import { useState, useEffect } from "react";



export default function Information() {
    const [profile, setProfile] = useState({
            profile: {
              id: "",
              age: 0,
              name: "",
              photo: "",
              bio: ""
            }
          })


    useEffect(() => {
        getProfileToChoose();
    
      }, []);
    

    const getProfileToChoose = () => {
        axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/julianaFrossard/person")
            .then((response) => {
                setProfile(response.data.profile)
                // console.log(response.data)
            }).catch((err) => {
                console.log(err.response)
            }) 
            
    }

    return (
        <div>
            <img width="240" src={profile.photo} alt="imagem de perfil" />
            <div>{profile.name}, {profile.age}
                <p>{profile.bio}</p>
                </div>
                
                </div>
            
        
    )
}