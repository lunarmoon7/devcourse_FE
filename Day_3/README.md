열# 네트워크 기초
## 브라우저에 URL을 입력하면 무슨 일이 발생할까?
1. **먼저 URL을 해석한다.**
	- URL은 다음과 같이 구성되어 있다.
		- `scheme://<user>:<password>@<host>:<port>/<url-path>`
		- `sheme`: 프로토콜이 들어가는 영역
``` 
http://example.com:8761/members
ftp://admin:asdfzxcv@example.com/image.png
mailto:helloworld@naver.com
http:programmers.co.kr
```
2. **DNS를 조회한다.**
	- `DNS : Domain Name System`
		- DNS는 도메인과 IP 주소를 서로 변환해준다.
		- DNS로 요청을 보내기 전에 브라우저 캐시와 hosts 파일을 참조한다.
		- DNS는 보통 ISP에서 제공하는 것을 사용한다.
		- DNS를 운영하는 서버를 Name Server라고 부른다.
		- 도메인과 호스트는 다르다!
			- `sample.co, www.sample.co, gateway.dev.sample.co` 전부 **도메인**은 `sample.co`
	![[스크린샷 2023-09-21 오후 1.44.12.png]]
			- 도메인을 제외한 나머지는 모두 **서브도메인**이다.(위의 예시에서, gateway.dev 같은 것들..)
3. 해당 IP가 존재하는 서버로 이동한다.
	- 네트워크 장비 라우터를 통해 이동한다.
	- 동적 라우팅을 통해 이동한다.![[스크린샷 2023-09-21 오후 1.51.25.png]]
4. ARP를 이용하여 MAC 주소 변환을 수행한다.
	- `ARP(Address Resolution Protocol)` : **논리 주소인 IP 주소**를 **물리 주소인 MAC 주소**로 **변환**하는 프로토콜
	- 실제 통신을 위해 **변하지 않는 고유한 MAC주소가 필요**하다.
	- 네트워크 내에 ARP를 `BroadCasting`하면 **해당 IP 주소를 가지고 있는 기기가 자신의 MAC 주소를 반환**한다.

> **IP주소와 MAC 주소**
> IP는 논리적인 주소, MAC은 물리적인 주소이다. 기계의 실제 위치를 알기 위해서는 MAC 주소가 필요한데, IP주소로는 알 수 없을까? 왜 이 둘을 따로 구분하는 걸까?
> → **용도가 서로 다르기 때문!**

> 예시로 살펴보자. 
> 자, 프로그래머스 서비스를 운영하는 그렙의 주소는 **서울 서초구 강남대로 327, 2층**이다.
> 만약, 주소체계가 변경되면 어떻게 될까, 실제 위치를 알 수 있을까? → 알 수 없다.
> 그렇기 때문에 정확한 GPS 좌표가 필요하다. 
> 결국, **도로명 주소와 지번 주소는 논리적 주소인 IP**에 해당하고 **GPS 좌표는 물리적인 주소인 MAC**에 해당한다.
> **(사무실을 떼 옮기지 않는 이상.. GPS로 실제 위치를 알 수 있다.)**

5. TCP 통신을 통해 Socket을 열어야 한다.
	- **실제 소켓을 열어서 허락을 받아야 데이터 전달이 가능하다.**
		- 네트워크를 통해 해당 기기로 패킷을 전달
		- 3 way handshake로 연결을 요청
		- 요청이 수락되면 기기는 패킷을 받아 처리
	- 허락은 어떻게 받을까? → **3 way handshaking**
		![[스크린샷 2023-09-21 오후 2.01.47.png]]
6. 서버가 응답을 반환한다.
	- HTTP 프로토콜로 들어온 패킷을 읽고 처리한다.
	- 요청에 따른 적절한 응답 값을 반환한다.
7. 브라우저는 렌더링한다.
	- HTML을 읽어 DOM Tree를 구축
	- 만들어진 DOM Tree를 이용하여 화면에 렌더링
	- 스크립트 실행
> 위의 개념은 기본 상식이다. 누가 물어볼 때 자판기처럼 자동으로 답할 수 있어야 한다.
> #선택과제 [[http가 이미 있음에도 불구하고 https가 왜 탄생했을까, 왜 필요할까?]]
> #선택과제 [[https가 생김으로 인해 기존 과정에서 무엇이 추가되었을까?]]
***
# 컴퓨터 시간 원리
## 컴퓨터가 시간을 표현하는 방법
- 하드웨어의 시스템 클럭 이용
- 특정 시각(Epoch)를 기준으로 시스템 클럭의 틱을 세는 것으로 구현
- 이를 시스템 시간이라 함
- 시스템 시간을 값으로 표현한 것을 **타임스탬프(Timestamp)**라고 함
- 타임스탬프는 운영체제마다 기준 시간과 단위가 다를 수 있음
- 일반적으로 많이 사용하는 것은 **Unix Time**
	- 1970년 1월 1일 0시 0분 0초가 기준 시각
	- 왜 기준이 저거냐? 이유 없음. 그냥.
	- 1970년 이전 시간은 음수로 표현
	- 초 단위로 시간이 증가.
## 시간대를 어떻게 고려해야 할까?
- 국가, 지역별로 시간이 다를 수 있다.
- 프랑스, 미국처럼 시간대가 여러 개거나 시간대가 바뀐다면?
- Time Zone 데이터를 이용하면 된다.
- 현실 세계에 이벤트가 발생되면 데이터베이스가 업데이트 된다.
- 표기법은 아래와 같다.
	- Asis/Seoul
	- America/New_York
	- 대륙/도시 형태를 따른다.
	- 이 값을 ZoneId라고 한다.
## 시간을 어떤 기준으로 사용해야 할까?
- 글로벌 서비스를 운영한다면 시간이 매우 중요하다.
- “전부 Time Zone으로 적용하면 되는 것 아닌가?” → 흔한 착각.
- 서비스에서 사용되는 시간을 용도에 맞춰서 기록할 필요가 있다.
### UTC
- 역사, 사회, 문화에 대한 맥락 없이 **사건이 발생한 시각**만을 고려할 때 사용한다.
	- 로깅
	- 감사
	- 시계열 데이터
### Time Zone이 적용된 시간
- 역사, 사회, 문화를 고려하여 사용자가 이용한 시각을 정확히 알아야할 때 사용한다.
- UI에 표시되는 시간을 사용자 기준으로 보여줄 때 사용한다.
	- 결제 시각
	- 푸시 알림 시간
	- UI 시각 표시 (e.g. 페이스북, 인스타그램 게시물 게시 시점)
	- 캘린더
***
# 암호화
**암호화란?** 평문을 해독할 수 없는 암호문으로 변환하는 것을 의미한다.
 - 단방향(해싱)과 양방향 암호화가 존재한다.
### 단방향 암호화
- 한방향으로만 이루어진 암호화
- 해시 알고리즘을 이용하여 암호화한다.
- MD5, SHA 알고리즘
- 사용자 비밀번호 등을 저장할 때 자주 사용된다.
> MD5, SHA-0, SHA-1은 해시 충돌이 발생할 수 있는 취약점이 있기에 사용을 권하지 않는다.
#### 고려할 점
- 해킹 기법 중 하나인 Rainbow Table Attack에 대비해야 한다.
	- `Rainbow Table`: 평문과 해시 함수로 만든 문자열을 모두 저장시켜놓은 표
	- `Salt`, `Key stretching`을 이용하여 해결할 수 있다.
### Salt
- 평문에 임의의 문자열을 추가하여 암호화하는 방법
- 128bit 이상으로 만들 것을 권장
- 사용자마다 다른 Salt를 사용하게 하면 더 안전하다.
![[스크린샷 2023-09-21 오후 2.38.50.png]]
### Key stretching
- 해시를 여러 번 반복하여 원문을 알기 힘들게 만드는 방법
- 일반적인 시스템에서 0.2초 이상 반복되면 안전하다고 한다.
![[스크린샷 2023-09-21 오후 2.39.27.png]]
> **Salt와 Key stretching을 이용하는 알고리즘**
> 직접 구현하는 것보다 이미 검증받은 알고리즘을 사용하는 것이 안전하다.
> `PBKDF2, bcrypt(비밀번호 저장 목적)`
### 양방향 암호화
- 평문을 복호화 할 수 있는 형태로 암호화하는 방법
- 대칭키와 비대칭키 알고리즘으로 나뉜다.
- 대표적으로 대칭키를 이용하는 `AES`와 비대칭키를 이용하는 `RSA`로 나뉜다.
#### 대칭키 암호 알고리즘
- 대표적으로 `AES`
- 같은 키를 이용하여 암호화, 복호화를 수행
![[스크린샷 2023-09-21 오후 2.42.05.png]]
#### 비대칭키 암호 알고리즘
- 대표적으로 `RSA`
- 공개키와 개인키 두 가지 키가 존재
- `RSA`는 소인수 분해를 기반으로 만들어진 알고리즘
![[스크린샷 2023-09-21 오후 2.42.54.png]]
***
# 함수형 프로그래밍
### 장점
- 상태가 없기 때문에 사이드 이펙트가 없다.
- 재사용성이 높다.
- 코드가 짧고 간결하다.
### 단점
- 상태가 없기 때문에 사이드 이펙트가 없다.
- 재사용성이 높다.
- 코드가 짧고 간결하다.
***
# 이벤트 루프
> JavaScript의 Call Stack은 하나만 존재한다. 그렇기 때문에 Single Thread로 동작한다.
> 그렇다면 브라우저에서 실행되는 스크립트들은 어떻게 비동기적으로 데이터를 불러오고 애니메이션을 실행시킬까? 어떤 원리로 애니메이션과 클릭 이벤트를 같이 처리할 수 있을까?
> → `Event Loop`라는 시스템이 있기 때문이다.
> ![[스크린샷 2023-09-21 오후 2.59.17.png]]
> JavaScript Engine이 싱글 스레드일 뿐, 브라우저는 멀티 스레드로 동작하기 때문에 이러한 동작들이 가능해진다.

## 동작 방법
1. 초기에 스크립트는 전역 스코프 내에서 실행된다.
		![[스크린샷 2023-09-21 오후 3.00.48.png]]
2. 코드가 순차적으로 실행된다.
	- setTimeout 실행![[스크린샷 2023-09-21 오후 3.01.04.png]]
	- foo 실행(setTimeout은 종료되어 Call Stack에서 제거됐음)
		![[스크린샷 2023-09-21 오후 3.01.43.png]]
	- foo 함수 내의 console.log() 실행
		![[스크린샷 2023-09-21 오후 3.02.37.png]]
	- setTimeout 실행 (foo(), console.log() 종료되어 Call Stack에서 제거됐음)
		![[스크린샷 2023-09-21 오후 3.03.25.png]]
	- (setTimeout은 종료되어 Call Stack에서 제거됐음)
		![[스크린샷 2023-09-21 오후 3.04.08.png]]
	- 0.1초가 지나, CallBack 함수들을 Task Queue에 넣음.
		![[스크린샷 2023-09-21 오후 3.04.35.png]]
	- Queue내의 작업은 Call Stack이 비어있을 때 하나씩 쌓인다. (= **틱**)
		![[스크린샷 2023-09-21 오후 3.05.01.png]]
	- 두 번째 CallBack은 Call Stack이 비어있지 않기 때문에 Queue에 그대로 남아있다.
		![[스크린샷 2023-09-21 오후 3.06.24.png]]
	- Queue내의 작업이 쌓인다. (첫 번째 Callback이 모두 종료되어 Call Stack이 비게 됨)
		![[스크린샷 2023-09-21 오후 3.07.25.png]]
> #선택과제 비동기 작업은 Task Queue 뿐만 아니라, Microtask Queue, Animation frames에도 등록된다. Microtask Queue와 Animation frames가 무엇인지 조사해보자.
***
# 모듈
> 웹사이트는 여러개의 자바스크립트 파일로 이루어져있다.
> 이때 자바스크립트는 파일들을 각각 별개의 프로그램으로 취급한다.
#### 예전 자바스크립트
스크립트간의 통신을 위해 전역 스코프에 존재하는 변수와 함수를 사용해야 했다. 스크립트 간의 의존도를 확인하기 힘들고 실행 순서를 제어해야 한다는 한계점이 존재했다.
#### 모듈이 등장한 후
스크립트 간의 의존도 확인이 쉬워지며 실행 순서도 쉽게 제어 가능해졌다.

### 모듈과 컴포넌트? 
-  혼동되기 쉬운데, 서로 다른 의미를 가진다.
- ==모듈== : 설계 시점에 의미있는 요소
	- 즉, 개발자가 의식적으로 나눠놓은 요소
- ==컴포넌트== : 런타임 시점에 의미있는 요소
	- 나눠놓은 요소에 포함되어 실행되는 요소
> $모듈 \in 컴포넌트$

### 모듈
>그런데, 자바스크립트에서의 모듈은 직접적으로 런타임 시점에서 실행이 된다. 런타임 시점에 실행되는 것은 컴포넌트인데 왜 이름이 모듈일까?
- JavaScript는 파일 하나가 프로그램이기 때문에 모듈이라고 추측.
- 설계 시 용어가 혼동되는 경우가 많다.
- 제대로된 모듈 역할을 하기 위해 디렉토리 단위를 모듈 개념에 가깝게 사용한다.
- `import, export`를 통해 모듈 불러오기와 내보내기 수행 가능.
> 모듈은 로컬 파일에서 동작하지 않는다.
> HTTP 또는 HTTPS 프로토콜을 통해서만 동작한다.

**사용 방법**
```js
// hello.js
export function hello(sentence) {
	alert(`Hello, ${sentence}`);
}

// index.html
<!DOCTYPE html>
...
<body>
	<script type="module">
		import { hello } from './hello.js';
		hello('world!');
	</script>
</body>
```

#### 특징 
1. 항상 엄격 모드(`use strict`)로 실행된다.
	```html
	<script type='module'>
		let a = 5;
		let b = 10;
		c = a + b;
		alert(c);
	</script>
	// Reference Error : c is not defined
	```
2. 모듈 레벨 스코프가 있다.
```html
<script>
	let a = 5;
	let b = 10;
	const c = a + b;
</script>

<script>
	alert(c);
</script>
```
→ 위 코드처럼 **일반 스크립트는 다른 스크립트에서도 참조가 가능**하다.
→ 모듈이라면, `import`를 통해 참조를 해야만 한다.
3. 단 한 번만 평가된다.
```html
// console.log(`Hello, Hi!`); in ./hello.js
<script type="module">
	import './hello.js'
</script>
<script type="module">
	import './hello.js'
</script>

// in 콘솔 -> Hello, Hi!
```
→ 참조(import)는 2번 되었지만, 실행은 단 한 번만 수행된다.
4. 지연 실행된다.
	- 일반 스크립트의 경우, DOM이 생성되기 전에 실행될 수 있다.
	- 모듈의 경우 자동 지연이 적용되어, DOM이 모두 만들어진 후 실행된다.
> 요즘은 Webpack과 같은 모듈 번들러를 사용하기 때문에, `type=“module”`을 사용할 일이 많지 않다.
***
# 유니코드
## CCS(Coded Character Set)
- 문자들을 Code Point에 대응시켜 만든 코드화된 문자들의 집합
- Code Point는 Character의 식별자가 된다.
## CES(Character Encoding Scheme)
- CCS를 8bit 집합에 대응시키는 것
- CCS와 CES는 1:1로 대응된다.
- 흔히 말하는 인코딩에 해당된다.
	- 인코딩 : Character를 시스템이 인식할 수 있는 값으로 변환하는 것
	- 디코딩: 인코딩된 값을 다시 Character로 변환하는 것
## TES(Transfer Encoding Syntax)
- 인코딩한 문자가 특정 프로토콜을 타고 전송되도록 변환하는 것
- 통신 프로토콜에 제약이 있을 수 있기 때문이다.
	- 예시로, URL에서 공백은 사용할 수 없기에 변환을 해야한다.
## 유니코드
- 전세계 문자를 컴퓨터에서 다룰 수 있도록 만든 **표준 시스템**
- 이전에는 다양한 나라가 서로 다른 인코딩 방식을 사용해서, 통신 시 같은 문자여도 깨지는 경우가 많았다.
***
# 정규표현식
> 카카오톡에서는 전화번호, URL, 이메일 주소를 찾아서 링크를 걸어주는데 어떻게 하는 걸까?
### 목적
패턴을 이용하여…
- 문자 검색(search)
- 문자 대체(replace)
- 문자 추출(extract)
성능은 느리다! → 하지만, 보통 짧은 문자열에서 사용하기 때문에 큰 이슈가 되지는 않는다.
![[스크린샷 2023-09-21 오후 5.17.14.png]]
### 생성방법
> RegExp 객체로 정규표현식 기능을 제공
> Array, Object처럼 Literal로 생성도 가능
- `new RegExp()` 
- `/^\d+/;`
- `/^\d+/gi;`
### 사용가능한 함수
- `test`: 입력받은 문자열에 찾는 패턴이 있는지 검사한 후, 있다면 true를 반환하고 없으면 false를 반환
```js
const message = '하이루, 010-9999-9999로 연락줘!';
const regExp = /\d{3}-\d{3,4}-\d{4};
console.log(regExp.test(message));
```
- `exec`: 입력받은 문자열에 찾는 패턴이 있는지 검사한 후, 일치한 패턴 정보를 반환하고 없으면 null을 반환한다. → **문자 추출**에 해당
```js
const message = '하이루, 010-9999-9999로 연락줘!';
const regExp = /\d{3}-\d{3,4}-\d{4};
console.log(regExp.exec(message));
```
- `match`: 정규표현식 객체를 인자로 받아 패턴이 있는지 검사한 후, 일치한 패턴 정보를 반환하고 없으면 null을 반환한다. `exec`과 같다 → **문자 추출**에 해당
```js
const message = '하이루, 010-9999-9999로 연락줘!';
const regExp = /\d{3}-\d{3,4}-\d{4};
console.log(regExp.match(message));
```
- `replace`: 정규표현식 객체를 인자로 받아 패턴이 있는지 검사한 후, 일치한 패턴 정보를 원하는 문자열로 바꿀 수 있다. → **문자 대체**에 해당
```js
const message = '하이루, 010-9999-9999로 연락줘!';
const regExp = /\d{3}-\d{3,4}-\d{4};
console.log(regExp.replace(message, "전번"));
```
- `search`: 정규표현식 객체를 인자로 받아 패턴이 있는지 검사한 후, 일치한 패턴 정보의 위치를 반환한다. → **문자 검색**에 해당
> 무조건 처음에 일치한 위치만 반환하기 때문에, 모두 찾고싶다면 `searchAll`을 사용해야 한다.
```js
const message = '하이루, 010-9999-9999로 연락줘!';
const regExp = /\d{3}-\d{3,4}-\d{4};
console.log(regExp.search(message));
```
- `capture`: 캡처가 적용된 정규표현식을 이용하면 match 반환값의 1번 인덱스부터 순차적으로 캡처 결과가 들어간다.
```js
const message = '하이루, 010-9999-9999로 연락줘!';
const regExp = /\d{3}-\d{3,4}-\d{4};
console.log(regExp.capture(message));
```
### Run-length encoding
- 매우 간단한 비손실 압축 방법
- 연속적인 문자열을 문자열과 개수로 압축하는 방법
- “AAAAAABBBDFFFFFFFKK” → “6A3B1D7F2K”
- **패턴이 보이는가?**

> #선택과제 개미 수열을 정규표현식을 이용하여 풀기
> [개미 수열이란?](https://ko.wikipedia.org/wiki/읽고_말하기_수열)
> 5를 입력받으면 “111221”가 나와야 한다.
> **힌트: Run-length encoding**
```js
/*
[개미수열]
1, 11, 21, 1211, 111221, 312211, 13112221, 1113213211 ...

[정규표현식]
(.) : 모든 단어나 수를 캡처한다.
\1* : 한번 이상 반복되는 것들을 찾는다.
g : 전역 검색(전체 문자열을 탐색해서 모든 일치를 반환하도록 한다.)
*/

const seq = ['1']; // 첫 번째 수열은 "1"

// 개미수열 구하기
const setAntSeq = (n) => {
	for (let step = 1; step < n; step++) {
		const regExp = /(.)\1*/g;
		// acc: 콜백의 리턴값 누적
		// cur: 현재 처리할 요소
		// '': 초기값(빈 문자열)
		const nextSeq = seq[step - 1].match(regExp).reduce((acc, cur) => {
		acc + `${cur.length}${cur.slice(0, 1)}`, ''; // cur.length는 문자열의 길이, cur.slice(0, 1)은 문자열의 첫번째 문자
		});
		seq.push(nextSeq);
	}
};
setAntSeq(5); // 5번째 수열까지 구하기
```
***
# 쿠키와 세션, 웹 스토리지
## HTTP 통신
- HTTP Request는 기본적으로 상태가 존재하지 않는다.(`statless`)
- 따라서, 서버는 어떤 브라우저에서 요청이 온 것인지 알 수 없다.
- 이때, 헤더에 쿠키를 담으면 서버가 쿠키를 읽어서 요청이 어디서 온 것인지 알 수 있다.
## 쿠키
- 클라이언트에서 저장, 관리하는 데이터를 의미한다.
- 브라우저를 닫아도 유지할 수 있다.
- 서버에서 Set-Cookie를 응답헤더로 내려주면 클라이언트는 이를 받아 저장한다.
- 클라이언트에서 조작이 가능하다.
- 각 쿠키에 수명을 설정할 수 있다.
#### Set-Cookie
- `Set-Cookie`: 키=값; 옵션
- 응답 헤더에 담으면 브라우저가 알아서 저장한다.
- 각 데이터엔 여러 옵션이 존재한다.
	- `Expires` : 쿠키 만료 날짜를 지정
	- `Secure` : HTTPS에서만 쿠키를 전송
	- `HttpOnly` : JS에서 쿠키에 접근 못하도록 막는다. → XSS(Cross-site Scripting)공격을 막을 수 있다.
	- `Max-Age` : 쿠키 수명을 정함. 이때 Expires는 무시된다.
	- `Domain` : 도메인이 일치하는 요청만 쿠키가 전송된다.
	- `Path` : Path와 일치하는 요청만 쿠키가 전송된다.
#### 쿠키의 취약점
- `XSS` 공격을 당할 수 있다.
	- JS를 이용해 악의적인 사용자가 다른 사용자의 쿠키값을 탈취할 수 있다.
	- 쿠키를 암호화하지 않고 보내면, 쿠키값을 중간에 탈취 당할 가능성이 있다.
		- `HTTPS`로 해결 가능
> 서버에서는 쿠키의 주인이 누군지 알 수 없다. 주인을 알고 싶다면 어떻게 해야할까?
## 세션
> 쿠키의 주인은 세션을 이용하면 알 수 있다.
- HTTP Session ID를 식별자로 사용하여, 사용자를 구분한다.
- 클라이언트는 HTTP Session ID를 쿠키 형태로 저장한다.
- 서버 자체적으로 기록, 관리한다.
#### 세션의 문제점
> 세션은 서버에 파일로 저장된다. 만약 사용자가 엄청 많아진다면?
> 서버가 만약 2대라면 세션은 어떻게 관리해야 하지?

→ 요즘은 서버와 클라이언트간의 인증을 **JWT같은 별도의 토큰**을 사용하고, 쿠키는 클라이언트의 자체적인 **지속적인 데이터 관리 용도**로 많이 사용된다.
## 웹 스토리지
- 클라이언트에 데이터를 저장하기 위한 새로운 방법
- HTML5부터 등장
- 쿠키에서 하기 힘든 것들을 지원
- 로컬 스토리지와 세션 스토리지가 존재
#### 로컬 스토리지
- 반영구적으로 데이터가 저장된다.
- 브라우저를 종료해도 데이터가 사라지지 않는다.
- 저장했던 도메인과 이용하는 도메인이 다른 경우엔 접근할 수 없다.
- 쿠키와 마찬가지로 Key-Value 형태로 저장한다.
#### 세션 스토리지
- 새 창을 생성할 때마다 개별적으로 저장되는 데이터를 관리한다.
- 브라우저를 닫는 순간 사라진다.
- 같은 도메인이어도 세션이 다르면 데이터에 접근할 수 없다.
- 쿠키와 마찬가지로 Key-Value 형태로 저장한다.

> **IndexedDB**
> 로컬 데이터를 관리하기 위해 등장한 일종의 데이터베이스
> **Transactional한 로컬 데이터베이스**, **새로운 웹 브라우저 표준 인터페이스**이다.