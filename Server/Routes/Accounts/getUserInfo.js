module.exports = (req, res) => {
    console.log(req.user)
    res.json({
        email: req.user.email,
      });
    }