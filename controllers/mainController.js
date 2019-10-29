exports.index = function index(req, res) {
    res.json({
        ipaddress: req.ip,
        language: req.header('Accept-Language'),
        software: req.header('User-Agent')
    })
}