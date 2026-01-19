---
article: false
order: 6
---

# 可数性

本节我们讨论有限集合与无限集合的区别以及集合的可数性．对于无限集合有时候会有奇特的现象，例如全体偶自然数 $2\mathbb{N}$ 显然是 $\mathbb{N}$ 的子集，看上去 $2\mathbb{N}$ 的集合“元素个数”小于 $\mathbb{N}$，但是双射 $\mathbb{N} \to 2\mathbb{N}$，$n \mapsto 2n$ 又好像在说两者的“元素个数”相同．这意味着我们需要建立一个标准来衡量无限集之间的规模．

设 $X$ 是集合，若 $X$ 是空集或存在 $n \in \mathbb{N}^{\times}$ 以及一个从 $\{ 1, \dots, n \}$ 到 $X$ 的双射，则称 $X$ 是**有限的**（finite）．若不存在这样的双射，则称 $X$ 是**无限的**（infinite）．

直觉上我们自然觉得 $\mathbb{N}$ 是无限集，不过要证明这一点需要一些铺垫．

::: lemma
设 $n \in \mathbb{N}^{\times}$，则任何 $\{ 1, \dots, n \}$ 到自身的单射都是双射．
:::

::: proof
我们对 $n$ 做归纳．当 $n = 1$ 时，函数 $\{ 1 \} \to \{1\}$ 只可能是 $1 \mapsto 1$，自然是双射．

假设所有 $\{1, \dots, n\}$ 到自身的单射都是双射．任取单射 $f : \{ 1, \dots, n + 1 \} \to \{ 1, \dots, n + 1 \}$，令 $k := f(n + 1)$．定义 $g : \{ 1, \dots, n + 1 \} \to \{ 1, \dots, n + 1 \}$ 为
$$
  g(j) := \begin{cases}
    n + 1, & j = k, \\
    k, & j = n + 1, \\
    j, & \text{其他情形}.
  \end{cases}
$$
容易验证
$$
  (g \circ g)(j) = \begin{cases}
    g(n + 1), & j = k, \\
    g(k), & j = n + 1, \\
    g(j), & \text{其他情形}
  \end{cases}
  = \begin{cases}
    k, & j = k, \\
    n + 1, & j = n + 1, \\
    j, & \text{其他情形}
  \end{cases}
  = \mathrm{id}_{\{ 1, \dots, n + 1 \}},
$$
因此 $g$ 自身就是 $g$ 的逆，从而 $g$ 是双射．定义 $h := g \circ f$，它是两个单射的复合，因此也是单射．根据归纳假设，$h|\{1, \dots, n\}$ 是双射，这说明对 $j \in \{ 1, \dots, n \}$ 有 $h(j) \neq n + 1$．又 $h(n + 1) = g(k) = n + 1$，因此 $h$ 是双射，从而 $f = g^{-1} \circ h$ 是双射．
:::

::: proposition
自然数集 $\mathbb{N}$ 是无限集．
:::

::: proof
如果 $\mathbb{N}$ 是有限集，由于 $\mathbb{N}$ 非空，存在 $m \in \mathbb{N}^{\times}$ 和双射 $\varphi : \mathbb{N} \to \{1, \dots, m\}$．令 $\psi := \varphi|\{1, \dots, m\}$，根据前一引理，$\psi$ 是 $\{ 1, \dots, m\}$ 上的双射．由于 $\varphi(m + 1) \in \{1, \dots, m\}$，可取 $n := \psi^{-1}\bigl( \varphi(m + 1) \bigr) \in \{ 1, \dots, m \}$，则
$$
  \varphi(m + 1) = \psi(n) = \varphi(n),
$$
这与 $\varphi$ 是双射矛盾．
:::

::: lemma
设 $m, n \in \mathbb{N}^{\times}$，则存在 $\{1, \dots, m\}$ 到 $\{1, \dots, n\}$ 的双射当且仅当 $m = n$．
:::

::: proof
$(\Leftrightarrow)$ 当 $m = n$ 时显然恒等函数就是双射．

$(\Rightarrow)$ 假设存在双射 $\varphi : \{1, \dots, m\} \to \{1, \dots, n\}$．若 $m < n$，令 $\psi := \varphi|\{1, \dots, n\}$，则 $\psi$ 是 $\{1, \dots, n\}$ 上的单射，从而是双射．对任意 $j \in \{ m + 1, \dots, n \}$，由于 $\varphi(j) \in \{1, \dots, n\}$，可取 $k := \psi^{-1}\bigl( \varphi(j) \bigr) \in \{1, \dots, n\}$，因此
$$
  \varphi(j) = \psi(k) = \varphi(k),
$$
但 $j \neq k$，这与 $\varphi$ 是双射矛盾，因此 $m < n$ 不成立，即 $m \geq n$．如果 $n < m$，则在上述过程中用 $\varphi^{-1}$ 代替 $\varphi$ 可同理证得矛盾，从而 $n \geq m$．于是 $m = n$．
:::

有限集到 $\{1, \dots, n\}$ 的双射可以作为定义集合元素个数的依据．对任意集合 $X$，定义
$$
  \operatorname{Num}(X) := \begin{cases}
    0, & X = \emptyset, \\
    n, & \text{存在}\ n \in \mathbb{N}^{\times}\ \text{和双射}\ \{1, \dots, n\} \to X, \\
    \infty, & X\ \text{是无限集}.
  \end{cases}
$$

> 这里 $\infty$ 可以视作认为引入的 $\mathbb{N}$ 之外的符号．对所有 $n \in \mathbb{N} \cup \{ \infty \}$ 规定 $n + \infty := \infty + n := \infty$．对所有 $n \in \mathbb{N}^{\times} \cup \{ \infty \}$，规定 $n \cdot \infty = \infty \cdot n = \infty$．此外，对所有 $n \in \mathbb{N}$ 规定 $n < \infty$．我们记 $\overline{\mathbb{N}} := \mathbb{N} \cup \{\infty\}$．

如果同时存在两个非零自然数 $m$ 和 $n$ 使得 $X$ 到 $\{1, \dots, m\}$ 与 $\{1, \dots, n\}$ 都存在双射，则根据前一引理可知 $m = n$．这就保证了 $\operatorname{Num}(X)$ 是良定义的．若 $\operatorname{Num}(X) = n$，则存在双射 $f : \{1, \dots, n\} \to X$，即
$$
  X = \{ f(1), \dots, f(n) \}.
$$
我们经常将 $f(i)$ 改写为 $x_i$，则
$$
  X = \{ x_1, \dots, x_n \}.
$$

::: proposition
设 $X_0, \dots, X_m$ 都是有限集，$X := \bigcup_{j = 0}^m X_j$，则 $X$ 也是有限集且
$$
  \operatorname{Num}(X) \leq \sum_{j = 0}^m \operatorname{Num}(X_j).
$$
当 $X_0, \dots, X_m$ 两两不相交时取得等号．
:::

::: proof
$X = \emptyset$ 时命题平凡成立，下设 $X \neq \emptyset$．

对每个 $j \in \{0, \dots, m\}$，定义 $n_j := \operatorname{Num}(X_j)$，且不妨设
$$
  X_j = \left\{ x_j^{(1)}, x_j^{(2)}, \dots, x_j^{(n_j)} \right\}.
$$
任取 $x \in X$，则存在某个 $j$ 使得 $x \in X_j$，亦即存在某对 $i, j$ 使得 $x = x_j^{(i)}$．所有的配对 $(i, j)$ 一共有 $n := n_0 + \cdots + n_m$ 个，因此存在 $X$ 到 $\{1, \dots, n\}$ 的单射．这表明 $X$ 是有集合且 $\operatorname{Num}(X) \leq n$，否则我们能从 $X$ 中取出 $n + 1$ 个不同的元素，其中至少有两个元素映射为同一个数，与单射矛盾．当 $X_0, \dots, X_m$ 两两不相交时，所有的 $x_j^{(i)}$ 都不相同，这 $n$ 个数构成了 $X$，故 $\operatorname{Num}(X) = n$．
:::

## 排列

设 $X$ 是有限集．从 $X$ 到其自身的双射称为 $X$ 上的一个**排列**或**置换**（permutation）．我们将 $X$ 上全体置换构成的集合记作 $\mathsf{S}_X$．

::: proposition
若 $X$ 是 $n$ 元素集合，则 $\operatorname{Num}(\mathsf{S}_X) = n!$．
:::

::: proof
若 $X$ 为空集，即 $n = 0$，则 $X$ 到自身的映射只有空映射，它平凡地成为一个双射，故 $\operatorname{Num}(\mathsf{S}_X) = 1 = n!$．

我们对 $n$ 做归纳．当 $n = 1$ 时，$X$ 到自身的映射只有恒等映射，因此 $\operatorname{Num}(\mathsf{S}_X) = 1 = n!$．假设对所有 $n$ 元素集合 $X$ 都有 $\operatorname{Num}(\mathsf{S}_X) = n!$，则对任意 $n + 1$ 元素集合
$$
  Y := \{ a_1, \dots, a_{n + 1} \},
$$
给定 $j \in \{1, \dots, n + 1\}$，则根据归纳假设，$\mathsf{S}_Y$ 中有 $n!$ 个排列固定将 $a_1$ 映射到 $a_j$，我们将这些排列构成的集合记作 $S_j$．由于 $\mathsf{S}_Y = S_1 \cup \cdots \cup S_{n + 1}$ 且 $S_1, \dots S_{n + 1}$ 两两不相交，我们有
$$
  \operatorname{Num}(\mathsf{S}_Y) = \sum_{i = 1}^{n + 1} \operatorname{Num}(S_i) = (n + 1) \cdot n! = (n + 1)!.
$$
根据归纳原理得证．
:::

## 等势集

设 $X$ 和 $Y$ 是集合．若存在从 $X$ 到 $Y$ 的双射，则称 $X$ 与 $Y$ **等势**（equinumerous 或 equipotent），记作 $X \sim Y$．若 $M$ 是集合的集合，则 $\sim$ 显然是 $M$ 上的等价关系．

对于集合 $X$，若 $X \sim \mathbb{N}$，则称 $X$ 是**可数无穷的**（countably infinite）．若 $X$ 是有限集或可数无穷的，则称 $X$ 是**可数的**（countable）．若 $X$ 不是可数的，则称其为**不可数的**（uncountable）．

显然 $\mathbb{N}$ 是可数无穷的．此外，由于 $2\mathbb{N} \sim \mathbb{N}$，偶自然数集 $2\mathbb{N}$ 也是可数无穷的．

我们说明不可数集存在．

::: theorem
对任意集合 $X$ 都不存在从 $X$ 到 $\mathcal{P}(X)$ 的满射．
:::

::: proof
对任意函数 $\varphi : X \to \mathcal{P}(X)$，定义 $X$ 的子集
$$
  A := \bigl\{ x \in X \;|\; x \notin \varphi(x) \bigr\},
$$
我们证明 $A \notin \operatorname{im}(\varphi)$．如果存在 $y \in X$ 使得 $\varphi(y) = A$，则：

- 若 $y \in A$，则 $y \in \varphi(y)$，与 $A$ 的定义矛盾．
- 若 $y \notin A$，则 $y \notin \varphi(y)$，根据 $A$ 的定义有 $y \in A$，矛盾．

:::

::: corollary
$\mathcal{P}(\mathbb{N})$ 是不可数集．
:::

## 可数集

一般来说我们更喜欢处理可数集，因为我们能将可数集的元素一一列举出来．对于 $X$ 可数无穷的情形，我们经常将其写作
$$
  X = \{ x_1, x_2, x_3, \dots \}.
$$

::: proposition
可数集的子集都可数．
:::

::: proof
设 $X$ 是可数集且 $A \subseteq X$．若 $A$ 是有限集则命题自然成立，于是我们设 $A$ 是无限集．此时 $X$ 是无限集（由于 $A$ 中可取无限个元素，$X$ 不可能是有限集），因而是可数无穷的，亦即存在双射 $\varphi : X \to \mathbb{N}$．此时 $\psi := \varphi|A$ 是 $A$ 到 $\varphi(A)$ 的双射．不失一般性，我们可令 $X = \mathbb{N}$，$A \subseteq \mathbb{N}$ 是无限子集．

递归定义函数 $\alpha : \mathbb{N} \to A$ 为
$$
\begin{aligned}
  \alpha(0) &:= \min(A), \\
  \alpha(n + 1) &:= \min\bigl\{ m \in A \;|\; m > \alpha(n) \}.
\end{aligned}
$$
根据良序原理和 $A$ 为无限集可保证 $\alpha$ 是良定义的．显然对每个 $n \in \mathbb{N}$ 都有
$$
  \alpha(n + 1) > \alpha(n), \quad \text{即}
  \alpha(n + 1) \geq \alpha(n) + 1.
$$
根据该不等式，容易证明对任意 $k \in \mathbb{N}^{\times}$ 都有 $\alpha(n + k) > \alpha(n)$（只需对 $k$ 做归纳）．于是 $\alpha$ 是单射（严格递增函数）．

我们接下来验证 $\alpha$ 是满射．首先用归纳原理证明 $\alpha(m) \geq m$，$m \in \mathbb{N}$．$m = 0$ 时平凡成立．假设 $\alpha(m) \geq m$，则
$$
  \alpha(m + 1) \geq \alpha(m) + 1 \geq m + 1.
$$
于是得证 $\alpha(m) \geq m$．给定 $n_0 \in A$，我们希望找到 $m_0 \in \mathbb{N}$ 使得 $\alpha(m_0) = n_0$．定义
$$
  B := \{ m \in \mathbb{N} \;|\; \alpha(m) \geq n_0 \}.
$$
显然 $n_0 \in B$，因此 $B$ 非空，从而可以取得 $m_0 := \min(B)$．若 $m_0 = 0$，则
$$
  \min(A) = \alpha(0) \geq n_0 \geq \min(A),
$$
故 $\alpha(0) = n_0$．若 $m_0 > 0$，则 $\alpha(m_0 - 1) < n_0 \leq \alpha(m_0)$．根据 $\alpha$ 的定义，
$$
  \alpha(m_0) = \min\bigl\{ m \in A \;|\; \alpha(m_0 - 1) < m \bigr\} \leq n_0,
$$
因此 $\alpha(m_0) = n_0$．
:::

::: proposition
可数集的可数并是可数的．
:::

::: proof
对每个 $n \in \mathbb{N}$，设 $X_n$ 是可数集，我们要证明 $\bigcup_{n = 0}^\infty X_n$ 是可数集．不失一般性我们可以假设所有的 $X_n$ 两两不相交．

> 如果 $X_n$ 之间存在交集，我们可以手动复制 $X_n$ 中的元素（例如将 $x_i$ 映射为 $(x_i, n)$）构成集合 $X_n'$，则 $X_n \sim X_n'$．由于 $X_n'$ 之间两两不相交，如果能证明 $\bigcup_{n = 0}^\infty X_n'$ 是可数集，则根据前一命题 $\bigcup_{n = 0}^\infty X_n$ 作为子集是可数集．

不妨记 $X_n = \{ x_{n, k} \;|\; k \in \mathbb{N} \}$，其中对所有不同的 $k$ 和 $j$ 都有 $x_{n, k} \neq x_{n, j}$．则 $X := \bigcup_{n = 0}^\infty X_n$ 的所有元素可如下列出：

![ =400x](./figures/countable-union.jpg#grayscale)

按照上图中箭头所示的顺序，我们可将 $X$ 中的元素依次排成一列，从而说明 $X \sim \mathbb{N}$．
:::

::: proposition
有限个可数集的积是可数集．
:::

::: proof
只需证明若 $X$ 和 $Y$ 是可数集则 $X \times Y$ 是可数集．有限多集合的情形只需对集合个数做归纳证明．

不妨设 $X$ 和 $Y$ 都是无穷可数的，即 $X = \{ x_k \;|\; k \in \mathbb{N} \}$，$Y = \{ y_k \;|\; k \in \mathbb{N} \}$（有限情形作为子集是直接推论）．定义 $x_{j, k} = (x_j, x_k)$，$j, k \in \mathbb{N}$，则 $X = \{ x_{j, k} \;|\; j, k \in \mathbb{N} \}$．我们可用前一命题中的证明方式证明 $X \sim \mathbb{N}$．
:::

## 无限积

无限多个可数集的积未必是可数集．为此，我们首先需要说明什么是“无限积”．设 $\mathsf{A}$ 是任意指标集，$\{ X_\alpha \;|\; \alpha \in \mathsf{A} \}$ 是一族集合，其**笛卡尔积**（Cartesian product）$\prod_{\alpha \in \mathsf{A}} X_\alpha$ 定义为全体形如 $\varphi : \mathsf{A} \to \bigcup_{\alpha \in \mathsf{A}} X_\alpha$ 的函数构成的集合，且对每个 $\alpha \in \mathsf{A}$ 都有 $\varphi(\alpha) \in X_\alpha$．为书写方便，一般我们会把 $\varphi(\alpha)$ 记作 $x_\alpha$（当然是否选择字母 $x$ 并不重要），并把 $\varphi$ 记作 $\{ x_\alpha : \alpha \in \mathsf{A} \}$．直观地看，这意味着对每个指标 $\alpha$ 我们都从 $X_\alpha$ 中选择出一个 $x_\alpha$．

对于 $\mathsf{A} = \{1, \dots, n\}$ 的特殊情形，$\prod_{\alpha \in \mathsf{A}} X_\alpha$ 可视作 $\prod_{k = 1}^n X_k$．若所有的 $X_\alpha = X$，则记 $X^{\mathsf{A}} := \prod_{\alpha \in \mathsf{A}} X_\alpha$．


::: info 选择公理
若任意一个 $X_\alpha = \emptyset$，则很显然 $\prod_{\alpha \in \mathsf{A}} X_\alpha = \emptyset$．然而在集合论中，即使所有的 $X_\alpha$ 都不为空，我们也没办法证明 $\prod_{\alpha \in \mathsf{A}} X_\alpha \neq \emptyset$．换言之，对于无限积，我们无法证明存在这样一个“选择函数” $\varphi : \mathsf{A} \to \bigcup_{\alpha \in \mathsf{A}} A_\alpha$ 用以从每个 $X_\alpha$ 中选择出一个元素 $\varphi(\alpha)$．为此我们引入**选择公理**（axiom of choice），它可以如下描述：对任意一族集合 $\{ X_\alpha \;|\; \alpha \in \mathsf{A} \}$ 都有
$$
  \prod_{\alpha \in \mathsf{A}} X_\alpha \neq \emptyset
  \iff
  ( \forall \alpha \in \mathsf{A} : X_\alpha \neq \emptyset ).
$$
这一描述看上去是很自然的，然而选择公理还有其他等价形式和相应的推论，其中一些则是反直觉的．由于这些话题需要高阶的数学知识，这里不再深入．早期数学家对选择公理持谨慎态度的一大原因就在于它只声明了选择函数的存在性，而现实中的一些问题无法显式地构造出一个选择函数．现在数学家广泛接受了选择公理，本文也承认选择公理．
:::

明确了无限积的意义，我们就能说明有限集的无限积可能不是可数的．

::: proposition
集合 $\{ 0, 1 \}^{\mathbb{N}}$ 不可数．
:::

::: proof
令 $A \in \mathcal{P}(\mathbb{N})$，其特征函数 $\chi_A$ 是 $\{0, 1\}^{\mathbb{N}}$ 中的元素．显然函数
$$
  \psi : \mathcal{P}(\mathbb{N}) \to \{0, 1\}^{\mathbb{N}}, \quad
  A \to \chi_A
$$
是单射．对任意 $\varphi \in \{0, 1\}^{\mathbb{N}}$，令 $A(\varphi) := \varphi^{-1}(1) \in \mathcal{P}(\mathbb{N})$，则 $\chi_{A(\varphi)} = \varphi$，亦即 $\psi(A(\varphi)) = \varphi$，故 $\psi$ 是满射．于是 $\mathcal{P}(\mathbb{N}) \sim \{0, 1\}^{\mathbb{N}}$ 是不可数集．
:::
