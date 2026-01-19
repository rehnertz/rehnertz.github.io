---
article: false
order: 1
---

# 可测空间

> 我们用 $\mathfrak{P}(A)$ 表示集合 $A$ 的幂集，也就是全体 $A$ 的子集构成的集合．
> 对任意集合 $X$ 和 $Y$，$Y^X$ 表示全体从 $X$ 到 $Y$ 的函数构成的集合．特别地 $Y^\mathbb{N}$ 可以表示 $Y$ 上的序列构成的集合．

在一元微积分中，我们可以用定积分来定义函数下方图像的面积．这种方式需要用函数来描述图像，不具有一般性．在本节中，我们希望对一般区域定义其测度．更具体地说，我们希望找到一个定义域 $\mathcal{A} \subseteq \mathfrak{P}(\mathbb{R}^n)$ 以及一个映射 $\mu : \mathcal{A} \to [0, \infty)$ 来为每个 $A \in \mathcal{A}$ 赋予一个测度值 $\mu(A)$．这个 $\mu$ 需要满足一定性质，例如两个不相交区域的并的测度应当等于区域各自测度之和，又如区域的测度应当与其所处的绝对位置无关．在本章的最后我们会发现测度可能无法定义在所有集合上，即 $\mathcal{A} \neq \mathfrak{P}(\mathbb{R}^n)$，因此我们从最开始就用一个抽象集合 $\mathcal{A}$ 表示测度的定义域．

在本节中，我们约定

- $X$、$X_1$ 和 $X_2$ 都是非空集合．

## σ 代数

我们首先从测度的定义域所应满足的性质开始谈起．若 $\mathfrak{P}(\mathbb{R}^n)$ 的子集 $\mathcal{A}$ 满足

$\mathrm{\ \ (i)}$ $X \in \mathcal{A}$，<br />
$\mathrm{\ (ii)}$ $A \in \mathcal{A} \implies A^c \in \mathcal{A}$，<br />
$\mathrm{(iii)}$ $(A_j) \in \mathcal{A}^\mathbb{N} \implies \bigcup_{j \in \mathbb{N}} A_j \in \mathcal{A}$，

则称 $\mathcal{A}$ 为 $\boldsymbol{X}$ **上的** $\boldsymbol{\sigma}$ **代数**（$\sigma$-algebra on $X$）．

若 $\mathcal{A}$ 是 $X$ 上的 $\sigma$ 代数，则称 $(X, \mathcal{A})$ 为**可测空间**（measurable space），而 $\mathcal{A}$ 中的元素称为 $\boldsymbol{\mathcal{A}}$ **可测集**（$\mathcal{A}$-measurable set）．

::: remark
设 $\mathcal{A}$ 是 $X$ 上的 $\sigma$ 代数，$(A_j) \in \mathcal{A}^\mathbb{N}$，$m \in \mathbb{N}$，则以下集合都属于 $\mathcal{A}$：
$$
\begin{aligned}
  \emptyset, && A_0 \setminus A_1, &&
  \bigcup_{j = 0}^m A_j, && \bigcap_{j = 0}^m A_j, &&
  \bigcap_{j \in \mathbb{N}} A_j.
\end{aligned}
$$
:::

::: proof
令
$$
  B_k := \begin{cases}
    A_k, & k \leq m, \\
    A_m, & k > m,
  \end{cases}
$$
则 $(B_k) \in \mathcal{A}^\mathbb{N}$，且
$$
  \bigcup_{k \in \mathbb{N}} B_k = \bigcup_{j = 0}^m A_j \in \mathcal{A}.
$$
其他的命题可由集合运算的 de Morgan 律得到．
:::

若集合族 $\mathcal{S} \subseteq \mathfrak{P}(X)$ 满足
$$
  A \in \mathcal{S} \implies A^c \in \mathcal{S} \tag{1}
$$
且对每一族有限多的集合 $A_0, \dots, A_m$ 而言，$\bigcup_{j = 0}^m A_j$ 都属于 $\mathcal{S}$，则称 $\mathcal{S}$ **在有限多集合运算下封闭**（closed under finite set operations）．若 $\mathcal{S}$ 满足 $(1)$ 且对每个序列 $(A_j) \in \mathcal{S}^\mathbb{N}$ 而言，$\bigcup_{j = 0}^\infty A_j$ 都属于 $\mathcal{S}$，则称 $\mathcal{S}$ **在可数多集合运算下封闭**（closed under countable set operations）．根据 de Morgan 律，$\bigcap_{j = 0}^m A_j$（有限情形）和 $\bigcap_{j = 0}^\infty A_j$（可数情形）也分别属于 $\mathcal{S}$．

若 $\mathcal{S} \subseteq \mathfrak{P}(X)$ 满足

$\mathrm{\ \ (i)}$ $X \in \mathcal{S}$，<br />
$\mathrm{\ (ii)}$ $A \in \mathcal{S} \implies A^c \in \mathcal{S}$，<br />
$\mathrm{(iii)}$ $A, B \in \mathcal{S} \implies A \cup B \in \mathcal{S}$，

则称 $\mathcal{S}$ 为 $\boldsymbol{X}$ **上的代数**（algebra over $X$）．

;;; remarks
设 $\mathcal{S} \subseteq \mathfrak{P}(X)$ 包含 $X$．

$\mathrm{(a)}$ $\mathcal{S}$ 是代数当且仅当 $\mathcal{S}$ 在有限多集合运算下封闭．

$\mathrm{(b)}$ $\mathcal{S}$ 是 $\sigma$ 代数当且仅当 $\mathcal{S}$ 在可数多集合运算下封闭，此时 $\mathcal{S}$ 也是代数．

$\mathrm{(c)}$ 设 $\mathcal{S}$ 是代数且对每个互不相交的序列 $(B_j) \in \mathcal{S}^\mathbb{N}$ 都有 $\bigcup_{j \in \mathbb{N}} B_j \in \mathcal{S}$，则 $\mathcal{S}$ 是 $\sigma$ 代数．

::: proof
设 $(A_k) \in \mathcal{S}^\mathbb{N}$，递归定义
$$
\begin{aligned}
  B_0 &:= A_0, \\
  B_{j + 1} &:= A_{j + 1} \setminus \bigcup_{k = 0}^j A_k, \quad j \in \mathbb{N},
\end{aligned}
$$
则 $(B_j)$ 是互不相交序列且 $\bigcup_k A_k = \bigcup_j B_j$．根据假设，$\bigcup_j B_j \in \mathcal{S}$．
:::

;;;

;;; examples

$\mathrm{(a)}$ $\{\emptyset, X\}$ 和 $\mathfrak{P}(X)$ 都是 $\sigma$ 代数．

$\mathrm{(b)}$ $\{A \subseteq X \;|\; A\ \text{或}\ A^c\ \text{是可数集} \}$ 是 $\sigma$ 代数．

$\mathrm{(c)}$ $\{A \subseteq X \;|\; A\ \text{或}\ A^c\ \text{是有限集} \}$ 是代数，且它是 $\sigma$ 代数当且仅当 $X$ 是有限集．

$\mathrm{(d)}$ 设 $\mathsf{A}$ 是非空指标集，对每个 $\alpha \in \mathsf{A}$ 都有一个 $X$ 上的 $\sigma$ 代数 $\mathcal{A}_\alpha$，则 $\bigcap_{\alpha \in \mathsf{A}} \mathcal{A}_\alpha$ 是 $X$ 上的 $\sigma$ 代数．

$\mathrm{(e)}$ 设 $Y$ 是非空集合且 $f \in Y^X$，并分别令 $\mathcal{A}$ 和 $\mathcal{B}$ 为 $X$ 和 $Y$ 上的 $\sigma$ 代数，则
$$
  f^{-1}(\mathcal{B}) := \{ f^{-1}(B) \;|\; B \in \mathcal{B} \}
$$
和
$$
  f_*(\mathcal{A}) := \{ B \subseteq Y \;|\; f^{-1}(B) \in \mathcal{A} \}
$$
分别是 $X$ 和 $Y$ 上的 $\sigma$ 代数．我们称 $f^{-1}(\mathcal{B})$ 是 $\boldsymbol{\mathcal{B}}$ **在** $\boldsymbol{f}$ **下的逆像**（inverse image of $\mathcal{B}$ under $f$），称 $f_*(\mathcal{A})$ 为 $\boldsymbol{\mathcal{A}}$ **在** $\boldsymbol{f}$ **下的像**或**前推**（image or push-forward of $\mathcal{A}$ under $f$）．
;;;

::: proof
我们只证明 $\mathrm{(e)}$，其他都很容易自行验证．

显然 $Y \in f_*(\mathcal{A})$．设 $B \in f_*(\mathcal{A})$，则 $f^{-1}(B) \in \mathcal{A}$．任意函数 $f$ 都具有性质
$$
  f^{-1}(B^c) = \bigl[ f^{-1}(B) \bigr]^c
$$
和
$$
  f^{-1}\left( \bigcup_j B_j \right) = \bigcup_j f^{-1}(B_j),
$$
这说明 $f^{-1}(\mathcal{B})$ 是 $\sigma$ 代数．此外，根据前一性质可知 $B^c \in f_*(\mathcal{A})$，根据后一性质可知 $\bigcup_j B_j \in f_*(\mathcal{A})$ 若 $(B_j) \in f_*(\mathcal{A})$．因此 $f_*(\mathcal{A})$ 是 $\sigma$ 代数．
:::

## Borel σ 代数

设 $\mathcal{S}$ 是 $\mathfrak{P}(X)$ 的非空子集，定义
$$
  \mathcal{A}_\sigma(\mathcal{S}) := \bigcap\{ \mathcal{A} \subseteq \mathfrak{P}(X) \;|\; \mathcal{A} \supseteq \mathcal{S}, \mathcal{A}\ \text{是}\ X\ \text{上的}\ \sigma\ \text{代数} \}
$$
为 $\boldsymbol{\mathcal{S}}$ **生成的** $\boldsymbol{\sigma}$ **代数**（$\sigma$-algebra generated by $\mathcal{S}$），称 $\mathcal{S}$ 为 $\mathcal{A}_\sigma(\mathcal{S})$ 的**生成集**（generating set）．

;;; remarks
$\mathrm{(a)}$ $\mathcal{A}_\sigma(\mathcal{S})$ 是良定义的，它是包含 $\mathcal{S}$ 的最小 $\sigma$ 代数．

$\mathrm{(b)}$ 若 $\mathcal{S}$ 是 $\sigma$ 代数，则 $\mathcal{A}_\sigma(\mathcal{S}) = \mathcal{S}$．

$\mathrm{(c)}$ 若 $\mathcal{S} \subseteq \mathcal{T}$，则 $\mathcal{A}_\sigma(\mathcal{S}) \subseteq \mathcal{A}_\sigma(\mathcal{T})$．

$\mathrm{(d)}$ 若 $\mathcal{S} = \{A\}$，则 $\mathcal{A}_\sigma(\mathcal{S}) = \{ \emptyset, A, A^c, X \}$．
;;;

设 $X := (X, \mathcal{T})$ 为拓扑空间．由于 $\mathcal{T}$ 非空，它可以生成一个 $\sigma$ 代数，称为 $X$ 的 **Borel** $\boldsymbol{\sigma}$ **代数**（Borel $\sigma$-algebra of $X$），记作 $\mathcal{B}(X)$，其中的元素称为 **Borel 集**（Borel set）．我们特别地记 $\mathcal{B}^n := \mathcal{B}(\mathbb{R}^n)$．

设 $A$ 为 $X$ 的子集．若存在一列开集 $(O_j)$ 使得 $A = \bigcap_{j \in \mathbb{N}} O_j$——即 $\mathcal{A}$ 是可数个开集的交，则称 $A$ 为 $\boldsymbol{G_\delta}$ **型集**（$G_\delta$-set）．若存在一列闭集 $(F_j)$ 使得 $A = \bigcup_{j \in \mathbb{N}} F_j$——即 $\mathcal{A}$ 是可数个闭集的并，则称 $\mathcal{A}$ 为 $\boldsymbol{F_\sigma}$ **型集**（$F_\sigma$-set）．

::: info 记号的含义
$F$ 表示法语单词 fermé，意为“闭”，而下标中的 $\sigma$ 表示法语单词 somme，意为“和”（sum）——集合的“和”就是“并”．$G$ 表示德语单词 Gebiet，意为“区域”，是从前表示开集的单词（现在一般用 Umgebung，本义为“周围”，在数学中表示“邻域”），而下标中的 $\delta$ 表示德语单词 Durchschnitt，这里表示集合的“交”．
:::

;;; examples

$\mathrm{(a)}$ 设 $\mathcal{F} := \{ A \subseteq X \;|\; A\ \text{为闭集} \}$，则 $\mathcal{B}(X) = \mathcal{A}_\sigma(\mathcal{F})$．

$\mathrm{(b)}$ 每个 $G_\delta$ 型集和 $F_\sigma$ 型集都是 Borel 集．

$\mathrm{(c)}$ 每个闭区间 $I$ 都是 $F_\sigma$ 型集和 $G_\delta$ 型集．

::: proof
先考虑 $I = [a, b]$ 的情形，其中 $-\infty < a \leq b < \infty$．显然 $I$ 是 $F_\sigma$ 型集．由于
$$
  [a, b] = \bigcap_{k \in \mathbb{N}^\times} \left( a - \frac{1}{k}, b + \frac{1}{k} \right),
$$
$I$ 也是 $G_\delta$ 型集．对于 $I = [a, \infty)$ 和 $I = (-\infty, a]$ 的情形可类似证明．$I = \mathbb{R}$ 的情形是显然的．
:::

$\mathrm{(d)}$ 设 $Y \subseteq X$，$Y \neq \emptyset$ 且 $Y \neq X$，并令 $\mathcal{T} := \{\emptyset, X\}$ 为 $X$ 上的平凡拓扑，则在 $(X, \mathcal{T})$ 中 $Y$ 既不是 $F_\sigma$ 型集也不是 $G_\delta$ 型集．

;;;


## 第二可数性

Borel 集由开集生成，其性质自然与拓扑空间的性质密切相关．本小节以及后文有关积拓扑的小节包含一些点集拓扑的知识，我们将其一并列在文中，读者可根据需要选读．

> 在度量空间 $(X, d)$ 中，对任意点 $x \in X$ 和 $r > 0$，我们记球邻域 $\mathbb{B}(x, r) := \{ y \;|\; d(x, y) < r \}$．

设 $(X, \mathcal{T})$ 为拓扑空间，$\mathcal{M} \subseteq \mathcal{T}$ 是开集族．若对每个开集 $O \in \mathcal{T}$ 而言，都存在 $\mathcal{M}' \subseteq \mathcal{M}$ 使得 $O = \bigcup \{ M \subseteq X \;|\; M \in \mathcal{M}' \}$——即每个开集都是 $\mathcal{M}$ 中的部分元素的并，则称 $\mathcal{M}$ 是 $\mathcal{T}$ 的一个**基**（basis）．若 $(X, \mathcal{T})$ 有可数的基，则称 $(X, \mathcal{T})$ 是**第二可数的**（second countable）或满足**第二可数性公理**（the second countability axiom）．若 $X$ 的每个每个开覆盖都存在可数的子覆盖，则称 $(X, \mathcal{T})$ 是 **Lindelöf 空间**（Lindelöf space）．显然紧致空间是 Lindelöf 空间．

> 本文约定点 $x \in X$ 的邻域 $U$ 是任意包含 $x$ 的集合，且满足：存在开集 $O$ 使得 $x \in O \subseteq U$．因此邻域未必是开集，但不失一般性可将其取为一个开集．$x$ 的所有邻域构成的集合族记作 $\mathcal{U}(x)$．


::: remark
$\mathcal{M} \subseteq \mathcal{T}$ 是 $\mathcal{T}$ 的基当且仅当对每个点 $x \in X$ 以及 $x$ 的每个邻域 $U$ 而言，都存在 $M \in \mathcal{M}$ 使得 $x \in M \subseteq U$．
:::

::: proof
$(\Rightarrow)$ 设 $\mathcal{M} \subseteq \mathcal{T}$ 是 $\mathcal{T}$ 的基．任取 $x \in X$ 以及 $U \in \mathcal{U}(x)$．根据邻域的定义，存在 $O \in \mathcal{T}$ 使得 $x \in O \subseteq U$．此外，根据基的定义，存在 $\mathcal{M}' \subseteq \mathcal{M}$ 使得 $O = \bigcup\{ M \subseteq X \;|\; M \in \mathcal{M}' \}$．于是我们能找到一个 $M \in \mathcal{M}' \subseteq \mathcal{M}$ 使得 $x \in M \subseteq O \subseteq U$．

$(\Leftarrow)$ 假设对每个点 $x \in X$ 以及 $x$ 的每个邻域 $U$ 而言，都存在 $M \in \mathcal{M}$ 使得 $x \in M \subseteq U$．任取 $O \in \mathcal{T}$，对每个 $x \in O$ 而言，$O$ 都是 $x$ 的邻域，因此根据假设存在相应的 $M_x \in \mathcal{M}$ 使得 $x \in M_x \subseteq O$．于是
$$
  O = \bigcup_{x \in \mathcal{O}} \{x\} \subseteq \bigcup_{x \in O} M_x \subseteq O,
$$
这说明 $O = \bigcup_{x \in O} M_x$．根据 $O$ 的任意性可知 $\mathcal{M}$ 是 $\mathcal{T}$ 的基．
:::

::: lemma[lem:dense-metric-space-basis]
设 $X$ 是度量空间，$A \subseteq X$ 在 $X$ 中稠密，并令 $\mathcal{M} := \{ \mathbb{B}(a, r) \;|\; a \in A, r \in \mathbb{Q}^+ \}$，则每个 $X$ 中的开集都能写成 $\mathcal{M}$ 中元素的并．
:::

::: proof
设 $O$ 是 $X$ 中的开集，则根据度量空间上开集的定义，对每个 $x \in O$ 而言都存在相应的 $\varepsilon_x > 0$ 使得 $\mathbb{B}(x, \varepsilon_x) \subseteq O$．由于 $A$ 在 $X$ 中稠密，存在相应的 $a_x \in A$ 使得 $d(x, a_x) < \varepsilon_x / 4$．又 $\mathbb{Q}$ 在 $\mathbb{R}$ 中稠密，存在相应的 $r_x \in \mathbb{Q}^+$ 使得 $r_x \in (\varepsilon_x / 4, \varepsilon_x / 2)$．由度量的三角不等式可得
$$
  x \in \mathbb{B}(a_x, r_x) \subseteq \mathbb{B}(x, \varepsilon_x) \subseteq O,
$$
于是 $O = \bigcup_{x \in O} \mathbb{B}(a_x, r_x)$．
:::

::: proposition[prop:metric-space-T2-equivs]
设 $X$ 是度量空间，则一下命题两两相互等价：

$\ \ \mathrm{(i)}$ $X$ 满足第二可数性公理．<br />
$\ \mathrm{(ii)}$ $X$ 是 Lindelöf 空间．<br />
$\mathrm{(iii)}$ $X$ 是可分空间．
:::

::: proof
$\mathrm{(i) \Rightarrow (ii)}$ 设 $\mathcal{M}$ 是可数基，$\{ O_\alpha \;|\; \alpha \in \mathsf{A} \}$ 是 $X$ 的一个开覆盖． 根据假设 $\mathrm{(i)}$，对每个指标 $\alpha \in \mathsf{A}$ 都存在 $\mathcal{M}$ 中的开集列 $(U_{\alpha, j})_{j \in \mathbb{N}}$ 使得 $O_\alpha = \bigcup_{j \in \mathbb{N}} U_{\alpha, j}$．令 $\mathcal{M}' := \{ U_{\alpha, j} \;|\; \alpha \in \mathsf{A}, j \in \mathbb{N} \}$，则 $\mathcal{M}'$ 覆盖了 $X$，且显然它是可数集．我们不妨将其重新编号，记作 $\mathcal{M}' = \{ M_j \;|\; j \in \mathbb{N} \}$．根据 $\mathcal{M}'$ 的构造，对每个 $j \in \mathbb{N}$ 而言都存在相应的 $\alpha_j \in \mathsf{A}$ 使得 $M_j \subseteq O_{\alpha_j}$，因此 $\{ O_{\alpha_j} \;|\; j \in \mathbb{N} \}$ 是 $\{ O_\alpha \;|\; \alpha \in \mathsf{A} \}$ 的可数子覆盖．

$\mathrm{(ii) \Rightarrow (iii)}$ 对每个 $n \in \mathbb{N}^\times$，$\mathcal{U}_n := \{ \mathbb{B}(x, 1/n) \;|\; x \in X \}$ 都是 $X$ 的开覆盖．根据假设 $\mathrm{(ii)}$，对每个 $n \in \mathbb{N}$ 都存在相应的点列 $(x_{n, k})_{k \in \mathbb{N}}$ 使得 $\mathcal{V}_n := \{ \mathbb{B}(x_{n, k}, 1/n) \;|\; k \in \mathbb{N} \}$ 是 $\mathcal{U}_n$ 的子覆盖．令 $D := \{ x_{n, k} \;|\; n \in \mathbb{N}^\times, k \in \mathbb{N} \}$，它是可数集．任取 $x \in X$，$\varepsilon > 0$ 和 $n > 1 / \varepsilon$，由于 $\mathcal{V}_n$ 覆盖 $X$，存在 $x_{n, k} \in D$ 使得 $x \in \mathbb{B}(x_{n, k}, 1 / n)$，这说明 $D$ 在 $X$ 中稠密．

$\mathrm{(iii) \Rightarrow (i)}$ 由[前一引理](#lem:dense-metric-space-basis)可知可分空间是第二可数的．
:::

::: corollary[cor:second-countability-on-Rn]
$\ \mathrm{(i)}$ 设 $X$ 是可分度量空间，$A$ 是可数集且在 $X$ 中稠密，则
$$
  \mathcal{B}(X) = \mathcal{A}_\sigma(\{ \mathbb{B}(a, r) \;|\; a \in A, r \in \mathbb{Q}^r \}).
$$

$\mathrm{(ii)}$ 设 $X \subseteq \mathbb{R}^n$ 非空，则度量空间 $X$ 有可数基．
:::

::: proof
$\mathrm{(i)}$ 定义 $\mathcal{S} := \{ \mathbb{B}(a, r) \;|\; a \in A, r \in \mathbb{Q}^+ \}$，并记 $X$ 的拓扑为 $\mathcal{T}$．[引理](#lem:dense-metric-space-basis)表明 $\mathcal{T} \subseteq \mathcal{A}_\sigma(\mathcal{S})$，因此
$$
  \mathcal{B}(X) = \mathcal{A}_\sigma(\mathcal{T}) = \subseteq \mathcal{A}_\sigma(\mathcal{A}_\sigma(\mathcal{S})) = \mathcal{A}_\sigma(\mathcal{S}).
$$
根据 $\mathcal{S} \subseteq \mathcal{T}$ 可知 $\mathcal{A}_\sigma(\mathcal{S}) \subseteq \mathcal{B}(X)$，因此 $\mathcal{B}(X) = \mathcal{A}_\sigma(\mathcal{S})$．

$\mathrm{(ii)}$ 由于 $\mathbb{Q}^n$ 在 $\mathbb{R}^n$ 中稠密，容易验证 $X$ 是可分空间，从而根据[前一命题](#prop:metric-space-T2-equivs)可知 $X$ 满足第二可数性公理．
:::


对于一般的拓扑空间我们有以下推论．

::: corollary
设 $X$ 是拓扑空间且具有可数基，则 $X$ 是可分空间且是 Lindelöf 空间．
:::

::: proof
$\mathrm{(i)}$ 设 $\{B_j \;|\; j \in \mathbb{N} \}$ 是 $X$ 的可数基．对每个 $j \in \mathbb{N}$，我们选出一个 $b_j \in B_j$，并令 $D := \{ b_j \;|\; j \in \mathbb{N} \}$．显然 $D$ 是可数集．任取 $x \in X$ 以及 $x$ 的开邻域 $U$，根据基的定义，存在 $I \subseteq \mathbb{N}$ 使得 $U = \bigcup_{i \in I} B_i$，因此 $U \cap D \neq \emptyset$，亦即 $D$ 在 $X$ 中稠密．

$\mathrm{(ii)}$ 在[命题](#prop:metric-space-T2-equivs)对 $\mathrm{(i) \Rightarrow (ii)}$ 的证明中并没有使用到 $X$ 上的度量，可以将其替换为一般拓扑空间，从而得证．
:::

## 用区间生成 Borel σ 代数

我们给出 $\mathbb{R}^n$ 上的**自然序**（natural ordering）．给定 $a, b \in \mathbb{R}^n$，关系 $a \leq b$ 成立当且仅当对 $1 \leq k \leq n$ 都有 $a_k \leq b_k$．

设 $J$ 是 $\mathbb{R}^n$ 的子集，若存在（普通的）区间 $J_k \subseteq \mathbb{R}$（$1 \leq k \leq n$）使得 $J = \prod_{k = 1}^n J_k$，则称 $J$ 为 $\mathbb{R}^n$ 中的**区间**（interval）．设 $a, b \in \mathbb{R}^n$ 且 $a \leq b$，规定记号
$$
\begin{aligned}
  (a, b) &:= \prod_{k = 1}^n (a_k, b_k), &
  [a, b] &:= \prod_{k = 1}^n [a_k, b_k], \\
  (a, b] &:= \prod_{k = 1}^n (a_k, b_k], &
  [a, b) &:= \prod_{k = 1}^n [a_k, b_k).
\end{aligned}
$$
若 $a \leq b$ 不成立，则规定
$$
  (a, b) := [a, b] := (a, b] := [a, b) := \emptyset.
$$
我们称 $(a, b)$ 为 $\mathbb{R}^n$ 中的**开区间**（open interval），称 $[a, b]$ 为 $\mathbb{R}^n$ 中的**闭区间**（closed interval）．显然开区间是开集，闭区间是闭集．我们将 $\mathbb{R}^n$ 中的所有开区间构成的集合记作 $\mathbb{J}(n)$．


设 $Y$ 是集合，$E$ 是有关 $y \in Y$ 的性质．当 $Y$ 可通过上下文确定时，我们规定记号
$$
  [E] := [E(y)] := \{ y \in Y \;|\; E(y)\ \text{为真} \}.
$$
例如，对于 $k \in \{1, \dots, n\}$ 和 $\alpha \in \mathbb{R}$，集合 $[x_k \geq \alpha]$ 表示 $\mathbb{R}^n$ 中的闭半平面
$$
  H_k(\alpha) := \{ x \in \mathbb{R}^n \;|\; x_k \geq \alpha \}.
$$
若 $f \in Y^X$，规定
$$
  [E(f)] := \{ x \in X \;|\; E\bigl( f(x) \bigr)\ \text{为真} \}.
$$
例如，对于 $f \in \mathbb{R}^X$，集合 $[f > 0] = \{ x \in X \;|\; f(x) > 0 \}$．

一下定理表明 $\mathbb{R}^n$ 上的 Borel $\sigma$ 代数可仅由有理坐标确定的半平面生成．

::: theorem[thm:borel-sigma-algebra-over-Rn]
定义
$$
\begin{aligned}
  \mathcal{A}_{\mathbb{Q}} &:= \mathcal{A}_\sigma(\{ (a, b) \;|\; a, b \in \mathbb{Q}^n \}), \\
  \mathcal{A}_0 &:= \mathcal{A}_\sigma(\{ H_k(\alpha) \;|\; 1 \leq k \leq n, \alpha \in \mathbb{Q} \}), \\
  \mathcal{A}_0 &:= \mathcal{A}_\sigma(\{ H_k(\alpha) \;|\; 1 \leq k \leq n, \alpha \in \mathbb{R} \}), \\
\end{aligned}
$$
则
$$
  \mathcal{B}^n = \mathcal{A}_\sigma\bigl( \mathbb{J}(n) \bigr) = \mathcal{A}_{\mathbb{Q}} = \mathcal{A}_0 = \mathcal{A}_1.
$$
:::

::: proof
由于闭半平面都属于 $\mathcal{B}^n$，显然有
$$
  \mathcal{A}_0 \subseteq \mathcal{A}_1 \subseteq \mathcal{B}^n.
$$
取 $a, b \in \mathbb{R}^n$ 使得 $a \leq b$．对 $k \in \{1, \dots, n\}$，我们有
$$
  [x_k < b_k] = [x_k \geq b_k]^c = H_k(b_k)^c \in \mathcal{A}_1
$$
以及
$$
  [x_k > a_k] = \bigcup_{j = 1}^\infty [x_k \geq a_k + 1/j] \in \mathcal{A}_1.
$$
于是
$$
  (a, b) = \prod_{k = 1}^n (a_k, b_k) = \bigcap_{k = 1}^n ([x_k < b_k] \cap [x_k > a_k]) \in \mathcal{A}_1.
$$
对 $a, b \in \mathbb{Q}^n$，上述论证同样表明 $(a, b) \in \mathcal{A}_0$．于是
$$
  \mathcal{A}_{\mathbb{Q}} \subseteq \mathcal{A}_\sigma\bigl( \mathbb{J}(n) \bigr) \subseteq \mathcal{A}_1 \subseteq \mathcal{B}^n
$$
并且
$$
  \mathcal{A}_{\mathbb{Q}} \subseteq \mathcal{A}_0 \subseteq \mathcal{B}^n.
$$
下面只需证明 $\mathcal{B}^n \subseteq \mathcal{A}_{\mathbb{Q}}$．对于 $c \in \mathbb{Q}^n$ 和 $r \in \mathbb{Q}^+$，开立方体 $\mathbb{B}_\infty^n(c, r) = \prod_{k = 1}^n (c_k - r, c_k + r)$ 属于 $\mathcal{A}_{\mathbb{Q}}$．根据[推论](#cor:second-countability-on-Rn)，
$$
  \mathcal{B}^n = \mathcal{A}_\sigma(\{ \mathbb{B}_\infty^n(c, r) \;|\; c \in \mathbb{Q}^n, r \in \mathbb{Q}^+ \}) \subseteq \mathcal{A}_{\mathbb{Q}},
$$
故完成了证明．
:::

## 拓扑空间的基

集合 $X$ 上的拓扑可通过给定一个基来唯一确定，但并非所有集合族 $\mathcal{M} \subseteq \mathfrak{P}(X)$ 都是某个拓扑的基．以下定理可以判定集合族何时能确定一个拓扑．

::: theorem[thm:topology-basis-criterion]
设 $\mathcal{M} = \{ M_\alpha \subseteq X \;|\; \alpha \in \mathsf{A} \}$ 且 $\bigcup_{\alpha \in \mathsf{A}} M_\alpha = X$，则 $\mathcal{M}$ 是 $X$ 上的某个拓扑的基当且仅当对每个 $(\alpha, \beta) \in \mathsf{A} \times \mathsf{A}$ 和 $x \in M_\alpha \cap M_\beta$ 都存在相应的 $\gamma \in \mathsf{A}$ 使得 $x \in M_\gamma \subseteq M_\alpha \cap M_\beta$．此时我们称这个由 $\mathcal{M}$ 确定的拓扑为 $\boldsymbol{\mathcal{M}}$ **生成的拓扑**（topology generated by $\mathcal{M}$）．
:::

::: proof
$(\Rightarrow)$ 设 $\mathcal{T}$ 是 $X$ 是上的拓扑且 $\mathcal{M} = \{ M_\alpha \subseteq X \;|\; \alpha \in \mathsf{A} \}$ 是 $\mathcal{T}$ 的一个基．任取 $\alpha, \beta \in \mathsf{A}$ 和 $x \in M_\alpha \cap M_\beta$，则 $M_\alpha \cap M_\beta$ 是 $x$ 的开邻域．根据基的定义，$M_\alpha \cap M_\beta$ 可写成若干 $\mathcal{M}$ 中元素的并，从而存在某个 $\gamma \in \mathsf{A}$ 使得 $x \in M_\gamma \subseteq M_\alpha \cap M_\beta$．

$(\Leftarrow)$ 设 $\mathcal{M}$ 是满足定理描述中的性质的集合族，并令 $\mathcal{T}(M) := \{ \bigcup_{\alpha \in \mathsf{A}'} M_\alpha \;|\; \mathsf{A}' \subseteq \mathsf{A} \}$——$\mathcal{M}$ 中所有任意多元素的并构成的集合族．显然 $\emptyset$ 和 $X$ 都在 $\mathcal{T}(\mathcal{M})$ 中，且 $\mathcal{T}(\mathcal{M})$ 中任意多元素的并依然在 $\mathcal{T}(\mathcal{M})$ 中．欲证 $\mathcal{T}(\mathcal{M})$ 是拓扑，只须证明对任意 $O_1, O_2 \in \mathcal{T}(\mathcal{M})$ 有 $O_1 \cap O_2 \in \mathcal{T}(\mathcal{M})$．

设 $O_1, O_2 \in \mathcal{T}(\mathcal{M})$，定义 $O := O_1 \cap O_2$．不妨设 $O$ 非空．根据 $\mathcal{T}(\mathcal{M})$ 的定义，对于 $j = 1, 2$ 都存在 $\mathsf{A}_j \subseteq \mathsf{A}$ 使得 $O_j = \bigcup_{\alpha \in \mathsf{A}_j} M_\alpha$．对每个 $x \in O$ 以及 $j = 1, 2$，我们能够找到 $\alpha_j(x) \in \mathsf{A}$ 使得 $x \in M_{\alpha_1(x)} \cap M_{\alpha_2(x)}$．根据前提假设，存在 $\alpha(x) \in \mathsf{A}$ 使得
$$
  x \in M_{\alpha(x)} \subseteq M_{\alpha_1(x)} \cap M_{\alpha_2(x)} \subseteq O, 
$$
从而 $O = \bigcup_{x \in O} M_{\alpha(x)}$，故 $O \in \mathcal{T}(\mathcal{M})$．

根据数学归纳原理很容易证明 $\mathcal{T}(\mathcal{M})$ 中的任意有限多个集合的交都在 $\mathcal{T}(\mathcal{M})$ 中．
:::

## 积拓扑

设 $\mathcal{T}_1$ 和 $\mathcal{T}_2$ 都是 $X$ 上的拓扑．若 $\mathcal{T}_1 \subseteq \mathcal{T}_2$，则称 $\mathcal{T}_1$ 比 $\mathcal{T}_2$ **粗**（coarse），或 $\mathcal{T}_2$ 比 $\mathcal{T}_1$ **细**（fine）．

;;; remarks
$\mathrm{(a)}$ $\{\emptyset, X\}$ 是 $X$ 上最粗的拓扑．$\mathfrak{P}(X)$ 是 $X$ 上最 细的拓扑．

$\mathrm{(b)}$ 设 $\mathcal{M} \subseteq \mathfrak{P}(X)$ 是某个拓扑 $\mathcal{T}(\mathcal{M})$ 的基，则 $\mathcal{T}(\mathcal{M})$ 是 $X$ 上包含 $\mathcal{M}$ 的最粗拓扑．

$\mathrm{(c)}$ 若 $\mathcal{T}_0$ 是 $X$ 上的拓扑，则 $\mathcal{T}_0$ 就是其自身的一个基．换言之 $\mathcal{T}(\mathcal{T}_0) = \mathcal{T}_0$．

$\mathrm{(d)}$ 对于 $j = 1, 2$，设 $M_j \subseteq \mathfrak{P}(X)$ 是 $\mathcal{T}_j$ 的一个基且 $\mathcal{M}_1 \subseteq \mathcal{M}_2$，则 $\mathcal{T}_1 \subseteq \mathcal{T}_2$．
;;;


设 $(X_1, \mathcal{T}_1)$ 和 $(X_2, \mathcal{T}_2)$ 均为拓扑空间．对 $j = 1, 2$，设 $(O_j, U_J) \in \mathcal{T}_1 \times \mathcal{T}_2$．显然
$$
  (O_1 \times U_1) \cap (O_2 \times U_2) = (O_1 \cap O_2) \times (U_1 \cap U_2).
$$
若定义
$$
  \mathcal{T}_1 \boxtimes \mathcal{T}_2 := \{ O_1 \times O_2 \subseteq X_1 \times X_2 \;|\; (O_1, O_2) \in X_1 \times X_2 \},
$$
则它是拓扑 $\mathcal{T} := \mathcal{T}(\mathcal{T}_1 \boxtimes \mathcal{T}_2)$ 的基，我们称这个拓扑 $\mathcal{T}$ 为（$X_1 \times X_2$ 上）$\boldsymbol{\mathcal{T}_1}$ **和** $\boldsymbol{\mathcal{T}_2}$ **的积拓扑**（product topology of $\mathcal{T}_1$ and $\mathcal{T}_2$），并称拓扑空间 $(X_1 \times X_2, \mathcal{T})$ 为 $(X_1, \mathcal{T}_1)$ 和 $(X_2, \mathcal{T}_2)$ 的**拓扑积**（topological product）．若无特殊说明，我们默认 $X_1 \times X_2$ 带有积拓扑．

;;; remarks
$\mathrm{(a)}$ 积拓扑是 $X_1 \times X_2$ 上包含 $\mathcal{T}_1 \boxtimes \mathcal{T}_2$ 的最粗拓扑．

$\mathrm{(b)}$ 对于 $j = 1, 2$，积拓扑是 $X_1 \times X_2$ 上使得投影 $\operatorname{pr}_j : X_1 \times X_2 \to X_j$ 连续的最粗拓扑．

::: proof
任取 $O_1 \in \mathcal{T}_1$ 和 $O_2 \in \mathcal{T}_2$，我们有
$$
  \operatorname{pr}_1^{-1}(O_1) = O_1 \times X_2
$$
和
$$
  \operatorname{pr}_2^{-1}(O_2) = X_1 \times O_2,
$$
这两者都是开集，因此 $\operatorname{pr}_1$ 和 $\operatorname{pr}_2$ 都关于 $\mathcal{T} := \mathcal{T}(\mathcal{T}_1 \boxtimes \mathcal{T}_2)$ 连续．

设 $\widetilde{\mathcal{T}}$ 是 $X_1 \times X_2$ 上的拓扑且使得 $\operatorname{pr}_1$ 和 $\operatorname{pr}_2$ 连续．根据积拓扑的定义，对每个 $V \in \mathcal{T}$ 而言都存在指标集 $\mathsf{A}$ 和一族 $(O_\alpha, U_\alpha) \in \mathcal{T}_1 \times \mathcal{T}_2$（$\alpha \in \mathsf{A}$）使得 $V = \bigcup_{\alpha \in \mathsf{A}} O_\alpha \times U_\alpha$．由于 $\operatorname{pr}_1^{-1}(O_1)$ 和 $\operatorname{pr}_2^{-1}(O_2)$ 都是 $\widetilde{\mathcal{T}}$ 中的开集，$O_\alpha \times U_\alpha = \operatorname{pr}_1^{-1}(O_\alpha) \cap \operatorname{pr}_2^{-1}(U_\alpha)$ 也是 $\widetilde{\mathcal{T}}$ 中的开集，因此 $V \in \widetilde{\mathcal{T}}$．由于 $V$ 是任意的，$\mathcal{T} \subseteq \widetilde{\mathcal{T}}$．
:::

$\mathrm{(c)}$ 对于 $j = 1, 2$，设 $\mathcal{M}_j \subseteq \mathfrak{P}(X_j)$ 是 $\mathcal{T}_j$ 的基，则 $\mathcal{M}_1 \boxtimes \mathcal{M}_2$ 是 $X_1 \times X_2$ 上的积拓扑的基．

$\mathrm{(d)}$ 对于 $j = 1, 2$，设 $(X_j, d_j)$ 是度量空间，$\mathcal{T}_j$ 是由度量 $d_j$ 导出的拓扑．度量 $d_1$ 和 $d_2$ 的积度量 $d_1 \lor d_2$ 是 $X_1 \times X_2$ 上的一个度量，定义为
$$
  (d_1 \lor d_2) (x, y) = \max\{ d_1(x_1, y_1), d_2(x_2, y_2) \},
$$
其中 $x = (x_1, x_2), y = (y_1, y_2) \in X_1 \times X_2$．我们将积度量 $d_1 \lor d_2$ 所导出的 $X_1 \times X_2$ 上的拓扑记作 $\mathcal{T}(d_1 \lor d_2)$，则
$$
  \mathcal{T}(\mathcal{T}_1 \boxtimes \mathcal{T}_2) = \mathcal{T}(d_1 \lor d_2).
$$

::: proof
容易验证当 $O_1$ 和 $O_2$ 分别是 $(X_1, d_1)$ 和 $(X_2, d_2)$ 上的开集时，$O_1 \times O_2$ 是 $\mathcal{T}(d_1 \lor d_2)$ 上的开集，因此
$$
  \mathcal{T}_1 \boxtimes \mathcal{T}_2 \subseteq \mathcal{T}(d_1 \lor d_2).
$$
根据[定理](#thm:topology-basis-criterion)可以验证
$$
  \mathcal{T}(d_1 \lor d_2) \subseteq \mathcal{T}(\mathcal{T}_1 \boxtimes \mathcal{T}_2).
$$
于是
$$
  \mathcal{T}_1 \boxtimes \mathcal{T}_2 \subseteq \mathcal{T}(d_1 \lor d_2) \subseteq \mathcal{T}(\mathcal{T}_1 \boxtimes \mathcal{T}_2).
$$
由于 $\mathcal{T}(\mathcal{T}_1 \boxtimes \mathcal{T}_2)$ 是包含 $\mathcal{T}_1 \boxtimes \mathcal{T}_2$ 的最粗拓扑，$\mathcal{T}(\mathcal{T}_1 \boxtimes \mathcal{T}_2) = \mathcal{T}(d_1 \lor d_2)$．
:::

$\mathrm{(e)}$ 积拓扑相关的定义和定理可以简单扩展到任意有限多个拓扑空间的积上，我们在此不再赘述．

;;;

## Borel 积 σ 代数

设 $(X_1, \mathcal{A}_1)$ 和 $(X_2, \mathcal{A}_2)$ 是可测空间，$\mathcal{A}_1 \boxtimes \mathcal{A}_2$ 未必是 $X_1 \times X_2$ 上的 $\sigma$ 代数（可取 $X_1 = X_2 = \mathbb{R}$ 且 $\mathcal{A}_1 = \mathcal{A}_2 = \{ \emptyset, [0, 1], [0, 1]^c, \mathbb{R} \}$ 为例）．于是我们定义 $X_1 \times X_2$ 上包含 $\mathcal{A}_1 \boxtimes \mathcal{A}_2$ 的最小 $\sigma$ 代数为 $\mathcal{A}_1$ 与 $\mathcal{A}_2$ 的**积** $\boldsymbol{\sigma}$ **代数**（product $\sigma$-algebra），记作 $\mathcal{A}_1 \otimes \mathcal{A}_2$．换言之
$$
  \mathcal{A}_1 \otimes \mathcal{A}_2 := \mathcal{A}_\sigma(\mathcal{A}_1 \boxtimes \mathcal{A}_2).
$$
下面的命题给出从生成集确定积 $\sigma$ 代数的方法．

::: proposition[prop:sigma-algebra-by-generating-sets]
对 $j = 1, 2$，设 $\mathcal{S}_j \subseteq \mathfrak{P}(X_j)$ 且 $X_j \in \mathcal{S}_j$，则
$$
  \mathcal{A}_\sigma(\mathcal{S}_1) \otimes \mathcal{A}_\sigma(\mathcal{S}_2) = \mathcal{A}_\sigma(\mathcal{S}_1 \boxtimes \mathcal{S}_2).
$$
:::

::: proof
对 $j = 1, 2$，设 $\mathcal{A}_j := \mathcal{A}_\sigma(\mathcal{S}_j)$．显然
$$
  \mathcal{A}_\sigma(\mathcal{S}_1 \boxtimes \mathcal{S}_2)
  \subseteq \mathcal{A}_\sigma(\mathcal{A}_1 \boxtimes \mathcal{A}_2)
  = \mathcal{A}_1 \otimes \mathcal{A}_2,
$$
因此我们只需证明
$$
  \mathcal{A}_1 \otimes \mathcal{A}_2 \subseteq \mathcal{A}_\sigma(\mathcal{S}_1 \boxtimes \mathcal{S}_2).
$$

对 $j = 1, 2$，定义
$$
  \widetilde{\mathcal{A}}_j := (\operatorname{pr}_j)_*\bigl( \mathcal{A}_\sigma(\mathcal{S}_1 \boxtimes \mathcal{S}_2) \bigr).
$$
按照前推的定义，$Z \in \widetilde{\mathcal{A}}_j$ 当且仅当 $\operatorname{pr_j}^{-1}(Z) \in \mathcal{A}_\sigma(\mathcal{S}_1 \boxtimes \mathcal{S}_2)$．由于 $X_2 \in \mathcal{S}_2$，我们有 $\mathcal{S}_1 \subseteq \widetilde{\mathcal{A}}_1$．同理 $\mathcal{S}_2 \subseteq \widetilde{A}_2$．前推 $\widetilde{A}_j$ 是 $\sigma$ 代数，我们有 $\mathcal{A}_j = \mathcal{A}_\sigma(S_j) \subseteq \widetilde{A}_j$，这说明对任意 $A_j \in \mathcal{A}_j$ 都有
$$
  \operatorname{pr}_j^{-1}(A_j) \in \mathcal{A}_\sigma(\mathcal{S}_1 \boxtimes \mathcal{S}_2).
$$
特别地，任取 $A_1 \times A_2 \in \mathcal{A}_1 \boxtimes \mathcal{A}_2$，我们有
$$
\begin{aligned}
  A_1 \times X_2 &= \operatorname{pr}_1^{-1}(A_1) \in \mathcal{A}_\sigma(\mathcal{S}_1 \boxtimes \mathcal{S}_2), \\
  X_1 \times A_2 &= \operatorname{pr}_2^{-1}(A_2) \in \mathcal{A}_\sigma(\mathcal{S}_1 \boxtimes \mathcal{S}_2),
\end{aligned}
$$
故 $A_1 \times A_2 = (A_1 \times X_2) \cap (X_1 \times A_2) \in \mathcal{A}_\sigma(\mathcal{S}_1 \boxtimes \mathcal{S}_2)$．两侧取生成 $\sigma$ 代数即得 $\mathcal{A}_1 \otimes \mathcal{A}_2 \subseteq \mathcal{A}_\sigma(\mathcal{S}_1 \boxtimes \mathcal{S}_2)$．
:::

该命题可以简单地推广到任意有限多个可测空间上．

设 $(X_1, \mathcal{T}_1)$ 和 $(X_2, \mathcal{T}_2)$ 是拓扑空间，其上的 Borel $\sigma$ 代数分别为 $\mathcal{B}(X_1)$ 和 $\mathcal{B}(X_2)$．在 $X_1 \times X_2$ 上我们有两种能自然想到的 $\sigma$ 代数：积 $\sigma$ 代数 $\mathcal{B}(X_1) \otimes \mathcal{B}(X_2)$ 和 Borel $\sigma$ 代数 $\mathcal{B}(X_1 \times X_2)$．我们来研究这两个 $\sigma$ 代数之间的关系．

::: proposition
设 $X_1$ 和 $X_2$ 是拓扑空间，则
$$
  \mathcal{B}(X_1) \otimes \mathcal{B}(X_2) \subseteq \mathcal{B}(X_1 \times X_2).
$$
:::

::: proof
对于 $j = 1, 2$，设 $X_j$ 的拓扑是 $\mathcal{T}_j$，其在 $X_1 \times X_2$ 上的积拓扑为 $\mathcal{T}$．由于 $\mathcal{T}$ 是包含 $\mathcal{T}_1 \boxtimes \mathcal{T}_2$ 的拓扑，
$$
  \mathcal{A}_\sigma(\mathcal{T}_1 \boxtimes \mathcal{T}_2) \subseteq \mathcal{A}_\sigma(\mathcal{T}) = \mathcal{B}(X_1 \times X_2).
$$
[命题](#prop:sigma-algebra-by-generating-sets)说明 $\mathcal{B}(X_1) \otimes \mathcal{B}(X_2) = \mathcal{A}_\sigma(\mathcal{T}_1 \boxtimes \mathcal{T}_2)$．
:::

一般来说 $\mathcal{B}(X_1 \times X_2) \neq \mathcal{B}(X_1) \otimes \mathcal{B}(X_2)$，但反例较为复杂．实践中我们经常处理第二可数空间，此时两者是相等的．

::: proposition
设 $X_1$ 和 $X_2$ 都是满足第二可数性公理的拓扑空间，则
$$
  \mathcal{B}(X_1 \times X_2) = \mathcal{B}(X_1) \otimes \mathcal{B}(X_2).
$$
:::

::: proof
根据前一命题，只需证明包含关系“$\subseteq$”．

对于 $j = 1, 2$，设 $\mathcal{T}_j$ 是 $X_j$ 的拓扑，$\mathcal{M}_j$ 为其可数基，则 $\mathcal{M}_1 \boxtimes \mathcal{M}_2$ 是 $\mathcal{T} := \mathcal{T}(\mathcal{T}_1 \boxtimes \mathcal{T}_2)$ 的可数基．因此每个 $O \in \mathcal{T}$ 都能写成 $\mathcal{M}_1 \boxtimes \mathcal{M}_2$ 中可数个元素的并．于是 $\mathcal{T} \subseteq \mathcal{B}(X_1) \otimes \mathcal{B}(X_2)$，进而 $\mathcal{B}(X_1 \times X_2) \subseteq \mathcal{B}(X_1) \otimes \mathcal{B}(X_2)$．
:::

::: corollary
对 $m, n \in \mathbb{N}^\times$ 有 $\mathcal{B}^m \otimes \mathcal{B}^n = \mathcal{B}^{m + n}$ 以及 $\mathcal{B}^m = \underbrace{\mathcal{B}^1 \otimes \cdots \otimes \mathcal{B}^1}_{m}$．
:::

## 截面的可测性

设 $C \subseteq X \times Y$，$(a, b) \in X \times Y$，分别定义 $C$ 在 $a$ 处和 $b$ 处的**截面**（section）为
$$
\begin{aligned}
  C_{[a]} &:= \{ y \in Y \;|\; (a, y) \in C \}, \\
  C^{[b]} &:= \{ x \in X \;|\; (x, b) \in C \}.
\end{aligned}
$$

![ =300x](./figures/sections-of-product.jpg#grayscale)

::: proposition
设 $(X, \mathcal{A})$ 和 $(Y, \mathcal{B})$ 是可测空间，$C \in \mathcal{A} \otimes \mathcal{B}$，则对任意 $x \in X$ 都有 $C_{[x]} \in \mathcal{B}$，对任意 $y \in Y$ 都有 $C^{[y]} \in \mathcal{A}$．
:::

::: proof
定义
$$
  \mathcal{C} := \{ C \in \mathcal{A} \otimes \mathcal{B} \;|\; C_{[x]} \in \mathcal{B}, C^{[y]} \in \mathcal{A}, (x, y) \in X \times Y \}.
$$
我们只需证明 $\mathcal{C} = \mathcal{A} \otimes \mathcal{B}$，而 $\mathcal{C} \subseteq \mathcal{A} \otimes \mathcal{B}$ 平凡成立．为证明 $\mathcal{A} \otimes \mathcal{B} \subseteq \mathcal{C}$，只需证明 $\mathcal{C}$ 是包含 $\mathcal{A} \boxtimes \mathcal{B}$ 的 $\sigma$ 代数．

$\mathrm{(i)}$ 首先证明 $\mathcal{C}$ 是 $\sigma$ 代数．显然 $X \times Y \in \mathcal{C}$．取 $C \in \mathcal{C}$ 和 $(x, y) \in X \times Y$，我们有
$$
\begin{aligned}
  (C^c)_{[x]} &= (C_{[x]})^c \in \mathcal{B}, \\
  (C^c)^{[y]} &= (C^{[y]})^c \in \mathcal{A},
\end{aligned}
$$
因此 $C^c \in \mathcal{C}$．任取 $\mathcal{C}$ 中的集合列 $(C_j)$，我们有
$$
\begin{aligned}
  \left( \bigcup_j C_j \right)_{[x]} &= \bigcup_j (C_j)_{[x]}, \\
  \left( \bigcup_j C_j \right)^{[y]} = \bigcup_j (C_j)^{[y]},
\end{aligned}
$$
故 $\bigcup_j C_j \in \mathcal{C}$．

$\mathrm{(ii)}$ 再证明 $\mathcal{C}$ 包含 $\mathcal{A} \boxtimes \mathcal{B}$．取 $A \times B \in \mathcal{A} \boxtimes \mathcal{B}$ 和 $(x, y) \in X \times Y$，我们有
$$
\begin{aligned}
  (A \times B)_{[x]} &= \begin{cases}
    B, & x \in A, \\
    \emptyset, & x \in A^c,
  \end{cases} \\
  (A \times B)^{[y]} &= \begin{cases}
    A, & y \in B, \\
    \emptyset, & y \in B^c,
  \end{cases}
\end{aligned}
$$
因此 $A \times B \in \mathcal{C}$．于是 $\mathcal{A} \boxtimes \mathcal{B} \subseteq \mathcal{C}$．
:::
