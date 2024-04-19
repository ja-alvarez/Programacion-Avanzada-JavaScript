class Multimedia {
    constructor(url) {
        this._url = url;
    }

    get url() {
        return this._url;
    }

    setInicio() {
        return 'Este método es para realizar un cambio en la URL del video';
    }
}

class Reproductor extends Multimedia {
    constructor(id, url) {
        super(url);
        this._id = id;
    }

    playMultimedia() {
        const iframe = document.getElementById(this._id);
        iframe.setAttribute("src", this.url);
    }

    setInicio(tiempo) {
        this._url += `start=${tiempo}`;
    }
}

const musicaReproductor = new Reproductor('musica', 'https://www.youtube.com/embed/imSefM4GPpE?si=GXyBTB3Twwwq8yz0&amp;');
const peliculasReproductor = new Reproductor('peliculas', 'https://www.youtube.com/embed/TnGl01FkMMo?si=s0Qhr1IgINMiWrKA&amp;');
const seriesReproductor = new Reproductor('series', 'https://www.youtube.com/embed/quQ95LH-fzw?si=iEZXA9cxT-_W9K9q&amp;');

musicaReproductor.setInicio(10);
musicaReproductor.playMultimedia();

peliculasReproductor.setInicio(10);
peliculasReproductor.playMultimedia();

seriesReproductor.setInicio(10);
seriesReproductor.playMultimedia();