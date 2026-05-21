<script setup></script>

<template>
  <div class="m-3">
    <h1>Chap06 Router</h1>

    <div>
      <RouterLink to="/" exact-active-class="active">INDEX</RouterLink> |

      <RouterLink to="/A01Bind" exact-active-class="active">BIND</RouterLink> |

      <RouterLink :to="{ name: 'attr' }" exact-active-class="active">A02ATTR</RouterLink> |

      <RouterLink to="/A03Params" exact-active-class="active">P1001</RouterLink> |

      <RouterLink :to="{ name: 'param' }" exact-active-class="active">P1002</RouterLink> |

      <RouterLink to="/A04Props" exact-active-class="active">P1003</RouterLink> |

      <RouterLink :to="{ name: 'prop' }" exact-active-class="active">P1004</RouterLink> |

      <RouterLink :to="{ name: 'contact' }" exact-active-class="active">CONTACT</RouterLink> |

      <RouterLink to="/A06Query" exact-active-class="active">Q1005</RouterLink> |

      <RouterLink :to="{ name: 'query' }" exact-active-class="active">Q1006</RouterLink> |

      <RouterLink :to="{ name: 'push' }" exact-active-class="active">PUSH</RouterLink> |

      <RouterLink :to="{ name: 'child' }" exact-active-class="active">CHILD</RouterLink> |
    </div>

    <hr />

    <div class="mb-3">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<style>
.active {
  color: orange !important;
  font-weight: bold;
}
</style>
