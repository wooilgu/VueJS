
import { createWebHistory, createRouter } from 'vue-router';

import A00Home from './../views/A00Home.vue';
import A01Binding from './../views/A01Binding.vue';
import A02Attribute from './../views/A02Attribute.vue';
import A03Params from './../views/A03Params.vue';
import A04Props from './../views/A04Props.vue';
import A05Contact from './../views/A05Contact.vue';
import A05ContactChild from './../views/A05ContactChild.vue';
import A06Query from './../views/A06Query.vue';
import A07Push from './../views/A07Push.vue';
import A08ChildRouter from './../views/A08ChildRouter.vue';
import CompanyInfo from './../components/CompanyInfo.vue'
import CompanyWay from './../components/CompanyWay.vue'
import A09NotFound from './../views/A09NotFound.vue';


const routes = [
  /*
    이 등록된 이름으로 App에 <RouterView> 영역에 표시된다
    name 속성은 브라우저에서 사용 안됨. script에서 이동시 사용할 목적으로 정의(중복 안됨)
  */
  { path: '/', name: 'index', component: A00Home },
  { path: '/A01Bind', name: 'bind', component: A01Binding },
  { path: '/A02Attr', name: 'attr', component: A02Attribute },
  /*
    :XX 형태는 패스역할과 변수 역할을 동시에 한다. 패스가 매칭되지 않으면 에러
    값은 Link에서 할당한 값이 바인딩 된다
    /A03Params/:no/:name/:sno'
    /A03Params/1001/놀부/11' => no='1001', name='놀부', sno='11' 와 같은 형태가 된다
    이 값을 A03Params 컴포넌트에서 추출해 사용
  */
  { path: '/A03Params', name: 'param', component: A03Params },
  { path: '/A04Props', name: 'prop', component: A04Props },
  { path: '/A05Contact', name: 'contact', component: A05Contact },
  { path: '/A05Child', name: 'contactChild', component: A05ContactChild },
  { path: '/A06Query', name: 'query', component: A06Query },
  { path: '/A07Push', name: 'push', component: A07Push },
  { path: '/A08Child', name: 'child', component: A08ChildRouter },
  { path: '/A09NotFound', name: 'not', component: A09NotFound },
]
const router = createRouter({
  history: createWebHistory(),
  routes
});

/*
beforeResolve는 네비게이션 가드 중 "가장 마지막 확인 단계"
모든 컴포넌트 내 가드와 비동기 라우트 컴포넌트가 분석된 후, 사용자가 페이지 이동을 최종적으로 승인하기 직전에 호출.
*/
export default router;


