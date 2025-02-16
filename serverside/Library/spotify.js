
const axios = require('axios')

async function spotifyDown(url) {
let linkRegex = /https:\/\/open\.spotify\.com\/track\/[0-9A-Za-z]+/i;
try {
   let response = await axios.get('https://api.fabdl.com/spotify/get?url=' + url)
   let { id, type, name, artists, image, duration_ms, gid } = response.data.result
   let curl = await axios.get(`https://api.fabdl.com/spotify/mp3-convert-task/${gid}/${id}`)
   let { download_url } = curl.data.result
    // console.log(curl.data)
    let result = {
          staus: true,
          creator: 'NuyyOfc',
          nama: artists,
          title: name,
          durasi: convertDuration(duration_ms),
          thumb: image,
          url: 'https://api.fabdl.com' + download_url
           }
         console.log(result)
        return result
      if (!response.data.result) {
       let result = {
             status: false,
             creator: 'NuyyOfc',
             data: 'Music Not Found:/'
               }
          // console.log(result)
          return result
        }
    } catch(error) {
      console.log(error)
      return error
      }
    return
}


module.exports = { spotifyDown }


function convertDuration(durationMs) {
  const seconds = Math.floor((durationMs / 1000) % 60);
  const minutes = Math.floor((durationMs / (1000 * 60)) % 60);
  const hours = Math.floor((durationMs / (1000 * 60 * 60)) % 24);

  let result = '';
  if (hours > 0) {
    result += hours + ' jam ';
  }
  if (minutes > 0) {
    result += minutes + ' menit ';
  }
  if (seconds > 0) {
    result += seconds + ' detik';
  }

  return result.trim();
}