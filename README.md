## React Context API Example

### Consumer와 contentType

Context, Provider, Consumer를 모두 다른 파일에 분리

User component는 `Consumer`를 이용해서,
Account component는 `contentType`을 이용해서 context data를 사용합니다.

### Child component에서 context 값 변경

User component에서 버튼을 누르면, `userName`을 변경합니다.
