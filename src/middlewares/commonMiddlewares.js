
let mid1 = function (req, res, next) {
    let appTypeHeader = req.headers["isfreeappuser"]
    if (!appTypeHeader) {
        res.send({ message: 'Missing: Header is Mandateory!' })
    }
    
    next();
}

module.exports.mid1 = mid1;