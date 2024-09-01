/*
Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.
*/
export function containsDuplicate ( nums: number[] ): boolean
{
    let foundSet = new Set();
    for ( let i = 0; i < nums.length; i++ ) {
        if ( foundSet.has( nums[ i ] ) ) return true;
        else {
            foundSet.add( nums[ i ] );
        }
    }
    return false;
};