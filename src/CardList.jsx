import React from "react";
import Card from"./Card";
import testData from'./test-data.json';

function CardList(){
    return(
        <>
        {testData.map((p,ind)=>{
            return <Card {...p} key={ind}/>
        })}
        </>
    );
}
export default CardList;