module.exports = (req, res, next) => {
    console.log('requisição feita em ' + req.url);
    next();
};