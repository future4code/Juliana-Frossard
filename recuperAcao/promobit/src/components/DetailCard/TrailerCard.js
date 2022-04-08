import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { api_key, BASE_URL } from '../../constants/urls';

function TrailerCard(props) {
    const params = props.params.id
    const [trailer, setTrailer] = useState(null);

    useEffect(() => {
        async function getVideo(){

            const videos = await axios.get(`${BASE_URL}/movie/${params}/videos${api_key}`)
            const trailer = videos.data.results.find(
                (findTrailer) =>
                  findTrailer.official === true && findTrailer.site === "YouTube"
              );
              setTrailer(trailer)
        }
        getVideo()
    },[params])

    
    return (
        <iframe
        title="Trailer Original"
        id="ytplayer"
        type="text/html"
        width="907"
        height="510"
        marginRigth="710"
        src={`http://www.youtube.com/embed/?autoplay=1`}
        //${trailer.key}
        frameborder="0"
      />
    )
};

export default TrailerCard;