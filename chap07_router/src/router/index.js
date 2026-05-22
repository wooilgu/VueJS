
import { createRouter, createWebHistory } from 'vue-router'

// import 한 아래 요소는 1개의 js 파일로 포함된다
// 패스에서 동적 import를 사용한 컴포넌트는 별도로 분리된 JS 파일이 된다 (lazy load)
import A00Home from './../views/A00Home.vue';
import A01Binding from './../views/A01Binding.vue';
import A02Attribute from './../views/A02Attribute.vue';
import A03Params from './../views/A03Params.vue';
import A04Props from './../views/A04Props.vue';
import A05Contact from './../views/A05Contact.vue';
import A05ContactChild from './../views/A05ContactChild.vue';
import A06Query from './../views/A06Query.vue';
// import A07Push from './../views/A07Push.vue';
import A08ChildRouter from './../views/A08ChildRouter.vue';
import CompanyInfo from './../components/CompanyInfo.vue'
// import CompanyWay from './../components/CompanyWay.vue'
import A09NotFound from './../views/A09NotFound.vue';

const routes = [
  /*
    이 등록된 이름으로 App에 <RouterView> 영역에 표시된다
    name 속성은 브라우저에서 사용 안됨. script에서 이동시 사용할 목적으로 정의(중복 안됨)
  */
  { path: '/', name: 'index', component: A00Home },

  // alias는 별도의 패스가 필요한 경우 사용
  { path: '/A01Bind', name: 'bind', component: A01Binding, alias: ['/bind', '/sample'] },

  // RouterView가 1개 이상 지정한 경우
  {
    path: '/A02Attr', name: 'attr', /* component: A02Attribute */
    components: {
      default: A02Attribute,
      footer: A00Home
    }
  },
  /*
    :XX 형태는 패스역할과 변수 역할을 동시에 한다. 패스가 매칭되지 않으면 에러
    값은 Link에서 할당한 값이 바인딩 된다
    /A03Params/:no/:name/:sno'
    /A03Params/1001/놀부/11' => no='1001', name='놀부', sno='11' 와 같은 형태가 된다
    이 값을 A03Params 컴포넌트에서 추출해 사용
  */
  { path: '/A03Params/:no/:name/:sno', name: 'param', component: A03Params },

  // route.params 대신 props를 이용 => props: true
  { path: '/A04Props/:no/:name/:sno', name: 'prop', component: A04Props, props: true },

  // 교제 예제
  { path: '/A05Contact', name: 'contact', component: A05Contact },
  { path: '/A05Child/:no', name: 'contactChild', component: A05ContactChild, props: true },

  // 주소줄에 ?key=value&key=value...#hash 값 추출
  // router에서는 설정할 값 없음. 링크에서 값을 전달
  { path: '/A06Query', name: 'query', component: A06Query },

  // 버튼을 이용한 이동
  {
    path: '/A07Push', name: 'push', /* component: A07Push */
    component: () => import('./../views/A07Push.vue'),
    // 진입 Guard
    beforeEnter(to, from) {
      console.log('----- 컴포넌트 => beforeEnter ------');
      return storage.getItem('name') ? true : false;
    }
  },

  // 자식 라우터 구성
  {
    // 부모 컴포넌트에는 자식 컴포넌트가 표시될 위치에 <RouterView>가 정의되어 있어야 한다
    path: '/A08Child', name: 'child', component: A08ChildRouter,
    children: [
      // path => /A08Child
      { path: '', name: 'info', component: CompanyInfo },
      {
        path: '/A08Child/way', name: 'way', /* component: CompanyWay */
        component: () => import('./../components/CompanyWay.vue')
      },
      // path => /A08Child/:no
      { path: ':no', name: 'view', component: A05ContactChild, props: true },
    ]
  },
  // abc/def의 경우
  // { path: '/:pathMatch(.*)', name: 'not', component: A09NotFound },    // 문자열
  { path: '/:pathMatch(.*)*', name: 'not', component: A09NotFound },      // 배열
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  // routes: [
  //   { path: '/', component: A00Home },
  //   { path: '/bind', component: A01Binding }
  // ]
});

const storage = window.localStorage;
// login
storage.setItem('id', 'abc123');
storage.setItem('name', 'abc123');
storage.setItem('address', 'abc123');
storage.setItem('tel', 'abc123');

// logout
// storage.removeItem('id');

// Guard
router.beforeEach((to, from) => {
  console.log('----- 전역: beforeEach -----');
  // console.log(to);
  // console.log(from);

  return storage.getItem('id') ? true : false;
});
// 모든 컴포넌트 내부의 가드와 비동기 라우트 컴포넌트의 분석 후 이동전 실행됨
router.beforeResolve((to, from) => {
  console.log('----- 전역: beforeResolve -----');
  // console.log(to);
  // console.log(from);

  return storage.getItem('id') ? true : false;
});
router.afterEach((to, from) => {
  console.log('----- 전역: afterEach -----');
  // console.log(to);
  // console.log(from);

  // return이 존재하지 않는다
  // 메모리 정리등...
});


// main.js에 등록
export default router;

