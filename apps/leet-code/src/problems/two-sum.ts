export function twoSum ( nums: number[], target: number ): number[]
{
    // BAD O(n2) solution needs to be fixed
    for ( let i = 0; i < nums.length; i++ ) {
        for ( let j = i + 1; j < nums.length; j++ ) {
            if ( target === nums[ i ] + nums[ j ] ) {
                return [ i, j ];
            }
        }

    }
};