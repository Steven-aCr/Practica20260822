exports.opcionalHttpOnlyCookie = (req, res, next) => {

    // Guardamos la función res.json original de Express
    const originalJson = res.json;

    // Sobrescribimos res.json temporalmente
    // para interceptar la respuesta del login
    res.json = function (data) {

        // Si el cliente envió el header x-use-cookie: true
        // y la respuesta incluye un token
        const usaCookie =
            req.headers['x-use-cookie'] === 'true';

        if (usaCookie && data && data.token) {

            res.cookie(
                'token',
                data.token,
                {
                    httpOnly: true,
                    secure: process.env.COOKIE_SECURE === 'true',
                    sameSite: process.env.COOKIE_SAMESITE || 'none',
                    maxAge: 8 * 60 * 60 * 1000
                }
            );
        }

        // Ejecuta la respuesta JSON normal
        return originalJson.call(this, data);
    };

    next();
};