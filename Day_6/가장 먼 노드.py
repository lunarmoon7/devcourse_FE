# 그래프 상 최단 경로 구하기 & 특정 노드에서 다른 모든 노드까지 : 다익스트라(Dijkstra)
# 노드의 최대 개수 : 20,000개
# 간선의 최대 개수 : 50,000개
# 멀리 떨어진 것을 어떻게 판단? : 간선에 임의로 가중치를 설정하고, 거리를 찾는다.
from collections import deque
INF = int(1e9)
def solution(n, edge):
    answer = 0
    dist = [INF] * (n + 1) # 최단 거리 리스트
    graph = [[] for _ in range(n + 1)]
    
    for a, b in edge:
        graph[a].append(b)
        graph[b].append(a)
        
    # 개선된 다익스트라 알고리즘
    def dijkstra(start):
        q = deque([start])
        dist[start] = 0 # 시작노드의 최단 거리는 0
        
        while q:
            cur = q.popleft()
            
            # 연결된 노드(nxt) 확인
            # nxt[0] : 노드번호, nxt[1] : 가중치
            for nxt in graph[cur]:
                if dist[nxt] == INF:
                    dist[nxt] = dist[cur] + 1
                    q.append(nxt)

    dijkstra(1) # 1번노드를 시작점으로 설정하여, 다익스트라 수행
    
    _max = max(dist[1:]) # 1-index이므로 1번 인덱스부터 최댓값 확인
    answer = dist.count(_max) # 가장 멀리 떨어진 노드가 여러 개 일 수 있다.
    print(dist)
    return answer