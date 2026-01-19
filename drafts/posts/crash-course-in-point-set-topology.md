---
article: true
category: [数学]
tag: [点集拓扑]
---

# 点集拓扑速成

拓扑学是研究几何对象性质的领域，其中点集拓扑的适用范围最广．点集拓扑（point-set topology）也称一般拓扑（general topology），本身研究在同胚变换（自身连续且逆也连续的双射）下的不变量，但研究过程中抽象出来的概念可广泛应用于多个领域，即使是最基础的分析学也可以用到点集拓扑的语言（例如定义极限）．点集拓扑本身的几何意味已经褪去很多，更多地用作数学的基础工具语言．本文记录点集拓扑中最常用（但不是全部）的概念与定理．主要参考文献为：

- Tu L.W. Appendices: Point-Set Topology[M]// Tu L.W. An Introduction to Manifolds. New York, NY: Springer New York, 2011: 317-338.

<!-- more -->

## 拓扑空间

拓扑空间的原型是欧几里得空间 $\mathbb{R}^n$，但 $\mathbb{R}^n$ 本身附带了度量、坐标、内积、方向等额外的结构．建立拓扑空间的动机则是抛去与连续映射无关的性质，完全聚焦在连续性本身上．

我们首先来看看 $\mathbb{R}^n$ 上开集的定义．对任意 $\mathbb{R}^n$ 中的点 $p = \left( p^1, \dots, p^n \right) \in \mathbb{R}^n$ 与 $q = \left( q^1, \dots, q^n \right) \in \mathbb{R}^n$，其间的**距离**（distance）定义为
$$
d(p, q) = \left[ \sum_{i = 1}^n \left( p^i - q^i \right)^2 \right]^{1/2}.
$$
以 $p$ 为中心、$r > 0$ 为半径的**开球**（open ball）定义为
$$
B(p, r) = \{ x \in \mathbb{R}^n \;|\; d(x, p) < r \}.
$$
直观地看，**开集**（open set）是不包含边界的集合，例如 $B(p, r)$ 就是开集．然而如何用数学语言描述“不包含边界”并不容易，事实上在点击拓扑中是先定义开集，然后利用开集定义边界．好在数学家们已经给出了被广泛接受的定义：设 $U \subseteq \mathbb{R}^n$，若对每个 $p \in U$ 都存在开球 $B(p, r)$ 使得 $B(p, r) \subseteq U$，则称 $U$ 是 $\mathbb{R}^n$ 中的开集．

![$\mathbb{R}^n$ 中的一个开集 $U$． =400x](./figures/crash-course-in-point-set-topology/open-set-in-Rn.jpg#grayscale)

容易验证任意一族开集 $\{U_\alpha\}$ 的并依然是开集，但任意多的开集之交未必．

::: info 集合的交与并
读者肯定很熟悉两个集合之间的交与并．一般地，对任意指标集 $\mathsf{A}$，设 $\mathcal{A} = \{A_\alpha\}_{\alpha \in \mathsf{A}}$ 是一族集合，则其交定义为
$$
\bigcap \mathcal{A} = \bigcap_{\alpha \in \mathsf{A}} A_\alpha = \{ x \;|\; \forall \alpha \in \mathsf{A} : x \in A_\alpha \},
$$
其并定义为
$$
\bigcup \mathcal{A} = \bigcup_{\alpha \in \mathsf{A}} A_\alpha = \{ x \;|\; \exists \alpha \in \mathsf{A} : x \in A_\alpha \}.
$$
:::

::: example
区间 $(-1/n, 1/n), n = 1, 2, 3, \dots$ 在 $\mathbb{R}$ 中都是开集，但其交 $\bigcap_{n = 1}^\infty (-1/n, 1/n) = \{0\}$ 不是开集．
:::

不过**有限**多个开集的交依然是开集．基于以上在欧几里得空间 $\mathbb{R}^n$ 中的发现，我们能以纯粹的代数形式给出拓扑的定义，即对任意并和有限交封闭的空间．

::: definition
设 $S$ 是集合，$\mathcal{T}$ 是 $S$ 的一族子集（即 $\mathcal{T}$ 中的元素都是 $S$ 的子集）．若

1. $\emptyset, S \in \mathcal{T}$，
2. $\mathcal{T}$ 对任意并运算封闭（包括不可数情形），即对任意一族 $\{U_\alpha\} \subseteq \mathcal{T}$ 都有 $\bigcup_\alpha \{ U_\alpha \} \in \mathcal{T}$，
3. $\mathcal{T}$ 对有限交运算封闭，即对任意 $U_1, \dots, U_n \in \mathcal{T}$ 都有 $\bigcap_{i = 1}^n U_i \in \mathcal{T}$，

则称 $\mathcal{T}$ 为 $S$ 的一个**拓扑**（topology），称 $(S, \mathcal{T})$ 为**拓扑空间**（topological space）．一般来说，给定 $S$ 后相应的拓扑 $\mathcal{T}$ 可根据约定或上下文推断，因此通常简称 $S$ 为拓扑空间．拓扑 $\mathcal{T}$ 中的元素称为 $S$ 中的**开集**（open set）．给定 $p \in S$，任意包含 $p$ 的开集 $U \in \mathcal{T}$ 都称为 $p$ 的一个**邻域**（neighborhood）．若 $\mathcal{T}_1$ 和 $\mathcal{T}_2$ 都是 $S$ 的拓扑，则当 $\mathcal{T}_1 \subseteq \mathcal{T}_2$ 时称 $\mathcal{T}_1$ **粗于**（coarser）$\mathcal{T}_2$，或 $\mathcal{T}_2$ **细于**（finer）$\mathcal{T}_1$．
:::

::: example
对任意集合 $S$，$\mathcal{T} = \{ \emptyset, S \}$ 是一个拓扑，且是 $S$ 的最粗拓扑，称为**平凡拓扑**（trivial topology）或**密着拓扑**（indiscrete topology）．$S$ 的幂集（全体 $S$ 的子集构成的集合族）也是拓扑，且是 $S$ 的最细拓扑，称为**离散拓扑**（discrete topology）．
:::

::: example
在欧几里得空间 $\mathbb{R}^n$ 中，设 $U \subseteq \mathbb{R}^n$．若存在开球 $B(p, \varepsilon)$ 使得 $B(p, \varepsilon) \subseteq U$，则称 $U$ 是开集．如此定义的所有开集构成一个拓扑，称之为 $\mathbb{R}^n$ 上的**标准拓扑**（standard topology），为 $\mathbb{R}^n$ 默认所带有的拓扑．
:::

判断一个集合是否为开集有一个很常用的局部判别法则．

::: lemma[lm:local-criterion-for-openness] 开集的局部判别法则
设 $S$ 是拓扑空间，$A \subseteq S$，则 $A$ 是开集当且仅当对每个 $p \in A$ 而言都存在相应的开集 $V_p$ 使得 $p \in V_p \subseteq A$．
:::

::: proof
若 $A$ 是开集，则令 $V_p = A$ 即得 $p \in V_p \subseteq A$．

若对每个 $p \in A$ 都存在开集 $V_p$ 使得 $p \in V_p \subseteq A$，则
$$
A = \bigcup_{p \in A} \{p\} \subseteq \bigcup_{p \in A} V_p \subseteq A,
$$
因此 $A = \bigcup_{p \in A} V_p$，即 $A$ 是一族开集的并．根据拓扑的定义可知 $A$ 是开集．
:::

若集合 $F$ 的补集 $S - F$ 是开集，则称 $F$ 是**闭集**（closed set）．

根据集合交并运算的 de Morgan 定律，闭集对有限并运算封闭，对任意交运算封闭．显然拓扑可以从开集的角度定义，也可以从闭集的角度定义，两者是相对的

::: example $\mathbb{R}$ 上的余有限拓扑
设 $\mathcal{T}$ 是 $\mathbb{R}$ 的如下定义的拓扑：$\mathcal{T}$ 包含 $\emptyset$、$\mathbb{R}$ 以及所有补集为有限集的集合．为证明 $\mathcal{T}$ 确实是拓扑，只需证明其对任意并和有限交运算封闭．设 $\{F_\alpha\}$ 是任意 $\mathcal{T}$ 的子集，$F_1, \dots, F_n \in \mathcal{T}$，则根据 de Morgan 律可得
$$
\bigcup_\alpha (\mathbb{R} - F_\alpha) = \mathbb{R} - \bigcap_\alpha F_\alpha
\quad\text{以及}\quad
\bigcap_{i = 1}^n (\mathbb{R} - F_i) = \mathbb{R} - \bigcup_{i = 1}^n F_i.
$$
由于上述等式的左侧都是有限集的并或交，结果自然是有限集，因此 $\bigcap_\alpha F_\alpha$ 和 $\bigcup_{i = 1}^n F_i$ 都是开集．这个拓扑称为 $\mathbb{R}$ 上的**余有限拓扑**（finite-complement topology），其本质上是将有限集以及 $\mathbb{R}$ 定义为闭集．
:::

## 子空间拓扑

设 $(S, \mathcal{T})$ 是拓扑空间，$A \subseteq S$．定义
$$
\mathcal{T}_A = \{ U \cap A \;|\; U \in \mathcal{T} \}.
$$
根据集合交并运算的性质可得
$$
\bigcup_\alpha (U_\alpha \cap A) = \left( \bigcup_\alpha U_\alpha \right) \cap A
$$
以及
$$
\bigcap_\alpha (U_\alpha \cap A) = \left( \bigcap_\alpha U_\alpha \right) \cap A.
$$
此外显然 $\emptyset, A \in \mathcal{T}_A$，因此 $\mathcal{T}_A$ 是 $A$ 上的拓扑，称为 $A$ 在 $S$ 中的**子空间拓扑**（subspace topology）或**相对拓扑**（relative topology），且 $\mathcal{T}_A$ 中的元素称为 $A$ 中的开集．$(A, \mathcal{T}_A)$ 称为 $(S, \mathcal{T})$ 的**子空间**（subspace）．子空间 $A$ 中的开集未必是原空间 $S$ 中的开集．

::: example
将 $A = [0, 1]$ 视作 $\mathbb{R}$ 的子空间，则 $[0, 1/2)$ 是 $A$ 中的开集，但不是 $\mathbb{R}$ 中的开集．
:::

为强调某个集合 $U$ 是子空间 $A$ 中的开集，我们有时会称 $U$ 是**相对于**（relative to）$A$ 的开集．如果 $A$ 本身是 $S$ 中的开集，则 $A$ 中的开集就是 $S$ 中的开集．

## 基

一般来说拓扑 $\mathcal{T}$ 本身过于庞大且难以描述，我们一般选择使用一个子族 $\mathcal{B}$ 来描述拓扑，使得每个开集都是 $\mathcal{B}$ 中开集的并．

::: definition
设 $(S, \mathcal{T})$ 是拓扑空间，$\mathcal{B} \subseteq \mathcal{T}$．若给定任意开集 $U$ 和 $p \in U$ 都存在相应的开集 $B_p \in \mathcal{B}$ 使得 $p \in B_p \subseteq U$，则称 $\mathcal{B}$ 是拓扑 $\mathcal{T}$ 的一个**基**（basis）或 $\mathcal{B}$ 是拓扑空间 $S$ 的一个基，并称 $\mathcal{B}$ **生成**（generate）拓扑 $\mathcal{T}$．
:::

::: example
$\mathbb{R}^n$ 中所有的开球 $B(p, r)$ 构成 $\mathbb{R}^n$ 的基．
:::

多数教材都以上述方式定义拓扑基，因为这个定义方便进行证明，但其本质可通过以下命题体现出来．

::: proposition
设 $S$ 是拓扑空间．开集族 $\mathcal{B}$ 是 $S$ 的基当且仅当每个 $S$ 中的开集都能写成 $\mathcal{B}$ 中元素的并．
:::

::: proof
若 $\mathcal{B}$ 是 $S$ 的基，则对任意 $S$ 中的开集 $U$ 以及任意 $p \in U$，存在相应的开集 $B_p \in \mathcal{B}$ 使得 $p \in B_p \subseteq U$，因此
$$
U = \bigcup_{p \in U} \{p\} \subseteq \bigcup_{p \in U} B_p \subseteq U,
$$
故 $U = \bigcup_{p \in U} B_p$，即 $U$ 是 $\mathcal{B}$ 中元素的并．

若 $S$ 中的任意开集都能写成 $\mathcal{B}$ 中元素的并，则对任意开集 $U$ 以及 $p \in U$，存在相应一族 $\{B_\alpha\}_\alpha \subseteq \mathcal{B}$ 使得 $U = \bigcup_\alpha B_\alpha$，故存在某个指标 $\alpha$ 使得 $p \in B_\alpha \subseteq U$．于是 $\mathcal{B}$ 是基．
:::

除此之外，我们还有其他方法判断一族开集是否可以构成基，从而人为构造拓扑．

::: proposition[prop:basis-criterion]
设 $S$ 是集合，$\mathcal{B}$ 是一族 $S$ 的子集，则 $\mathcal{B}$ 是某个 $S$ 的拓扑 $\mathcal{T}$ 的基当且仅当以下两条性质成立：

1. $S$ 是 $\mathcal{B}$ 中所有元素的并；
2. 对任意 $B_1, B_2 \in \mathcal{B}$ 以及 $p \in B_1 \cap B_2$，存在 $B \in \mathcal{B}$ 使得 $p \in B \subseteq B_1 \cap B_2$．

:::

::: proof
$(\Rightarrow)$ 若 $\mathcal{B}$ 是某个拓扑 $\mathcal{T}$ 的基，那么任意开集都能写成 $\mathcal{B}$ 中元素的并，特别地 $S \in \mathcal{T}$ 也可以写成 $\mathcal{B}$ 中元素的并．又 $\mathcal{B}$ 中的元素都是 $S$ 的子集，它们全体的并就等于 $S$．此外，对任意 $B_1, B_2 \in \mathcal{B}$ 以及 $p \in B_1 \cap B_2$，根据基的定义，$B_1$ 和 $B_2$ 是开集，因此 $B_1 \cap B_2$ 是开集，从而存在某个 $B \in \mathcal{B}$ 使得 $p \in B \subseteq B_1 \cap B_2$．

$(\Leftarrow)$ 定义 $\mathcal{T}$ 为 $\mathcal{B}$ 中任意元素的并所构成的集合（包括空集），则显然 $\emptyset, S \in \mathcal{T}$ 且 $\mathcal{T}$ 对任意并运算封闭，于是只需证明 $\mathcal{T}$ 对有限交运算封闭，而这只需要证明其对两个集合的交运算封闭（对任意有限多次运算封闭则是归纳原理的直接推论）．任取 $U = \bigcup_\mu B_\mu \in \mathcal{T}$ 和 $V = \bigcup_\nu B_\nu \in \mathcal{T}$，其中 $\{B_\mu\}, \{B_\nu\} \subseteq \mathcal{B}$，则
$$
U \cap V = \left( \bigcup_\mu B_\mu \right) \cap \left( \bigcup_\nu B_\nu \right)
= \bigcup_{\mu, \nu} (B_\mu \cap B_\nu).
$$
对任意 $p \in U \cap V$，存在某对指标 $\mu$ 和 $\nu$ 使得 $p \in B_\mu \cap B_\nu$，而根据前提假设，存在相应的 $B_p \in \mathcal{B}$ 使得 $p \in B_p \subseteq B_\mu \cap B_\nu$，因此
$$
U \cap V = \bigcup_{p \in U \cap V} \{p\} \subseteq \bigcup_{p \in U \cap V} B_p \subseteq \bigcup_{\mu, \nu} (B_\mu \cap B_\nu) = U \cap V,
$$
进而 $U \cap V = \bigcup_{p \in U \cap V} B_p$，即 $U \cap V \in \mathcal{T}$．
:::

在已有基的情况下，我们很容易得到子空间的基．

::: proposition
设 $\mathcal{B} = \{B_\alpha\}$ 是拓扑空间 $S$ 的基，$A$ 是 $S$ 的子空间，则 $\{B_\alpha \cap A\}$ 是 $A$ 的基．
:::

::: proof
令 $U'$ 为子空间 $A$ 中的任意开集，$p \in U'$．根据子空间的定义，存在 $S$ 中的开集 $U$ 使得 $U' = U \cap A$．由于 $p \in U \cap A \subseteq U$，存在基元素 $B_\alpha$ 使得 $p \in B_\alpha \subseteq U$， 故
$$
p \in B_\alpha \cap A \subseteq U \cap A = U',
$$
因此集合族 $\{B_\alpha \cap A \;|\; B_\alpha \in \mathcal{B}\}$ 是 $A$ 的一个基．
:::

## 第一可数性与第二可数性

对可数集与不可数集的分析经常存在本质区别，后者通常非常困难且需要引入选择公理．在实践中，我们更愿意有限处理可数集，因此也会对拓扑基的可数性做出限制．在正式分析基的可数性前，让我们先看一个欧几里得空间 $\mathbb{R}^n$ 中的例子．

$\mathbb{R}^n$ 中所有坐标都是有理数的点称为**有理点**（rational point）．记 $\mathbb{Q}$ 为有理数集，$\mathbb{Q}^{+}$ 为正有理数集．以下是分析学中众所周知的事实．

::: lemma
$\mathbb{R}^n$ 中的每个开集都包含有理点．
:::

::: proof
设 $U$ 是 $\mathbb{R}^n$ 中的开集．任取 $p = \left(p^1, \dots, p^n \right) \in U$，存在相应的开球 $B(p, r) \subseteq U$，其中 $r > 0$．这个开球中还包含了如下开立方体：
$$
\prod_{i = 1}^n I_i, \quad I_i = \left( p^i - \frac{r}{\sqrt{n}}, p^i + \frac{r}{\sqrt{n}} \right), i = 1, 2, \dots, n.
$$
这是因为对这个开立方体中的任意点 $q = \left( q^1, \dots, q^n \right)$ 而言都有
$$
q^i - p^i \in \left(-\frac{r}{\sqrt{n}}, \frac{r}{\sqrt{n}} \right), \quad i = 1, 2, \dots, n.
$$
故 $q$ 到开球中心 $p$ 的距离满足
$$
d(q, p)
= \left[ \sum_{i = 1}^n \left( q^i - p^i \right)^2 \right]^{1/2}
< \left[ \sum_{i = 1}^n \left( \frac{r}{\sqrt{n}} \right)^2 \right]^{1/2}
= r,
$$
即 $q \in B(p, r)$，从而 $\prod_{i = 1}^n I_i \subseteq B(p, r)$．

现在令每个 $q^i$ 都是区间 $I_i$ 中的有理数，则 $q = \left( q^1, \dots, q^n \right)$ 是 $\prod_{i = 1}^n I_i \subseteq B(p, r) \subseteq U$ 中的有理点．
:::

基于上述引理，我们可知 $\mathbb{R}^n$ 的标准拓扑有可数基．

::: proposition
将 $\mathbb{R}^n$ 中全体中心点为有理点、半径为正有理数的开球构成的集合记作 $\mathcal{B}_{\mathrm{rat}}$，则 $\mathcal{B}_{\mathrm{rat}}$ 是 $\mathbb{R}^n$ 的基．
:::

::: proof
任取 $\mathbb{R}^n$ 中的开集 $U$ 和 $p \in U$，存在相应的开球 $B(p, r') \subseteq U$，其中 $r'$ 是正实数．取有理数 $r \in (0, r')$，则 $p \in B(p, r) \subseteq U$．根据前一引理，开集 $B(p, r/2)$ 中存在有理点 $q$．我们证明
$$
p \in B\left(q, \frac{r}{2} \right) \subseteq B(p, r)
$$
从而说明全体 $B(q, r/2)$ 构成 $\mathbb{R}^n$ 的基．$q \in B(p, r/2)$ 说明 $d(p, q) < r/2$，因此 $p \in B(q, r/2)$．对任意 $x \in B(q, r/2)$，根据距离的三角不等式可得
$$
d(x, p) \leq d(x, q) + d(q, p) < \frac{r}{2} + \frac{r}{2} = r,
$$
因此 $x \in B(p, r)$，从而 $B(q, r/2) \subseteq B(q, r/2)$．
:::

熟知 $\mathbb{Q}$ 和 $\mathbb{Q}^{+}$ 都是可数集，而 $\mathcal{B}_{\mathrm{rat}}$ 显然一一对应于 $\mathbb{Q}^n \times \mathbb{Q}^{+}$，这也是可数集．因此 $\mathbb{R}^n$ 有可数基．

::: definition
有可数基的拓扑空间称为**第二可数**（second countable）空间．
:::

::: proposition
若 $S$ 是第二可数空间，则其任意子空间 $A$ 也是第二可数的．
:::

::: proof
$S$ 第二可数表明其存在可数基 $\mathcal{B} = \{B_\alpha\}$．又子空间 $A$ 有基 $\mathcal{B}_A = \{B_\alpha \cap A \;|\; B_\alpha \in \mathcal{B} \}$，这显然是可数集．

:::

第二可数性表明整个拓扑空间有可数基，是全局性质的．与之相对的第一可数性则描述局部空间中基的可数性．为此，我们需要先明确这个局部的基是什么．

::: definition
设 $S$ 是拓扑空间，$p \in S$，$\mathcal{B} = \{B_\alpha\}$ 是一族 $p$ 的邻域．若对任意 $p$ 的邻域 $U$ 都存在相应的 $B_\alpha \in \mathcal{B}$ 使得 $p \in B_\alpha \subseteq U$，则称 $\mathcal{B}$ 是 $p$ 处的一个**邻域基**（neighborhood basis）．若对每个 $p \in S$ 而言，$p$ 处都有可数的邻域基，则称 $S$ 是**第一可数的**（first countable）．
:::

::: example
对任意 $p \in \mathbb{R}^n$，开球族 $\{ B(p, 1/n) \}_{n = 1}^\infty$ 是 $p$ 处的邻域基，且是可数集，因此 $\mathbb{R}^n$ 是第一可数的．
:::

事实上第二可数空间一定是第一可数的．对任意可数基 $\mathcal{B} = \{ B_\alpha \}$，任取 $p \in S$ 及其邻域 $U$，$\{ B_\alpha \cap U \;|\; B_\alpha \in \mathcal{B} \}$ 总是 $p$ 处的可数邻域基．

设 $S$ 是第一可数空间，任取 $p \in S$，则存在可数邻域基 $\{V_i\}_{i = 1}^\infty$．若令 $U_i = V_1 \cap \cdots \cap V_i$，则
$$
U_1 \supseteq U_2 \supseteq U_3 \supseteq \cdots
$$
是一列递减的邻域，也构成 $p$ 处的邻域基．因此若有必要，我们可以默认可数邻域基中的开集是递减的．

## 分离公理

拓扑学中有许多不同的分离公理，我们重点关注 Hausdorff 性以及正规性．

::: definition
设 $S$ 是拓扑空间．若对任意 $S$ 中的两个不同的点 $x$ 与 $y$，都存在不相交的开集 $U$ 和 $V$ 使得 $x \in U$ 且 $y \in V$，则称 $S$ 是 **Hausdorff 空间**（上述前提条件称为 **Hausdorff 条件**）．若对 $S$ 中任意两个不相交的闭集 $F$ 与 $G$，都存在不相交的开集 $U$ 和 $V$ 使得 $F \subseteq U$ 且 $V \subseteq G$，则称 $S$ 是**正规空间**（normal space）．
:::

![Hausdorff 条件与正规性．](./figures/crash-course-in-point-set-topology/hausdorff-and-normality.jpg#grayscale)

::: example
欧几里得空间 $\mathbb{R}^n$ 是 Hausdorff 空间．任取不同的点 $x$ 与 $y$，令 $\varepsilon = d(x, y) / 2$，则开球 $B(x, \varepsilon)$ 与 $B(y, \varepsilon)$ 不相交．
:::

Hausdorff 空间是几何性质良好的空间，许多几何直觉也依赖于 Hausdorff 条件．

::: proposition
Hausdorff 空间 $S$ 中的任意单元素集都是闭集．
:::

::: proof
任取 $x \in S$，我们要证明 $S - \{x\}$ 是开集．任取 $y \in S - \{x\}$，根据 Hausdorff 条件，存在开集 $U \ni x$ 和开集 $V \ni y$ 且 $U \cap V = \emptyset$，因此
$$
y \in V \subseteq S - U \subseteq S - \{x\}.
$$
根据[开集的局部判别法则](#lm:local-criterion-for-openness)，$S - \{x\}$ 是开集．
:::

Hausdorff 性是可继承的．

::: proposition
Hausdorff 空间 $S$ 的任意子空间 $A$ 也是 Hausdorff 空间．
:::

::: proof
设 $x$ 和 $y$ 是 $A$ 中不同的两点．由于 $S$ 是 Hausdorff 空间，存在 $S$ 中的开集 $U \ni x$ 和 $V \ni y$ 且 $U \cap V = \emptyset$．于是 $U \cap A \ni x$ 与 $V \cap A \ni y$ 不相交，而它们又都是 $A$ 中的开集，从而 $A$ 是 Hausdorff 空间．
:::

## 积拓扑

给定两个拓扑空间 $X$ 与 $Y$，我们自然会考虑如何衍生定义 $X \times Y$ 的拓扑．对任意 $X$ 中的开集 $U$ 和 $Y$ 中的开集 $V$，我们将全体形如 $U \times V$ 的集合构成的集合族记作 $\mathcal{B}$，则 $\mathcal{B}$ 是 $X \times Y$ 上某个拓扑的基．为证明这一点，只需证明其满足先前证明的[命题](#prop:basis-criterion)中的性质．显然 $X \times Y \in \mathcal{B}$，因此 $\mathcal{B}$ 中所有元素的并是 $X \times Y$．对任意 $U_1, U_2 \in X$ 和 $V_1, V_2 \in Y$，我们有
$$
(V_1 \times V_1) \cap (U_2 \times V_2) = (U_1 \cap U_2) \times (V_1 \cap V_2),
$$
它显然也是 $\mathcal{B}$ 中的元素，因此 $\mathcal{B}$ 确实是一个拓扑基．我们将 $\mathcal{B}$ 所生成的拓扑（即 $\mathcal{B}$ 中元素的任意并构成的集合族）称为 $X \times Y$ 的**积拓扑**（product topology）．若无特殊说明，我们默认拓扑空间的笛卡尔积带有积拓扑．

使用全体开集构造积拓扑的基还是过于冗余了，我们可以使用基构造积拓扑．

::: proposition
设拓扑空间 $X$ 和 $Y$ 分别有基 $\{U_i\}$ 和 $\{V_j\}$，则 $\{U_i \times V_j\}$ 是 $X \times Y$ 的基．
:::

::: proof
任取 $X \times Y$ 中的开集 $W$ 和点 $(x, y) \in W$，存在相应的基元素 $U \times V$ 使得 $(x, y) \in U \times V \subseteq W$．由于 $U$ 是 $X$ 中的开集且 $\{U_i\}$ 是 $X$ 的基，存在某个相应的 $U_i$ 使得
$$
x \in U_i \subseteq U.
$$
类似地存在某个 $V_j$ 使得
$$
y \in V_j \subseteq V.
$$
因此
$$
(x, y) \in U_i \times V_j \subseteq U \times V \subseteq W,
$$
从而说明 $\{U_i \times V_j\}$ 是 $X \times Y$ 的基．
:::

::: corollary
两个第二可数空间的笛卡尔积是第二可数空间．
:::

::: proposition
两个 Hausdorff 空间 $X$ 和 $Y$ 的笛卡尔积 $X \times Y$ 是 Hausdorff 空间．
:::

::: proof
任取 $X \times Y$ 中的不同两点 $(x_1, y_1)$ 与 $(x_2, y_2)$，不是一般性可设 $x_1 \neq x_2$．由于 $X$ 是 Hausdorff 空间，存在 $X$ 中的不相交开集 $U_1$ 与 $U_2$ 使得 $x_1 \in U_1$ 且 $x_2 \in U_2$，则 $U_1 \times Y$ 与 $U_2 \times Y$ 不相交，而它们分别是 $(x_1, y_1)$ 和 $(x_2, y_2)$ 的邻域，故 $X \times Y$ 是 Hausdorff 空间．
:::

::: tip 无限个拓扑空间的积拓扑
下文讨无限多个拓扑空间的积拓扑，可作为选读内容．
:::

我们讨论了有限个拓扑空间的（笛卡尔）积及其积拓扑，它可以扩展到无限多个拓扑空间上．为此，我们需要先说明无限情形的积．

对于积 $X^n = X \times \cdots \times X$，其中的元素是 $n$ 元组 $(x_1, \dots, x_n)$，其可以视作映射 $\{1, \dots, n\} \to X$，该映射对每个指标 $i$ 取出一个元素 $x_i \in X$．

设 $\{X_\alpha\}_{\alpha \in \mathsf{A}}$ 是一族拓扑空间（其中 $\mathsf{A}$ 是指标集），我们将其（笛卡尔）积 $\prod_{\alpha \in \mathsf{A}} X_\alpha$ 定义为全体形如 $f : \mathsf{A} \to \bigcup_{\alpha \in \mathsf{A}} X_\alpha$ 的映射，且该映射将 $\alpha \in \mathsf{A}$ 映射到 $X_\alpha$ 中的元素．直观地看，对每个指标 $\alpha \in \mathsf{A}$，$f$ 从 $X_\alpha$ 中选择出一个元素 $f(\alpha)$．换言之，$f$ 可视作一个集合族 $\{x_\alpha\}_{\alpha \in \mathsf{A}}$，其中 $x_\alpha \in X_\alpha$．

给定指标 $\alpha_i \in \mathsf{A}$，对任意 $\{x_\alpha\}_{\alpha \in \mathsf{A}} \in \prod_{\alpha \in \mathsf{A}} X_\alpha$，定义**投影映射**（projection map）$\pi_{\alpha_i}$ 为
$$
\begin{aligned}
	\pi_{\alpha_i} : \prod_{\alpha \in \mathsf{A}} X_\alpha &\to X_{\alpha_i}, \\
	\{x_\alpha\}_{\alpha \in \mathsf{A}} &\mapsto x_{\alpha_i}.
\end{aligned}
$$
考虑 $\mathsf{A}$ 为可数集的情形会更方便理清思绪．设 $\{X_i\}_{i = 1}^\infty$ 是一族拓扑空间，则 $\prod_{i = 1}^\infty X_i$ 可视作可数长度的元组 $(x_1, x_2, \dots)$，其中 $x_i \in X_i$．投影映射 $\pi_i(x_1, x_2, \dots) = x_i$．给定 $U_i \subseteq X_i$，我们有
$$
\pi_i^{-1}(U_i) = X_1 \times \cdots \times X_{i - 1} \times U_i \times X_{i + 1} \times \cdots,
$$
亦即全体第 $i$ 分量为 $U_i$ 中元素的元组．给定 $U_1, \dots, U_k$（其中 $U_i \subseteq X_i$），我们有
$$
\pi_1^{-1}(U_1) \cap \cdots \cap \pi_k^{-1}(U_k) = U_1 \times \cdots \times U_k \times X_{k + 1} \times \cdots.
$$
可以看出，有限个 $\pi_i^{-1}(U_i)$ 的交只在有限多个维度上限制为开集 $U_i$．我们将有限多个投影映射的逆像之交作为积拓扑的基元素．

::: definition
设 $\{X_\alpha\}_{\alpha \in \mathsf{A}}$ 是一族拓扑空间，定义
$$
\mathcal{B} = \Bigl\{
	\pi_{\alpha_1}^{-1}(U_{\alpha_1}) \cap \cdots \cap \pi_{\alpha_n}^{-1}(U_{\alpha_n}) \;\Big|\;
	n \in \mathbb{N}^{+}, \alpha_i \in \mathsf{A}, U_{\alpha_i} \in X_{\alpha_i} \ (i = 1, 2, \dots, n)
\Bigr\}
$$
所生成的拓扑为 $\prod_{\alpha \in \mathsf{A}} X_\alpha$ 的**积拓扑**（product topology）．
:::

在可数情形下，需要注意基元素并不具有形式 $U_1 \times U_2 \times \cdots$，其中只有有限个开集不为 $X_i$．这么定义的动机之一来源于后文要讨论的连续性．我们希望 $\pi_{\alpha_i}$ 是连续映射，这就要求对开集 $U_{\alpha_i}$ 而言，$\pi_{\alpha_i}^{-1}(U_{\alpha_i})$ 是开集，而有限多个开集的交是开集，因此我们将其有限交的任意并定义为开集．

## 连续性

拓扑空间上的连续性是高等数学中函数连续性的一般扩展．

::: definition
设 $X$ 和 $Y$ 是拓扑空间，$f : X \to Y$ 是映射．给定 $p \in X$，若对 $f(p)$ 在 $Y$ 中的每个邻域 $V$ 而言，都存在相应的 $p$ 在 $X$ 中的邻域 $U$ 使得 $f(U) \subseteq V$，则称 $f$ 在 $p$ 处**连续**（continuous）．若 $f$ 在 $X$ 中的每个点处连续，则称 $f$ 是**连续的**（continuous）．
:::

::: info 连续性的定义
我们来说明这个定义确实是高等数学中连续性的扩展．在欧几里得空间 $\mathbb{R}^n$ 中，设 $A \subseteq \mathbb{R}^n$，$p \in A$．我们说函数 $f : A \to \mathbb{R}^m$ 在 $p$ 处连续，指的是 $\lim_{x \to p} f(x) = f(p)$．将极限的定义展开可得：对任意 $\varepsilon > 0$，都存在相应的 $\delta > 0$ 使得当 $0 < d(x, p) < \delta$ 时有 $d\bigl( f(x), f(p) \bigr) < \varepsilon$．这等价于：
$$
\forall \varepsilon > 0 : \exists \delta > 0 : x \in B(p, \delta) \implies f(x) \in B\bigl( f(p), \varepsilon \bigr).
$$
其中 $x \in B(p, \delta) \implies f(x) \in B\bigl( f(p), \varepsilon \bigr)$ 等价于 $f\bigl( B(p, \delta) \bigr) \subseteq B\bigl( f(p), \varepsilon \bigr)$．

对 $f(p)$ 在 $\mathbb{R}^m$ 中的任意邻域 $V$，存在相应的开球 $B\bigl( f(p), r \bigr) \subseteq V$．若 $f$ 在高等数学的意义下连续，则取 $\varepsilon = r$，存在开球 $U = B(p, \delta)$ 使得 $f(U) \subseteq V$，从而 $f$ 在拓扑的意义下连续．

若 $f$ 在拓扑意义下连续，则对于任意 $\varepsilon > 0$，考虑 $f(p)$ 在 $\mathbb{R}^m$ 中的邻域 $V = B\bigl( f(p), \varepsilon \bigr)$，存在相应的 $p$ 的邻域 $U$ 使得 $f(U) \subseteq V$．由于 $U$ 是开集，存在相应的开球 $B(p, \delta) \subseteq U$，因此 $f\bigl( B(p, \delta) \bigr) \subseteq f(U) \subseteq V = B\bigl( f(p), \varepsilon \bigr)$．由 $\varepsilon$ 的任意性，$f$ 在高等数学的意义下连续．
:::

以下命题是连续函数的重要性质，几乎处处都会引用．

::: proposition 用开集描述连续性
拓扑空间之间的映射 $f : X \to Y$ 是连续映射，当且仅当 $Y$ 中任意开集 $V$ 的逆像 $f^{-1}(V)$ 是 $X$ 中的开集．
:::

::: proof
$(\Rightarrow)$ 设 $f$ 是连续映射．任取 $Y$ 中的开集，为证明 $f^{-1}(V)$ 是 $X$ 中的开集，我们利用[**开集的局部判别法则**](#lm:local-criterion-for-openness)．任取 $p \in f^{-1}(V)$，则 $f(p) \in V$．由 $f$ 的连续性，存在 $p$ 的邻域 $U$ 使得 $f(U) \subseteq V$，因此 $p \in U \subseteq f^{-1}(V)$，从而说明 $f^{-1}(V)$ 是开集．

$(\Leftarrow)$ 设任意开集 $V$ 的逆像 $f^{-1}(V)$ 是开集．任取 $p \in X$ 以及 $f(p)$ 的邻域 $V$，$f^{-1}(V)$ 是开集且 $p \in f^{-1}(V)$，因此 $U = f^{-1}(V)$ 是 $p$ 的邻域，满足 $f(U) = f( f^{-1}(V) ) \subseteq V$，故 $f$ 在 $p$ 处连续．由 $p$ 的任意性，$f$ 是连续映射．
:::

::: example 包含映射的连续性
设 $A$ 是拓扑空间 $X$ 的子空间，则包含映射 $i : A \to X$，$i(a) = a$ 是连续的．
:::

::: proof
设 $U$ 是 $X$ 中的任意开集，则 $i^{-1}(U) = U \cap A$ 是 $A$ 中的开集，故 $i$ 连续．
:::

::: example 投影映射的连续性
设 $X$ 与 $Y$ 是拓扑空间，则投影映射 $\pi : X \times Y \to X$，$\pi(x, y) = x$ 是连续的．
:::

::: proof
设 $U$ 是 $X$ 中的任意开集，则 $\pi^{-1}(X) = U \times Y$ 是 $X \times Y$ 中的开集，故 $\pi$ 连续．
:::

::: proposition
连续映射的复合是连续的：设 $X$、$Y$ 和 $Z$ 为拓扑空间，$f : X \to Y$ 与 $g : Y \to Z$ 是连续映射，则 $g \circ f : X \to Z$ 连续．
:::

::: proof
任取 $Z$ 中的开集 $V$，则
$$
(g \circ f)^{-1}(V) = f^{-1}( g^{-1}(V) ),
$$
这是因为对任意 $x \in X$ 都有
$$
x \in (g \circ f)^{-1}(V)
\iff g(f(x)) \in V
\iff f(x) \in g^{-1}(V)
\iff x \in f^{-1}( g^{-1}(V) ).
$$
由于 $g$ 连续，$g^{-1}(V)$ 是开集．同理 $f^{-1}( g^{-1}(V) )$ 是开集．故 $g \circ f$ 连续．
:::

设 $X$ 和 $Y$ 是拓扑空间，$A$ 是 $X$ 的子空间，$f : X \to Y$．映射 $f$ 在 $A$ 上的**限制**（restriciton）
$$
f|_A : A \to Y
$$
定义为
$$
(f|_A)(a) = f(a).
$$
设 $i : A \to X$ 为包含映射，则 $f|_A = f \circ i$，因此当 $f$ 连续时 $f|_A$ 也连续．

::: corollary
连续映射 $f : X \to Y$ 在 $X$ 的子空间 $A$ 上的限制 $f|_A$ 是连续的．
:::

由于开集与闭集是对偶的，我们也能用闭集描述连续性．

::: proposition
映射 $f : X \to Y$ 是连续的当且仅当 $Y$ 中的任意闭集 $G$ 的逆像 $f^{-1}(G)$ 是 $X$ 中的闭集．
:::

::: proof
容易验证对任意 $G \subseteq Y$ 都有
$$
f^{-1}(Y - G) = X - f^{-1}(G).
$$
若 $G$ 是闭集，则 $f^{-1}(G)$ 是 $X$ 中的闭集当且仅当 $f^{-1}(Y - G)$ 是 $X$ 中的开集．由 $f$ 是连续的，这等价于 $Y - G$ 是 $Y$ 中的开集，当且仅当 $G$ 是闭集．
:::

如果映射 $f : X \to Y$ 将任意开集映射为开集，则称 $f$ 为**开映射**（open map）．类似地，若 $f$ 将任意闭集映射为闭集，则称 $f$ 为**闭映射**（closed map）．

## 紧致性

紧致性是拓扑学中的重要性质．设 $S$ 是拓扑空间，$\{U_\alpha\}$ 是一族 $S$ 中的开集．若 $S \subseteq \bigcup_\alpha U_\alpha$，则称 $\{U_\alpha\}$ 是 $S$ 的一个**开覆盖**（open cover）．由于 $S$ 是最大的开集，$S$ 的开覆盖也满足 $S = \bigcup_\alpha U_\alpha$．如果开覆盖 $\{U_\alpha\}$ 的一个子族依然是 $S$ 的开覆盖，则称这个子族为 $\{U_\alpha\}$ 的**子覆盖**（subcover）．如果 $S$ 的每个开覆盖都存在有限子覆盖（即有限个开集构成的开覆盖），则称 $S$ 是**紧致的**（compact）或**紧的**．显然开覆盖必然存在，因为单独的 $S$ 就符合条件．

设 $A$ 是 $S$ 的子空间，$A$ 可以由 $A$ 中的开集覆盖，也可以由 $S$ 中的开集覆盖．我们规定 $A$ **在** $S$ **中的开覆盖**（open cover in $S$）是 $S$ 中的一族开集 $\{U_\alpha\}$ 且该开集族覆盖 $A$，即 $A \subseteq \bigcup_{\alpha} U_\alpha$．此时由于 $A$ 不是最大的空间 $S$，包含符号未必取等号．

![曲线 $A$ 在平面 $S$ 中的开覆盖． =200x](./figures/crash-course-in-point-set-topology/open-cover.jpg#grayscale)

需要指出，按照定义，$A$ 是紧的要求相应的开覆盖是 $A$ 中的开覆盖而不是 $S$ 中的开覆盖，但以下命题可以保证开覆盖是 $A$ 中的还是 $S$ 中的无关紧要．

::: proposition
设 $S$ 是拓扑空间，$A$ 是其子空间．$A$ 是紧的当且仅当 $A$ 在 $S$ 中的每个开覆盖都存在有限子覆盖．
:::

::: proof
$(\Rightarrow)$ 设 $A$ 是紧的，任取 $A$ 在 $S$ 中的开覆盖 $\{U_\alpha\}$，则 $A \subseteq \bigcup_\alpha U_\alpha$，因此
$$
A \subseteq \left( \bigcup_\alpha U_\alpha \right) \cap A = \bigcup_\alpha (U_\alpha \cap A),
$$
这说明 $\{U_\alpha \cap A\}$ 是 $A$ 中的开覆盖．由于 $A$ 是紧的，其存在有限子覆盖 $\{U_{\alpha_i} \cap A\}_{i = 1}^r$，故
$$
A \subseteq \bigcup_{i = 1}^r (U_{\alpha_i} \cap A) \subseteq \bigcup_{i = 1}^r U_{\alpha_i},
$$
这说明 $\{ U_{\alpha_i} \}$ 是 $A$ 在 $S$ 中的有限子覆盖．

$(\Leftarrow)$ 任取 $A$ 在 $A$ 中的开覆盖 $\{V_\alpha\}$，根据子空间的定义，对每个 $V_\alpha$ 而言都存在相应的 $S$ 中的开集 $U_\alpha$ 使得 $V_\alpha = U_\alpha \cap S$．由于
$$
A \subseteq \bigcup_\alpha V_\alpha \subseteq \bigcup_\alpha U_\alpha,
$$
因此 $\{U_\alpha\}$ 是 $A$ 在 $S$ 中的开覆盖，从而存在有限子覆盖 $\{ U_{\alpha_i} \}_{i = 1}^r$ 使得 $A \subseteq \bigcup_{i = 1}^r U_{\alpha_i}$．因此
$$
A \subseteq \left( \bigcup_{i = 1}^r U_{\alpha_i} \right) \cap A
= \bigcup_{i = 1}^r (U_{\alpha_i} \cap A)
= \bigcup_{i = 1}^r V_{\alpha_i},
$$
从而说明 $\{V_\alpha\}$ 存在有限子覆盖 $\{V_{\alpha_i}\}_{i = 1}^r$，即 $A$ 是紧的．
:::

对任意子集 $A \subseteq S$，若 $A$ 作为子空间是紧的，则称子集 $A$ 是紧集．

::: proposition
紧致拓扑空间 $S$ 中的任意闭集 $F$ 都是紧的．
:::

::: proof
任取 $F$ 在 $S$ 中的开覆盖 $\{U_\alpha\}$，则 $\{U_\alpha\} \cup \{S - F\}$ 是 $S$ 的开覆盖，因而存在有限子覆盖 $\{U_{\alpha_i}\} \cup \{ S - F \}$，而 $\{U_{\alpha_i}\}$ 覆盖了 $F$，因此 $F$ 是紧的．
:::

::: proposition 分离紧集与点
设 $S$ 是 Hausdorff 空间，$K$ 是 $S$ 中的紧集，$p \in S - K$，则存在开集 $U \supseteq K$ 和开集 $V \ni p$ 使得 $U \cap V = \emptyset$．
:::

::: proof
根据 Hausdorff 性，对每个 $x \in K$ 而言都存在相应的开集 $U_x \ni x$ 和 $V_x \ni p$ 使得 $U_x \cap V_x = \emptyset$．开集族 $\{U_x\}_{x \in K}$ 覆盖了 $K$，因而存在有限子覆盖 $\{U_{x_i}\}$．令 $U = \bigcup_i U_{x_i}$，$V = \bigcap_i V_{x_i}$，则 $U$ 和 $V$ 都是开集且
$$
U \cap V = \bigcup_i (U_{x_i} \cap V) = \emptyset.
$$
显然 $U \supseteq K$ 且 $V \ni p$，故命题得证．
:::

::: proposition
Hausdorff 空间 $S$ 的任意紧子集 $K$ 都是闭集．
:::

::: proof
对每个 $p \in S - K$ 都存在分离 $p$ 和 $K$ 的开集，也就是存在开集 $V$ 使得 $p \in V \subseteq S - K$．根据[**开集的局部判别法则**](#lm:local-criterion-for-openness)，$S - K$ 是开集，故 $K$ 是闭集．
:::

::: proposition
紧致 Hausdorff 空间 $S$ 是正规空间．
:::

::: proof
任取 $S$ 中不相交的闭集 $F$ 与 $G$，它们也都是紧集．对任意 $x \in F$ 都存在分离 $x$ 与 $G$ 的开集，即存在开集 $U_x \ni x$ 和 $V_x \supseteq G$ 使得 $U_x \cap V_x = \emptyset$．显然 $\{V_x\}_{x \in F}$ 是 $G$ 的开覆盖，从而存在有限子覆盖 $\{V_{x_i}\}$．令 $U = \bigcup_i U_{x_i}$，$V = \bigcap_i V_{x_i}$，它们都是开集且 $V \supseteq G$．对每个 $x \in F$ 都有 $x \in U_x \subseteq U$，因此 $U \supseteq F$．欲证原命题，只需证明 $U \cap V = \emptyset$，这由下式看是显然的：
$$
U \cap V = \bigcup_i (U_{x_i} \cap V).
$$
:::

::: proposition
紧集在连续映射下的像是紧集．
:::

::: proof
设 $f : X \to Y$ 是连续映射，$K$ 是 $X$ 中的紧集，我们要证明 $f(K)$ 是 $Y$ 中的紧集．假设 $\{U_\alpha\}$ 是 $f(K)$ 在 $Y$ 中的开覆盖，由连续性可知 $f^{-1}(U_\alpha)$ 是开集，且
$$
K \subseteq f^{-1}(f(K)) \subseteq f^{-1} \left( \bigcup_\alpha U_\alpha \right)
= \bigcup_\alpha f^{-1}(U_\alpha).
$$
因此 $\{f^{-1}(U_\alpha)\}$ 是 $K$ 的开覆盖，从而存在有限子覆盖 $\{ f^{-1}(U_{\alpha_i}) \}$．于是
$$
K \subseteq \bigcup_i f^{-1}(U_{\alpha_i}) = f^{-1} \left( \bigcup_i U_{\alpha_i} \right),
$$
这说明 $f(K) \subseteq \bigcup_i U_{\alpha_i}$，即 $f(K)$ 是紧集．
:::

::: proposition[prop:compact-hausdorff-closed-map]
设 $X$ 是紧致空间，$Y$ 是 Hausdorff 空间，则连续映射 $f : X \to Y$ 是闭映射．
:::

::: proof
设 $F$ 是 $X$ 中的闭集，则 $F$ 是 $X$ 中的紧集（由 $X$ 紧致），因此 $f(X)$ 是 $Y$ 中的紧集，从而 $f(X)$ 是 $Y$ 中的闭集（由 $Y$ 是 Hausdorff 空间）．
:::

设 $f : X \to Y$ 是连续双射．若其逆映射 $f^{-1} : Y \to X$ 也是连续的，则称 $f$ 是**同胚**（homeomorphism）．

::: corollary
设 $X$ 是紧致空间，$Y$ 是 Hausdorff 空间，则连续双射 $f : X \to Y$ 是同胚．
:::

::: proof
只需证明 $f^{-1}$ 是连续的，而这只需证明对任意 $X$ 中的闭集 $F$ 而言，$(f^{-1})^{-1}(F) = f(F)$ 都是 $Y$ 中的闭集．由前一命题可知 $f$ 是闭映射，因此 $f(F)$ 确实是闭集．
:::

很容易验证两个紧致空间的积依然是紧致空间．这一性质对任意多个紧致空间依然成立，但证明要复杂很多，我们只给出结论．

::: theorem Tychonoff 定理
任意一族紧致拓扑空间的积是紧致拓扑空间．
:::

## ℝⁿ 中的有界性

设 $A \subseteq \mathbb{R}^n$．若存在开球 $B(p, r)$ 使得 $A \subseteq B(p, r)$，则称 $A$ 是**有界的**（bounded）．

::: proposition
$\mathbb{R}^n$ 中的紧集是有界的．
:::

::: proof
设 $A$ 是 $\mathbb{R}^n$ 中的紧集．显然开球族 $\{ B(0, i) \}_{i = 1}^\infty$ 是 $A$ 的开覆盖 ，且其任意一个有限子覆盖的并必然是形如 $B(0,r)$ 的开球，从而 $A \subseteq B(0, r)$，即 $A$ 是有界的．
:::

结合前文的结论，若 $A$ 是 $\mathbb{R}^n$ 中的紧集，则 $A$ 是有界闭集．其逆命题也成立，一般是数学分析中的结论．

::: proposition Heine-Borel 定理
$\mathbb{R}^n$ 中的子集 $A$ 是紧的当且仅当 $A$ 是有界闭集．
:::

## 连通性

::: definition
设 $S$ 是拓扑空间．若存在不相交的**非空**开集 $U$ 和 $V$ 使得 $S = U \cap V$，则称 $S$ 是**不连通的**（disconnected）．不是不连同的空间称为**连通空间**（connected space）——意即不存在不相交开集 $U$ 和 $V$ 使得 $S = U \cap V$．对于 $S$ 的子集 $A$，若 $A$ 作为子空间是不连通的，则称 $A$ 是**不连通的**．
:::

![一个不连通空间． =300x](./figures/crash-course-in-point-set-topology/a-disconnected-space.jpg#grayscale)

不连通集有以下等价定义．

::: proposition
设 $S$ 是拓扑空间，$A$ 是其子集，则 $A$ 不连通当且仅当存在 $S$ 中的开集 $U$ 和 $V$ 使得

1. $U \cap A \neq \emptyset$，$V \cap A \neq \emptyset$，
2. $U \cap V \cap A = \emptyset$，
3. $A \subseteq U \cup V$．

满足以上性质的一对开集 $(U, V)$ 称为 $A$ 的一个**分离**（separation）．
:::

![不连通集 $A$ 的一个分离． =300x](./figures/crash-course-in-point-set-topology/a-separation.jpg#grayscale)

::: proof
$(\Rightarrow)$ 假设 $A$ 不连通，即存在 $S$ 中的开集 $U$ 和 $V$ 使得 $U \cap A$ 与 $V \cap A$ 均非空且不相交，此外 $A = (U \cap A) \cup (V \cap A)$．性质 1 已经满足，而 $U \cap A$ 与 $V \cap A$ 不相交可得性质 2．性质 3 由 $A = (U \cap A) \cup (V \cap A) = (U \cup V) \cap A \subseteq U \cup V$ 得出．

$(\Leftarrow)$ 性质 1 保证 $U \cap A$ 和 $V \cap A$ 是子空间 $A$ 中的非空开集．性质 2 保证开集 $U \cap A$ 与 $V \cap A$ 不相交．性质 3 保证 $A = A \cap A \subseteq (U \cup V) \cap A$，因此
$$
A \subseteq (U \cup V) \cap A =  (U \cap A) \cup (V \cap A) \subseteq A \cup A = A,
$$
进而 $A = (U \cap A) \cup (V \cap A)$，故 $A$ 不连通．
:::

连通性是连续映射下的不变量．

::: proposition
设 $X$ 是连通空间，$f : X \to Y$ 是连续映射，则 $f(X)$ 是 $Y$ 中的连通子空间．
:::

::: proof
假设 $f(X)$ 不连通，则存在其分离 $(U, V)$．根据 $f$ 的连续性，$f^{-1}(U)$ 和 $f^{-1}(V)$ 都是开集，下面证明 $\bigl( f^{-1}(U), f^{-1}(V) \bigr)$ 是 $X$ 的分离．

1.  由 $U \cap f(X) \neq \emptyset$ 可知 $f^{-1}(U) \neq \emptyset$．同理 $f^{-1}(V) \neq \emptyset$．
1.  若存在 $x \in f^{-1}(U) \cap f^{-1}(V)$，则 $f(x) \in U \cap V \cap f(X) = \emptyset$，矛盾，因此 $f^{-1}(U) \cap f^{-1}(V) = \emptyset$．
1.  由于 $f(X) \subseteq U \cup V$，我们有 $X \subseteq f^{-1}(U \cup V) = f^{-1}(U) \cup f^{-1}(V)$．

以上论述表明 $\bigl( f^{-1}(U), f^{-1}(V) \bigr)$ 是 $X$ 的分离，从而 $X$ 是不连通空间，矛盾．于是 $f(X)$ 连通．
:::

::: proposition
设 $S$ 是拓扑空间，$\{A_\alpha\}$ 是其中的一族连通子集，且具有公共点 $p \in A_\alpha$，则 $\bigcup_\alpha A_\alpha$ 连通．
:::

::: proof
如果 $\bigcup_\alpha A_\alpha$ 不连通，则存在子空间 $\bigcup_\alpha A_\alpha$ 中的非空不相交开集 $U$ 和 $V$ 使得 $\bigcup_\alpha A_\alpha = U \cup V$．点 $p \in \bigcup_\alpha A_\alpha$ 要么属于 $U$ 要么属于 $V$，不妨设 $p \in U$（$p \in V$ 的情形可同理证明）．对每个 $\alpha$ 都有
$$
A_\alpha = A_\alpha \cap (U \cup V)
= (A_\alpha \cap U) \cup (A_\alpha \cap V).
$$
显然 $A_\alpha \cup U$ 和 $A_\alpha \cup V$ 不相交．由于 $p \in A_\alpha$ 且 $p \in U$，$A_\alpha \cap U$ 非空．由 $A_\alpha$ 的连通性， $A_\alpha \cap V$ 必须是空集，因此
$$
V = \left( \bigcup_\alpha A_\alpha \right) \cap V = \bigcup_\alpha (A_\alpha \cap V)
$$
是空集，矛盾．于是 $\bigcup_\alpha A_\alpha$ 连通．
:::

## 连通分量

设 $S$ 是拓扑空间，$x \in S$．根据前一命题，所有包含 $x$ 的连通子集的并 $C_x$ 是连通子集，它是包含 $x$ 的最大连通子集，称之为 $S$ 中包含 $x$ 的**连通分量**（connected component）．

::: proposition
设 $S$ 是拓扑空间，$C_x$ 是其中的一个连通分量，则任意 $S$ 中的连通集 $A$ 要么与 $C_x$ 不相交，要么完全包含在 $C_x$ 内．
:::

::: proof
若 $A$ 与 $C_x$ 相交，则根据前一命题，$A \cup C_x$ 是连通集且包含 $x$．根据连通分量 $C_x$ 的定义，$A \cup C_x \subseteq C_x$，因此 $A \subseteq C_x$．
:::

::: corollary
设 $S$ 是拓扑空间，$x$ 与 $y$ 是其中两点，则 $C_x$ 与 $C_y$ 要么不相交，要么相等．
:::

::: proof
若 $C_x$ 与 $C_y$ 相交，则根据前一命题 $C_x$ 与 $C_y$ 相互包含，因而相等．
:::

这一推论表明 $S$ 的所有连通分量构成对 $S$ 的划分．

不同连通分量的个数是同胚下的不变量．

::: proposition
设 $f : X \to Y$ 是同胚，$X$ 能写成 $n$ 个不同的连通分量的并（$n$ 为正整数），则 $Y$ 也能写成 $n$ 个不同连通分量的并．
:::
::: proof
对 $X$ 的任意连通分量 $C$，$f(C)$ 是连通的（因为 $f$ 连续）．下面证明 $f(C)$ 是 $Y$ 中的连通分量．

任取 $y \in f(C)$，则 $f^{-1}(y) \in C$．记包含 $y$ 的连通分量为 $C_y$，则 $f^{-1}(C_y)$ 是连通分量．由于 $f^{-1}(y) \in f^{-1}(C_y) \cap C$，并且 $f^{-1}(C_y)$ 是连通的、$C$ 是连通分量，我们有 $f^{-1}(C_y) \subseteq C$，进而 $C_y \subseteq f(C)$．这说明任何与 $f(C)$ 相交的连通分量都完全包含在 $f(C)$ 中，从而 $f(C)$ 是一个连通分量．

对 $X$ 的任意不同连通分量 $C_1$ 与 $C_2$，由于 $f$ 是双射，$f(C_1)$ 与 $f(C_2)$ 不相交，因此是不同的连通分量．

综上所述，若 $X$ 能写成 $n$ 个不同的连通分量的并 $C_1 \cup \cdots \cup C_n$，则 $Y = f(X) = f(C_1) \cup \cdots \cup f(C_n)$ 是 $n$ 个不同的连通分量的并．
:::

## 闭包

::: definition
设 $S$ 是拓扑空间，$A$ 是其子空间．$S$ 中所有包含 $A$ 的闭集的交称为 $A$ 在 $S$ 中的**闭包**（closure），记作 $\overline{A}$、$\operatorname{cl}(A)$ 或 $\operatorname{cl}_S(A)$．
:::

显然 $A$ 在 $S$ 中的闭包是包含 $A$ 的最小闭集．需要注意闭包是相对于某个拓扑空间 $S$ 而言的，但一般它都可以从上下文中推断．上述定义是从全局视角定义的闭包，虽然几何含义直观但不适合用来证明．我们还有闭包的局部刻画．

::: proposition 闭包的局部刻画
设 $S$ 是拓扑空间，$A$ 是其子空间．对任意点 $p \in S$，$p$ 在闭包 $\operatorname{cl}_S(A)$ 中当且仅当每个 $p$ 的邻域都与 $A$ 相交．
:::

::: proof
我们证明原命题的逆否命题：$p \notin \operatorname{cl}_S(A)$ 当且仅当存在一个 $p$ 的邻域不与 $A$ 相交．

$(\Rightarrow)$ 若
$$
p \notin \operatorname{cl}_S(A) = \bigcap \{ F \;|\; F\ \text{是}\ S\ \text{中的闭集且}\ F \supseteq A \},
$$
则对某个包含 $A$ 的闭集 $F$ 有 $p \notin F$，亦即 $p \in S - F$，而这是与 $A$ 不相交的邻域．

$(\Leftarrow)$ 若存在 $p$ 的一个邻域 $U$ 不与 $A$ 相交，则 $F := S - U$ 是包含 $A$ 的闭集，它不包含 $p$，因而 $p \notin \operatorname{cl}_S(A)$．
:::

![$p$ 的每个邻域都与 $A$ 相交． =200x](./figures/crash-course-in-point-set-topology/closure-local.jpg#grayscale)

根据欧几里得空间 $\mathbb{R}^n$ 上的直觉，$A$ 的闭包可以通过添加 $A$ 的边界上可被逼近的点得到，我们自然引出了聚点的概念．

::: definition
设 $S$ 是拓扑空间，$p \in S$，$A \subseteq S$．若 $p$ 的每个邻域都包含 $A$ 中不同于 $p$ 的点（注意 $p$ 本身不一定在 $A$ 中），则称 $p$ 是 $A$ 的一个**聚点**（accumulate point）．$A$ 的全体聚点构成的集合记作 $\operatorname{ac}(A)$．
:::

设 $U$ 是 $p$ 的邻域，我们称 $U - \{p\}$ 为 $p$ 的**去心邻域**（deleted neighborhood）．显然 $p$ 是 $A$ 的聚点当且仅当 $p$ 的每个去心邻域都与 $A$ 相交．在一些教材中聚点也称为**极限点**（limit point）．

::: example
取 $\mathbb{R}$ 的子空间 $A = [0, 1) \cup \{2\}$，则 $A$ 在 $S$ 中的闭包是 $[0, 1] \cup \{2\}$，不过 $A$ 的聚点集 $\operatorname{cl}(A) = [0, 1]$．
:::

::: proposition
设 $A$ 是拓扑空间 $S$ 的子空间，则
$$
\operatorname{cl}(A) = A \cup \operatorname{ac}(A).
$$
:::

::: proof
$(\supseteq)$ 根据闭包的定义有 $A \subseteq \operatorname{cl}(A)$．根据闭包的局部刻画有 $\operatorname{ac}(A) \subseteq \operatorname{cl}(A)$．于是 $A \cup \operatorname{ac}(A) \subseteq \operatorname{cl}(A)$．

$(\subseteq)$ 任取 $p \in \operatorname{cl}(A)$．$p$ 要么在 $A$ 中，要么不在 $A$ 中．若 $p \in A$ 则 $p \in A \cup \operatorname{ac}(A)$．若 $p \notin A$，根据闭包的局部刻画，$p$ 的每个邻域都与 $A$ 相交，不妨设有相交点 $q$．由 $p \notin A$ 可知 $q \neq p$．于是 $p$ 的每个去心邻域都与 $A$ 相交于 $q$，从而
$$
p \in \operatorname{ac}(A) \subseteq A \cup \operatorname{ac}(A),
$$
故 $\operatorname{cl}(A) \subseteq A \cup \operatorname{ac}(A)$．
:::

::: proposition
集合 $A$ 是闭集当且仅当 $A = \overline{A}$．
:::

::: proof
$(\Leftarrow)$ 若 $A = \overline{A}$，由于闭包 $\overline{A}$ 是闭集，$A$ 是闭集．

$(\Rightarrow)$ 若 $A$ 是闭集，则 $A$ 本身是包含 $A$ 的闭集，因此 $\overline{A} \subseteq A$．又根据闭包的定义 $A \subseteq \overline{A}$，故 $A = \overline{A}$．
:::

::: proposition
若 $A$ 和 $B$ 都是拓扑空间 $S$ 的子集且 $A \subseteq B$，则 $\overline{A} \subseteq \overline{B}$．
:::

::: proof

显然 $\overline{B} \supseteq B \supseteq A$，即 $\overline{B}$ 是包含 $A$ 的闭集，因此根据 $A$ 的闭包的定义有 $\overline{A} \subseteq \overline{B}$．
:::

::: proposition
若 $A$ 和 $B$ 都是拓扑空间 $S$ 的子集，则

1. $\overline{A \cup B} = \overline{A} \cup \overline{B}$，
2. $\overline{A \cap B} \subseteq \overline{A} \cap \overline{B}$．

:::

::: proof

1. 显然 $\overline{A \cup B}$ 是包含 $A$ 和 $B$ 的闭集，因此 $\overline{A \cup B} \supseteq \overline{A}$ 且 $\overline{A \cup B} \supseteq \overline{B}$，故 $\overline{A \cup B} \supseteq \overline{A} \cup \overline{B}$．此外 $\overline{A} \cup \overline{B}$ 是包含 $A \cup B$ 的闭集，因此 $\overline{A \cup B} \subseteq \overline{A} \cup \overline{B}$．
2. 显然 $\overline{A} \cap \overline{B}$ 是包含 $A \cap B$ 的闭集，因此 $\overline{A \cap B} \subseteq \overline{A} \cap \overline{B}$．

:::

上述性质 2 不成立：考虑 $\mathbb{R}$ 的子集 $A = (a, 0)$ 和 $B = (0, b)$，$\overline{A \cap B} = \emptyset$，$\overline{A} \cap \overline{B} = \{0\}$．

## 收敛性

设 $S$ 是拓扑空间，其中的**序列**（sequence）是从正整数集 $\mathbb{Z}^{+}$ 到 $S$ 的映射，我们将其记作 $\langle x_i \rangle$ 或 $x_1, x_2, x_3, \dots$．

::: definition
设 $\langle x_i \rangle$ 是拓扑空间 $S$ 中的序列，$p \in S$．若对 $p$ 的每个邻域 $U$ 都存在相应的正整数 $N$ 使得当 $i \geq N$ 时有 $x_i \in U$，则称 $\langle x_i \rangle$ **收敛到**（converge to）$p$．此时我们称 $p$ 是序列 $\langle x_i \rangle$ 的**极限**（limit），记 $x_i \to p$ 或 $\lim_{i \to \infty} x_i = p$．
:::

下面的命题说明只有在 Hausdorff 空间中才能良好地讨论**极限**这一概念．

::: proposition Hausdorff 空间中极限的唯一性
设 $S$ 是 Hausdorff 空间，若其中的序列 $\langle x_i \rangle$ 收敛到 $p$ 和 $q$，则 $p = q$．
:::

::: proof
如果 $p \neq q$，根据 Hausdorff 性，存在 $p$ 的邻域 $U$ 和 $q$ 的邻域 $V$ 满足 $U \cap V = \emptyset$．根据序列收敛的定义，对于开集 $U$ 和 $V$，分别存在相应的正整数 $N_p$ 与 $N_q$，使得当 $i \geq N_p$ 时 $x_i \in U$ 且 $i \geq N_q$ 时 $x_i \in V$，因此当 $i \geq \max\{N_p, N_q\}$ 时 $x_i \in U \cap V$，与 $U \cap V$ 矛盾．因此 $p = q$．
:::

::: proposition
设 $S$ 是拓扑空间，$A \subseteq S$．若 $A$ 中的序列 $\langle a_i \rangle$ 收敛到 $p \in S$，则 $p \in \operatorname{cl}_S(A)$．若 $S$ 是第一可数空间，则逆命题也成立：若 $p \in \operatorname{cl}_S(A)$，则存在 $A$ 中的序列 $\langle a_i \rangle$ 收敛到 $p$．
:::

::: proof
$(\Rightarrow)$ 假设 $a_i \to p$，则根据收敛的定义，$p$ 的每个邻域 $U$ 都包含 $\langle a_i \rangle$ 中除前有限项之外的所有点，特别地 $U$ 包含 $A$ 中的点，即与 $A$ 相交．根据闭包的局部刻画，$p \in \operatorname{cl}_S(A)$．

$(\Leftarrow)$ 设 $p \in \operatorname{cl}_S(A)$．由于 $S$ 第一可数，存在 $p$ 处的可数基 $\{U_i\}$，且不妨设
$$
U_1 \supseteq U_2 \supseteq \cdots.
$$
根据闭包的局部刻画，每个 $U_i$ 都与 $A$ 相交，可从中取出一个点 $a_i \in U_i \cap A$．下面证明 $a_i \to p$．若 $U$ 是 $p$ 的任意邻域，则根据邻域基的定义，存在某个 $U_N$ 使得 $p \in U_N \subseteq U$．对所有的 $i \geq N$ 我们有
$$
U_i \subseteq U_N \subseteq U,
$$
因此
$$
a_i \in U_i \in U,
$$
从而说明 $a_i \to p$．
:::

