module.exports = {
    all: function(req,res) {
        res.send('all todos');
    },
    viewOne: function(req, res) {
        console.log('Viewing ' + req.params.id);
    },
    create: function(req, res) {
        console.log('todo created');
    },
    destroy: function(req, res) {
        console.log('todo deleted');
    },
    edit: function(req, res) {
        console.log('todo ' +req.params.id + " updated");
    }
};