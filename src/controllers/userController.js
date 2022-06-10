

const basicCode= async function(req, res) {
    console.log( "Today's Assignment is Solved!")
    res.send({ msg: "Today's Topic was Middleware"})
    }


module.exports.basicCode= basicCode