##  커밋 메시지 컨벤션

<aside>

### 1. 커밋 유형 지정

- 커밋 유형은 영어 대문자로 작성하기
    
    
    | 커밋 유형 | 의미 |
    | --- | --- |
    | Feat | 새로운 기능 추가 |
    | Fix | 버그 수정 |
    | Docs | 문서 수정 |
    | Style | 코드 formatting, 세미콜론 누락, 코드 자체의 변경이 없는 경우 |
    | Refactor | 코드 리팩토링 |
    | Test | 테스트 코드, 리팩토링 테스트 코드 추가 |
    | Chore | 패키지 매니저 수정, 그 외 기타 수정 ex) .gitignore |
    | Design | CSS 등 사용자 UI 디자인 변경 |
    | Comment | 필요한 주석 추가 및 변경 |
    | Rename | 파일 또는 폴더 명을 수정하거나 옮기는 작업만인 경우 |
    | Remove | 파일을 삭제하는 작업만 수행한 경우 |
    | !BREAKING CHANGE | 커다란 API 변경의 경우 |
    | !HOTFIX | 급하게 치명적인 버그를 고쳐야 하는 경우 |

### 제목과 본문을 빈행으로 분리

- 커밋 유형 이후 제목과 본문은 한글로 작성하여 내용이 잘 전달될 수 있도록 할 것
- 본문에는 변경한 내용과 이유 설명 (어떻게보다는 무엇 & 왜를 설명)

### 여러가지 항목이 있다면 글머리 기호를 통해 가독성 높이기

```
- 변경 내용 1
- 변경 내용 2
- 변경 내용 3
```

</aside>



##  코드 컨벤션

<aside>
<img src="https://cdn-icons-png.flaticon.com/512/7350/7350737.png" alt="https://cdn-icons-png.flaticon.com/512/7350/7350737.png" width="40px" /> **문자열을 처리할 때는 쌍따옴표를 사용하도록 합니다.**

</aside>

<aside>
<img src="https://cdn-icons-png.flaticon.com/512/7500/7500264.png" alt="https://cdn-icons-png.flaticon.com/512/7500/7500264.png" width="40px" /> **문장이 종료될 때는 세미콜론을 붙여줍니다.**

</aside>

<aside>
🐫 **함수명, 변수명은 카멜케이스로 작성합니다.**

</aside>

<aside>
☝ **가독성을 위해 한 줄에 하나의 문장만 작성합니다.**

</aside>

<aside>
<img src="https://cdn-icons-png.flaticon.com/512/3602/3602241.png" alt="https://cdn-icons-png.flaticon.com/512/3602/3602241.png" width="40px" /> **주석은 설명하려는 구문에 맞춰 들여쓰기 합니다.**

```jsx
// Good
function someFunction() {
  ...

  // statement에 관한 주석
  statements
}
```

</aside>

<aside>
<img src="https://cdn-icons-png.flaticon.com/512/3978/3978575.png" alt="https://cdn-icons-png.flaticon.com/512/3978/3978575.png" width="40px" /> **연산자 사이에는 공백을 추가하여 가독성을 높입니다.**

```jsx
a+b+c+d // bad
a + b + c + d // good
```

</aside>

<aside>
☝ **콤마 다음에 값이 올 경우 공백을 추가하여 가독성을 높입니다.**

```jsx
var arr = [1,2,3,4]; //bad
var arr = [1, 2, 3, 4]; //good
```

</aside>

<aside>
🔠 생성자 함수명의 맨 앞글자는 대문자로 합니다.

```jsx
function Person(){}
```

</aside>

---


## git-flow

<aside>

<img width="846" alt="스크린샷 2024-03-27 오후 7 13 58" src="https://github.com/Ahnseungc/HCI_Proejct/assets/94547692/b896415f-f48e-4235-9ef2-28ffd5c7175a">

main(master): 서비스을 직접 배포하는 역할을 하는 브랜치 </br>
feature(기능): 각 기능 별 개발 브랜치 </br>
develop(개발): feature에서 개발된 내용이 저장되는 브랜치 </br>
hotfix(빨리 고치기): main 브랜치로 배포를 하고 나서 버그가 생겼을 때 빨리 고치기 위한 브랜치 </br>


## Front-End Framework & Language

---

## Library

---


## Result
![스크린샷 2024-06-18 오후 7 30 52](https://github.com/Ahnseungc/TeamMoa/assets/94547692/03c2055f-af65-4f6e-a16d-a869e993125e)
![스크린샷 2024-06-18 오후 7 31 32](https://github.com/Ahnseungc/TeamMoa/assets/94547692/18763f68-fc93-4c6c-b9a0-6aad9540e68a)
![스크린샷 2024-06-18 오후 7 31 51](https://github.com/Ahnseungc/TeamMoa/assets/94547692/ad4c49fd-7f21-47d1-b75b-d088373fdb6e)
![스크린샷 2024-06-18 오후 7 32 10](https://github.com/Ahnseungc/TeamMoa/assets/94547692/19b2794c-a6b7-4335-9dfd-a3f3801acb05)
![스크린샷 2024-06-18 오후 7 32 40](https://github.com/Ahnseungc/TeamMoa/assets/94547692/8302688d-1746-4aa4-bdfd-7d14075b8e32)
![스크린샷 2024-06-18 오후 7 32 47](https://github.com/Ahnseungc/TeamMoa/assets/94547692/1ae2c71f-e86b-4aa6-8a42-e55c3dc6bef9)
![스크린샷 2024-06-18 오후 7 32 55](https://github.com/Ahnseungc/TeamMoa/assets/94547692/088ce6de-1ee8-485c-98a0-c5678c907f48)
![스크린샷 2024-06-18 오후 7 33 04](https://github.com/Ahnseungc/TeamMoa/assets/94547692/34e54fa0-06f9-4591-97d6-a6d7f2e35955)
![스크린샷 2024-06-18 오후 7 33 15](https://github.com/Ahnseungc/TeamMoa/assets/94547692/1bba2d0c-08bf-4f27-84b9-c31b088b9f0a)
![스크린샷 2024-06-18 오후 7 33 59](https://github.com/Ahnseungc/TeamMoa/assets/94547692/7ece97de-ff8f-4300-9502-91af90d269f6)
![스크린샷 2024-06-18 오후 7 34 04](https://github.com/Ahnseungc/TeamMoa/assets/94547692/6b3f7cd7-8f0d-4194-ba46-c4838ff7f80b)
![스크린샷 2024-06-18 오후 7 34 19](https://github.com/Ahnseungc/TeamMoa/assets/94547692/fe485bc1-ef48-4ffb-baca-62cf9a3dcf60)
![스크린샷 2024-06-18 오후 7 34 56](https://github.com/Ahnseungc/TeamMoa/assets/94547692/1518c8a6-5bff-417f-843c-83cceafe03f1)


## WorkingPrototype
https://youtu.be/0ohJlE4AYjE







