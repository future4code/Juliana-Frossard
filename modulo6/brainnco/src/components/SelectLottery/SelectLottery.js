import React from 'react';
import {SelectButton} from './styled'


const SelectLottery = (props) => {
const lottery = props.lottery
    return (
        <div>
            <SelectButton>
                <option >{lottery.nome}</option>
                <option>{lottery.nome}</option>
                <option>{lottery.nome}</option>
            </SelectButton>
        </div>
    );
};

export default SelectLottery;