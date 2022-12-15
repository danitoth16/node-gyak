const getNotes = require('./notes.js')
const yargs = require('yargs')
const { command, demand, demandOption } = require('yargs')


// Create add command
yargs.command ({
    command: 'add',
    describe: 'Add a new note!',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true
        }
    },
    handler: function(argv) {
        console.log('Adding a new note!', argv)
    }
})

// Create remove command
yargs.command({
    command:'remove',
    describe: 'Remove a note!',
    handler: function() {
        console.log('Remove a note!')
    }
})

// Create read command
yargs.command({
    command:'read',
    describe: 'Read a note!',
    handler: function() {
        console.log('Reading a note!')
    }
})

// Create list command
yargs.command({
    command:'list',
    describe: 'List the notes!',
    handler: function() {
        console.log('Listing the notes!')
    }
})


console.log(yargs.argv)