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
} catch (e) {
    return res.status(500).json({
      message: 'Erro interno',
      error: e.message,
    });
  }
};

module.exports = {
    login,
};