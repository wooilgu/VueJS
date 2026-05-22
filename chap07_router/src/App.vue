<script setup></script>

<template>
  <div class="m-3">
    <h1>Chap06 Router</h1>

    <div>
      <RouterLink to="/" exact-active-class="active">INDEX</RouterLink> |
      <RouterLink to="/A01Bind" exact-active-class="active">BIND</RouterLink> |
      <RouterLink to="/sample" exact-active-class="active">Sample</RouterLink> |

      <RouterLink :to="{ name: 'attr' }" exact-active-class="active">A02ATTR</RouterLink> |

      <RouterLink to="/A03Params/1001/놀부/11" exact-active-class="active">P1001</RouterLink> |
      <RouterLink
        :to="{ name: 'param', params: { no: 1002, name: '흥부', sno: 12 } }"
        exact-active-class="active"
        >P1002</RouterLink
      >
      |

      <RouterLink to="/A04Props/1003/방자/13">P1003</RouterLink> |
      <RouterLink :to="{ name: 'prop', params: { no: 1004, name: '향단', sno: 14 } }"
        >P1004</RouterLink
      >
      |

      <RouterLink :to="{ name: 'contact' }">CONTACT</RouterLink> |

      <RouterLink to="/A06Query?no=1001&name=Adam&sno=15#TOP">Q1005</RouterLink> |
      <RouterLink
        :to="{ name: 'query', query: { no: 1006, name: '홍길동', sno: 16 }, hash: '#MID' }"
        >Q1006</RouterLink
      >
      |

      <RouterLink :to="{ name: 'push' }">PUSH</RouterLink> |

      <RouterLink :to="{ name: 'child' }">CHILD</RouterLink> |
      <RouterLink to="/A08Child/way">WAY</RouterLink> |
      <RouterLink :to="{ name: 'info' }">INFO</RouterLink> |

      <RouterLink to="/ABC">ABC</RouterLink> |
    </div>

    <hr />

    <div class="mb-3">
      <RouterView></RouterView>

      <hr />

      <RouterView name="footer"></RouterView>
    </div>
  </div>
</template>

<style>
.active {
  color: orange !important;
  font-weight: bold;
}
</style>
