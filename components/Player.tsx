"use client";

import React from 'react'

import usePlayer from '@/hooks/usePlayer';
import useGetSongById from '@/hooks/useGetSongById';
import useLoadSongUrl from '@/hooks/useLoadSongUrl';

import PlayerContent from './PlayerContent';

const Player = () => {
    const player = usePlayer();
    const { song } = useGetSongById(player.activeId);

    const songUrl = useLoadSongUrl(song!);

    if(!song || !songUrl || !player.activeId) {
        return null;
    }

    return (
        <div className="
            fixed
            bottom-0
            w-full
            bg-black
            py-2
            px-4
            h-[80px]
        ">
            <PlayerContent
                key={songUrl}
                song={song}
                songUrl={songUrl} 
            />
        </div>
    )
}

export default Player