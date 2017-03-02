# Responsible Images
각각 다른 크기의 이미지 12개를 사용하여 정사각형 형태의 반응형 이미지 만들기
### Spec

**Break Point**: `780px`, `960px`  

**Mobile**: Fluid Grid, 2단 이미지, `width: 100%`  

**Tablet** : Fluid Grid, 3단 이미지, `width: 90%`  

**Desktop**: Fixed Grid, 4단 이미지, `width: 960px`  

**Etc**: 이미지 hover시 텍스트 구현   

---

- `div.image-frame`의 `background-image`를 사용하여 이미지 삽입  
- `display: flex`, `flex-wrap: wrap`을 사용하여 이미지 정렬  
- 가상요소를 사용하여 `hover`애니메이션 구현  

---

### 접근성 이슈

**배경 이미지 대체 텍스트**   

의미있는 배경 이미지를 사용하였을 경우, 배경이미지에 대한 대체 텍스트 제공해야 한다.  

이번 과제에서는 **WA IR기법**을 사용  

`<span>`에 대체 텍스트를 작성 후 `position: absolute; z-index: -10;`으로 배경 이미지에 대한 대체 텍스트를 제공하였다.  

---

### 진행 중 발생한 문제

width의 경우 %를 사용하여 부모의 너비에 따른 반응형 가로 너비를 구현할 수 있지만 %사용에 이슈가 있는 height의 경우 어떻게 화면너비에 맞춰 정사각형의 일정 비율로 줄어들게 할것인가?  

- padding-top: 50% 값을 주어 반응형 height에 대한 이슈 해결  

정상적으로 미디어 쿼리를 작성했지만 계속해서 모바일 뷰의 스타일만 적용되는 현상이 생김  

- 브라우저가 확대되어 있었음. 기본설정(100%) 변경 후 해결  

`::after`가상요소에 `hover`했을 때 애니메이션 효과가 작동하지 않음  

- `::after`에 스타일 작성 후 `transition`속성은 변화 할 스타일(`opacity`)과 함께 `:hover::after`영역에 작성하여 해결함  

### 추가할 사항   

* [ ] sass로 변경하기 

