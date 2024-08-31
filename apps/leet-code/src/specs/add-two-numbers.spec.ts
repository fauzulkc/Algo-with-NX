/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.
*/

import { ListNode, addTwoNumbers } from "../problems/add-two-numbers";

describe( 'Test adding two numbers represented as linked list in reverse order', () =>
{
    it( 'Should return a Linked List that represents the sum of two linked list in another new linked list form for list of case of [2,4,3] and [5,6,4] returning [7,0,8]', () =>
    {
        expect( addTwoNumbers( new ListNode( 2, new ListNode( 4, new ListNode( 3 ) ) ), new ListNode( 5, new ListNode( 6, new ListNode( 4 ) ) ) ) ).toStrictEqual( new ListNode( 7, new ListNode( 0, new ListNode( 8 ) ) ) );
    } );
    it( 'Should return a Linked List that represents the sum of two linked list in another new linked list form for list of case of [0] and [0] returning [0]', () =>
    {
        expect( addTwoNumbers( new ListNode( 0 ), new ListNode( 0 ) ) ).toStrictEqual( new ListNode( 0 ) );
    } );
    it( 'Should return a Linked List that represents the sum of two linked lists for case [9,9,9,9,9,9,9] and [9,9,9,9] returning [8,9,9,9,0,0,0,1]', () =>
    {
        const inputl1 = [ 9, 9, 9, 9, 9, 9, 9 ].reduceRight( ( acc, val ) => new ListNode( val, acc ), null as ListNode );
        const inputl2 = [ 9, 9, 9, 9 ].reduceRight( ( acc, val ) => new ListNode( val, acc ), null as ListNode );
        const expectedOutput = [ 8, 9, 9, 9, 0, 0, 0, 1 ].reduceRight( ( acc, val ) => new ListNode( val, acc ), null as ListNode );

        expect( addTwoNumbers( inputl1, inputl2 ) ).toStrictEqual( expectedOutput );
    } );
} );