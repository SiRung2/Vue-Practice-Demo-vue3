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

