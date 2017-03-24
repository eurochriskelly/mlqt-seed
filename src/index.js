"use strict";

// @depends process.sjs

xdmp.invokeFunction(main, {
    // transactionMode : 'update-auto-commit',
    isolation : 'different-transaction',
    database : xdmp.database('rilm-content')
});

function main () {
    return 123
}
