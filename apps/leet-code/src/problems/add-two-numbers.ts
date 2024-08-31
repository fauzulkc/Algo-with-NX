/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

export class ListNode
{
    val: number;
    next: ListNode | null;
    // [V1] -> [V2] -> [V3]
    constructor ( val?: number, next?: ListNode | null )
    {
        this.val = ( val === undefined ? 0 : val );
        this.next = ( next === undefined ? null : next );
    }
}

export function addTwoNumbers ( l1: ListNode | null, l2: ListNode | null ): ListNode | null
{
    let carry = 0;
    let responseNode = new ListNode( 0 );
    let current = responseNode;

    while ( l1 !== null || l2 !== null || carry !== 0 ) {
        let x = ( l1 !== null ) ? l1.val : 0;
        let y = ( l2 !== null ) ? l2.val : 0;
        let sum = carry + x + y;
        carry = Math.floor( sum / 10 );
        let newNode = new ListNode();
        newNode.val = sum % 10;
        current.next = newNode;
        current = newNode;
        if ( l1 !== null ) l1 = l1.next;
        if ( l2 !== null ) l2 = l2.next;
    }

    return responseNode.next;
};