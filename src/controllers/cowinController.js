let axios = require("axios");

const getByDateAndDis = async function (req, res) {
  try {
    let date = req.query.date;
    let district = req.query.district_id;
    let option = {
      method: "get",
      url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${district}&date=${date}`,
    };
    let result = await axios(option);
    // console.log(result);
    res.status(200).send({ msg: result.data });
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
};


module.exports.getByDateAndDis = getByDateAndDis;

