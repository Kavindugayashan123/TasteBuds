function checkingOutlets(req, res, next) {
  var date = new Date();
  var datetime = date.toLocaleString();
  console.log(`Checking food Outlets from DB ...`);
  console.log(`Requested Date and Time : ${datetime}`);
  next();
}

module.exports = checkingOutlets;
