---
article: false
order: 4
---

# 关系与运算

数学要研究各种对象之间的关系，我们对“关系”给出一个严格定义．设 $X$ 是集合，$X$ 上的一个**二元关系**（binary relation，简称**关系**）是子集 $R \subseteq X \times X$．比起书写 $(x, y) \in R$，我们一般写作 $xRy$，表明 $x$ 与 $y$ 之间具有关系 $R$．通过限制 $R$ 中的元素我们就能描述各种各样的关系，其中自反性、对称性、反对称性与传递性是最常见的关系特征．

设 $R$ 是 $X$ 上的关系．若对所有的 $x \in X$ 都有 $xRx$，则称 $R$ 是**自反的**（relfexive）．换言之，若定义**对角关系**（diagonal）
$$
  \Delta_X := \{ (x, x) \;|\; x \in X \},
$$
则 $R$ 是自反的当且仅当 $\Delta_X \subseteq R$．

若对所有的 $x, y, z \in X$ 都有
$$
  (xRy) \land (yRz) \implies (xRz),
$$
则称 $R$ 是**传递的**（transitive）．

若对所有的 $x, y \in X$ 都有
$$
  xRy \implies yRx,
$$
则称 $R$ 是**对称的**（symmetric）．

设 $Y$ 是 $X$ 的非空子集，则 $R_Y := (Y \times Y) \cap R$ 称为 $R$ 在 $Y$ 上的**限制**（restriction）．显然 $x R_Y y$ 当且仅当 $x, y \in Y$ 且 $xRy$，因此我们一般也把 $R_Y$ 写作 $R$．

## 等价关系

$X$ 上的自反、传递且对称的关系称为 $X$ 上的**等价关系**（equivalence relation），通常用符号 $\sim$ 表示．对每个 $x \in X$，定义
$$
  [x] := \{ y \in X \;|\; y \sim x \}
$$
为 $x$ 的**等价类**（equivalence class），而每个 $y \in [x]$ 都称为 $[x]$ 的**代表元**（representative）．最后，定义全体等价类构成的集合
$$
  X/{\sim} := \{ [x] \;|\; x \in X \}
$$
为“$X$ 模 $\sim$”（$X$ modulo $\sim$）．显然 $X/{\sim} \subseteq \mathcal{P}(X)$．

集合 $X$ 的一个**划分**（partition）是一个子集 $\mathcal{A} \subseteq \mathcal{P}(X) \setminus \{\emptyset\}$，其对每个 $x \in X$ 而言都存在唯一的一个 $A \in \mathcal{A}$ 使得 $x \in A$．换言之，$\mathcal{A}$ 中的元素都两两不相交，且其并是 $X$．


::: proposition
设 $\sim$ 是 $X$ 上的等价关系，则 $X/{\sim}$ 是 $X$ 的一个划分．
:::

::: proof
对所有的 $x \in X$ 都有 $x \in [x]$，因此 $X = \bigcup_{x \in [x]} [x]$，故而只需证明等价类两两不相交．如果存在 $z \in [x] \cap [y]$，则 $z \sim x$ 且 $z \sim y$，故 $x \sim y$，从而可证 $[x] = [y]$．因此 $[x]$ 与 $[y]$ 相交等价于 $[x] = [y]$，换言之不同的等价类不相交．
:::

我们自然存在从元素到其等价类的函数
$$
  p := p_X : X \to X/{\sim}, \quad x \mapsto [x].
$$
这是一个满射，称之为从 $X$ 到 $X/{\sim}$ 的（典范）**商函数**（quotient function）．

::: example
1. 设 $X$ 为全体伦敦市民，定义其上的关系 $x \sim y :\!\!\iff$ $x$ 和 $y$ 具有相同的父母，则很容易证明这是等价关系，且等价类 $[x]$ 包含所有 $x$ 的兄弟姐妹和 $x$ 自身．
2. $X$ 上的最小等价关系是对角关系 $\Delta_X$．
3. 设 $f : X \to Y$ 是函数，我们定义关系  
$$
    x \sim y :\!\!\iff f(x) = f(y),
$$
  则横容易证明它是等价关系，且 $[x] = f^{-1}\bigl( f(x) \bigr)$．此时存在唯一的 $\tilde{f}$ 使得下图交换：

  ![](./figures/quot-func-decomp/index.svg#grayscale)

  其中 $\tilde{f}([x]) = f(x)$，它是单射且 $\operatorname{im}(\tilde{f}) = \operatorname{im}(f)$．若 $f$ 是满射，则 $\tilde{f}$ 是双射．

:::

## 序关系

若 $X$ 上的关系 $\leq$ 是自反的、传递的、**反对称的**（antisymmetric）——
$$
  (x \leq y) \land (y \leq x) \implies (x = y),
$$
则称 $\leq$ 是 $X$ 上的一个**偏序**（partial order）．

> 实际上更适合作为“partial order”的翻译是“部分序”，因为并非所有元素之间都一定能比较先后顺序．然而将“partial”翻译为“偏”的传统由来已久，包括“partial derivative”也被翻译为“偏导数”．

我们将 $X$ 及其上的偏序 $\leq$ 构成的元组 $(X, {\leq})$ 称为**偏序集**（partially ordered set）．一般给定 $X$ 后，其偏序可由上下文或约定习惯推断，因此经常简称 $X$ 为偏序集．如果任意元素之间都可比较，即
$$
  \forall x, y \in X : (x \leq y) \lor (y \leq x),
$$
则称 $\leq$ 为**全序**（total order），称 $(X, {\leq})$ 为**全序集**（totally ordered set）．

::: remark
1. 给定偏序 $\leq$ 后，我们如下导出记号 $\geq$、$<$ 和 $>$：  
$$
  \begin{aligned}
    x \geq y &:\!\!\iff y \leq x, \\
    x < y &:\!\!\iff (x \leq y) \land (x \neq y), \\
    x > y &:\!\!\iff y < x.
  \end{aligned}
$$
2. 若 $X$ 是全序集，则很容易验证对每个 $x, y \in X$ 而言，以下三个关系有且只有一者成立：  
$$
    x < y, \quad x = y, \quad x > y.
$$
  对于一般的偏序集，由于两个元素之间可能无法比较，$x \leq y$ 和 $y \leq x$ 可能都不成立．

:::

::: example
1. 设 $(X, {\leq})$ 是偏序集，$Y \subseteq X$，则 $\leq$ 限制在 $Y$ 上后是 $Y$ 上的偏序．
2. $(\mathcal{P}(X), {\subseteq})$ 是偏序集，$\subseteq$ 称为**包含序**（inclusion order）．一般来说 $(\mathcal{P}(X), {\subseteq})$ 不是全序的．
3. 设 $X$ 是集合，$(Y, {\leq})$ 是偏序集，则可导出 $\operatorname{Funct}(X, Y)$ 上的偏序：  
$$
    f \leq g :\!\!\iff \forall x \in X : f(x) \leq g(x), \quad f, g \in \operatorname{Funct}(X, Y).
$$
  这个函数之间的偏序一般不是全序——即使 $Y$ 是全序集也无法保证．

:::

::: info 记号约定
我们默认 $\mathcal{P}(X)$ 及其子集都是带有包含序的偏序集．
:::

设 $(X, {\leq})$ 是偏序集，$A$ 是 $X$ 的非空子集．我们定义以下概念：

- 对某个 $s \in X$，若 $\forall a \in A : a \leq s$，则称 $s$ 是 $A$ 的一个**上界**（upper bound）．
- 对某个 $s \in X$，若 $\forall a \in A : s \leq a$，则称 $s$ 是 $A$ 的一个**下界**（lower bound）．
- 若 $A$ 存在上界和下界，则称 $A$ 是**有界的**（bounded）．
- 若 $A$ 存在上界 $m$ 且 $m \in A$，则称 $m$ 是 $A$ 的**最大元**（maximum），记作 $\max(A)$．
- 若 $A$ 存在下界 $m$ 且 $m \in A$，则称 $m$ 是 $A$ 的**最小元**（minimum），记作 $\min(A)$．

容易验证，集合若存在最大元（或最小元），则其唯一．

> 在英语中，存在上界的集合称为是 bounded above 的，存在下界的集合称为是 bounded below 的，但中文似乎没有直接的对应翻译．

设 $A$ 是偏序集 $X$ 的子集且存在上界，则 $A$ 的全体上界中的最小值（若存在）称为其**上确界**（supremum），记作 $\sup(A)$．换言之
$$
  \sup(A) := \min\{ s \in X \;|\; s\ \text{是}\ A\ \text{的上界} \}.
$$
类似地，我们定义 $A$ 的**下确界**（infimum）为最大的下界（若存在）：
$$
  \inf(A) := \max\{ s \in X \;|\; s\ \text{是}\ A\ \text{的下界} \}.
$$
当 $A = \{a, b\}$ 时，我们定义 $a \lor b := \sup(A)$，$a \land b := \inf(A)$．

::: remark
1. 集合并不总存在上确界或下确界．
2. 即使 $A$ 存在上确界或下确界，这个确界也未必在 $A$ 中．
3. 若 $\sup(A)$ 存在且 $\sup(A) \in A$，则 $\sup(A) = \max(A)$．同理若 $\inf(A)$ 存在且 $\inf(A) \in A$，则 $\inf(A) = \min(A)$．
4. 若 $\max(A)$ 存在，则 $\max(A) = \sup(A)$．同理若 $\min(A)$ 存在则 $\min(A) = \inf(A)$．
:::

::: example
1. 设 $\mathcal{A}$ 是 $\mathcal{P}(X)$ 的非空子集，则  
$$
    \sup(\mathcal{A}) = \bigcup \mathcal{A}, \quad
    \inf(\mathcal{A}) = \bigcap \mathcal{A}.
$$
2. 设 $X$ 是至少有两个元素的集合，$\mathcal{X} := \mathcal{P}(X) \setminus \{\emptyset\}$ 且带有包含序．假设 $A$ 和 $B$ 是 $X$ 的两个不相交子集，$\mathcal{A} := \{A, B\}$，则 $\mathcal{A} \subseteq \mathcal{X}$ 且 $\sup(\mathcal{A}) = A \cup B$，但 $\mathcal{A}$ 不存在最大元，且不存在下界（因而也不存在 $\inf(A)$）．

:::

设 $X := (X, {\leq})$ 和 $Y := (Y, {\leq})$ 是两个偏序集，$f : X \to Y$ 是函数（这里在两个不同的偏序集上使用了相同的偏序符号）．

- 若 $\forall x, y \in X : x \leq y \implies f(x) \leq f(y)$，则称 $f$ 是**递增的**（increasing）．
- 若 $\forall x, y \in X : x < y \implies f(x) < f(y)$，则称 $f$ 是**严格递增的**（strictly increasing）．
- 若 $\forall x, y \in X : x \leq y \implies f(x) \geq f(y)$，则称 $f$ 是**递减的**（decreasing）．
- 若 $\forall x, y \in X : x < y \implies f(x) > f(y)$，则称 $f$ 是**严格递减的**（strictly decreasing）．
- （严格）递增或递减的函数称为（严格）**单调**（monotone）函数．

设 $X$ 是任意集合，$Y := (Y, {\leq})$ 是偏序集，$f : X \to Y$ 是函数．若 $\operatorname{im}(f)$ 在 $f(X)$ 中有界、有上界或有下界，则分别称 $f$ **有界**（bounded）、**有上界**（bounded above）或**有下界**（bounded below）．若 $X$ 自身也是偏序集，则当每个 $X$ 的有界集 $A$ 都使得 $f|A$ 有界时，称 $f$ **在有界集上有界**（bounded on bounded sets）．

::: example
1. 设 $X$ 和 $Y$ 是集合，$f \in Y^X$．相应的在幂集上的函数 $f : \mathcal{P}(X) \to \mathcal{P}(Y)$ 和 $f^{-1} : \mathcal{P}(Y) \to \mathcal{P}(X)$ 都是递增的（在包含序下）．
2. 设 $X$ 是至少有两个元素的集合，$\mathcal{X} := \mathcal{P}(X) \setminus \{X\}$ 带有包含序，则恒等函数 $\mathcal{X} \to \mathcal{X}$，$A \mapsto A$ 在有界集上有界，但其本身无界．

:::

##  运算

$X$ 上的函数 ${\circledast} : X \times X \to X$ 经常称为 $X$ 上的**运算**（operator），此时我们用 $x \circledast y$ 表示 $\operatorname{\circledast}(x, y)$．对任意 $X$ 的子集 $A$ 和 $B$，我们定义
$$
A \circledast B := \bigl\{ a \circledast b \;|\; a \in A, b \in B \bigr\}.
$$
若 $A = \{a\}$，则我们也将上式记作 $a \circledast B$．对 $B = \{b\}$ 也有一样的定义．若 $A \circledast A \subseteq A$，则称 $A$ **在运算** $\circledast$ **下封闭**（closed under $\circledast$）．

::: example

1. 设 $X$ 是集合，则函数复合 $\circ$ 是 $\operatorname{Funct}(X, X)$ 上的运算．
2. $\cup$ 和 $\cap$ 是 $\mathcal{P}(X)$ 上的运算．

:::

若对所有的 $x, y, z \in X$ 都有
$$
  x \circledast (y \circledast z) = (x \circledast y) \circledast z,
$$
则称运算 $\circledast$ 是**结合的**（associative）．若对所有 $x, y \in X$ 都有
$$
  x \circledast y = y \circledast x,
$$
则称运算 $\circledast$ 是**交换的**（commutative）．对于结合运算，我们可以省略括号直接写 $x \circledast y \circledast z$．

::: example

1. $\operatorname{Funct}(X, X)$ 上的函数复合运算 $\circ$ 是结合的，但不一定是交换的．
2. $\cup$ 和 $\cap$ 是 $\mathcal{P}(X)$ 上的结合运算与交换运算．

:::

若存在 $e \in X$ 使得对任意 $x \in X$ 都有
$$
  e \circledast x = x \circledast e = e,
$$
则称 $e$ 为 $X$（关于运算 $\circledast$）的**单位元**（identity element）．

::: example

1. $\mathrm{id}_X$ 是 $\operatorname{Funct}(X, X)$ 关于复合运算 $\circ$ 的单位元．
2. $\emptyset$ 是 $\mathcal{P}(X)$ 关于 $\cup$ 的单位元．$X$ 是 $\mathcal{P}(X)$ 关于 $\cap$ 的单位元．
3. 若 $X$ 包含至少两个元素，则 $\mathcal{X} := \mathcal{P}(X) \setminus \{\emptyset\}$ 没有关于 $\cup$ 的单位元．

:::

::: proposition[prop:ident-unique]
关于给定运算的单位元若存在则唯一．
:::

::: proof
若 $e$ 和 $e'$ 都是关于运算 $\circledast$ 的单位元，则根据单位元的定义有 $e = e \circledast e' = e'$．
:::

::: example
设 $\circledast$ 是集合 $Y$ 上的运算，$X$ 是非空集合，则 $\operatorname{Funct}(X, Y)$ 上有由 $\circledast$ 诱导的运算：
$$
  (f \odot g)(x) := f(x) \circledast g(x), \quad x \in X.
$$
$\odot$ 的结合性与交换性都和 $\circledast$ 一致．若 $Y$ 存在关于 $\circledast$ 的单位元 $e$，则常值函数 $x \mapsto e$ 是 $\operatorname{Funct}(X, Y)$ 关于运算 $\odot$ 的单位元．通常我们使用同一符号 $\circledast$ 表示 $\odot$，其具体含义可由上下文推断．
:::
