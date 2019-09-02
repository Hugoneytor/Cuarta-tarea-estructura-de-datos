export default class Punto{
    constructor(){
        this._ejeX = 0;
        this._ejeY = 0;

    }

    get ejeX(){
        return this._ejeX;
    }
    get ejeY(){
        return this._ejeY;
    }

    set ejeX(x){
        if( x > -100 || x < 100){
            this._ejeX = x;
        }else{
            this._ejeX = 0;
        }

    }
    set ejeY(y){
        if( y > -100 || y < 100){
            this._ejeY = y;
        }else{
            this._ejeY = 0;
        }
    }

    distancia(x1, x2, y1, y2){
        var distancia = Math.sqrt(((x2-x1)**2) + ((y2-y1)**2));
        return distancia;
    }

    toString(){
        var coordenada = `(${this._ejeX},${this._ejeY})`;
        return coordenada;
    }
}