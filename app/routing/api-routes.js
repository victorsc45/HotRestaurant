const tableData = require('../data/table-data.js');
const waitingListData = require('../data/waitinglist-data.js');
module.exports = function (app) {
    app.get('/api/tables', function (req, res) {
        res.json(tableData);
    });
    app.get('/api/waitlist', function (req, res) {
        res.json(waitingListData);
    });
    app.post('/api/tables', function (req, res) {
        if (tableData.length < 5) {
            tableData.push(req.body);
            res.json(true);
        } else {
            waitingListData.push(req.body);
            res.json(false);
        }
    })
}