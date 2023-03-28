---
title: code 展示
icon: code
tag:
  - code
---

## 代码

<span> {{ age }} </span>
<button @click="age++">age++</button>

<script  setup>
import { ref } from 'vue'

const age=ref(18)
</script>
