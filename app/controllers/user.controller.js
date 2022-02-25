exports.allAccess = (req, res) =>{
    res.status(200).send("Acesso público");
};

exports.userBoard = (req, res) =>{
    res.status(200).send("Aecsso de todos usuários");
};

exports.adminBoard = (req, res) =>{
    res.status(200).send("Acesso Admin");
};

exports.moderatorBoard = (req, res) =>{
    res.status(200).send("Acesso Moderador");
};