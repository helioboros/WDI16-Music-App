import React from 'react'
import Song from "./Song"

const SongList = (props) => {
    const props = props.songs.map((song) => {
        return (
            <Song
            {...song}
            deleteSong={props.deleteSong}
            key={song.id} />
        )
    })

    return (
        <div>
            {props.songs}
        </div>
    )
}

export default SongList