const router = require("express").Router();
let Logsheet = require("../models/logsheet.model");

router.route("/").get((req, res) => {
  Logsheet.find()
    .then((logsheets) => res.json(logsheets))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const shiftDate = Date.parse(req.body.shiftDate);
  const project = req.body.project;
  const accountName = req.body.accountName;
  const fiCase = Number(req.body.fiCase);
  const notes = req.body.notes;
  const vID = req.body.vID;
  const eID = req.body.eID;
  const previewLink = req.body.previewLink;

  const newLogsheet = new Logsheet({
    username,
    shiftDate,
    project,
    accountName,
    fiCase,
    notes,
    vID,
    eID,
    previewLink,
  });

  newLogsheet
    .save()
    .then(() => res.json("Project added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Logsheet.findById(req.params.id)
    .then((logsheet) => res.json(logsheet))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Logsheet.findByIdAndDelete(req.params.id)
    .then(() => res.json("Project deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  Logsheet.findById(req.params.id)
    .then((logsheet) => {
      logsheet.username = req.body.username;
      logsheet.shiftDate = Date.parse(req.body.shiftDate);
      logsheet.project = req.body.project;
      logsheet.accountName = req.body.accountName;
      logsheet.fiCase = Number(req.body.fiCase);
      logsheet.notes = req.body.notes;
      logsheet.vID = req.body.vID;
      logsheet.eID = req.body.eID;
      logsheet.previewLink = req.body.previewLink;

      logsheet
        .save()
        .then(() => res.json("Project updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
