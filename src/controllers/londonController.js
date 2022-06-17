let axios = require("axios");

const getLondonWhether = async function (req, res) {
    try {
      let api = "83c097eb4d5be65b2622637cb0dd2fd8";
      let option = {
        method: "get",
        url: `http://api.openweathermap.org/data/2.5/weather?q=London&appid=${api}`,
      };
      let whether = await axios(option);
      // console.log(whether);
      res.status(200).send(whether.data);
      let londonTemp = whether.data.main.temp;
      console.log(`londonTemperature:${londonTemp}`);
      
    } catch (error) {
      return res.status(401).send({ msg: error.message });
    }
  };
  
  module.exports.getLondonWhether=getLondonWhether