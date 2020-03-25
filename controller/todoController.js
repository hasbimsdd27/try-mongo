const Todos = require("../model/todoModels");

exports.test = (req, res) => {
  res.status(200).send({ status: true, message: "Ok" });
};

exports.create = (req, res) => {
  console.log(req.body);
  let todos = new Todos({
    name: req.body.name,
    done: false
  });

  todos.save(err => {
    if (err) {
      return next(err);
    }
    res.status(200).send({ status: true, message: "Success created" });
  });
};

exports.getTodo = (req, res) => {
  Todos.find({}, (err, todos) => {
    if (err) {
      return next(err);
    }
    res
      .status(200)
      .send({ status: true, message: "Get All Todos", data: todos });
  });
};

exports.todoDetails = (req, res) => {
  Todos.findById(req.params.id, (err, todos) => {
    if (err) {
      return next(err);
    }
    res
      .status(200)
      .send({ status: true, message: "Get All Todos", data: todos });
  });
};

exports.todoUpdate = (req, res) => {
  Todos.findByIdAndUpdate(req.params.id, { $set: req.body }, (err, todos) => {
    if (err) {
      return next(err);
    }
    res
      .status(200)
      .send({ status: true, message: "Update Todo Complete", data: todos });
  });
};

exports.todoDelete = (req, res) => {
  Todos.findByIdAndRemove(req.params.id, (err, todos) => {
    if (err) {
      return next(err);
    }
    res
      .status(200)
      .send({ status: true, message: "Delete Todo Complete", data: todos });
  });
};
