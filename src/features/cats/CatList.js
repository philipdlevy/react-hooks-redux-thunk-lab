// write your CatList component here
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";



function CatList(catPics) {

    const cats = useSelector((state) => state.entities)

    console.log("cats", cats)

    const catImage = cats.map((cat) => {
        return <a href={cat.url} alt={cat}><img src={cat.url}></img></a>
    })


    return (
        <div>
            {catImage}
        </div>
    )
}

export default CatList;
