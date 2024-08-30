import { twoSum } from "../problems/two-sum";
describe( "Two Sum", () =>
{
    it( "should check if sum of two numbers in an array equals to the target", () =>
    {
        expect( twoSum( [ 2, 7, 11, 15 ], 9 ) ).toStrictEqual( [ 0, 1 ] );
    } );
    it( "should check if sum of two numbers in an array equals to the target", () =>
    {
        expect( twoSum( [ 3, 2, 4 ], 6 ) ).toStrictEqual( [ 1, 2 ] );
    } );
} );