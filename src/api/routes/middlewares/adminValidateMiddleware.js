const ADMIN_AUTHORIZED_CODE = 123;

module.exports = {
  isAdmin: (req, res, next) => {
    //isAdmin é um middleware
    const { adminCode } = req.query;
    if (adminCode == ADMIN_AUTHORIZED_CODE) {
      return next(); //isso é um método para executar o próximo middleware ou rota.
    }
    return res.send("Você não é um administrador!");
  },
};
