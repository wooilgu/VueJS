
// store를 사용하려면 main.js에 설정이 먼저 정의되어야 한다
import { defineStore } from "pinia";
import { computed, ref } from "vue";

const countStore = defineStore('countStore', () => {
  // 이 내부는 컴포넌트의 script와 동일하게 구현한다
  const storeName = 'Count Store';      // 참조만 할 목적
  const count = ref(0);                 // 상태 변수
  const contacts = ref([
    { no: 1001, name: '김유신', tel: '010-1212-3331', address: '경주' },
    { no: 1002, name: '장보고', tel: '010-1212-3332', address: '청해진' },
    { no: 1003, name: '관창', tel: '010-1212-3333', address: '황산벌' },
    { no: 1004, name: '안중근', tel: '010-1212-3334', address: '해주' },
    { no: 1005, name: '강감찬', tel: '010-1212-3335', address: '귀주' },
    { no: 1006, name: '정몽주', tel: '010-1212-3336', address: '개성' },
    { no: 1007, name: '이순신', tel: '010-1212-3337', address: '통제영' },
    { no: 1008, name: '김시민', tel: '010-1212-3338', address: '진주' },
    { no: 1009, name: '정약용', tel: '010-1212-3339', address: '남양주' }
  ]);

  // Getter - computed로 정의하면 상태 변수가 된다
  const firstItem = () => computed(() => contacts.value[0]);
  const getItem = computed(() => {
    return (no) => contacts.value.find((item) => item.no === no)
  });

  // Action - 외부에서 store의 값을 변경하기 위한 메서드
  const incAction = (x) => count.value = count.value + x;
  const decAction = () => count.value--;

  // 컴포넌트에서 사용할 변수, 상태변수, Getter, Action을 반환한다
  return { storeName, count, firstItem, getItem, incAction, decAction };
});
export default countStore;

