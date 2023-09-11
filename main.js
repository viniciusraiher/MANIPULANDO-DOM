const controle = document.querySelector("[data-controle]")

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}
pecas

(bracos: {-}, blindagens: {-}, nucleos:{-}, pernas: {-}, foguetes{-})
pecas.bracos
    {forca: 29, poder: 35, energia: -21, velocidade: -5}
        "energia": -21,
        "forca": 29,
        "poder": 35,
        "velocidade": -5
            [[Prototype]]: Objetc
            pecas.braco.energia
-21
pecas["bracos"]
    {forca: 29, poder: 35, energia: -21, velocidade: -5}

<