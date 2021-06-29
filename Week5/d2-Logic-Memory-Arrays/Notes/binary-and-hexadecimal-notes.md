# Binary Notes:

You learned to count in a base 10 system. All numbers are based on a 0-9 counting pattern.
0, 1, 2, 3, 4, 5, 6, 7, 8, 9....
- when you get to the last digit, you simply increase the number to the left and start over from 0

## Binary, base 2:

- 2 Key points: 
    - binary is all 0s and 1s
    - binary digits are called bits
        - a group of 8 bits is a byte

### How to count in binary:
000 - 0
001 - 1
010 - 2
011 - 3
100 - 4
101 - 5
0110 - 6
0111 - 7
1000 - 8

* The pattern is: 0 and 1 are the same a base 10, but then you run out of digits.
    - The right most digit returns to 0 and the digit to the left increments by 1

- To avoid confusion, we write the number 8 as 0b1000 so it's not mistaken for the base 10 number 1000.

## Converting from binary to decimal (base 10):

Formula: Multiply each digit by the number base raised to the nth power, where n
is its position _starting from the right_. Then, add all of the results together.

To convert 0b11001010 to decimal, remember the base is 2:

2^0 * 0 = 0
2^1 * 1 = 2
2^2 * 0 = 0
2^3 * 1 = 8
2^4 * 0 = 0
2^5 * 0 = 0
2^6 * 1 = 64
2^7 * 1 = 128

Add all of those sums together to get 2 + 8 + 64 + 128 = 202

## Base 16 - Hexadecimal:

hex = 6, dec = 10, hence hexadecimal


Counting follows this pattern: 
The digits are 0-9 with A, B, C, D, E and F representing 10, 11, 12, 13, 14 and 15, respectively. Hexademical numbers (sometimes called 'hex' for short) are prepended with an 0x to differentiate them as base-16.

- Hexadecimal is often used as shorthand for representing binary values: one hex digit can represent four bits.

0 = 0b0000 = 0x0
 1 = 0b0001 = 0x1
 2 = 0b0010 = 0x2
 3 = 0b0011 = 0x3
 4 = 0b0100 = 0x4
 5 = 0b0101 = 0x5
 6 = 0b0110 = 0x6
 7 = 0b0111 = 0x7
 8 = 0b1000 = 0x8
 9 = 0b1001 = 0x9
10 = 0b1010 = 0xA
11 = 0b1011 = 0xB
12 = 0b1100 = 0xC
13 = 0b1101 = 0xD
14 = 0b1110 = 0xE
15 = 0b1111 = 0xF

To convert from hexadecimal to decimal, we use the same formula as above:

To convert the hex number 0xF23C:
160 * C =    1 * 12 = 12
161 * 3 =   16 *  3 = 48
162 * 2 =  256 *  2 = 512
163 * F = 4096 * 15 = 61440

Add the sums together to get 61440 + 512 + 48 + 12 = 62012

## Bytes, kilobytes, megabytes, gigabytes, terabytes:

1 byte = 8 bits

### Recall from gradeschool:
kilo - thousand
mega - million
giga - billion
tera - trillion
peta - quadrillion
exa - quintillion
zetta - sextillion
yotta - septillion

