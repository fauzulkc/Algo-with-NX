/*
Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

*/

import { containsDuplicate } from "../problems/contains-duplicate";

describe( "Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.", () =>
{
    it( "Should return true when input is [1,2,3,1]", () =>
    {
        expect( containsDuplicate( [ 1, 2, 3, 1 ] ) ).toBeTruthy();
    } );
    it( "Should return false when input is [1,2,3,4]", () =>
    {
        expect( containsDuplicate( [ 1, 2, 3, 4 ] ) ).toBeFalsy();
    } );
    it( "Should return true when input is [1,1,1,3,3,4,3,2,4,2]", () =>
    {
        expect( containsDuplicate( [ 1, 1, 1, 3, 3, 4, 3, 2, 4, 2 ] ) ).toBeTruthy();
    } );
} );