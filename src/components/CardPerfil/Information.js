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
        axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:julianaFrossard/person")
            .then((response) => {
                setProfile(response.data)
                console.log(response.data)
            }).catch((err) => {
                console.log(err.response)
            }) 
            
    }

    return (
        <div>
            <img width="240" src={data.profile.photo} alt="imagem de perfil" />
            <div>{data.profile.name}, {data.profile.age}
                <p>{data.profile.bio}</p>
                <div>
                    <button>X</button>
                    <button>s2</button>
                </div>
            </div>
        </div>
    )
}

