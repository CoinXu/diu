"use strict";
/**
 * @author coinxu<duanxian0605@gmail.com>
 * @date 2018/05/01
 * @description FilterManager
 */
Object.defineProperty(exports, "__esModule", { value: true });
class FilterManager {
    constructor(context, filters) {
        this.context = context;
        this.filters = filters || [];
        this.point = 0;
    }
    add(filter) {
        this.filters.push(filter);
        return this;
    }
    remove(filter) {
        this.filters = this.filters.filter(f => f !== filter);
        return this;
    }
    async next() {
        if (!this.hasNext()) {
            return this;
        }
        const point = this.point++;
        const filter = this.filters[point];
        if (filter) {
            await filter.action(this.context, this);
        }
        return this;
    }
    hasNext() {
        return this.point < this.filters.length;
    }
}
exports.FilterManager = FilterManager;
//# sourceMappingURL=FilterManager.js.map