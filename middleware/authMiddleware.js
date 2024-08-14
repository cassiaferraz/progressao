const jwt = require('jsonwebtoken');
 
function authenticateToken(req, res, next) {
    const token = req.headers['x-access-token'];
    if (!token) {
        return res.status(401).json({ auth: false, message: 'Token não fornecido' });
    }
 
    jwt.verify(token, 'secreto', (err, decoded) => {
        if (err) {
            return res.status(403).json({ auth: false, message: 'Falha na autenticação do token' });
        }
        req.userId = decoded.userId;
        next();
    });
}
 
module.exports =  authenticateToken