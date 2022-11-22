module.exports = class Scream {
    constructor(user, minutes, channel, autoReport) {
        this.user = user;
        this.minutes = minutes;
        this.channel = channel;
        this.autoReport = autoReport;
        this.timeouts = [];

        this.setTimeout();
    }

    getUser() {
        return this.user;
    }

    getMinutes() {
        return this.minutes;
    }

    getChannel() {
        return this.channel;
    }

    getAutoReport() {
        return this.autoReport;
    }

    setTimeout() {
        this.clearTimeouts();

        this.timeouts.push(setTimeout((function() {
            this.channel.send(`AAAAAAAHHHHHHHHHHHHHH! ${this.user.toString()}`);

            this.setNonreportTimeout();
        }).bind(this), this.minutes * 60 * 1000));
    }

    setNonreportTimeout() {
        this.timeouts.push(setTimeout((function() {
            this.channel.send(`${this.user.toString()} didn't report! AAAAAAAHHHHHHHHHHHHHH!`)

            this.setNonreportTimeout();
        }).bind(this), 1 * 60 * 1000));
    }

    clearTimeouts() {
        while (this.timeouts.length > 0) {
            let t = this.timeouts.pop();

            clearTimeout(t);
        }
    }
}