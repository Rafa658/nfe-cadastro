import React from "react";
import HomeHeader from "./HomeHeader";
import HomeOrcamento from "./HomeOrcamento";
import HomeInfos from "./HomeInfos";
import HomeAssinaturas from "./HomeAssinaturas";

export default function Home() {
    return(
        <div>
            <HomeHeader/>
            <HomeOrcamento/>
            <HomeInfos/>
            <HomeAssinaturas/>
        </div>
    )
}