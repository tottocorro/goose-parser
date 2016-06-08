module.exports = function(scope, type) {
    const res = {
        scope,
        type
    };

    Object.defineProperty(res, '$attr', {
        enumerable: false,
        value(attr) {
            this.attr = attr;
            return this;
        }
    });

    Object.defineProperty(res, '$child', {
        enumerable: false,
        value(child) {
            this.child = child;
            return this;
        }
    });

    return res;
};