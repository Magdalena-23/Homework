fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
        console.log(response);
        return response.json();
    })
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.error(error);
    });


    fetch("https://jsonplaceholder.typicode.com/photos")
    .then(res => {
        console.log(res);
        return res.json();
    })
    .then(photos => {
        console.log(photos);
        for(var i = 0; i < 100; i ++) {
            console.log(photos[i].url);
            let images = document.getElementsByClassName("photos");
            images[i].src = photos[i].url;
            images[i].style.width = "200px";
        }
    })
    .catch(error => {
        console.error(error);
    });
    

