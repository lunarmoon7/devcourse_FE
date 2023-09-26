def solution(numbers):
    new_numbers = [ str(x) for x in numbers ]
    
    new_numbers.sort(key=lambda x:(x * 4), reverse=True)
    
    if new_numbers[0] == '0':
        answer = '0'
    else:
        answer = ''.join(new_numbers)
    return answer