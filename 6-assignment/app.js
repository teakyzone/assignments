
const cdRack = [
    {
        title: "Channel Orange",
        artist: "Frank Ocean",
        year: 2012,
        ImgSource: "https://m.media-amazon.com/images/I/51Mp2uc8UFL._AC_SL1400_.jpg",
        imgAlt: "album cover of Channel Orange by Frank Ocean",
    },
    {
        title: "Speakerboxxx/The Love Below",
        artist: "OutKast",
        year: 2003,
        ImgSource: "https://t2.genius.com/unsafe/300x300/https%3A%2F%2Fimages.genius.com%2F1273a6007aac8086c7106f19bd9ec907.1000x1000x1.png",
        imgAlt: "album cover of Speakerboxxx/The Love Below by OutKast",
    },
    {
        title: "The Miseducation of Lauryn Hill",
        artist: "Lauryn Hill",
        year: 1998,
        ImgSource: "https://upload.wikimedia.org/wikipedia/en/3/35/The_Miseducation_of_Lauryn_Hill.jpg",
        imgAlt: "album cover of The Miseducation of Lauryn Hill by Lauryn Hill",    
    },
    { 
        title: "Frank",
        artist: "Amy Winehouse",
        year: 2003,
        ImgSource: "https://m.media-amazon.com/images/I/81VL-8chziL._AC_SL1400_.jpg",
        imgAlt: "album cover of Frank by Amy Winehouse",
    },
    {
        title: "The Score",
        artist: "Fugees",
        year: 1996,
        ImgSource: "https://capsulerecords.co.uk/cdn/shop/files/Fugees_-_The_Score_-_Front-3528264630.jpg?v=1714743263&width=1800",
        imgAlt: "album cover of The Score by Fugees",
    },
    {
        title: "Aijuswanaseing",
        artist: "Musiq Soulchild",
        year: 2000,
        ImgSource: "https://upload.wikimedia.org/wikipedia/en/0/0c/Aijuswanaseing.jpg",
        imgAlt: "album cover of Aijuswanaseing by Musiq Soulchild",
    },
    {
        title: "Voodoo",
        artist: "D'Angelo",
        year: 2000,
        ImgSource: "https://upload.wikimedia.org/wikipedia/en/3/3c/D%27Angelo_-_Voodoo.jpg",
        imgAlt: "album cover of Voodoo by D'Angelo",
    },
    {
        title: "The Shining",
        artist: "J Dilla",
        year: 2006,
        ImgSource: "https://cdn-images.dzcdn.net/images/cover/e7dec2489b1137e9280226ba029267cd/500x500-000000-80-0-0.jpg",
        imgAlt: "album cover of The Shining by J Dilla",
    },

]
const cdRackSection = document.getElementById("cd-rack");   
cdRack.forEach(cd => {
    const cdDiv = document.createElement("div");
    cdDiv.classList.add("cd");

    const cdImg = document.createElement("img");
    cdImg.src = cd.ImgSource;
    cdImg.alt = cd.imgAlt;

    const cdTitle = document.createElement("h2");
    cdTitle.textContent = `${cd.title} (${cd.year})`;

    const cdArtist = document.createElement("p");
    cdArtist.textContent = `Artist: ${cd.artist}`;

    cdDiv.appendChild(cdImg);
    cdDiv.appendChild(cdTitle);
    cdDiv.appendChild(cdArtist);

    cdRackSection.appendChild(cdDiv);
});
