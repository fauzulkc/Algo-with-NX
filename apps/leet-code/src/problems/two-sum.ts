export function twoSum ( nums: number[], target: number ): number[]
{
<<<<<<< HEAD
    const seenNumbers = new Map();
    for ( let i = 0; i < nums.length; i++ ) {
        let diff = target - nums[ i ];
        if ( seenNumbers.get( nums[ i ] ) !== undefined ) {
            return [ seenNumbers.get( nums[ i ] ), i ];
        }
        seenNumbers.set( diff, i );
    }
    return [];

};

export function twoSumON2 ( nums: number[], target: number ): number[]
{
=======
>>>>>>> origin/main
    // BAD O(n2) solution needs to be fixed
    for ( let i = 0; i < nums.length; i++ ) {
        for ( let j = i + 1; j < nums.length; j++ ) {
            if ( target === nums[ i ] + nums[ j ] ) {
                return [ i, j ];
            }
        }
<<<<<<< HEAD
    }
    return [];
}
=======

    }
};
>>>>>>> origin/main
