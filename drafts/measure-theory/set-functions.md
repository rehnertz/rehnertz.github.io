---
order: 3
---

# 集合函数

如[引言](./introduction)所述，测度的定义域是集合系——集合的集合，这样的函数称为**集合函数**（set function）．本节我们研究集合函数的性质．

::: definition#def:additivity
设 $\Omega$ 是集合，$\mathcal{C} \subseteq \mathscr{P}(\Omega)$，$\emptyset \in \mathcal{C}$，$\mu : \mathcal{C} \to [0, \infty]$．

我们称 $\mu$ 是**可加的**（additive），若

- $\mu(\emptyset) = 0$；
- 对任意两两不相交的有限多个集合 $E_1, \dots, E_n \in \mathcal{C}$ 而言，当 $\biguplus_{i = 1}^n E_i \in \mathcal{C}$ 时都有
  $$
    \mu\left( \biguplus_{i = 1}^n E_i \right) = \sum_{i = 1}^n \mu(E_i).
  $$

{.decimal-parentheses}

我们称 $\mu$ 是 $\boldsymbol{\sigma}$ **可加的**（或**可列可加的**，$\sigma$-additive），若

- $\mu(\emptyset) = 0$；
- 对任意两两不相交的可数多个集合 $E_1, E_2, \dots \in \mathcal{C}$ 而言，当 $\biguplus_{i = 1}^\infty E_i \in \mathcal{C}$ 时都有
  $$
    \mu\left( \biguplus_{i = 1}^\infty E_i \right) = \sum_{i = 1}^n \mu(E_i).
  $$

{.decimal-parentheses}

$\sigma$ 可加的集合函数 $\mu : \mathcal{C} \to [0, \infty]$ 也称为 $\mathcal{C}$ 上的**测度**（measure）．
:::

显然 $\sigma$ 可加的集合函数是可加的．事实上，若 $\emptyset$ 在 $\mu$ 的定义域中，则当 $\mu$ 可加时对所有 $A \in \mathcal{C}$ 都有
$$
  \mu(A) = \mu(A) + \mu(\emptyset).
$$
因此除非 $\mu$ 是常值函数 $\infty$，否则必然有 $\mu(\emptyset) = 0$．

我们给出可加函数（在一定条件下的）的单调性与可减性．

::: proposition
设 $\Omega$ 是集合，$\mathcal{C} \subseteq \mathscr{P}(\Omega)$，$\mu : \mathcal{C} \to [0, \infty]$ 是可加的．若 $A, B \in \mathcal{C}$、$A \subseteq B$ 且 $B \setminus A \in \mathcal{C}$，则 $\mu$ 满足单调性，即 $\mu(A) \leq \mu(B)$．若进一步有 $\mu(A) < \infty$，则 $\mu$ 满足可减性：
$$
  \mu(B \setminus A) = \mu(B) - \mu(A).
$$
:::

::: proof
由 $A \subseteq B$ 得到
$$
  B = A \uplus (B \setminus A),
$$
因此
$$
  \mu(B) = \mu(A) + \mu(B \setminus A).
$$
由于 $\mu \geq 0$，$\mu(B) \geq \mu(A)$．

若 $\mu(A) \neq \infty$，则移项后得到
$$
  \mu(B \setminus A) = \mu(B) - \mu(A).
$$
:::

如果 $\mathcal{C}$ 对集合差运算封闭（例如 $\mathcal{C}$ 为代数），则其上的可加集合函数必然有单调性，即对所有的 $A, B \in \mathcal{C}$ 都有
$$
  A \subseteq B \implies \mu(A) \leq \mu(B).
$$

对任意集合 $A \subseteq \Omega$，定义**指示函数**（indicator function）$1_A : \Omega \to \Set{0, 1}$ 为
$$
  1_A(x) := \begin{cases}
    0, & x \notin A, \\
    1, & x \in A.
  \end{cases}
$$

