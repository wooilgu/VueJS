// export 키워드로 외부에서 참조할 수 있도록 허용
export const name = '놀부';
export const age = 30;
export const check = true;

const arr = [10, 20];
const user = { name: '흥부', age: 20 };
const onAdd = (x, y) => `${x} + ${y} = ${x + y}`;

// 묶어서 export.
// as로 이름 변경 가능. 사용하는 곳에서는 반드시 add로 참조해야 한다
export { arr, user, onAdd as add }
