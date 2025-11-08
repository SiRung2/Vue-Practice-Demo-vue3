### 변경 요약

#### 1. TypeScript 통합

- 모든 컴포넌트에 `lang="ts"` 추가
- `defineComponent`를 사용하여 타입 안정성 확보
- Props 타입 정의 추가 (예: `ChildComponent.vue`)

#### 2. 컴포넌트 구조 개선

- 모든 컴포넌트를 `defineComponent`로 래핑

#### 3. 타입 정의 추가

- 인터페이스 정의 추가 (예: `Item`, `Person`)
- Props에 타입 검증 추가
- DOM 요소 ref에 제네릭 타입 지정 (`ref<HTMLInputElement | null>`)

#### 동작 확인용 스크린샷
<img width="2706" height="1692" alt="image" src="https://github.com/user-attachments/assets/7e66e9fe-2360-4fe7-9c03-0924959cd0ca" />
<img width="2356" height="1606" alt="image" src="https://github.com/user-attachments/assets/f8390c03-c68c-4457-8855-db6b1d54a501" />
<img width="2384" height="1554" alt="image" src="https://github.com/user-attachments/assets/083084c8-5397-42ed-b31e-0b7e27a7c8b1" />
<img width="2450" height="1420" alt="image" src="https://github.com/user-attachments/assets/a3e95c3a-503a-4f22-be26-c5696f97c37d" />
<img width="2646" height="1373" alt="image" src="https://github.com/user-attachments/assets/40faf2b1-87a5-499b-81ff-b51c247f4d01" />
<img width="2629" height="1533" alt="image" src="https://github.com/user-attachments/assets/93175269-2c78-45c2-bd94-b91196e24568" />
<img width="2488" height="1507" alt="image" src="https://github.com/user-attachments/assets/bea30b8c-a8b3-4287-892c-424c06c4839e" />
<img width="2418" height="1563" alt="image" src="https://github.com/user-attachments/assets/8b021db2-64aa-4c7b-bb59-25e722d352a9" />




