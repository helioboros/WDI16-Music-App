import React from 'react'
import ReactPlayer from 'react-player'

const Song = (props) => {
    return (
        <div className='player-wrapper'>
            <h4>{song.title}</h4>
            <ReactPlayer
                className='react-player'
                url={song.song_url}
                width='50%'
                height='50%' />
                <button onClick={() =>props.deleteSong(props.id)}>Delete</button>
        </div>
    )
}

export default Song