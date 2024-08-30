import { NumArray } from '../problems/prefix-sum-range';

describe( 'Sum of Cumulative Total in Range', () =>
{
    it( 'should print 40 if the cumulative sum is checked from range from 1 to 4 in the array provided', () =>
    {
        expect( new NumArray( [ 1, 4, 5, 6, 9 ] ).sumRange( 1, 4 ) ).toBe(
            40
        );
    } );
} );
