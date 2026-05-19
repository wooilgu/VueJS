
<script setup>
  import { computed, reactive, ref, watch } from 'vue';
  
  const quantity = ref(1);
  const total = ref(0);
  const priceState = reactive({
    price: 10,
    tax: 0,
  });

  // computed
  const TotalPrice = computed(() => (quantity.value * priceState.price * (priceState.tax + 1)).toFixed(2));

  // watch
  // 상태가 변경되면 화면 갱신은 해 준다 (기본 동작)
  // watch로 정의하면 기본동작(화면갱신) 이외의 처리를 추가 할 수 있다
  // view(template)에는 아무것도 추가하지 않는다
  const watchQuantity = watch(
    // quantity,                 // 상태변수 (단일값)
    () => quantity.value,     // 객체로 참조하는 경우
    (newVal, oldVal) => {     // 위의 상태변수가 변경될때마다 실행될 메서드
      total.value = (newVal * priceState.price * (priceState.tax + 1)).toFixed(2);
    },
    {
      immediate: true,        // 최초 렌더링될때 실행 여부. true => 실행
      flush: 'post'
    }
  )

  const stopWatch = () => {
    // watch 함수가 메모리에서 삭제된다 => watch 중단
    watchQuantity();
  }
  
  /*
  'pre' (기본값)
    컴포넌트가 업데이트되기 전에 콜백이 실행,
    DOM이 업데이트되기 전에 실행되므로, DOM에 접근할 때 이전 상태를 볼 수 있다
  'post'
    컴포넌트가 업데이트된 후에 콜백이 실행
    DOM이 업데이트된 후에 실행되므로, 최신 DOM 상태에 접근할 수 있다.
  'sync'
    값이 변경되는 즉시 동기적으로 콜백이 실행
    성능에 영향을 줄 수 있으므로 주의해서 사용해야 한다
  */
  </script>
  <template>
    <div class="mb-5">
      <h3 class="mb-3">A07 Watch</h3>
      
      <div class="mb-2 input-group">
        <span class="input-group-text">QUANTITY</span>
        <input type="number" class="form-control" name="quantity" v-model="quantity" />
  
        <span class="input-group-text">PRICE</span>
        <input type="number" class="form-control" name="price" v-model="priceState.price" />
  
        <span class="input-group-text">TAX</span>
        <input type="number" class="form-control" name="tax" step="0.1" v-model="priceState.tax" />
      </div>
  
      <div class="mb-3">
        TotalPrice: {{ TotalPrice }}<br />
        Total: {{ total }}<br />
        <button class="btn btn-outline-danger btn-sm" @click="stopWatch()">STOP</button>
      </div>
    </div>
  </template>

