import React from "react";
import LotteryChooice from "../LotteryChoice/LotteryChoice";
import LotteryResult from "../LotteryResult/LotteryResult";
import { MainContainer } from "./styled";

const MainPage = () => {
    return (
        <MainContainer>
            <LotteryChooice/>
            <LotteryResult/>
        </MainContainer>
    );
}

export default MainPage;
