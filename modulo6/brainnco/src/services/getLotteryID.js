import axios from 'axios';
import { BASE_URL } from '../constants/BASE_URL'

const getLotteryID = async (loteriaID) => {

    const data = await axios
        .get(`${BASE_URL}/loterias-concursos`)

    const result = data.map((item) => item.loteriaId)
    if (loteriaID === result) {
        return loteriaID
    }else{
        return{
            error
        }
    }
};

export default getLotteryID;