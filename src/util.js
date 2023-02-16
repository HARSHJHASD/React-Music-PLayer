import { v4 as uuidv4 } from "uuid";

function chillHop() {
    return [
        {
            name: "Bahu Kaale ki",
            cover: "https://chillhop.com/wp-content/uploads/2022/12/b48463b9b5a0351cc2f34b31fcee6185fdb03bb5-1024x1024.jpg",
            artist: "Pranjal Dahiya, Sapna Chaudhary, El Train, goodie bags",
            audio: "https://cdn.pagalworld.us/songs/new/192/Bahu%20Kale%20Ki%20-%20Gajender%20Phogat.mp3",
            color: ["#7c7561", "#535653"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Gajban",
            cover: "https://chillhop.com/wp-content/uploads/2022/09/8c2eab8525ace609b0c68b7564eb085d2244ee09-1024x1024.jpg",
            artist: "Illetrate, Mr Slipz",
            audio: "https://cdn.pagalworld.us/songs/new/192/Gajban%20-%20Sapna%20Choudhary.mp3",
            color: ["#d6e0ca", "#7aadad"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Kabootar",
            cover: "https://chillhop.com/wp-content/uploads/2022/10/41619d032f80a089e2c99e98953d441fd061ef12-1024x1024.jpg",
            artist: "less.people",
            audio: "https://pagalnew.com/download128/20536",
            color: ["#494043", "#818689"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Dabya Koni karde",
            cover: "https://chillhop.com/wp-content/uploads/2022/12/b48463b9b5a0351cc2f34b31fcee6185fdb03bb5-1024x1024.jpg",
            artist: "El Train",
            audio: "https://pagalworld.nl/files/download/id/26429",
            color: ["#7c7561", "#535653"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Special Person",
            cover: "https://chillhop.com/wp-content/uploads/2022/10/41619d032f80a089e2c99e98953d441fd061ef12-1024x1024.jpg",
            artist: "less.people",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=45169",
            color: ["#494043", "#818689"],
            id: uuidv4(),
            active: true,
        },
        {
            name: "Empty Rooms",
            cover: "https://chillhop.com/wp-content/uploads/2022/09/8c2eab8525ace609b0c68b7564eb085d2244ee09-1024x1024.jpg",
            artist: "Illetrate, Mr Slipz",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=48117",
            color: ["#d6e0ca", "#7aadad"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Someone New",
            cover: "https://chillhop.com/wp-content/uploads/2022/10/41619d032f80a089e2c99e98953d441fd061ef12-1024x1024.jpg",
            artist: "less.people",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=47641",
            color: ["#494043", "#818689"],
            id: uuidv4(),
            active: false,
        },
    ];
}


export default chillHop;