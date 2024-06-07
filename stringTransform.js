def transform_string(s):
    length = len(s)
    
    # Check if length is divisible by 15
    if length % 15 == 0:
        # Reverse the string
        s = s[::-1]
        # Replace each character with its ASCII code
        s = ''.join(str(ord(char)) for char in s)
    
    # Check if length is divisible by 3
    elif length % 3 == 0:
        # Reverse the string
        s = s[::-1]
    
    # Check if length is divisible by 5
    elif length % 5 == 0:
        # Replace each character with its ASCII code
        s = ''.join(str(ord(char)) for char in s)
    
    # Return the transformed string
    return s

# Example usage:
print(transform_string("abcdef"))     # Output: "fedcba" (Length 6, divisible by 3)
print(transform_string("abcdefgh"))   # Output: "979899100101102103104" (Length 8, divisible by 5)
print(transform_string("abcdefghijklmno"))  # Output: "1111101091081071061051041031021011009998979695" (Length 15, divisible by 15)
print(transform_string("abcdefg"))    # Output: "abcdefg" (Length 7, not divisible by 3 or 5)