module.exports = (req, res) => {
    console.log(req.user.tasks)
    res.json({
        email: req.user.email,
        task: req.user.tasks,
        name: req.user.fullName,
        sub: req.user.subLevel
      });
    }