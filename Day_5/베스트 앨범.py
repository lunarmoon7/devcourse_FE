from collections import defaultdict

def solution(genres, plays):
    answer = []
    _dict = defaultdict(list) # key: 장르 , value : [(고유번호, 재생횟수), ...]
    
    # 장르, (고유번호, 재생횟수) 합치기
    _list = list(zip(genres, enumerate(plays)))
    
    # 많이 재생된 노래 기준으로 오름차순 정렬
    # 재생 횟수가 같다면 고유 번호를 기준으로 내림차순 정렬
    _list.sort(key=lambda x: (-x[1][1], x[1][0]))
    
    # 딕셔너리 초기화
    for val in _list:
        # 장르, (고유번호, 재생 횟수)
        genre, play = val
        _dict[genre].append((play[0], play[1]))
    
        
    # 속한 노래가 많이 재생된 장르 기준으로 정렬
    # sum(list(zip*x[1]))[1])은 각 장르의 재생횟수들의 합을 계산한다.
    # 이를 내림차순으로 정렬한다.
    sorted_dict = sorted(_dict.items(), key=lambda x: -sum(list(zip(*x[1]))[1]))
    print(sorted_dict)
    # 노래가 많이 재생된 장르로 정렬이 이미 되어있다.
    for x in sorted_dict:
        music_list = x[1] # (고유번호, 재생횟수)
        answer.append(music_list[0][0]) # 장르에 속한 곡이 하나라면, 하나의 곡만 선택
        
        # 총 2개의 곡을 수록한다.
        if len(music_list) >= 2: # 속한 곡이 2개 이상이라면, 하나 더 추가
            answer.append(music_list[1][0])
    
    return answer