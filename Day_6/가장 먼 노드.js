const INF = Number.MAX_SAFE_INTEGER
function solution(n, edge) {
    const graph = new Array(n).fill().map(_ => []); // 2차원 배열 생성
    const dist = new Array(n).fill(INF); // 방문확인 배열
    
    // 0-index로 변환
    for (const e of edge) {
        graph[e[0] - 1].push(e[1] - 1);
        graph[e[1] - 1].push(e[0] - 1);
    }
    
    function bfs(start) {
        const q = [start]; // 0번 노드를 담고있는 초기 큐
        dist[start] = 0; // 방문표시
    
        while (q.length > 0) {
            const cur = q.shift();
            
            for (const nxt of graph[cur]) { // 연결된 노드 탐색
                if(dist[nxt] == INF) { // 방문하지 않았을 경우
                    dist[nxt] = dist[cur] + 1;
                    q.push(nxt)
                }
            }
        }
    }
    
    bfs(0) // 0번 노드에서 시작
    
    const max_dist = Math.max(...dist); // 가장 먼 거리 찾기
    const count = dist.filter(e => e === max_dist).length; // 가장 멀리 떨어진 노드의 개수 찾기
    
    return count;
}