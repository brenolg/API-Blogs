const { loginService } = require('../services');
const { createToken } = require('../auth/authFuncs');

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
    return res.status(400)
    .json({ message: 'Some required fields are missing' }); 
}

    const user = await loginService.login(email, password);

    if (!user) return res.status(400).json({ message: 'Invalid fields' });

    const token = createToken(email);
    return res.status(200).json({ token });
} catch (err) {
    res.status(500).json({
      message: 'Erro interno',
      error: err.message,
    });
  }
};

// const createUser = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const user = await loginService.createUser({
//       email,
//       password,
//     });

//     if (!user) throw Error;

//     res
//       .status(201)
//       .json({ message: 'Novo usuário criado com sucesso', user: email });
//   } catch (err) {
//     res.status(500).json({
//       message: 'Erro ao salvar o usuário no banco',
//       error: err.message,
//     });
//   }
// };

module.exports = {
    login,
};