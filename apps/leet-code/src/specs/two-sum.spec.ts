<<<<<<< HEAD
import { twoSum, twoSumON2 } from "../problems/two-sum";
describe( "Two Sum with HashMap Solution", () =>
=======
import { twoSum } from "../problems/two-sum";
describe( "Two Sum", () =>
>>>>>>> origin/main
{
    it( "should check if sum of two numbers in an array equals to the target", () =>
    {
        expect( twoSum( [ 2, 7, 11, 15 ], 9 ) ).toStrictEqual( [ 0, 1 ] );
    } );
    it( "should check if sum of two numbers in an array equals to the target", () =>
    {
        expect( twoSum( [ 3, 2, 4 ], 6 ) ).toStrictEqual( [ 1, 2 ] );
    } );
<<<<<<< HEAD
} );
describe( "Two Sum with O(n2) Solution", () =>
{
    it( "should check if sum of two numbers in an array equals to the target", () =>
    {
        expect( twoSumON2( [ 2, 7, 11, 15 ], 9 ) ).toStrictEqual( [ 0, 1 ] );
    } );
    it( "should check if sum of two numbers in an array equals to the target", () =>
    {
        expect( twoSumON2( [ 3, 2, 4 ], 6 ) ).toStrictEqual( [ 1, 2 ] );
    } );
=======
>>>>>>> origin/main
} );