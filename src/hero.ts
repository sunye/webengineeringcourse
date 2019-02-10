interface Hero {
    attack(other: Hero);
}

class Paladin implements Hero {
    attack(other: Hero) {
        // (...)
    }
}

let liadrin : Hero = new Paladin();

