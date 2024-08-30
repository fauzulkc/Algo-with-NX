export class NumArray
{
    Inums: number[];
    PrefixSum: number[] = [];
    constructor ( nums: number[] )
    {
        this.Inums = [ ...nums ];
        for ( let i = 0; i < nums.length; i++ ) {
            if ( i === 0 ) {
                this.PrefixSum[ i ] = nums[ i ];
            } else {
                this.PrefixSum[ i ] = nums[ i ] + nums[ i - 1 ];
            }
        }
    }

    sumRange ( left: number, right: number ): number
    {
        if ( left < 0 ) {
            throw new Error( "Bad Starting Index Range" );
        }

        if ( right > this.Inums.length ) {
            throw new Error( "Bad Ending Index Range" );
        }
        let sumRange = 0;
        for ( let i = left; i <= right; i++ ) {
            sumRange += this.PrefixSum[ i ];
        }
        return sumRange;
    }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */