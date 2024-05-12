## the challenge

Given a pointer to the head of a singly-linked list, print each  value from the reversed list. If the given list is empty, do not print anything.
Example
 refers to the linked list with  values 
Print the following:
3
2
1
Function Description
Complete the reversePrint function in the editor below.
reversePrint has the following parameters:
SinglyLinkedListNode pointer head: a reference to the head of the list
Prints
The  values of each node in the reversed list.
Input Format
The first line of input contains , the number of test cases.
The input of each test case is as follows:
The first line contains an integer , the number of elements in the list.
Each of the next n lines contains a data element for a list node. 

## the solution screenshot

![alt text](<Screenshot 2024-05-12 at 19.38.23.png>)
![alt text](<Screenshot 2024-05-12 at 19.39.25.png>)

## Acknowledgment

I tackled a brain stretching and logical task on data structures and algorithms today and it was really helpful. The power of brainstorming can never be overemphasized because this created room for my friends and I to think about several ways to go about solving the problem. After loads of incorrect answer and retracing our solution steps, we finally solved the problem and passed the challenge, moving us to a higher rank on HackerRank.

## solution
function reverseList(llist) {
    if (!llist){
        return {
            function printReverse(node){
                if (!node){
                    return{
                        printReverse(node.next)
                        console.log(node.data)
                    }
                 printReverse(llist)   
                }

            }

        }
    }
}

## What I learnt
During the course of solving the problem, I learned the power of recursion and how it can make repetitions easy for us. Aciang data structures and algorithm requires a lot of patience and also wide range of reasoning

