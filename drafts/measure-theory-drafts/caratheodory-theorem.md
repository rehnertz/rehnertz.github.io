---
order: 5
---

# Carathéodory 定理

我们[曾经](./set-functions)将半代数上的测度扩张到代数上，这一节则将代数上的测度扩张到 $\sigma$ 代数上，这依赖于 Carathéodory 定理．为此，我们首先要引入外测度，其定义域包括所有可能的集合，然后通过限制其定义域以保证 $\sigma$ 可加性．

本节依然假设全集为 $\Omega$．

::: definition#def:outer-measure
设 $\mathcal{C} \subseteq \mathscr{P}(\Omega)$ 且 $\emptyset \in \mathcal{C}$，$\mu : \mathcal{C} \to \overline{\mathbb{R}}_{+}$．我们称 $\mu$ 是 $\mathcal{C}$ 上的**外测度**（outer measure），若

- $\mu(\emptyset) = 0$，
- （单调性）对所有满足 $E \subseteq F$ 的 $E, F \in \mathcal{C}$ 都有 $\mu(E) \leq \mu(F)$，
- （$\sigma$ 次可加性）对任意一列集合 $E_1, E_2, \dots \in \mathcal{C}$ 以及 $E \in \mathcal{C}$，当 $E \subseteq \bigcup_{i \geq 1} E_i$ 时 都有 $\mu(E) \leq \sum_{i \geq 1} \mu(E_i)$．

{.decimal-parentheses}
:::

给定代数上的测度（$\sigma$ 可加函数），我们可以导出一个相应的外测度．

::: proposition
设 $\mathcal{A}$ 是 $\Omega$ 上的代数，$\nu : \mathcal{A} \to \overline{\mathbb{R}}_{+}$ 是 $\mathcal{A}$ 上的测度．定义 $\mathscr{P}(\Omega)$ 上的集合函数
$$
\begin{aligned}
  \pi^* : \mathscr{P}(\Omega) &\to \overline{\mathbb{R}}_{+}, \\
  A &\mapsto \inf \Set{ \sum_{i \geq 1}^{\phantom{n}} \nu(E_i) | E_1, E_2, \dots \subseteq \mathcal{A}, A \subseteq \bigcup_{i \geq 1} E_i },
\end{aligned}
$$
则 $\pi^*$ 是外测度．
:::

::: proof

- 由于 $\emptyset \subseteq \emptyset \cup \emptyset \cup \cdots$，$\pi^*(\emptyset) \leq \sum_{i \geq 1} \nu(\emptyset) = 0$．又显然 $\pi^* \geq 0$，故 $\pi^*(\emptyset) = 0$．
- 设 $E \subseteq F \subseteq \Omega$，则覆盖 $F$ 的集合列总是覆盖 $E$，因此覆盖 $E$ 的集合列只可能比 $F$ 更多，取下确界之后只可能更小，即 $\pi^*(E) \leq \pi^*(F)$．
- 设 $E_1, E_2, \dots \in \mathcal{A}$、$E \in \mathcal{A}$ 且 $E \subseteq \bigcup_{i \geq 1} E_i$．
  - 若某个 $E_i$ 满足 $\pi^*(E_i) = \infty$，则根据单调性得 $\pi^*(E) = \infty$，不等式平凡成立．
  - 若所有 $E_i$ 都满足 $\pi^*(E_i) < \infty$，根据 $\pi^*$ 的定义，对任意 $\varepsilon > 0$ 都存在一列 $H_{i, 1}, H_{i, 2}, \dots \in \mathcal{A}$ 使得 $E_i \subseteq \bigcup_{k \geq 1} H_{i, k}$ 且
    $$
      \pi^*(E_i) \leq \sum_{k \geq 1} \nu(H_{i, k}) < \pi^*(E_i) + \frac{\varepsilon}{2^i}.
    $$
    显然 $\Set{H_{i, k}}_{i \geq 1, k \geq 1}$ 覆盖 $E$，我们有
    $$
    \begin{aligned}
      \pi^*(E) &\leq \sum_{i \geq 1} \sum_{k \geq 1} \nu(H_{i, k}) \\
      &< \sum_{i \geq 1} \left( \pi^*(E_i) + \frac{\varepsilon}{2^i} \right) \\
      &= \sum_{i \geq 1} \pi^*(E_i) + \varepsilon.
    \end{aligned}
    $$
    令 $\varepsilon \to 0^{+}$ 即得到 $\sigma$ 次可加性．

{.decimal-parentheses}
:::

外测度定义在所有集合上，但我们知道有不可测集的存在，因此外测度不一定是测度．我们需要限制外测度的定义域，筛选出满足特定条件的“可测集”．

::: definition#def:measurable-sets
设 $\pi^* : \mathscr{P}(\Omega) \to \overline{\mathbb{R}}_{+}$ 是外测度，定义（关于 $\pi^*$ 的）可测集类为
$$
  \mathcal{M} := \Set{ A \subseteq \Omega | \forall E \subseteq \Omega : \\ \pi^*(E) = \pi^*(E \cap A) + \pi^*(E \cap A^c) },
$$
其中的元素称为（关于 $\pi^*$ 的）**可测集**（measurable set）．
:::

我们将证明 $\mathcal{M}$ 是 $\sigma$ 代数，且 $\pi^{*}|_{\mathcal{M}}$ 是测度，这也是“可测集”这个名称的由来．

::: remark*
对任意 $A, E \subseteq \Omega$，由于 $E = (E \cap A) \biguplus (E \cap A^c)$，根据外测度的 $\sigma$ 次可加性可得
$$
  \pi^*(E) \leq \pi^*(E \cap A) + \pi^*(E \cap A^c).
$$
因此要证明 $A$ 是可测的，只需证明对任意集合 $E$ 都有
$$
  \pi^*(E) \geq \pi^*(E \cap A) + \pi^*(E \cap A^c).
$$
:::

::: theorem
设 $\mathcal{A}$ 是 $\Omega$ 上的代数，$\nu : \mathcal{A} \to \overline{\mathbb{R}}_{+}$ 是 $\mathcal{A}$ 上的测度，$\pi^*$ 是 $\nu$ 所导出的外测度，对应的可测集类为 $\mathcal{M}$，则 $\mathcal{A} \subseteq \mathcal{M}$．换言之 $\mathcal{A}$ 中的元素均可测．
:::

::: proof
任取 $A \in \mathcal{A}$ 和 $E \subseteq \Omega$，我们需要证明
$$
  \pi^*(E) \geq \pi^*(E \cap A) + \pi^*(E \cap A^c).
$$
当 $\pi^*(E) = \infty$ 时改不等式平凡成立，因此下设 $\pi^*(E) < \infty$．此时对任意 $\varepsilon > 0$ 都可找到 $E$ 的覆盖 $E_1, E_2, \dots \in \mathcal{A}$ 使得
$$
  \pi^*(E) \leq \sum_{i \geq 1} \nu(E_i) < \pi^*(E) + \varepsilon.
$$
对任意 $E_i$，我们有 $E_i \cap A \in \mathcal{A}$ 且 $\Set{E_i \cap A}_{i \geq 1}$ 覆盖 $E \cap A$，因此
$$
  \pi^*(E \cap A) \leq \sum_{i \geq 1} \nu(E_i \cap A).
$$
同理
$$
  \pi^*(E \cap A^c) \leq \sum_{i \geq 1} \nu(E_i \cap A^c).
$$
根据 $\nu$ 的可加性得到
$$
\begin{aligned}
  & \pi^*(E \cap A) + \pi^*(E \cap A^c) \\
  \leq{}& \sum_{i \geq 1} \bigl( \nu(E_i \cap A) + \nu(E_i \cap A^c) \bigr) \\
  ={}& \sum_{i \geq 1} \nu(E_i) \\
  <{}& \pi^*(E) + \varepsilon.
\end{aligned}
$$
令 $\varepsilon \to 0^{+}$ 即得证．
:::

::: theorem
设 $\pi^* : \mathscr{P}(\Omega) \to \overline{\mathbb{R}}_{+}$ 是外测度，则对应的可测集类 $\mathcal{M}$ 是 $\sigma$ 代数．
:::

::: proof

- 对任意 $E \subseteq \Omega$ 有 $E \cap \Omega = E$ 且 $E \cap \Omega^c = \emptyset$，自然有
  $$
    \pi^*(E) = \pi^*(E \cap \Omega) + \pi^*(E \cap \Omega^c),
  $$
  故 $\Omega \in \mathcal{M}$．
- 任取 $A \in \mathcal{M}$，根据可测集的定义中的对称性，自然有 $A^c \in \mathcal{M}$．
- 为证明 $\mathcal{M}$ 是 $\sigma$ 代数，我们首先证明它是代数．
  - 任取 $A, B \in \mathcal{M}$，欲证 $A \cup B \in \mathcal{M}$，即证对任意 $E \subseteq \Omega$ 都有
    $$
      \pi^*(E) \geq \pi^*\bigl( E \cap (A \cup B) \bigr) + \pi^*\bigl( E \cap (A \cup B)^c \bigr).
    $$
    由于 $A \in \mathcal{M}$，我们有
    $$
      \pi^*(E) = \pi^*(E \cap A) + \pi^*(E \cap A^c).
    $$
    类似地，由于 $B \in \mathcal{M}$，用 $E \setminus A$ 代替 $E$，得到
    $$
      \pi^*(E \setminus A) = \pi^*\bigl( (E \setminus A) \cap B \bigr) + \pi^*\bigl( (E \setminus A) \cap B^c \bigr).
    $$
    于是
    $$
    \begin{aligned}
      \pi^*(E) &= \pi^*(E \cap A) + \pi^*\bigl( (E \setminus A) \cap B \bigr) + \pi^*\bigl( (E \setminus A) \cap B^c \bigr) \\
      &= \pi^*(E \cap A) + \pi^*\bigl( (E \setminus A) \cap B \bigr) + \pi^*\bigl( E \setminus (A \cup B) \bigr).
    \end{aligned}
    $$
    欲证 $\mathcal{M}$ 是代数，只需证明
    $$
      \pi^*(E \cap A) + \pi^*\bigl( (E \setminus A) \cap B \bigr) \geq \pi^*\bigl( E \cap (A \cup B) \bigr).
    $$
    根据 $\sigma$ 次可加性，只需证明
    $$
      E \cap (A \cup B) \subseteq (E \cap A) \cup \bigl( (E \setminus A) \cap B \bigr).
    $$
    容易验证
    $$
      E \cap A = \bigl[ E \cap (A \cup B) \bigr] \cap A
    $$
    且
    $$
      (E \setminus A) \cap B = \bigl[ E \cap (A \cup B) \bigr] \cap A^c,
    $$
    从而得证．
  - 我们证明一个中间引理．设 $F_1, \dots, F_n \in \mathcal{M}$ 两两不相交，则对任意 $E \subseteq \Omega$ 都有
    $$
      \pi^*\left( E \cap \biguplus_{j = 1}^n F_j \right) = \sum_{j = 1}^n \pi^*(E \cap F_j).
    $$
    当 $n = 1$ 是上式是恒等式．假设该等式对 $n$ 成立，则对于 $n + 1$ 的情形，由于 $F_1, \dots, F_{n + 1}$ 两两不相交，容易验证
    $$
      E \cap \biguplus_{j = 1}^{n + 1} F_j \cap F_{n + 1} = E \cap F_{n + 1}
    $$
    且
    $$
      E \cap \biguplus_{j = 1}^{n + 1} F_j \cap F_{n + 1}^c = E \cap \biguplus_{j = 1}^n F_j,
    $$
    于是
    $$
    \begin{aligned}
      & \pi^*\left( E \cap \biguplus_{j = 1}^{n + 1} F_j \cap F_{n + 1} \right) + \pi^*\left( E \cap \biguplus_{j = 1}^{n + 1} F_j \cap F_{n + 1}^c \right) \\
      ={}& \pi^*(E \cap F_{n + 1}) + \pi^*\left( E \cap \biguplus_{j = 1}^n F_j \right) \\
      ={}& \pi^*(E \cap F_{n + 1}) + \sum_{j = 1}^n \pi^*(E \cap F_j) \\
      ={}& \sum_{j = 1}^{n + 1} \pi^*(E \cap F_j).
    \end{aligned}
    $$
  - 下面证明 $\sigma$ 代数．设 $A_1, A_2, \dots \in \mathcal{M}$，$A = \bigcup_{j \geq 1} A_j$，我们需要证明 $A \in \mathcal{M}$，即对任意 $E \subseteq \Omega$ 都有
    $$
      \pi^*(E) \geq \pi^*(E \cap A) \cup \pi^*(E \setminus A).
    $$
    由于 $\mathcal{M}$ 是代数，对任意正整数 $n$ 都有
    $$
      \pi^*(E) = \pi^*\left( E \cap \bigcup_{j = 1}^n A_j \right) + \pi^*\left( E \setminus \bigcup_{j = 1}^N A_j \right).
    $$
    由于 $E \setminus A \subseteq E \setminus \bigcup_{j = 1}^n A_j$，
    $$
      \pi^*(E) \geq \pi^*\left( E \cap \bigcup_{j = 1}^n A_j \right) + \pi^*(E \setminus A).
    $$
    定义 $F_n := A_n \setminus \bigcup_{j = 1}^{n - 1} A_j \in \mathcal{M}$，则
    $$
      A = \bigcup_{j = 1}^n A_j = \biguplus_{j = 1}^n F_j.
    $$
    于是
    $$
    \begin{aligned}
      \pi^*(E) &\geq \pi^*\left( E \cap \biguplus_{j = 1}^n F_j \right) + \pi^*(E \setminus A) \\
      &= \sum_{j = 1}^n \pi^*(E \cap F_j) + \pi^*(E \setminus A).
    \end{aligned}
    $$
    令 $n \to \infty$ 可得
    $$
      \pi^*(E) \geq \sum_{j \geq 1} \pi^*(E \cap F_j) + \pi^*(E \setminus A).
    $$
    由 $\sigma$ 次可加性得
    $$
    \begin{aligned}
      \pi^*(E) &\geq \pi^*\left( E \cap \biguplus_{j \geq 1} F_j \right) + \pi^*(E \setminus A) \\
      &= \pi^*(E \cap A) + \pi^*(E \setminus A).
    \end{aligned}
    $$

{.decimal-parentheses}
:::

由以上两个定理立刻知道代数的生成 $\sigma$ 代数是可测的．

::: corollary
设 $\mathcal{A}$ 是 $\Omega$ 上的代数，$\nu : \mathcal{A} \to \overline{\mathbb{R}}_{+}$ 是 $\mathcal{A}$ 上的测度，$\pi^*$ 是 $\nu$ 所导出的外测度，对应的可测集类为 $\mathcal{M}$，则 $\mathcal{F}(\mathcal{A}) \subseteq \mathcal{M}$．换言之 $\mathcal{F}(\mathcal{A})$ 中的元素均可测．
:::

下面我们证明外测度 $\pi^*$ 限制在可测集类 $\mathcal{M}$ 上时是 $\sigma$ 可加的，且是 $\nu$ 的扩张．

::: theorem
设 $\mathcal{A}$ 是 $\Omega$ 上的代数，$\nu : \mathcal{A} \to \overline{\mathbb{R}}_{+}$ 是 $\mathcal{A}$ 上的测度，$\pi^*$ 是 $\nu$ 所导出的外测度，对应的可测集类为 $\mathcal{M}$，则 $\pi^*|_{\mathcal{M}}$ 是 $\sigma$ 可加的（从而是 $\mathcal{M}$ 上的测度），并且 $\pi^*|_{\mathcal{A}} = \nu$．
:::

::: proof
- 我们首先证明 $\pi^*|_{\mathcal{A}} = \nu$．任取 $A \in \mathcal{A}$，根据 $\pi^*$ 的定义有
  $$
    \pi^*(A) \leq \nu(A).
  $$
  对任意一列覆盖 $A$ 的集合 $E_1, E_2, \dots \in \mathcal{A}$，定义
  $$
    F_n := E_n \setminus \bigcup_{j = 1}^{n - 1} E_j \in \mathcal{A},
  $$
  则 $\bigcup_{j \geq 1} E_j = \biguplus_{j \geq 1} F_j$．显然
  $$
    A = \biguplus_{j \geq 1} (F_j \cap A),
  $$
  根据 $\nu$ 的 $\sigma$ 可加性得到
  $$
  \begin{aligned}
    \nu(A) &= \sum_{j \geq 1} \nu(F_j \cap A) \\
    &\leq \sum_{j \geq 1} \nu(F_j) \\
    &\leq \sum_{j \geq 1} \nu(E_j).
  \end{aligned}
  $$
  于是 $\nu(A) \leq \pi^*(A)$．
- 下面证明 $\pi^*|_{\mathcal{M}}$ 是 $\sigma$ 可加的．任取两两不相交的 $A_1, A_2, \dots \in \mathcal{M}$，结合 $\sigma$ 次可加性，我们只需证明
  $$
    \pi^*\left( \biguplus_{j \ge 1} A_j \right) \geq \sum_{j \geq 1} \pi^*(A_j).
  $$
  为此，只需证明对任意正整数 $n$ 都有
  $$
    \pi^*\left( \biguplus_{j \ge 1} A_j \right) \geq \sum_{j = 1}^n \pi^*(A_j),
  $$
  然后令 $n \to \infty$．根据前一定理的证明过程，我们有
  $$
    \pi^*\left( \biguplus_{j = 1}^n A_j \right) = \sum_{j = 1}^n \pi^*(A_j).
  $$
  结合 $\pi^*$ 的单调性即得证．
:::

最后，我们证明 $\nu : \mathcal{A} \to \overline{\mathbb{R}}_{+}$ 到 $\mathcal{F}(\mathcal{A})$ 上的扩张（在一定条件下）是唯一的，也就是 $\pi^*|_{\mathcal{F}(\mathcal{A})}$．

::: theorem
设 $\mathcal{A}$ 是 $\Omega$ 上的代数，$\nu : \mathcal{A} \to \overline{\mathbb{R}}_{+}$ 是 $\mathcal{A}$ 上的测度．若 $\Omega$ 关于 $\nu$ 是 $\sigma$ 有限的，即

- 存在一列 $E_1, E_2, \dots \in \mathcal{A}$ 使得 $\nu(E_j) < \infty$ 对所有 $j$ 成立且 $\Omega = \bigcup_{j \ge 1} E_j$，

则 $\nu$ 在 $\mathcal{F}(\mathcal{A})$ 上的扩张是唯一的．换言之，若 $\nu_1, \nu_2 : \mathcal{F}(\mathcal{A}) \to \overline{\mathbb{R}}_{+}$ 是测度且 $\nu_1|_{\mathcal{A}} = \nu_2|_{\mathcal{A}}$，则 $\nu_1 = \nu_2$．
:::

::: proof

:::
