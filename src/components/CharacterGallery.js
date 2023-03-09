import React from "react";
import Character from "./Character";
import characterInfo from "../data/characterData.json"

function CharacterGallery() {
    const characterComponentArray = characterInfo.map(
        c => <Character {...c} key={c._id} />
    )
    return (
        <div data-test="component-char-gallery">
            {characterComponentArray}
        </div>
    )
}

export default CharacterGallery