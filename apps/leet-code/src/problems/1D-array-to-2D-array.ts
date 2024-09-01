/*
You are given a 0-indexed 1-dimensional (1D) integer array original, and two integers, m and n. You are tasked with creating a 2-dimensional (2D) array with  m rows and n columns using all the elements from original.

The elements from indices 0 to n - 1 (inclusive) of original should form the first row of the constructed 2D array, the elements from indices n to 2 * n - 1 (inclusive) should form the second row of the constructed 2D array, and so on.

Return an m x n 2D array constructed according to the above procedure, or an empty 2D array if it is impossible.

Sample: original = [1,2,3,4], m = 2, n = 2, return [[1,2],[3,4]]
*/

export function construct2DArray ( original: number[], m: number, n: number ): number[][]
{
    if ( m * n !== original.length ) return [];
    const constructedArray: number[][] = [];
    for ( let i = 0; i < m; i++ ) {
        constructedArray.push( original.slice( i * n, ( i + 1 ) * n ) );
    }
    console.log( { constructedArray } );
    return constructedArray;
};

export function construct2DArrayLoop ( original: number[], m: number, n: number ): number[][]
{
    if ( m * n !== original.length ) return [];

    const constructedArray: number[][] = new Array( m ).fill( 0 ).map( () => new Array( n ) );
    for ( let i = 0; i < original.length; i++ ) {
        const row = Math.floor( i / n );
        const col = i % n;
        constructedArray[ row ][ col ] = original[ i ];
    }

    return constructedArray;
}