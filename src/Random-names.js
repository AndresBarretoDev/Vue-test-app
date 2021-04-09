function capFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function generateName() {
    var name1 = ['Pedro', 'Juan','Felipe','Camila','Rosa','Sara','Emily','Angela','Santiago','José','Luisa','Andrea'];

    var name2 = ['Doe','Barreto','Lopez','Rojas','Oliveros','Silva','Camargo','Pérez','Jiménez','Herrera','Martinez',];

    var name = capFirst(name1[getRandomInt(0, name1.length + 1)]) + ' ' + capFirst(name2[getRandomInt(0, name2.length + 1)]);
    return name;

}
export default generateName;