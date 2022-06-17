let axios = require("axios");

const getSortedTemp = async function (req, res) {
    try {
      let cities = [
        "Bengaluru",
        "Mumbai",
        "Delhi",
        "Kolkata",
        "Chennai",
        "London",
        "Moscow",
      ];
      let city = [ ];

      for (i = 0; i < cities.length; i++) {
        let obj = { city: cities[i] };
        let option = {
          method: "get",
          url: `http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=83c097eb4d5be65b2622637cb0dd2fd8`,
        };
        let result = await axios(option);
        // console.log(result.data.main.temp)
        obj.temp = result.data.main.temp;
        // console.log(obj)
        city.push(obj);
      }
    //   console.log(city)
      let sortTemp = city.sort(function (a, b) {
        return a.temp - b.temp;
      });
      res.status(200).send(sortTemp);
    } catch (error) {
      res.status(400).send({ msg: error.message });
    }
  };
  
  module.exports.getSortedTemp=getSortedTemp;