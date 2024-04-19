class Multimedia {
    constructor(url){
        this._url = url;
    }

    get url() {
        return this._url;
    }

    setInicio(){

    }
}

class Reproductor extends Multimedia{
    constuctor(id){
        this._id = id;
    }
    playMultimedia(){

    }
    setInicio(){

    }
}