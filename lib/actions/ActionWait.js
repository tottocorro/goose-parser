/**
 * @fileOverview
 * Abstract wait action
 */

const Action = require('./Action');
const wait = require('../tools/wait');

class ActionWait extends Action {
    /**
     * Wait until function evalFunction expected in checkerFunction result
     * @param {Function} evalFunction
     * @param {Function} [checkerFunction]
     * @param {Array} [args]
     * @returns {Promise}
     */
    async wait(evalFunction, checkerFunction, args) {
        return wait(this._env, evalFunction, checkerFunction, args, this._options.timeout, this._options.interval);
    }
}

module.exports = ActionWait;
