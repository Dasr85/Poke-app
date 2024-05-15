export const arrayIds = () => {
    function getRandomArbitrary(min, max) {
      return Math.round(Math.random() * (max - min) + min);
    }

    let array1 = [];
    for (var i = 0; i < 5; i++) {
        array1[i] = getRandomArbitrary(0, 151);
      //console.log(array1);
    }

    return array1;
};
