/**
 * Documentation for DummyClass
 */
export default class DummyClass {
    /**
     * Documentation for this method
     */
    additionWithCallback(x: number, y: number, cb: (z: number) => void) {
        return cb(x + y);
    }

    /**
     * Untested method for coverage
     */
    untestedMethod() {
        return 42;
    }
}
