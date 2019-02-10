interface Interval<T> {
    begin : T;
    end   : T;

    overlaps(other : T): Boolean;
}