---
order: 2
---

# 集合系与集合函数

在[上一节](./introduction)中我们说明了存在不可测集无法定义测度．根据直觉，当 $a < b$ 时，$\mathbb{R}$ 上的测度 $\lambda$ 对区间 $(a, b]$ 应当是良定义的，即 $\lambda\bigl( (a, b] \big) = b - a$，所以 $\lambda$ 的定义域应当包含所有 $(a, b]$．于是，任意可以由这类区间通过交、并、补运算得到的集合也应当可以定义出测度．基于这种思路，我们从全体形如 $(a, b]$ 的区间开始，逐步构造不同的**集合系**（class of subsetes，表示集合的集合）作为测度的定义域．

::: info 区间
对任意 $a, b \in \overline{\mathbb{R}} := [-\infty, \infty]$，定义区间
$$
\begin{aligned}
  (a, b) &:= \{ x \in \mathbb{R} \;|\; a < x < b \}, \\
  [a, b) &:= \{ x \in \mathbb{R} \;|\; a \leq x < b \}, \\
  (a, b] &:= \{ x \in \mathbb{R} \;|\; a < x \leq b \}, \\
  [a, b] &:= \{ x \in \mathbb{R} \;|\; a \leq x \leq b \}.
\end{aligned}
$$
于是当 $a \geq b$ 时 $(a, b) = [a, b) = (a, b] = \emptyset$，当 $a > b$ 时 $[a, b] = \emptyset$．$[a, a] = \{a\}$．

对任意 $a = (a_1, \dots, a_n) \in \overline{\mathbb{R}}^n$ 和 $b = (b_1, \dots, b_n) \in \overline{\mathbb{R}}^n$，定义偏序
$$
  a \leq b \ \ :\!\!\iff \forall i \in \{1, \dots, n\} : a_i \leq b_i,
$$
定义区间
$$
\begin{aligned}
  (a, b) &:= \prod_{i = 1}^n (a_i, b_i), &
  [a, b) &:= \prod_{i = 1}^n [a_i, b_i), \\
  (a, b] &:= \prod_{i = 1}^n (a_i, b_i], &
  [a, b] &:= \prod_{i = 1}^n [a_i, b_i].
\end{aligned}
$$
此外，为方便书写，对任意 $a, b \in \overline{\mathbb{R}}$ 定义
$$
\begin{aligned}
  a \land b &:= \min\{a, b\}, &
  a \lor b &:= \max\{a, b\}.
\end{aligned}
$$
对任意 $a = (a_1, \dots, a_n) \in \overline{\mathbb{R}}^n$ 和 $b = (b_1, \dots, b_n) \in \overline{\mathbb{R}}^n$ 定义
$$
\begin{aligned}
  a \land b &:= (a_1 \land b_1, a_2 \land b_2, \dots, a_n \land b_n), \\
  a \lor b &:= (a_1 \lor b_1, a_2 \lor b_2, \dots, a_n \lor b_n).
\end{aligned}
$$

:::

在本节中，我们设全集为 $\Omega$．对任意集合 $A$，其补集 $A^c$ 自然定义为 $\Omega \setminus A$．

::: definition#def:semi-algebra
设 $\mathcal{S} \subseteq \mathscr{P}(\Omega)$．我们称 $\mathcal{S}$ 是 $\Omega$ 上的一个**半代数**（semi-algebra），若

- $\Omega \in \mathcal{S}$，
- 对所有的 $A, B \in \mathcal{S}$ 都有 $A \cap B \in \mathcal{S}$，
- 对所有的 $A \in \mathcal{S}$ 都存在有限个两两不相交的集合 $E_1, \dots, E_n \in \mathcal{S}$ 使得
  $$
    A^c = \biguplus_{j = 1}^n E_j.
  $$

{.decimal-parentheses}
:::

半代数的定义启发自 $\mathbb{R}$ 上的左开右闭区间．

::: example#ex:semi-algebra-on-R
令 $\Omega := \mathbb{R}$，
$$
\begin{aligned}
  \mathcal{S} :={}& \{ \mathbb{R}, \emptyset \} \\
  & \cup \{ (a, b] \;|\; a < b,\ a, b \in \mathbb{R} \} \\
  & \cup \{ (-\infty, b] \;|\; b \in \mathbb{R} \} \\
  & \cup \{ (a, \infty) \;|\; a \in \mathbb{R} \},
\end{aligned}
$$
则 $\mathcal{S}$ 是半代数．
:::

读者可以自行验证这一命题，但也可以继续看下一个更一般的例子及其证明．

::: example
令 $\Omega := \mathbb{R}^n$，
$$
\begin{aligned}
  \mathcal{S} :={}& \{ \mathbb{R}^n, \emptyset \} \\
  & \cup \{ (a, b] \;|\; a < b,\ a, b \in \mathbb{R}^n \} \\
  & \cup \{ (-\infty, b] \;|\; b \in \mathbb{R}^n \} \\
  & \cup \{ (a, \infty) \;|\; a \in \mathbb{R}^n \},
\end{aligned}
$$
则 $\mathcal{S}$ 是半代数．
:::

::: proof
定义
$$
  \infty^n := (\infty, \infty, \dots, \infty) \in \overline{\mathbb{R}}^n,
$$
则 $\mathcal{S}$ 中的元素都可以写成
$$
  (a, b] \setminus \{ \infty^n \}
$$
的形式，其中 $a, b \in \overline{\mathbb{R}}^n$．

任取 $a, b, c, d \in \overline{\mathbb{R}}^n$．对于交运算我们有
$$
\begin{aligned}
  & \bigl( (a, b] \setminus \{\infty^n\} \bigr) \cap \bigl( (c, d] \setminus \{\infty^n\} \bigr) \\
  ={}& \bigl( (a, b] \cap (c, d] \bigr) \setminus \{\infty^n\} \\
  ={}& \bigl( a \lor c, b \land d \bigr] \setminus \{\infty^n\} \in \mathcal{S}.
\end{aligned}
$$
注意：由于我们讨论的是 $\mathbb{R}$ 上的集合系，任意集合 $A \subseteq \mathbb{R}$ 的补是 $A^c := \mathbb{R} \nobreak\setminus A$ 而不是 $\overline{\mathbb{R}} \nobreak\setminus A$．对于 $\mathbb{R}$ 上的补运算我们有
$$
\begin{aligned}
  & \bigl( (a, b] \setminus \{\infty^n\} \bigr]^c = (a, b]^c \\
  ={}& \bigcup_{i = 1}^n \bigl( (a_1, b_1] \times \cdots \times (a_i, b_i]^c \times \cdots \times (a_n, b_n] \bigr),
\end{aligned}
$$
其中只对第 $i$ 分量上的区间取补．由于
$$
  (a_i, b_i]^c = \bigl( (-\infty, a_i] \cup (b_i, \infty) \bigr) \setminus \{\infty^n\},
$$
我们有
$$
\begin{aligned}
  & (a, b]^c \\
  ={}& \left[ \bigcup_{i = 1}^n \bigl( (a_1, b_1] \times \cdots \times (-\infty, a_i] \times \cdots \times (a_n, b_n] \bigr) \right] \setminus \{\infty^n\} \\
  \cup{}& \left[ \bigcup_{i = 1}^n \bigl( (a_1, b_1] \times \cdots \times (b_i, \infty) \times \cdots \times (a_n, b_n] \bigr) \right] \setminus \{\infty^n\} \\
  ={}& \bigcup_{i = 1}^n \bigl( (\tilde{a}_i, \tilde{b}_i] \setminus \{\infty^n\} \bigr)
  \cup \bigcup_{i = 1}^n \bigl( (\tilde{c}_i, \tilde{d}_i] \setminus \{\infty^n\} \bigr),
\end{aligned}
$$
其中
$$
\begin{aligned}
  \tilde{a}_i &:= (a_1, \dots, a_{i - 1}, -\infty, a_{i + 1}, \dots, a_n), \\
  \tilde{b}_i &:= (b_1, \dots, b_{i - 1}, a_i, b_{i + 1}, \dots, b_n), \\
  \tilde{c}_i &:= (a_1, \dots, a_{i - 1}, b_i, a_{i + 1}, \dots, a_n), \\
  \tilde{d}_i &:= (b_1, \dots, b_{i - 1}, \infty, b_{i + 1}, \dots, b_n)
\end{aligned}
$$
都是 $\overline{\mathbb{R}}^n$ 中的点．于是 $(a, b]^c$ 是 $\mathcal{S}$ 中有限多个元素的并．
:::

::: definition#algebra
我们称 $\mathcal{A} \subseteq \mathscr{P}(\Omega)$ 是 $\Omega$ 上的**代数**（algebra），若

- $\Omega \in \mathcal{A}$，
- 对所有的 $A, B \in \mathcal{A}$ 都有 $A \cap B \in \mathcal{A}$，
- 对所有的 $A \in \mathcal{A}$ 都有 $A^c \in \mathcal{A}$．

{.decimal-parentheses}
:::

我们显然有以下结论．

::: proposition
若 $\mathcal{A}$ 是代数，则 $\mathcal{A}$ 是半代数．
:::

根据集合运算的 De Morgan 律，我们显然有以下结论．

::: proposition
若 $\mathcal{A}$ 是代数，则

- 对所有的 $A, B \in \mathcal{A}$ 都有 $A \cup B \in \mathcal{A}$．

:::

::: proposition
若 $\mathcal{A}$ 是代数，则对任意 $A, B \in \mathcal{A}$ 有 $A \setminus B \in \mathcal{A}$．
:::

::: proof
由 $A \setminus B = A \cap B^c$ 以及代数的定义得到．
:::

若将交运算（或并运算）的个数从有限推广到可数，则得到 $\sigma$ 代数的定义．

::: definition#sigma-algebra
我们称 $\mathcal{F} \subseteq \mathscr{P}(\Omega)$ 是 $\Omega$ 上的 $\boldsymbol{\sigma}$ **代数**（$\sigma$-algebra），若

- $\Omega \in \mathcal{F}$，
- 对任意一列集合 $A_1, A_2, \dots \in \mathcal{F}$ 都有 $\bigcap_{j \ge 1} A_j \in \mathcal{F}$，
- 对所有的 $A \in \mathcal{F}$ 都有 $A^c \in \mathcal{F}$．

{.decimal-parentheses}
:::

我们同样有以下两条显然的命题．

::: proposition
若 $\mathcal{F}$ 是 $\sigma$ 代数，则 $\mathcal{F}$ 是代数．
:::

::: proposition
若 $\mathcal{F}$ 是 $\sigma$ 代数，则

- 对任意一列集合 $A_1, A_2, \dots \in \mathcal{F}$ 都有 $\bigcup_{j \ge 1} A_j \in \mathcal{F}$．

:::

::: tip De Morgan 律
根据 De Morgan 律，代数和 $\sigma$ 代数中有关交运算的定义可以等价地替换为并运算．
:::

::: info 代数的记号
代数有时也称为**域**（field），而 $\sigma$ 代数也可称为 $\boldsymbol{\sigma}$ **域**（$\sigma$-field）．本文中我们用 $\mathcal{A}$ 表示代数，用 $\mathcal{F}$ 表示 $\sigma$ 代数（$\sigma$ 域）．
:::

由于有限次（或可数次）集合运算都在代数（或 $\sigma$ 代数）中封闭，我们很容易证明任意多个代数（或 $\sigma$ 代数）的交依然是代数（或 $\sigma$ 代数）．

::: proposition
设 $\{ \mathcal{A}_\alpha \;|\; \alpha \in I \}$ 是一族代数（或 $\sigma$ 代数），则 $\bigcap_{\alpha \in I} \mathcal{A}_\alpha$ 是代数（或 $\sigma$ 代数）．
:::

::: proof
按照集合并运算的定义和（$\sigma$）代数的定义即得．
:::

回忆[上一节](./introduction)开头的分析，很显然我们希望测度的定义域是 $\sigma$ 代数．对于 $\mathbb{R}$ 上的长度，我们很容易定义区间的长度，而区间并不构成 $\sigma$ 代数，这就要求我们将定义域扩展为包含这些区间的 $\sigma$ 代数．

::: definition#def:generated-algebra
设 $\mathcal{C} \subseteq \mathscr{P}(\Omega)$，则由 $\mathcal{C}$ **生成**（generate）的代数定义为满足以下性质的集合系 $\mathcal{A}(\mathcal{C})$：

- $\mathcal{A}(\mathcal{C}) \subseteq \mathscr{P}(\Omega)$ 是代数；
- $\mathcal{C} \subseteq \mathcal{A}(\mathcal{C})$；
- 对任意代数 $\mathcal{B} \subseteq \mathscr{P}(\Omega)$ 都有
  $$
    \mathcal{C} \subseteq \mathcal{B} \implies \mathcal{A}(\mathcal{C}) \subseteq \mathcal{B}.
  $$

{.decimal-parentheses}
:::

显然生成代数 $\mathcal{A}(\mathcal{C})$ 就是包含 $\mathcal{C}$ 的最小代数，且有以下表达．

::: proposition
设 $\mathcal{C} \subseteq \mathscr{P}(\Omega)$，则 $\mathcal{A}(\mathcal{C})$ 是所有包含 $\mathcal{C}$ 的代数的交，即
$$
  \mathcal{A}(\mathcal{C}) = \bigcap \{ \mathcal{B} \;|\; \mathcal{B}\ \text{是}\ \Omega\ \text{上的代数且}\ \mathcal{C} \subseteq \mathcal{B} \}
$$
:::

我们可同理将 $\mathcal{C}$ 生成的 $\sigma$ 代数定义为包含 $\mathcal{C}$ 的最小 $\sigma$ 代数．

::: definition#def:generated-sigma-algebra
设 $\mathcal{C} \subseteq \mathscr{P}(\Omega)$，则由 $\mathcal{C}$ **生成**（generate）的 $\sigma$ 代数定义为满足以下性质的集合系 $\mathcal{F}(\mathcal{C})$：

- $\mathcal{F}(\mathcal{C}) \subseteq \mathscr{P}(\Omega)$ 是 $\sigma$ 代数；
- $\mathcal{C} \subseteq \mathcal{F}(\mathcal{C})$；
- 对任意 $\sigma$ 代数 $\mathcal{B} \subseteq \mathscr{P}(\Omega)$ 都有
  $$
    \mathcal{C} \subseteq \mathcal{B} \implies \mathcal{F}(\mathcal{C}) \subseteq \mathcal{B}.
  $$

{.decimal-parentheses}
:::

::: proposition
设 $\mathcal{C} \subseteq \mathscr{P}(\Omega)$，则 $\mathcal{F}(\mathcal{C})$ 是所有包含 $\mathcal{C}$ 的 $\sigma$ 代数的交，即
$$
  \mathcal{F}(\mathcal{C}) = \bigcap \{ \mathcal{B} \;|\; \mathcal{B}\ \text{是}\ \Omega\ \text{上的}\ \sigma\ \text{代数且}\ \mathcal{C} \subseteq \mathcal{B} \}
$$
:::

由于我们已经有如这个[例子](#ex:semi-algebra-on-R)的半代数，我们希望由它生成一个 $\sigma$ 代数．遗憾的是这样的生成 $\sigma$ 代数的表达非常复杂，但若先放宽要求，则很容易得到生成代数的表达．

::: lemma
设 $\mathcal{S}$ 是 $\Omega$ 上的半代数，则其生成代数由 $\mathcal{S}$ 中任意有限多个两两不相交元素的并构成，即对任意 $A \in \mathcal{A}(\mathscr{S})$ 都存在相应的正整数 $n$ 和两两不相交的 $E_1, \dots, E_n \in \mathcal{S}$ 使得
$$
  A = \biguplus_{j = 1}^n E_j.
$$
:::

::: proof
我们将 $\mathcal{S}$ 中有限多两两不相交元素的并构成的集合记作 $\mathcal{B}$，即
$$
  \mathcal{B} := \left\{  \biguplus_{j = 1}^n E_j \;\middle|\; n \in \mathbb{N}_{+},\ E_1, \dots, E_n \in \mathcal{S}\ \text{两两不相交} \right\}.
$$
引理即 $\mathcal{A}(\mathcal{S}) = \mathcal{B}$．

$(\supseteq)$ 任取 $A \in \mathcal{B}$，则存在 $E_1, \dots, E_n \in \mathcal{S}$ 使得 $A = \biguplus_{j = 1}^n E_j$．由于每个 $E_j \in \mathcal{S} \subseteq \mathcal{A}(\mathcal{S})$，根据代数的定义，$A$ 作为它们的并也在 $\mathcal{A}(\mathcal{S})$ 中．

$(\subseteq)$ 显然 $\mathcal{S} \subseteq \mathcal{B}$，我们只要能证明 $\mathcal{B}$ 是代数，则根据生成代数的定义可得 $\mathcal{A}(\mathcal{S}) \subseteq \mathcal{B}$．下面我们证明 $\mathcal{B}$ 是代数．

- 显然 $\Omega \in \mathcal{S} \subseteq \mathcal{B}$．
- 任取 $A, B \in \mathcal{B}$，则存在两两不相交的 $E_1, \dots, E_n \in \mathcal{S}$ 和两两不相交的 $F_1, \dots, F_m \in \mathcal{S}$ 使得
  $$
  \begin{aligned}
    A &= \biguplus_{j = 1}^n E_j, &
    B &= \biguplus_{k = 1}^m F_k.
  \end{aligned}
  $$
  于是
  $$
  \begin{aligned}
    A \cap B
    &= \left( \biguplus_{j = 1}^n E_j \right) \cap \left( \biguplus_{k = 1}^m F_k \right) \\
    &= \biguplus_{j = 1}^n \biguplus_{k = 1}^m (E_j \cap F_k).
  \end{aligned}
  $$
  根据半代数的定义，$E_j \cap E_k \in \mathcal{S}$，于是 $A \cap B$ 是 $n \cdot m$ 个 $\mathcal{S}$ 中两两不相交元素的并，即 $A \cap B \in \mathcal{B}$．
- 任取 $A \in \mathcal{B}$，则存在两两不相交的 $E_1, \dots, E_n \in \mathcal{S}$ 使得
  $$
    A = \biguplus_{j = 1}^n E_j.
  $$
  根据半代数的定义，对每个 $E_j \in \mathcal{S}$ 都存在有限个两两不相交的 $F_{j, 1}, \dots F_{j, m_j} \in \mathcal{S}$ 使得
  $$
    E_j^c = \biguplus_{k = 1}^{m_j} F_{j, k}.
  $$
  于是
  $$
  \begin{aligned}
    A^c &= \left( \biguplus_{j = 1}^n E_j \right)^c = \bigcap_{j = 1}^n E_j^c \\
    &= \bigcap_{j = 1}^n \biguplus_{k = 1}^{m_j} F_{i, j} \\
    &= \biguplus_{k_1 = 1}^{m_1}
       \biguplus_{k_2 = 1}^{m_2}
       \cdots
       \biguplus_{k_n = 1}^{m_n}
       (F_{1, k_1} \cap F_{2, k_2} \cap \cdots \cap F_{n, k_n})
  \end{aligned}
  $$
  是 $\mathcal{S}$ 中有限个两两不相交元素的并，故 $A^c \in \mathcal{B}$．

{.decimal-parentheses}
:::


::: definition#def:
设 $\mathcal{C} \subseteq \mathscr{P}(\Omega)$ 且 $\emptyset \in \mathcal{C}$，$\mu : \mathcal{C} \to \overline{\mathbb{R}}_{+}$．我们称 $\mu$ 是**可加的**（additive），若它满足以下性质：

- $\mu(\emptyset) = 0$；
- 对任意有限多个两两不相交的 $E_1, \dots, E_n \in \mathcal{C}$，当 $\biguplus_{j = 1}^n E_j \in \mathcal{C}$ 时都有
  $$
    \mu\left( \biguplus_{j = 1}^n E_j \right) = \sum_{j = 1}^n \mu(E_j).
  $$

{.decimal-parentheses}

我们称 $\mu$ 是 $\boldsymbol{\sigma}$ **可加的**（$\sigma$-additive），若它满足以下性质：

- $\mu(\emptyset) = 0$；
- 对任意可数多个两两不相交的 $E_1, E_2, \dots \in \mathcal{C}$，当 $\biguplus_{j \geq 1} E_j \in \mathcal{C}$ 时都有
  $$
    \mu\left( \biguplus_{j \geq 1} E_j \right) = \sum_{j \geq 1} \mu(E_j).
  $$

{.decimal-parentheses}

:::

::: tip
上述定义中 $\mu(\emptyset) = 0$ 的要求是很自然的．对任意 $A \in \mathcal{C}$，根据可加性可得
$$
  \mu(A) = \mu(A) + \mu(\emptyset).
$$
若 $\mu(A) < \infty$，则 $\mu(\emptyset) = 0$．因此如果 $\mu(\emptyset) \neq 0$，则 $\mu = \infty$，这没有任何研究价值．
:::

可加的集合函数（在对差运算封闭的情况下）是单调的．

::: proposition
设 $\mathcal{C} \subseteq \mathscr{P}(\Omega)$，$\mu : \mathcal{C} \to \overline{\mathbb{R}}_{+}$ 是可加的．若 $E, F \in \mathcal{C}$、$E \subseteq F$ 且 $F \setminus E \in \mathcal{C}$，则 $\mu(E) \leq \mu(F)$．若进一步有 $\mu(E) < \infty$，则 $\mu(F \setminus E) = \mu(F) - \mu(E)$.
:::

::: proof
由 $E \subseteq F$ 可得
$$
  F = E \uplus (F \setminus E),
$$
于是根据 $\mu$ 的可加性得到
$$
  \mu(F) = \mu(E) + \mu(F \setminus E).
$$
由 $\mu \geq 0$ 得到 $\mu(F) \geq \mu(E)$.

若 $\mu(E) < \infty$，则可移项得到
$$
  \mu(F) - \mu(E) = \mu(F \setminus E),
$$
即为欲证等式．
:::

对任意集合 $A \subseteq \Omega$，我们定义**指示函数**（incidator function）$1_A : \Omega \to \{0, 1\}$ 为
$$
  1_A(x) := \begin{cases}
    0, & x \notin A, \\
    1, & x \in A.
  \end{cases}
$$
在本文中我们为方便理解，也会将 $1_A(x)$ 记作 $\lbracket$

::: example 离散测度
设 $x_1, x_2, \dots \in \Omega$，$p_1, p_2, \dots \in \mathbb{R}_{+}$．对任意集合系 $\mathcal{C} \subseteq \mathscr{P}(\Omega)$，定义集合函数 $\mu : \mathcal{C} \to \overline{\mathbb{R}}_{+}$ 为
$$
  \mu(A) := \sum_{j \geq 1} p_j 1_A(x_j).
$$
:::
