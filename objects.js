var playlist = {
  radiohead: "creep"
}


function updatePlaylist(playlist,artist,song){
playlist[artist] = song;
return playlist;

}

function removeFromPlaylist (playlist,artistName){
delete playlist[artistName];
  return playlist;
}
