fetch('https://photoslibrary.googleapis.com/v1/albums')
    .then(res => res.json())
    .then(data => console.log(data))