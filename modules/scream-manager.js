module.exports = class ScreamManager {
    constructor() {
        this.screams = [];
    }

    addScream(scream) {
        this.screams.push(scream);
    }

    removeScreams(userId) {
        this.screams = this.screams.filter(function(el) {
            if (el.getUser().id === userId) {
                el.clearTimeouts();
            }

            return el.getUser().id !== userId;
        });
    }

    resetTimeouts(userId) {
        let timeouts = this.screams.filter(el => el.getUser().id === userId);

        for (const timeout of timeouts) {
            timeout.setTimeout();
        }
    }
}