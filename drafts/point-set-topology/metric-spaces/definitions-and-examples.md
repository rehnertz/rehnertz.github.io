---
order: 1
prev: ./
---

# 定义与例子

以下是距离作为抽象概念而被广为接受的数学定义．


::: definition#def:metric-space
度量空间是一个有序对 $(X, d)$，其中 $X$ 是集合，$d$ 是函数 $d : X \times X \to [0, \infty)$——称为**度量**（metric），其对所有 $x, y, z \in X$ 都满足：

- $d(x, y) = d(y, x)$；
- $d(x, y) = 0$ 当且仅当 $x = y$；
- （三角不等式）$d(x, y) \leq d(x, z) + d(z, y)$．

{.lower-alpha-parentheses}
:::                 

上述三条性质是我们在直觉上认为距离所应有的性质，其中三角不等式表明两点之间的最短距离应该只由这两点度量，不应计入第三点的距离．由于度量空间是抽象概念，我们并不能说两点之间的最短距离是“线段”．这三条性质的应用范围最广泛，而在特定细分领域内可能会引入其他额外的性质．

;;; examples
- 令 $X = \mathbb{R}$（实数集），定义 $d(x, y) = |x - y|$，则 $(X, d)$ 是度量，其三角不等式就是绝对值的三角不等式．
- 令 $X = \mathbb{R}^2$（实数平面），定义
  $$
    d\bigl( (x_1, y_1), (x_2, y_2)\bigr) = \bigl[ (x_1 - x_2)^2 + (y_1 - y_2)^2 \bigr]^{1/2},
  $$
  则 $d$ 就是平面几何中的距离，$(X, d)$ 是度量空间．一般地，对于 $q$ 维欧几里得空间 $\mathbb{R}^q$，设 $x = (x_1, \dots, x_q)$ 和 $y = (y_1, \dots, y_q)$ 是 $\mathbb{R}^q$ 中的点，则可定义
  $$
    d(x, y) = \left[ \sum_{n = 1}^q (x_n - y_n)^2 \right]^{1/2}.
  $$
  这个度量经常称为**欧几里得距离**（Euclidean distance）．要证明欧几里得距离满足三角不等式需要一些技巧，若读者学过线性代数则应当有所了解．我们会在后文复述该证明．
- 令 $X = \mathbb{R}^q$，并对 $x, y \in \mathbb{R}^q$ 定义
  $$
    d(x, y) = \sum_{n = 1}^q |x_n - y_n|.
  $$
  根据绝对值的三角不等式，很容易验证 $(X, d)$ 是度量空间．
- 令 $X = \mathbb{R}^q$，定义
  $$
    d(x, y) = \max\{ |x_n - y_n| \;|\; 1 \leq n \leq q \},
  $$
  则也很容易证明 $(X, d)$ 是度量空间．
- 设 $X$ 是任意集合，定义
  $$
    d(x, y) = \begin{cases}
      0, & x = y, \\
      1, & x \neq y,
    \end{cases}
  $$
  则 $(X, d)$ 是度量空间，称为**离散度量空间**（discrete metric space），$d$ 称为 $X$ 上的**离散度量**（discrete metric）．
- 设 $(X, d)$ 是度量空间，$Y$ 是 $X$ 的非空子集，则当 $d$ 视作定义域限制在 $Y$ 上的函数时也是度量，此时称 $(Y, d)$ 为 $(X, d)$ 的**子空间**（subspace）．

{.lower-alpha-parentheses}
;;;

度量的三角不等式有一个常用变体．

::: proposition#prop:reverse-triangle-ineq
设 $(X, d)$ 是度量空间，则对所有 $x, y, z \in X$ 都有
$$
  |d(x, y) - d(y, z)| \leq d(x, z).
$$
:::

::: proof
根据三角不等式，$d(x, y) \leq d(x, z) + d(y, z)$，因此
$$
  d(x, y) - d(y, z) \leq d(x, z).
$$
同理，交换 $x$ 和 $z$ 的位置可得
$$
  d(z, y) - d(y, x) \leq d(z, x).
$$
结合二式和度量的对称性即得到欲证不等式．
:::

现在我们来证明欧几里得距离确实是一个度量，为此需要引入内积．设 $x = (x_1, \dots, x_q)$ 和 $y = (y_1, \dots, y_q)$ 是 $\mathbb{R}^q$ 中的点，其间的**内积**（inner product）定义为
$$
  \langle x, y \rangle = \sum_{n = 1}^q x_n y_n.
$$

::: proposition
对任意 $x, y, z \in \mathbb{R}^q$ 和 $t \in \mathbb{R}$ 都有
$$
\begin{cases}
  \begin{aligned}
    \langle x, x \rangle &\geq 0, \\
    \langle x, y \rangle &= \langle y, x \rangle, \\
    \langle tx + z, y \rangle &= t \langle x, y \rangle + \langle z, y \rangle, \\
    \langle x, y + tz \rangle &= \langle x, y \rangle + t \langle x, z \rangle.
  \end{aligned}
\end{cases}
$$
:::

::: proof
按定义展开即可验证．
:::

::: theorem#thm:cauchy-schwarz-ineq   Cauchy Schwarz 不等式
若 $x = (x_1, \dots, x_q)$ 和 $y = (y_1, \dots, y_q)$ 是 $\mathbb{R}^q$ 中的向量，则
$$
  \langle x, y \rangle^2 \leq \langle x, x \rangle \langle y, y \rangle.
$$
换言之，
$$
  \left( \sum_{n = 1}^q x_n y_n \right)^2 \leq \left( \sum_{n = 1}^q x_n^2 \right) \left( \sum_{n = 1}^q y_n^2 \right).
$$
:::


::: proof
令 $\gamma = \langle x, x \rangle$，$\beta = \langle x, y \rangle$，$\alpha = \langle y, y \rangle$．对任意 $t \in \mathbb{R}$ 我们都有
$$
\begin{aligned}
  0 &\leq \langle x - ty, x - ty \rangle \\
  &= \langle x, x \rangle - t \langle y, x \rangle - t \langle x, y \rangle + t^2 \langle y, y \rangle \\
  &= \langle x, x \rangle - 2t \langle x, y \rangle + t^2 \langle y, y \rangle \\
  &= \gamma - 2 \beta t + \alpha t^2.
\end{aligned}
$$
记 $q(t) = \alpha t^2 - 2 \beta t + \gamma$，则 $q(t)$ 是关于 $t$ 的非负二次函数，其判别式满足 $4\beta^2 - 4 \alpha \gamma \geq 0$，因此
$$
  0 \geq \beta^2 - \alpha \gamma = \langle x, y \rangle^2 - \langle x, x \rangle \langle y, y \rangle,
$$
此即欲证不等式．
:::

::: corollary[cor:euclidean-distance]
设 $d : \mathbb{R}^q \times \mathbb{R}^q \to [0, \infty)$ 是欧几里得距离，即
$$
  d(x, y) = \left[ \sum_{n = 1}^q (x_n - y_n)^2 \right]^{1/2},
$$
则 $d$ 是一个度量．
:::

::: proof
注意 $d(x, y) = \langle x - y, x - y \rangle^{1/2}$，于是对任意 $x, y, z \in \mathbb{R}^q$，利用 [Cauchy-Schwarz 不等式](#thm:cauchy-schwarz-ineq)可得
$$
\begin{aligned}
  d(x, y)^2 &= \langle x - y, x - y \rangle \\
  &= \langle (x - z) + (z - y), (x - z) + (z - y) \rangle \\
  &= \langle x - z, x - z \rangle + 2 \langle x - z, z - y \rangle + \langle z - y, z - y \rangle \\
  &\leq d(x, z)^2 + 2 \langle x - z, x - z \rangle^{1/2} \langle z - y, z - y\rangle^{1/2} + d(z, y)^2 \\
  &= d(x, z)^2 + 2 d(x, z) d(z, y) + d(z, y)^2 \\
  &= \left[ d(x, y) + d(z, y) \right]^2.
\end{aligned}
$$
两侧开方后即得到三角不等式．其余两条度量的性质是显然的．
:::

设 $(X, d)$ 是度量空间．若 $x \in X$ 且 $r > 0$，我们引入以下记号：
$$
\begin{aligned}
  B(x; r) &= \{ y \in X \;|\; d(x, y) < r \}, \\
  \overline{B}(x; r) &= \{ y \in X \;|\; d(x, y) \leq r \}.
\end{aligned}
$$
集合 $B(x; r)$ 称为关于 $x$ 的**开球**（open ball），其半径为 $r$．集合 $\overline{B}(x; r)$ 称为关于 $x$ 的**闭球**（closed ball），其半径为 $r$．若 $X = \mathbb{R}$，则 $B(x; r)$ 就是开区间 $(x - r, x + r)$，$\overline{B}(x; r)$ 就是闭区间 $[x - r, x + r]$．我们称 $B(x; r)$ 为开球，是因为几何上它不包含边界，而闭球 $\overline{B}(x; r)$ 则包含边界．当然我们并未在数学上定义“边界”，所以这个解释只用于帮助理解．显然当 $s < r$ 时有 $\overline{B}(x; s) \subseteq B(x; r)$．

::: definition#def:open-close-set
设 $(X, d)$ 是度量空间．$X$ 的子集 $G$ 称为**开集**（open set），若对每个 $x \in G$ 都存在相应的 $r > 0$ 使得 $B(x; r) \subseteq G$．$X$ 的子集 $F$ 称为**闭集**（closed set），若其补集 $X \nobreak\setminus F$ 是开集．
:::


;;; examples
- $X$ 和 $\emptyset$ 都是开集和闭集．
- 对任意 $r > 0$，$B(x; r)$ 都是开集．
  ::: proof
  对任意 $y \in B(x; r)$，根据开球的定义有 $d(x, y) < r$，于是可任取 $s \in \bigl(0, r - d(x, y)\bigr)$．对任意 $z \in B(y; s)$，根据三角不等式可得
  $$
    d(x, z) \leq d(x, y) + d(y, z) < d(x, y) + s < r,
  $$
  故 $z \in B(x, r)$，从而 $B(y; s) \subseteq B(x; r)$．
  :::
- 对任意 $r > 0$，$\overline{B}(x, r)$ 都是闭集．
  ::: proof
  令 $G = X \nobreak\setminus \overline{B}(x; r)$．对任意 $y \in G$ 都有 $d(x, y) > r$，从而可取 $s \in \bigl(0, d(x, y) - r \bigr)$．对任意 $z \in B(y; s)$ 都有 $d(z, y) < s$，于是
  $$
  \begin{aligned}
    r &< d(x, y) - s \\
      &< d(x, y) - d(y, z) \\
      &\leq [d(x, z) + d(z, y)] - d(y, z) \\
      &= d(x, z),
  \end{aligned}
  $$
  从而 $z \in G$．这说明 $B(y; s) \subseteq G$，亦即 $G$ 是开集，故 $\overline{B}(x; r)$ 是闭集．
  :::
- 任意 $X$ 的有限子集都是闭集．
  ::: proof
  设 $F = \{ x_1, \dots, x_n \}$，任取 $x \in X \nobreak\setminus F$，可取
  $$
    r < \min\{ d(x, x_1), \dots, d(x, x_n) \},
  $$
  则 $B(x; r) \subseteq X \nobreak\setminus F$．
  :::

{.lower-alpha-parentheses}
;;;

对于一些常见的度量空间 $(X, d)$，我们经常简称 $X$ 为度量空间，而度量 $d$ 由约定或上下文确定．例如欧几里得空间 $\mathbb{R}^q$ 一般默认带有欧几里得距离．

开集有两个关键性质，它们是之后讨论一般拓扑空间时的关键刻画特征．

::: proposition#prop:metric-space-topology
设 $(X, d)$ 是度量空间．

- 若 $G_1, \dots, G_n$ 是 $X$ 中的开集，则 $\bigcap_{k = 1}^n G_k$ 是 $X$ 中的开集．
- 若 $\{G_\alpha \;|\; \alpha \in \mathsf{A}\}$ 是一族 $X$ 中的开集，则 $\bigcup_{\alpha \in \mathsf{A}} G_\alpha$ 是 $X$ 中的开集．

{.lower-alpha-parentheses}
:::

::: proof

- 任取 $x \in \bigcap_{k = 1}^n G_k$．对每个 $k \in \{1, \dots, n\}$，存在相应的 $r_k > 0$ 使得 $B(x; r_k) \subseteq G_k$．令 $r = \min\{r_1, \dots, r_n\}$，则对每个 $k$ 都有 $B(x; r) \subseteq B(x; r_k)$，因此 $B(x; r) \subseteq \bigcap_{k = 1}^n G_k$，从而说明 $\bigcap_{k = 1}^n G_k$ 是开集．
- 任取 $x \in \bigcup_{\alpha \in \mathsf{A}} G_\alpha$，则存在某个 $\alpha_0 \in \mathsf{A}$ 使得 $x \in G_{\alpha_0}$．根据开集的定义，存在相应的 $r_{\alpha_0} > 0$ 使得 $B(x; r_{\alpha_0}) \subseteq G_{\alpha_0} \subseteq \bigcup_{\alpha \in \mathsf{A}} G_\alpha$，因此 $\bigcup_{\alpha \in \mathsf{A}} G_\alpha$ 是开集．

{.lower-alpha-parentheses}
:::

根据集合运算的 De Morgan 律可以得到闭集的性质．

::: proposition#prop:metric-space-complement-topology
设 $(X, d)$ 是度量空间．

- 若 $F_1, \dots, F_n$ 是 $X$ 中的闭集，则 $\bigcup_{k = 1}^n F_k$ 是 $X$ 中的闭集．
- 若 $\{F_\alpha \;|\; \alpha \in \mathsf{A}\}$ 是一族 $X$ 中的闭集，则 $\bigcap_{\alpha \in \mathsf{A}} F_\alpha$ 是 $X$ 中的闭集．

{.lower-alpha-parentheses}
:::

在讨论开闭性时需要明确全集．设 $(X, d)$ 为度量空间，$Y$ 为 $X$ 的非空子集，则 $(Y, d)$ 是 $(X, d)$ 的子空间．此时 $Y$ 中的开集未必是 $X$ 中的开集．例如，设 $X = \mathbb{R}$，$Y = [0, 1]$，则 $[0, 1/2)$ 是 $Y$ 中的开集，但不是 $X$ 中的开集．当我们要明确某个集合 $A$ 是度量空间 $(Y, d)$ 中的开集时，会说 $A$ 是 $Y$ 中的开集，或**关于**（relative to）$Y$ 的开集，并用记号 $B_Y(y; r)$ 表示 $Y$ 中的开球
$$
  B_Y(y; r) = \{ z \in Y \;|\; d(z, y) < r \}.
$$
显然 $B_Y(y; r) = B_X(y; r) \cap Y$．当然，若上下文只涉及一个度量空间时，它自然就是全集．

::: proposition#prop:metric-subspace-topology
设 $(X, d)$ 是度量空间，$Y$ 是 $X$ 的子集．

- $Y$ 的子集 $G$ 是关于 $Y$ 的开集当且仅当存在 $X$ 中的开集 $U$ 使得 $G = U \cap Y$．
- $Y$ 的子集 $F$ 是关于 $Y$ 的闭集当且仅当存在 $X$ 中的闭集 $D$ 使得 $F = D \cap Y$．

{.lower-alpha-parentheses}
:::

::: proof
(a $\Rightarrow$) 设 $G \subseteq Y$ 是 $Y$ 中的开集，则对每个 $y \in G$ 都存在相应的 $r_y > 0$ 使得 $B_Y(y; r_y) \subseteq G$．令 $U = \bigcup_{y \in G} B_X(y; r_y)$，则根据[命题](#prop:metric-space-topology)，$U$ 是 $X$ 中的开集，并且
$$
\begin{aligned}
  G &= \bigcup_{y \in G} B_Y(y; r_y) \\
    &= \bigcup_{y \in G} \bigl( B_X(y; r_y) \cap Y \bigr) \\
    &= \left( \bigcup_{y \in G} B_X(y; r_y) \right) \cap Y \\
    &= U \cap Y.
\end{aligned}
$$

(a $\Leftarrow$) 设 $U$ 是 $X$ 中的开集，$G = U \cap Y$．对任意 $y \in G$，由于 $y \in U$，存在相应的 $r > 0$ 使得 $B_X(y; r) \subseteq U$，因此 $B_Y(y; r) \subseteq U \cap Y = G$，从而说明 $G$ 是关于 $Y$ 的开集．

(b) $F$ 是关于 $Y$ 的闭集当且仅当 $Y \nobreak\setminus F$ 是关于 $Y$ 的开集，当且仅当存在 $X$ 中的开集 $U$ 使得 $Y \nobreak\setminus F = U \cap Y$．该式两侧都是 $Y$ 的子集，取 $Y$ 的补集后依然相等，即该式等价于 $F = Y \nobreak\setminus (U \cap Y) = (X \nobreak\setminus U) \cap Y$．令 $D = X \nobreak\setminus U$，它是关于 $X$ 的闭集，从而得证．
:::

::: definition#def:metric-space-interior-closure-boundary
设 $(X, d)$ 是度量空间，$A$ 是 $X$ 的子集．定义 $A$ 的**内部**（interior）为
$$
  \operatorname{int} A = \bigcup\{ G \;|\; G\ \text{是开集且}\ G \subseteq A \}.
$$
定义 $A$ 的**闭包**（closure）为
$$
  \operatorname{cl} A = \bigcap\{ F \;|\; F\ \text{是闭集且}\ A \subseteq F \}.
$$
定义 $A$ 的**边界**（boundary）为
$$
  \partial A = \operatorname{cl} A \cap \operatorname{cl}(X \setminus A)
$$
:::

$A$ 的内部 $\operatorname{int} A$ 是 $A$ 内部最大的开集．$A$ 的闭包 $\operatorname{cl} A$ 是包含 $A$ 的最小闭集．在欧几里得空间 $\mathbb{R}^q$ 中，闭包可以理解为将集合的边界加入其中，但对于一般的度量空间未必成立，我们稍后会给出一个例子．显然 $\operatorname{int} \emptyset = \emptyset = \operatorname{cl} \emptyset$ 且 $\operatorname{int} X = X = \operatorname{cl} X$．

以下命题是度量空间中刻画集合内部与闭包的几何特性．

::: proposition#prop:char-int-and-cl
设 $(X, d)$ 是度量空间，$A \subseteq X$，$x \in X$．

- $x \in \operatorname{int} A$ 当且仅当存在相应的 $r > 0$ 使得 $B(x; r) \subseteq A$．
- $x \in \operatorname{cl} A$ 当且仅当对所有的 $r > 0$ 都有 $B(x; r) \cap A \neq \emptyset$．

{.lower-alpha-parentheses}
:::

::: proof

(a $\Rightarrow$) 若 $x \in \operatorname{int} A$，由于 $\operatorname{int} A$ 是包含于 $A$ 中的开集，存在 $r > 0$ 使得 $B(x; r) \subseteq \operatorname{int} A \subseteq A$． 

(a $\Leftarrow$) 若 $B(x; r) \subseteq A$，由于 $B(x; r)$ 是 $A$ 中的开集，根据 $\operatorname{int} A$ 的定义有 $B(x; r) \subseteq \operatorname{int} A$，因此 $x \in \operatorname{int} A$．

(b $\Rightarrow$) 设 $x \in \operatorname{cl} A$．对任意 $r > 0$ 而言 $B(x; r)$ 都是开集，因此 $X \nobreak\setminus B(x; r)$ 是闭集．我们不可能有 $A \subseteq X \nobreak\setminus B(x; r)$．如若不然，则按照闭包的定义有 $x \in \operatorname{cl} A \subseteq X \nobreak\setminus B(x; r)$，这是矛盾的．因此 $A$ 中必然有不在 $X \nobreak\setminus B(x; r)$ 中的元素，换言之 $A \cap B(x; r) \neq \emptyset$．

(b $\Leftarrow$) 假设对每个 $r > 0$ 都有 $B(x; r) \cap A \neq \emptyset$．反设 $x \notin \operatorname{cl} A$，即 $x \in X \nobreak\setminus \operatorname{cl} A$．由于 $X \nobreak\setminus \operatorname{cl} A$ 是开集，存在 $r > 0$ 使得 $B(x; r) \subseteq X \nobreak\setminus \operatorname{cl} A$．根据假设，存在 $y \in B(x; r) \cap A \subseteq X \nobreak\setminus \operatorname{cl} A$，但 $X \nobreak\setminus \operatorname{cl} A$ 与 $A$ 不相交，矛盾．
:::

以下是一些异于欧几里得空间的例子，其中一些可能违反直觉．

;;; examples

- 考虑度量空间 $\mathbb{R}$ 的子空间 $\mathbb{Q}$（有理数集），对任意 $x \in \mathbb{R}$ 和有理数 $r \in \mathbb{Q}$，我们有 $B(x; r) = (x - r, x + r)$，其中包含有理数，即 $B(x; r) \cap \mathbb{Q} \neq \emptyset$，于是 $x \in \operatorname{cl} \mathbb{Q}$．这说明 $\mathbb{R} \subseteq \operatorname{cl} \mathbb{Q}$，而 $\mathbb{R}$ 又是全集，因此 $\operatorname{cl} \mathbb{Q} = \mathbb{R}$．此外显然 $B(x; r) \subseteq \mathbb{Q}$ 不成立，因此 $\operatorname{int} \mathbb{Q} = \emptyset$．用类似的方式可以验证 $\operatorname{cl}(\mathbb{R} \nobreak\setminus \mathbb{Q}) = \mathbb{R}$ 且 $\operatorname{int}(\mathbb{R} \nobreak\setminus \mathbb{Q}) = \emptyset$．于是 $\partial \mathbb{Q} = \mathbb{R}$．
- 对于一般的度量空间 $(X, d)$，由于 $\overline{B}(x; r)$ 是闭集，显然有 $\operatorname{cl} B(x; r) \subseteq \overline{B}(x; r)$．这个包含关系有可能不取等．考虑 $X$ 为平面上的单位圆和原点，即
  $$
    X = \{ (0, 0) \} \cup \{ (a, b) \;|\; a^2 + b^2 = 1 \},
  $$
  其作为 $\mathbb{R}^2$ 的子空间．此时
  $$
  \begin{aligned}
    \{(0, 0)\} &= \operatorname{cl} B\bigl( (0, 0) , 1 \bigr) \\
    &\neq \overline{B}\bigl( (0, 0), 1 \bigr) = X.
  \end{aligned}
  $$
  离散度量 $(X, d)$ 也是一个反例，其中 $\{x\} = B(x; 1) = \operatorname{cl} B(x; 1)$，而 $\overline{B}(x; 1) = X$．

{.lower-alpha-parentheses}
;;;


::: proposition#prop:char-interior-closure
设 $A$ 是 $X$ 的子集．

- $A$ 是闭集当且仅当 $A = \operatorname{cl} A$．


{.lower-alpha-parentheses}
:::