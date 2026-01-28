---
order: 2
---

# 集合系

设 $\Omega$ 是任意集合．由 $\Omega$ 的子集构成的任意集合 $\mathcal{C} \subseteq \mathscr{P}(\Omega)$ 称为 $\Omega$ 上的**集合系**（class of sets）．[上一节](./introduction)中的长度 $\lambda$ 的定义域就是 $\mathbb{R}$ 上的集合系．

任取 $a, b \in \mathbb{R}$．根据几何直觉，对于测度 $\lambda$ 我们应该有

- $\lambda\bigl( (-\infty, b] \bigr) = \infty$，
- $\lambda\bigl( (a, \infty) \bigr) = \infty$，
- 若 $a < b$，则 $\lambda\bigl( (a, b] \bigr) = b - a$．

此外，任意可测集的交集、并集、补集也应当是可测的．因此确定 $\lambda$ 定义域的一种思路就是从如上的区间出发，将它们之间的交、并、补不断增加到定义域中，直到定义域无法再扩充．如上的区间所对应的抽象概念是半代数．

::: definition#def:semi-algebra
设 $\Omega$ 是集合．我们称 $\Omega$ 上的集合系 $\mathcal{S}$ 为 $\Omega$ 上的**半代数**（semi-algebra），若

- $\Omega \in \mathcal{S}$；
- (对交运算封闭) 对所有的 $A, B \in \mathcal{S}$ 都有 $A \cap B \in \mathcal{S}$；
- 对所有的 $A \in \mathcal{S}$ 都存在相应有限多个两两不相交的 $E_1, \dots, E_n \in \mathcal{S}$ 使得补集 $A^c := \Omega \setminus A$ 能写成它们的并，即
  $$
    A^c = \biguplus_{i = 1}^n E_i.
  $$

{.decimal-parentheses}
:::

::: example
定义
$$
\begin{aligned}
  \mathcal{S} &:= \Set{\mathbb{R}, \emptyset} \\
    & \cup \Set{ (a, b] | a, b \in \mathbb{R}, a < b} \\
    & \cup \Set{ (-\infty, b] | b \in \mathbb{R}} \\
    & \cup \Set{ (a, \infty) | b \in \mathbb{R}},
\end{aligned}
$$
则 $\mathcal{S}$ 是 $\mathbb{R}$ 上的半代数
:::

我们请读者自行验证这一例子．如果觉得验证有困难，可以直接阅读下一个一般情形的例子．

::: info 区间
记 $\overline{\mathbb{R}} := [-\infty, \infty]$．对所有的 $a, b \in \overline{\mathbb{R}}$ 而言，我们定义区间
$$
\begin{aligned}
  (a, b) &:= \Set{ x \in \overline{\mathbb{R}} | a < x < b }, \\
  [a, b) &:= \Set{ x \in \overline{\mathbb{R}} | a \leq x < b }, \\
  (a, b] &:= \Set{ x \in \overline{\mathbb{R}} | a < x \leq b }, \\
  [a, b] &:= \Set{ x \in \overline{\mathbb{R}} | a \leq x \leq b }.
\end{aligned}
$$
因此 $[a, a] = \Set{a}$．若 $a \geq b$ 则 $(a, b) = [a, b) = (a, b] = \emptyset$．若 $a > b$ 则 $[a, b] = \emptyset$．此外，我们定义
$$
\begin{aligned}
  a \land b &:= \min\Set{a, b}, \\
  a \lor b &:= \max\Set{a, b}.
\end{aligned}
$$

对所有的 $a, b \in \overline{\mathbb{R}^n} := [-\infty, \infty]^n$，其中
$$
\begin{aligned}
  a &= (a_1, a_2, \dots, a_n) \in \overline{\mathbb{R}^n}, \\
  b &= (b_1, b_2, \dots, b_n) \in \overline{\mathbb{R}^n},
\end{aligned}
$$
我们定义 $\overline{\mathbb{R}^n}$ 上的偏序 $\leq$ 为
$$
  a \leq b \ \ :\!\!\iff \forall i \in \Set{1, \dots, n} : a_i \leq b_i.
$$
我们类似地定义区间
$$
\begin{aligned}
  (a, b) &:= \prod_{i = 1}^n (a_i, b_i), &
  [a, b) &:= \prod_{i = 1}^n [a_i, b_i), \\
  (a, b] &:= \prod_{i = 1}^n (a_i, b_i], &
  [a, b] &:= \prod_{i = 1}^n [a_i, b_i]
\end{aligned}
$$
以及
$$
\begin{aligned}
  a \land b &:= (a_1 \land b_1, a_2 \land b_2, \dots, a_n \land b_n), \\
  a \lor b &:= (a_1 \lor b_1, a_2 \lor b_2, \dots, a_n \lor b_n).
\end{aligned}
$$
:::

::: example
定义
$$
\begin{aligned}
  \mathcal{S} &:= \Set{\mathbb{R}^n, \emptyset} \\
  & \cup \Set{ (a, b] | a, b \in \mathbb{R}^n, a < b } \\
  & \cup \Set{ (-\infty, b] | b \in \mathbb{R}^n } \\
  & \cup \Set{ (a, \infty) | a \in \mathbb{R}^n },
\end{aligned}
$$
则 $\mathcal{S}$ 是 $\mathbb{R}^n$ 上的半代数．
:::

::: proof
除了不包括无穷大的边界，$\mathcal{S}$ 中的元素都能写成 $\overline{\mathbb{R}^n}$ 中的左开右闭区间，亦即
$$
  \mathcal{S} = \Set{ (a, b] \cap \mathbb{R}^n | a, b \in \overline{\mathbb{R}^n}, a \leq b }.
$$

任取 $A = (a, b] \cap \mathbb{R}^n \in \mathcal{S}$ 和 $B = (c, d] \cap \mathbb{R}^n \in \mathcal{S}$，其中 $a, b, c, d \in \overline{\mathbb{R}^n}$，我们有
$$
\begin{aligned}
  A \cap B &= \bigl( (a, b] \cap \mathbb{R}^n \bigr) \cap \bigl( (c, d] \cap \mathbb{R}^n \bigr) \\
  &= \bigl( (a, b] \cap (c, d] \bigr) \cap \mathbb{R}^n \\
  &= \bigl( (a \lor c, b \land d] \bigr) \cap \mathbb{R}^n \\
  &\in \mathcal{S}.
\end{aligned}
$$
在下面的论述中，我们将 $(a, b] \cap \mathbb{R}^n$ 简写为 $(a, b]$，则 $A$ 的补集 $\mathbb{R}^n \setminus A$ 可以写成
$$
\begin{aligned}
  & \mathbb{R}^n \setminus A \\
  ={}& \mathbb{R}^n \setminus (a, b] \\
  ={}& \bigcup_{i = 1}^n \Bigl( (a_1, b_1] \times \cdots \times (a_{i - 1}, b_{i - 1}] \\
  & \times \bigl( (-\infty, a_i] \cup (b_i, \infty] \bigr) \\
  & \times (a_{i + 1}, b_{i + 1}] \times \cdots \times (a_n, b_n] \Bigr) \\
  ={}& \bigcup_{i = 1}^n \bigl( (\alpha^i, \beta^i] \cup (\gamma^i, \delta^i] \bigr),
\end{aligned}
$$
其中对每个 $i \in \Set{1, \dots, n}$ 都有定义
$$
\small
\begin{aligned}
  \alpha^i &:= (a_1, \dots, a_{i - 1}, -\infty, a_{i + 1}, \dots, a_n) \in \overline{\mathbb{R}^n}, \\ 
  \beta^i &:= (b_1, \dots, b_{i - 1}, a_i, b_{i + 1}, \dots, b_n) \in \overline{\mathbb{R}^n}, \\ 
  \gamma^i &:= (a_1, \dots, a_{i - 1}, b_i, a_{i + 1}, \dots, a_n) \in \overline{\mathbb{R}^n}, \\ 
  \delta^i &:= (b_1, \dots, b_{i - 1}, \infty, b_{i + 1}, \dots, b_n) \in \overline{\mathbb{R}^n}.
\end{aligned}
$$
于是 $A$ 的补集能够写成 $2n$ 个 $\mathcal{S}$ 中元素的并．
:::

在半代数的基础上，如果我们进一步要求集合系对补运算封闭，则得到代数的定义．

::: definition#def:algebra
设 $\Omega$ 是集合．我们称 $\Omega$ 上的集合系 $\mathcal{A}$ 为 $\Omega$ 上的**代数**（algebra），若

- $\Omega \in \mathcal{S}$；
- (对交运算封闭) 对所有的 $A, B \in \mathcal{S}$ 都有 $A \cap B \in \mathcal{S}$；
- (对补运算封闭) 对所有的 $A \in \mathcal{S}$ 都有 $A^c \in \mathcal{S}$．

{.decimal-parentheses}
:::

我们还可以进一步要求对可数次运算封闭．

::: definition#def:sigma-algebra
设 $\Omega$ 是集合．我们称 $\Omega$ 上的集合系 $\mathcal{F}$ 为 $\Omega$ 上的 $\boldsymbol{\sigma}$ **代数**（$\sigma$-algebra），若

- $\Omega \in \mathcal{S}$；
- (对可数交运算封闭) 对所有集合列 $A_1, A_2, \dots \in \mathcal{S}$ 都有 $\bigcup_{i = 1}^\infty A_i \in \mathcal{S}$；
- (对补运算封闭) 对所有的 $A \in \mathcal{S}$ 都有 $A^c \in \mathcal{S}$．

{.decimal-parentheses}
:::

::: tip
对任意 $A, B \in \mathcal{A}$，由于 $A \setminus B = A \cap B^c$，代数（或 $\sigma$ 代数）自然也对集合差运算封闭．

根据集合运算的 De Morgan 律，在代数（或 $\sigma$ 代数）的定义中，对**交**运算的封闭性显然可以等价地改为对**并**运算的封闭性．

显然 $\sigma$ 代数是代数，且代数是半代数．
:::

我们自然希望测度的定义域是 $\sigma$ 代数，而这一般需要从半代数出发，将其扩充为代数，最后扩充为 $\sigma$ 代数．下面我们用严格的数学语言定义所谓的“扩充”．

::: definition
设 $\Omega$ 是集合，$\mathcal{C}$ 是 $\Omega$ 上的集合系．我们将 $\Omega$ 上包含 $\mathcal{C}$ 的最小代数称为 $\mathcal{C}$ 所**生成**（generate）的代数，记作 $\mathcal{A}(\mathcal{C})$．换言之，$\mathcal{C}$ 的生成代数是满足以下性质的代数 $\mathcal{A}(\mathcal{C})$：

- $\mathcal{C} \subseteq \mathcal{A}(\mathcal{C})$；
- 对所有 $\Omega$ 上的代数 $\mathcal{B}$ 都有
  $$
    \mathcal{C} \subseteq \mathcal{B} \implies \mathcal{A}(\mathcal{C}) \subseteq \mathcal{B}.
  $$

{.decimal-parentheses}
:::

::: definition
设 $\Omega$ 是集合，$\mathcal{C}$ 是 $\Omega$ 上的集合系．我们将 $\Omega$ 上包含 $\mathcal{C}$ 的最小 $\sigma$ 代数称为 $\mathcal{C}$ 所**生成**（generate）的 $\sigma$ 代数，记作 $\mathcal{F}(\mathcal{C})$．换言之，$\mathcal{C}$ 的生成 $\sigma$ 代数是满足以下性质的 $\sigma$ 代数 $\mathcal{F}(\mathcal{C})$：

- $\mathcal{C} \subseteq \mathcal{F}(\mathcal{C})$；
- 对所有 $\Omega$ 上的 $\sigma$ 代数 $\mathcal{B}$ 都有
  $$
    \mathcal{C} \subseteq \mathcal{B} \implies \mathcal{F}(\mathcal{C}) \subseteq \mathcal{B}.
  $$

{.decimal-parentheses}
:::

对任意集合系 $\mathcal{C}$ 而言，显然幂集 $\mathscr{P}(\Omega)$ 是包含 $\mathcal{C}$ 的 $\sigma$ 代数，因此生成代数和生成 $\sigma$ 代数是良定义的，它们分别是所有包含 $\mathcal{C}$ 的代数的交，以及所有包含 $\mathcal{C}$ 的 $\sigma$ 代数的交．

给定半代数 $\mathcal{S}$，其生成代数 $\mathcal{A}(\mathcal{S})$ 有直接的表达式．

::: proposition
设 $\Omega$ 是集合系，$\mathcal{S}$ 是 $\Omega$ 上的半代数，则 $\mathcal{S}$ 的生成代数中的任意元素都能写成有限个 $\mathcal{S}$ 中两两不相交元素的并．换言之，
$$
  \mathcal{A}(\mathcal{S}) = \Set{ \biguplus_{i = 1}^n E_i| n \in \mathbb{N}_{+}, E_1, \dots, E_n \in \mathcal{S}\ \text{两两不相交} }.
$$
:::

::: proof
记
$$
  \mathcal{B} := \Set{ \biguplus_{i = 1}^n E_i| n \in \mathbb{N}_{+}, E_1, \dots, E_n \in \mathcal{S}\ \text{两两不相交} }.
$$

$(\Leftarrow)$ 任取 $E = \biguplus_{i = 1}^n E_i \in \mathcal{B}$，由于 $E_i \in \mathcal{S} \subseteq \mathcal{A}(\mathcal{S})$ 且代数对有限并运算封闭，$E \in \mathcal{A}(\mathcal{S})$．

$(\Rightarrow)$ 欲证 $\mathcal{A}(\mathcal{S}) \subseteq \mathcal{B}$，只需证明 $\mathcal{B}$ 是代数且包含 $\mathcal{S}$，而根据定义 $\mathcal{S} \subseteq \mathcal{B}$ 是显然的．下面只须验证 $\mathcal{B}$ 满足代数的三条性质．

- 由于 $\Omega \in \mathcal{S}$，$\Omega \in \mathcal{B}$．
- 任取 $E, F \in \mathcal{B}$，则存在两两不相交的 $E_1, \dots, E_n \in \mathcal{S}$ 使得
  $$
    E = \biguplus_{i = 1}^n E_i,
  $$
  存在两两不相交的 $F_1, \dots, F_m \in \mathcal{S}$ 使得
  $$
    F = \biguplus_{j = 1}^m F_j.
  $$
  于是
  $$
  \begin{aligned}
    E \cap F &= \left( \biguplus_{i = 1}^n E_i \right) \cap \left( \biguplus_{j = 1}^m F_j \right) \\
    &= \biguplus_{i = 1}^n \biguplus_{j = 1}^m (E_i \cap F_j).
  \end{aligned}
  $$
  这是 $\mathcal{S}$ 中两两不相交的 $mn$ 个元素的并，因此 $E \cap F \in \mathcal{B}$．
- 任取 $E \in \mathcal{B}$，则存在两两不相交的 $E_1, \dots, E_n \in \mathcal{S}$ 使得
  $$
    E = \biguplus_{i = 1}^n E_i.
  $$
  对每个 $i \in \Set{1, \dots, n}$ 而言，根据半代数的定义，存在相应的两两不相交的 $E_{i, 1}, \dots, E_{i, m_i} \in \mathcal{S}$ 使得
  $$
    E_i^c = \biguplus_{j = 1}^{m_i} E_{i, j}
  $$
  因此
  $$
    \begin{aligned}
      E^c &= \left( \biguplus_{i = 1}^n E_i \right)^c = \bigcap_{i = 1}^n E_i^c \\
      &= \bigcap_{i = 1}^n \biguplus_{j = 1}^{m_i} E_{i, j} \\
      &= \biguplus_{j_1 = 1}^{m_1} \cdots \biguplus_{j_n = 1}^{m_n} \bigcap_{i = 1}^n E_{i, j_i},
    \end{aligned}
  $$
  这是 $\mathcal{S}$ 中 $m_1 \dots m_n$ 个两两不相交元素的并，因此 $E^c \in \mathcal{B}$．

{.decimal-parentheses}

综上所述 $\mathcal{B}$ 是代数．
:::
