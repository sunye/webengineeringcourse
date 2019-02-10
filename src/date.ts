class Clock {
    hour     : number;
    minute   : number;
    second   : number;

    constructor(hour : number, minute : number, second : number) {
        this.hour   = hour;
        this.minute = minute;
        this.second = second;
    }
    
    tic() {
        console.log("tick tock");
    }
}

let clock : Clock = new Clock(12, 33, 10);
clock.tic();