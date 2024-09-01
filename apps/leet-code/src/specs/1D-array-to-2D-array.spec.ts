/*
You are given a 0-indexed 1-dimensional (1D) integer array original, and two integers, m and n. You are tasked with creating a 2-dimensional (2D) array with  m rows and n columns using all the elements from original.

The elements from indices 0 to n - 1 (inclusive) of original should form the first row of the constructed 2D array, the elements from indices n to 2 * n - 1 (inclusive) should form the second row of the constructed 2D array, and so on.

Return an m x n 2D array constructed according to the above procedure, or an empty 2D array if it is impossible.
*/

import { construct2DArray, construct2DArrayLoop } from "../problems/1D-array-to-2D-array";

describe( "Construct a 1D Array to 2D array with m with original values and n with 2 x original values", () =>
{
    it( "Construct Array with Slice Method original = [1,2,3,4], m = 2, n = 2, return [[1,2],[3,4]]", () =>
    {
        expect( construct2DArray( [ 1, 2, 3, 4 ], 2, 2 ) ).toStrictEqual( [ [ 1, 2 ], [ 3, 4 ] ] );
    } );
    it( "Construct Array with Loop Method original = [1,2,3,4], m = 2, n = 2, return [[1,2],[3,4]]", () =>
    {
        expect( construct2DArrayLoop( [ 1, 2, 3, 4 ], 2, 2 ) ).toStrictEqual( [ [ 1, 2 ], [ 3, 4 ] ] );
    } );
} );