## React Context API Example

### Consumer와 contentType

Context, Provider, Consumer를 모두 다른 파일에 분리

User component는 `Consumer`를 이용해서,
Account component는 `contentType`을 이용해서 context data를 사용합니다.

### Child component에서 context 값 변경

User component에서 버튼을 누르면, `userName`을 변경합니다.
Account component에서도 버튼을 누르면, `useName`을 변경합니다.

`/user` 와 `/account` 사이에 context data가 공유되고 있는 것을 확인하세요.

`App.js`에서는 `User`, `Account` component에 별도의 prop을 넘겨주지 않습니다.
