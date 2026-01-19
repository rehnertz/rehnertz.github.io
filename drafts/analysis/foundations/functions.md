---
article: false
order: 3
---

# 函数

函数是数学中基础而重要的概念，本节使用现代观点解读函数，以纯粹的集合论方式定义函数．

::: info 记号约定
在本节中，$X$、$Y$、$U$ 和 $V$ 表示任意集合．
:::

在朴素观点中，从 $X$ 到 $Y$ 的**函数**（function）或**映射**（map）$f$ 是一个法则，它对每个 $X$ 的元素唯一指定一个 $Y$ 中的元素．我们将函数 $f$ 记作
$$
  f : X \to Y \quad \text{或} \quad X \to Y, \quad x \mapsto f(x),
$$
有时也记作 $f : X \to Y$，$x \mapsto f(x)$．这里 $f(x)$ 是 $f$ 在 $x$ 处的函数**值**（value）．集合 $X$ 称为 $f$ 的**定义域**（domain）并记作 $\operatorname{dom}(f)$，$Y$ 称为 $f$ 的**陪域**（codomain）．集合
$$
  \operatorname{im}(f) := \{ y \in Y \;|\; \exists x \in X : y = f(x) \}
$$
称为 $f$ 的**像**（image）．

![](./figures/func-def.jpg#grayscale)

若 $f : X \to Y$ 是函数，则
$$
  \operatorname{graph}(f) := \bigl\{ \bigl(x, f(x) \bigr) \in X \times Y \;\big|\; x \in X  \bigr\}
$$
称为 $f$ 的**图像**（graph）．图像显然是 $X \times Y$ 的子集．在下图中，$G$ 是某个从 $X$ 到 $Y$ 的函数的图像，而 $H$ 不是．

![](./figures/func-graph.jpg#grayscale)

在现代观点中，函数 $f$ 就是它的图像 $\operatorname{graph}(f)$．具体而言，设 $f \subseteq X \times Y$，且对每个 $x \in X$ 而言都唯一存在一个 $y \in Y$ 使得 $(x, y) \in f$，换言之若 $(x, y_1) \in f$ 且 $(x, y_2) \in f$ 则 $y_1 = y_2$．此时三元组 $(X, f, Y)$ 就称为从 $X$ 到 $Y$ 的函数，并在实际应用中简写为 $f$．

## 简单例子

注意我们并没有排除 $X = \emptyset$ 和 $y = \emptyset$ 的情形．若 $X$ 为空，则从 $X$ 到 $Y$ 的函数只有一个，即**空函数**（empty function）$\emptyset : \emptyset \to Y$．若 $Y = \emptyset$ 但 $X \neq \emptyset$，则不存在从 $X$ 到 $Y$ 的函数．对于任意两个函数 $f : X \to Y$ 与 $g : U \to V$，它们**相等**（equal）——记作 $f = g$——当且仅当
$$
  X = U, \quad Y = V \quad \text{且} \quad f(x) = g(x), \quad x \in X.
$$

::: example
1. 函数 $\mathrm{id}_X : X \to X$，$x \mapsto x$ 称为 $X$ 的**恒等函数**（identity function）．若 $X$ 可从上下文推断，则我们将 $\mathrm{id}_X$ 简写为 $\mathrm{id}$．
2. 若 $X \subseteq Y$，则 $i : X \to Y$，$x \mapsto x$ 称为 $X$ **到** $Y$ **中的包含**（inclusion of $X$ into $Y$）．注意到 $i = \mathrm{id}_X \iff X = Y$．
3. 若 $X$ 和 $Y$ 是非空集合且 $b \in Y$，则 $X \to Y$，$x \mapsto b$ 称为**常值函数**（constant function）．
4. 若 $f : X \to Y$ 且 $A \subseteq X$，则 $f|A : A \to Y$，$x \mapsto f(x)$ 称为 $f$ **在** $A$ **上的限制**（restriction of $f$ to $A$）．显然 $f|A = f \iff A = X$．
5. 若 $A \subseteq X$ 且 $g : A \to Y$，则对任意函数 $f : X \to Y$，若 $f|A = g$，则称 $f$ 为 $g$ 的**扩展**（extension），记作 $f \supseteq g$．例如对于之前第 2 个例子中的包含有 $\mathrm{id}_Y \supseteq i$．注意这个记号与函数的集合论定义是相容的．
6. 设 $f : X \to Y$ 且 $\operatorname{im}(f) \subseteq U \subseteq Y \subseteq V$，则我们可以诱导（induce）出函数 $f_1 : X \to U$ 和 $f_2 : X \to V$，它们定义为 $f_j(x) := f(x)$，$x \in X$，$j = 1, 2$．通常我们使用同一个符号 $f$ 表示诱导出的函数，并根据实际需求从 $U$、$Y$ 和 $V$ 中选择陪域．
7. 设 $X \neq \emptyset$ 且 $A \subseteq X$，则 $A$ 的**特征函数**（characteristic function）定义为  
  $$
    \chi_A : X \to \{0, 1\}, \quad
    x \mapsto \begin{cases}
      1, & x \in A, \\
      0, & x \in A^c.
    \end{cases}
  $$
  8. 若 $X_1, \dots, X_n$ 为非空集合，则投影  
  $$
    \operatorname{pr}_k : \prod_{j = 1}^n X_j \to X_k, \quad
    x = (x_1, \dots, x_n) \mapsto x_k, \quad
    k = 1, \dots, n
  $$
  是函数．

:::


## 函数的复合

设 $f : X \to Y$ 和 $g : Y \to V$ 是两个函数，则我们可以定义新函数 $g \circ f$——称之为 $f$ 与 $g$ 的**复合**（composition）：
$$
  g \circ f : X \to V, \quad x \mapsto g\bigl( f(x) \bigr).
$$

![=400x](./figures/func-composition.jpg#grayscale)

::: proposition 复合的结合性
设 $f : X \to Y$、$g : Y \to U$ 和 $h : U \to V$ 是函数，则复合 $(h \circ g) \circ f$ 与 $h \circ (g \circ f) : X \to V$ 都是良定义的且
$$
  (h \circ g) \circ f = h \circ (g \circ f).
$$
:::

::: proof
直接由定义得到．
:::

<!-- TODO: 引用任意操作数的结合性． -->
由于函数复合的顺序无关紧要，我们可以略去括号，将上述复合记作 $h \circ g \circ f$．之后我们会说明：对于具有结合性的任意运算，其运算顺序都是无关紧要的．

## 交换图

我们经常在图（diagram）中表示函数的复合，其中形如 $f : X \to Y$ 的函数会写作 $X \xrightarrow{f} Y$．考虑以下图：

![](./figures/func-diagram-ex1/index.svg#grayscale)

若 $h = g \circ f$，则称该图是**交换的**（commutative）．

类似地，我们考虑以下图：

![](./figures/func-diagram-ex2/index.svg#grayscale)

若 $g \circ f = \psi \circ \varphi$，则称它是**交换的**．一般来说，交换图是指具有以下性质的图：对图中任意两个集合 $X$ 与 $Y$，若存在两条不同的路径
$$
  X \xrightarrow{f_1} A_1 \xrightarrow{f_2} A_2 \xrightarrow{f_3} \cdots
  \xrightarrow{f_n} Y
$$
与
$$
  X \xrightarrow{g_1} B_1 \xrightarrow{g_2} B_2 \xrightarrow{g_3} \cdots
  \xrightarrow{g_n} Y,
$$
则复合 $f_n \circ f_{n - 1} \circ \cdots \circ f_1$ 与 $g_n \circ g_{n - 1} \circ \cdots \circ g_1$ 相等．又比如考虑以下图：

![](./figures/func-diagram-ex3/index.svg#grayscale)

当 $\varphi = g \circ f$、$\psi = h \circ g$ 且 $j = h \circ g \circ f = h \circ \varphi = \psi \circ f$ 时该图交换．


## 单射、满射与双射

令 $f : X \to Y$ 为函数．若 $\operatorname{im}(f) = Y$，则称 $f$ 是**满射**（surjection）；若对所有的 $x, y \in X$ 都有 $f(x) = f(y) \implies x = y$，则称 $f$ 是**单射**（injection）．若 $f$ 既是单射又是满射，则称 $f$ 是**双射**（bijection）．

::: example
1. 下图从左向右分别展示了满射（非单射）、单射（非满射）与双射．

![](./figures/func-surj-inj-bij-ex.jpg#grayscale)

2. 设 $X_1, \dots, X_n$ 是集合，则对每个 $k \in \{ 1, \dots, n \}$，第 $k$ 投影 $\operatorname{pr}_k : \prod_{j = 1}^n X_j \to X_k$ 是满射，但一般来说不是单射．
:::

::: proposition
设 $f : X \to Y$ 是函数，则 $f$ 是双射当且仅当存在函数 $g : Y \to X$ 使得 $g \circ f = \mathrm{id}_X$ 且 $f \circ g = \mathrm{id}_Y$．此时 $g$ 由 $f$ 唯一确定．
:::

::: proof
1. “$\Longrightarrow$” 假设 $f : X \to Y$ 是双射．由于 $f$ 是满射，对每个 $y \in Y$，存在某个 $x \in X$ 使得 $y = f(x)$．又因为 $f$ 是单射，这个 $x$ 由 $y$ 唯一确定，这就定义了一个函数 $g : Y \to X$，$y \mapsto x$，其满足命题中所述的性质．

2. “$\Longleftarrow$” 根据 $f \circ g = \mathrm{id}_Y$ 可知 $f$ 是满射．任取 $x, y \in X$，若 $f(x) = f(y)$，则 $x = g(f(x)) = g(f(y)) = \mathrm{id}_X(y) = y$，因此 $f$ 是单射．

3. 若 $h : Y \to X$ 也满足 $h \circ f = \mathrm{id}_X$ 且 $f \circ h = \mathrm{id}_Y$，则  
  $$
    g = g \circ \mathrm{id}_Y
    = g \circ (f \circ h)
    = (g \circ f) \circ h
    = \mathrm{id}_X \circ h
    = h,
  $$
  故 $g$ 由 $f$ 唯一确定．

:::


## 反函数

根据上一命题，对于双射 $f : X \to Y$，我们可以唯一确定一个**反函数**（inverse function）$f^{-1} : Y \to X$ 使得 $f \circ f^{-1} = \mathrm{id}_Y$ 且 $f^{-1} \circ f = \mathrm{id}_X$．

::: proposition
设 $f : X \to Y$ 和 $g : Y \to V$ 都是双射，则 $g \circ f : X \to V$ 是双射，且
$$
  (g \circ f)^{-1} = f^{-1} \circ g^{-1}.
$$
:::

::: proof
直接验证 $f^{-1} \circ g^{-1}$ 满足反函数的性质．一方面
$$
  (g \circ f) \circ (f^{-1} \circ g^{-1})
  = g \circ (f \circ f^{-1}) \circ g^{-1}
  = g \circ \mathrm{id}_Y \circ g^{-1}
  = g \circ g^{-1}
  = \mathrm{id}_V,
$$
另一方面
$$
  (f^{-1} \circ g^{-1}) \circ (g \circ f)
  = f^{-1} \circ (g^{-1} \circ g) \circ f
  = f^{-1} \circ \mathrm{id}_Y \circ f
  = f^{-1} \circ f
  = \mathrm{id}_X,
$$
故 $f^{-1} \circ g^{-1}$ 确实是 $g \circ f$ 的反函数．
:::

设 $f : X \to Y$ 是函数，$A \subseteq X$，我们称
$$
  f(A) := \{ f(a) \in Y \;|\; a \in A \}
$$
为 $A$ **在** $f$ **下的像**（image of $A$ under $f$）．对每个 $C \subseteq Y$，我们称
$$
  f^{-1}(C) := \{ x \in X \;|\; f(x) \in C \}
$$
为 $C$ **在** $f$ **下的前像**（preimage of $C$ under $f$）．

::: example
考虑如下图所示的函数 $f : X \to Y$：

![](./figures/set-func-ex.jpg#grayscale)

此时 $f^{-1}(C) = \emptyset$，$f^{-1}(f(A)) = A \cup B$．特别地，$f^{-1}(f(A)) \supseteq A$．
:::


## 集合型函数

设 $f : X \to Y$ 是函数，我们有两个“诱导”出的函数
$$
  f : \mathcal{P}(X) \to \mathcal{P}(Y), \quad A \to f(A)
$$
和
$$
  f^{-1} : \mathcal{P}(Y) \to \mathcal{P}(X), \quad B \to f^{-1}(B).
$$
我们仍然使用记号 $f$ 和 $f^{-1}$ 表示这样的集合型函数，其具体指代哪个函数一般可从上下文中看出．

若 $f : X \to Y$ 是双射，则对任意 $y \in Y$ 都有 $f^{-1}(\{y\}) = \{ f^{-1}(y) \}$，因此 $f^{-1}(y)$ 和 $f^{-1}(\{y\})$ 是可以相对应的．无论 $f$ 是否是双射，对于单元素集合 $\{y\}$，我们都可将 $f^{-1}(\{y\})$ 简写为 $f^{-1}(y) \subseteq X$，称其为 $f$ 在 $y$ 处的**纤维**（fiber）．

::: proposition
函数 $f : X \to Y$ 所诱导的集合型函数具有以下性质：

1. $A \subseteq B \subseteq X \implies f(A) \subseteq f(B)$；
2. $A_\alpha \subseteq X, \forall \alpha \in \mathsf{A} \implies f(\bigcup_\alpha A_\alpha) = \bigcup_\alpha f(A_\alpha)$；
3. $A_\alpha \subseteq X, \forall \alpha \in \mathsf{A} \implies f(\bigcap_\alpha A_\alpha) \subseteq \bigcap_\alpha f(A_\alpha)$；
4. $A \subseteq X \implies f(A^c) \supseteq f(X) \setminus f(A)$；
5. $A' \subseteq B' \subseteq Y \implies f^{-1}(A') \subseteq f^{-1}(B')$；
6. $A'_\alpha \subseteq Y, \forall \alpha \in \mathsf{A} \implies f^{-1}(\bigcup_\alpha A'_\alpha) = \bigcup_\alpha f^{-1}(A'_\alpha)$；
7. $A'_\alpha \subseteq Y, \forall \alpha \in \mathsf{A} \implies f^{-1}(\bigcap_\alpha A'_\alpha) = \bigcap_\alpha f^{-1}(A'_\alpha)$；
8. $A' \subseteq Y \implies f^{-1}(A'^c) = \left[ f^{-1}(A') \right]^c$．

:::

::: proof
直接由定义得到．
:::

特别注意 $f^{-1} : \mathcal{P}(Y) \to \mathcal{P}(X)$ 能够保持 $\subseteq$，且能与交、并、补运算交换顺序．

我们将全体从 $X$ 到 $Y$ 的**函数构成的集合**记作 $\operatorname{Funct}(X, Y)$．在现代观点下，它是 $\mathcal{P}(X \times Y)$ 的子集．我们也将 $\operatorname{Funct}(X, Y)$ 记作 $Y^X$．这一记号扩展自 $X^n$，其中我们可以将 $X^n$ 解读为 $X^{\{1, 2, \dots, n\}}$ [^fnpow]．若 $U \subseteq Y \subseteq V$，则
$$
  \operatorname{Funct}(X, U) \subseteq \operatorname{Funct}(X, Y) \subseteq \operatorname{Funct}(X, V).
$$

[^fnpow]: 实际上在现代集合论中，自然数 $n$ 的一种显式构造就是 $n = \{ 0, 1, 2, \dots, n - 1 \}$，此时 $X^n$ 就可视作从 $\{0, 1, 2, \dots, n - 1 \}$ 到 $X$ 的函数，用于选择出 $n$ 个元素．
