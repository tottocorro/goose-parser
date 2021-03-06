/**
 * @fileOverview
 *
 * Perform MouseClick on the element matched by selector
 *
 */

const Action = require('./Action');

class ActionMouseClick extends Action {
    async perform() {
        return this._env.mouseClick(this._selector);
    }
}

module.exports = ActionMouseClick;
