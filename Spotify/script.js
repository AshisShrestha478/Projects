console.log("Let's write JavaScript");

async function getSongs(){
    let a = await fetch("http://127.0.0.1:5500/Spotify/songs/");
    let response = await a.text();
    console.log(response);
    let div = document.createElement("div");
    let as = div.getElementsByTagName("a");

    let songs = [];
    for (let index=0; index<as.length; index++){
        const element = as[index];
        if(element.href.endsWith(".mp3")){
            songs.push(element.href);
        }
    }

    return songs;

}

getSongs();

async function main() {
    //Get the list of all the songs
    let songs = await getSongs();
    console.log(songs);

    let songUL = document.querySelector(".songList").getElementsByTagName("ul")[0];
    for (const song of songs){
        songUL.innerHTML = songUL.innerHTML + song;
    }

    //Play the first song
    var audio = new Audio(songs[0]);
    audio.play();

    audio.addEventListener("loadeddata",()=>{
        let duration = audio.duration;
        console.log(duration);
    })
}

main();