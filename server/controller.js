module.exports = {
  read: (req, res) => {
    const db = req.app.get('db');
    db.getHouses().then(instance => {
      res.status(200).send(instance);
    });
  },

  create: (req, res) => {
    console.log(req.body);
    const {
      name,
      address,
      city,
      state,
      zipcode,
      imgUrl,
      monthlyMA,
      desiredMR,
    } = req.body;

    const db = req.app.get('db');
    db.createHouse([
      name,
      address,
      city,
      state,
      zipcode,
      imgUrl,
      monthlyMA,
      desiredMR,
    ]).then(instance => {
      res.status(200).send(instance);
    });
  },

  remove: (req, res) => {
    const {id} = req.params;
    const db = req.app.get('db');
    db.removeHouse([id]).then(instance => {
      res.status(200).send(instance);
    });
  },

  login: (req, res, next) => {
    let {username} = req.body;
    if (!req.session.username) {
      req.session.username = username;
      res.status(200).send(username);
    }

    console.log("LOGIN: ", req.session)
  },

  logout: (req, res, next) => {
    // res.session.destroy(function(err) {
    //   console.log(err)
    // });
    req.session.destroy();
    res.sendStatus(200);
    console.log("LOGOUT: ", req.session)
  },

  me: (req, res) => {
    console.log('REQ_SES: ', req.session);
    if (req.session.username) {
      res.status(200).send(req.session.username);
    } else {
      res.sendStatus(403);
    }
  },
};
