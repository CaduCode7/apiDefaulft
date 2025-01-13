require("dotenv").config({ path: './config/homolog.env' });

const authentication = (req, res, next) => {
    const uuid = req.header("UUID");

    if(uuid !== process.env.UUID){
        return res.status(403).json({
            success: false,
            message: "Chave de acesso inválida"
        });
    }

    return next();
};

export default authentication;