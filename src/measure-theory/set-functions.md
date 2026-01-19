---
order: 3
---

# 集合函数（二）

为了定义 $\sigma$ 代数上的测度，我们一般会从半代数上的测度开始，将其逐步扩展到生成代数上的测度与生成 $\sigma$ 代数上的测度．
本节我们将半代数 $\mathcal{S}$ 上的（$\sigma$）可加函数扩张到生成代数 $\mathcal{A}(\mathcal{S})$ 上的（$\sigma$）可加函数．

本节依然假设全集为 $\Omega$．

::: definition#def:conitnuity-of-set-functions
设 $\mathcal{C} \subseteq \mathscr{P}(\Omega)$，$\mu : \mathcal{C} \to \overline{\mathbb{R}}_{+}$，$E \in \mathcal{C}$．

- 我们称 $\mu$ **在** $E$ **处是下连续的**（continuous from below at $E$），若对任意 $\mathcal{C}$ 中的单调递增集合列 $(E_n)_{n \geq 1}$，当 $E_n \uparrow E$ 时都有 $\mu(E_n) \to \mu(E)$．
- 我们称 $\mu$ **在** $E$ **处是上连续的**（continuous from above at $E$），若对任意 $\mathcal{C}$ 中的单调递减集合列 $(E_n)_{n \geq 1}$，当 $E_n \uparrow E$ 且存在某个正整数 $n_0$ 使得 $\mu(E_{n_0}) < \infty$ 时都有 $\mu(E_n) \to \mu(E)$．

{.decimal-parentheses}
:::

::: remark*
从上连续中的条件 $\mu(E_{n_0}) < \infty$ 非常重要．我们将[引言](./introduction)中表示长度的集合函数记作 $\lambda$．尽管我们尚未确定它的定义域是什么，但读者应当可以接受：对任意实数 $n$ 都有
$$
  \lambda\bigl( [n, \infty) \bigr) = \infty.
$$
定义集合列 $E_n := [n, \infty)$，则 $E_n \downarrow \emptyset$，但 $\lambda(E_n) = n \to \infty$ 而 $\lambda(\emptyset) = 0$．在正式定义 $\lambda$ 后我们会证明它是上连续的，其连续性不会考虑形如 $[n, \infty)$ 的集合列．
:::

对于可加函数，连续性是关联 $\sigma$ 可加性的重要性质．

::: lemma#lem:additive-set-function
设 $\mathcal{A}$ 是 $\Omega$ 上的代数，$\mu : \mathcal{A} \to \overline{\mathbb{R}}_{+}$ 是可加的，则

- 若 $\mu$ 是 $\sigma$ 可加的，则 $\mu$ 是连续的；
- 若 $\mu$ 是下连续的，则 $\mu$ 是 $\sigma$ 可加的；
- 若 $\mu$ 在 $\emptyset$ 处是上连续的，且 $\mu$ 是有限的（$\mu < \infty$），则 $\mu$ 是 $\sigma$ 可加的．

{.decimal-parentheses}
:::

::: proof

- 设 $\mu$ 是 $\sigma$ 可加的．
  - **下连续性**&emsp;任取 $E, E_1, E_2, \dots \in \mathcal{A}$ 并且 $E_n \uparrow E$．如果存在某个正整数 $n_0$ 使得 $\mu(E_{n_0}) = \infty$，则根据可加集合函数的单调性，对所有正整数 $n \geq n_0$ 都有 $\mu(E_n) = \mu(E) = \infty$，得证．若对所有正整数 $n$ 都有 $\mu(E_n) < \infty$，补充定义 $E_0 = \emptyset$，则对任意正整数 $k$ 可定义
    $$
      F_k := E_k \setminus E_{k - 1} \in \mathcal{A}.
    $$
    $F_1, F_2, \dots$ 是两两不相交的且
    $$
      E = \bigcup_{k \geq 1} E_k = \biguplus_{k \geq 1} F_k,
    $$
    故
    $$
    \begin{aligned}
      \mu(E) &= \mu\left( \sum_{k \geq 1} E_k \right) = \mu\left( \biguplus_{k \geq 1} F_k \right) \\
      &= \sum_{k \geq 1} \mu(F_k) \\
      &= \lim_{n \to \infty} \sum_{k = 1}^n \bigl( \mu(E_k) - \mu(E_{k - 1}) \bigr) \\
      &= \lim_{n \to \infty} \mu(E_n).
    \end{aligned}
    $$
  - **上连续性**&emsp;任取 $E, E_1, E_2, \dots \in \mathcal{A}$、$E_n \downarrow E$ 并且存在正整数 $n_0$ 使得 $\mu(E_{n_0}) < \infty$．对任意正整数 $k$ 可定义
    $$
      G_k := E_{n_0} \setminus E_{n_0 + k} \in \mathcal{A},
    $$
    则 $G_k \uparrow E_{n_0} \setminus E \in \mathcal{A}$．根据刚刚证明的下连续性，
    $$
      \mu(E_{n_0} \setminus E) = \lim_{n \to \infty} \mu(G_n),
    $$
    从而
    $$
      \mu(E_{n_0}) - \mu(E) = \lim_{n \to \infty} \bigl( \mu(E_{n_0}) - \mu(E_{n_0 + n}) \bigr),
    $$
    亦即
    $$
      \mu(E) = \lim_{n \to \infty} \mu(E_{n_0 + n}) = \lim_{n \to \infty} \mu(E_n).
    $$
- 设 $\mu$ 是下连续的．任取 $E \in \mathcal{A}$ 和两两不相交的 $E_1, E_2, \dots \in \mathcal{A}$ 且 $E = \biguplus_{k \geq 1} E_k$．对任意正整数 $n$，定义
  $$
    F_n := \biguplus_{k = 1}^n E_k \in \mathcal{A},
  $$
  则 $F_n \uparrow E$．根据下连续性，
  $$
    \lim_{n \to \infty} \mu(F_n) = \mu(E),
  $$
  亦即
  $$
    \sum_{k \geq 1} \mu(E_k) = \mu(E)
  $$
- 设 $\mu$ 是有限的且在 $\emptyset$ 处是上连续的．任取 $E \in \mathcal{A}$ 和两两不相交的 $E_1, E_2, \dots \in \mathcal{A}$ 且 $E = \biguplus_{k \geq 1} E_k$．对任意正整数 $n$ 可定义
  $$
    F_n := \biguplus_{k \geq n} E_k = E \setminus \biguplus_{j = 1}^{n - 1} E_j \in \mathcal{A}.
  $$
  显然 $F_n \downarrow \emptyset$ 且 $\mu(F_n) < \infty$，故根据上连续性可得
  $$
    \lim_{n \to \infty} \mu(F_n) = 0.
  $$
  根据 $\mu$ 的可加性，对任意正整数 $n$ 我们有
  $$
  \begin{aligned}
    \mu(E) &= \mu\left( \biguplus_{k = 1}^n E_k \cup \biguplus_{k \geq n + 1} E_k \right) \\
    &= \sum_{k = 1}^n \mu(E_k) + \mu(F_{n + 1}).
  \end{aligned}
  $$
  令 $n \to \infty$，由于 $\mu(F_{n + 1}) \to 0$，我们有
  $$
    \mu(E) = \sum_{k \geq 1} \mu(E_k).
  $$

{.decimal-parentheses}
:::


::: example
可加函数 $\mu$ 在 $\emptyset$ 处上连续时，通常要求 $\mu < \infty$ 才能保证 $\mu$ 是 $\sigma$ 可加的．考虑上一节中具有可加性但不具有 $\sigma$ 可加性的[例子](./classes-and-set-functions#ex:additive-but-not-sigma-additive)，读者可以验证它在 $\emptyset$ 处是上连续的，但由于 $\mu$ 可能取值 $\infty$，无法保证 $\sigma$ 可加性．
:::

现在我们将半代数上的可加集合函数扩张到对应的生成代数上．

::: theorem
设 $\mathcal{S}$ 是 $\Omega$ 上的半代数，$\mu : \mathcal{S} \to \overline{\mathbb{R}}_{+}$ 是可加的，则唯一存在可加的集合函数 $\nu : \mathcal{A}(\mathcal{S}) \to \overline{\mathbb{R}}_{+}$ 使得 $\nu|_{\mathcal{S}} = \mu$．
:::

::: proof
根据[引理](./classes-and-set-functions#lem:generated-algebra-of-semi-algebra)，所有 $A \in \mathcal{A}(\mathcal{S})$ 都可写成两两不相交的 $E_1, \dots, E_n \in \mathcal{S}$ 的并，即 $A = \biguplus_{j = 1}^n E_j$．我们定义
$$
\begin{aligned}
  \nu : \mathcal{A}(\mathcal{S}) &\to \overline{\mathbb{R}}_{+}, \\
  A &\mapsto \sum_{j = 1}^n \mu(E_j).
\end{aligned}
$$
由于表示 $A$ 的 $E_1, \dots, E_n$ 未必唯一，我们需要证明 $\nu$ 是良定义的．

- $\nu$ **是良定义的**&emsp;设 $E_1, \dots, E_n \in \mathcal{S}$ 两两不相交，$F_1, \dots, F_m \in \mathcal{S}$ 两两不相交，并且
  $$
    A = \biguplus_{j = 1}^n E_j = \biguplus_{k = 1}^m F_k.
  $$
  我们需要证明
  $$
    \sum_{j = 1}^n \mu(E_j) = \sum_{k = 1}^m \mu(F_k).
  $$
  对任意 $j \in \Set{1, \dots, n}$ 显然有
  $$
    E_j \subseteq A = \biguplus_{k = 1}^m F_k,
  $$
  因此
  $$
    E_j = E_j \cap A = \biguplus_{k = 1}^m (E_j \cap F_k).
  $$
  根据 $\mu$ 在 $\mathcal{S}$ 上的可加性可得
  $$
    \mu(E_j) = \sum_{k = 1}^m \mu(E_j \cap F_k).
  $$
  同理，对任意 $k \in \Set{1, \dots, m}$ 有
  $$
    \mu(F_k) = \sum_{j = 1}^n \mu(E_j \cap F_k).
  $$
  于是
  $$
    \sum_{j = 1}^n \mu(E_j) = \sum_{j = 1}^n \sum_{k = 1}^m \mu(E_j \cap F_k)
    = \sum_{k = 1}^m \mu(F_k).
  $$
- $\nu$ **是可加的**&emsp;任取 $A = \biguplus_{j = 1}^n E_j \in \mathcal{A}(\mathcal{S})$ 和 $B = \biguplus_{k = 1}^m F_k \in \mathcal{A}(\mathcal{S})$ 并且 $A \cap B = \emptyset$，我们需要证明 $\nu(A \uplus B) = \nu(A) + \nu(B)$．$A \cap B = \emptyset$ 表明对任意 $j \in \Set{1, \dots, n}$ 和 $k \in \Set{1, \dots, m}$ 都有 $E_j \cap F_k = \emptyset$，于是
  $$
    A \uplus B = \biguplus_{j = 1}^n E_j \uplus \biguplus_{k = 1}^m F_k,
  $$
  这是有限个 $\mathcal{S}$ 中两两不相交元素的并．根据 $\nu$ 的定义，
  $$
  \begin{aligned}
    \nu(A \uplus B) &= \sum_{j = 1}^n \mu(E_j) + \sum_{k = 1}^m \mu(F_k) \\
    &= \nu(A) + \nu(B).
  \end{aligned}
  $$
- $\nu$ **是唯一的**&emsp;假设 $\nu_1$ 和 $\nu_2$ 都是 $\mu$ 在 $\mathcal{A}(\mathcal{S})$ 的扩张，则对任意 $A = \biguplus_{j = 1}^n E_j \in \mathcal{A}(\mathcal{S})$，则根据 $\nu_1$ 和 $\nu_2$ 的可加性可得
  $$
  \begin{aligned}
    \nu_1(A) &= \sum_{j = 1}^n \nu_1(E_j), \\
    \nu_2(A) &= \sum_{j = 1}^n \nu_2(E_j).
  \end{aligned}
  $$
  由于 $\nu_1$ 和 $\nu_2$ 都是 $\mathcal{S}$ 的扩张，在 $\mathcal{S}$ 上相等，$\nu_1(A) = \nu_2(A)$．

{.decimal-parentheses}
:::

上述定理可扩展为 $\sigma$ 可加性．

::: theorem
设 $\mathcal{S}$ 是 $\Omega$ 上的半代数，$\mu : \mathcal{S} \to \overline{\mathbb{R}}_{+}$ 是 $\sigma$ 可加的，则唯一存在 $\sigma$ 可加的集合函数 $\nu : \mathcal{A}(\mathcal{S}) \to \overline{\mathbb{R}}_{+}$ 使得 $\nu|_{\mathcal{S}} = \mu$．
:::

::: proof
由于 $\mu$ 是可加的，上一定理证明过程中的 $\nu$ 是唯一满足可加性的扩张，我们证明其是 $\sigma$ 可加的．

任取 $A, A_1, A_2, \dots \in \mathcal{A}(\mathcal{S})$ 且 $A = \biguplus_{j \geq 1} A_j$．设
$$
  A = \biguplus_{j = 1}^n E_j, \quad E_j \in \mathcal{S}.
$$
对每个正整数 $k$，设
$$  
  A_k = \biguplus_{\ell = 1}^{n_k} E_{k, \ell}, \quad E_{k, \ell} \in \mathcal{S}.
$$
由于 $E_j \subseteq A$，我们有
$$
\begin{aligned}
  E_j &= E_j \cap A \\
  &= E_j \cap \left( \biguplus_{k \geq 1} A_k \right) \\
  &= E_j \cap \left( \biguplus_{k \geq 1} \biguplus_{\ell = 1}^{n_k} E_{k, \ell} \right) \\
  &= \biguplus_{k \geq 1} \biguplus_{\ell = 1}^{n_k}  (E_j \cap E_{k, \ell}).
\end{aligned}
$$
由于 $\mu$ 在 $\mathcal{S}$ 上是 $\sigma$ 可加的，我们有
$$
  \mu(E_j) = \sum_{k \geq 1} \sum_{\ell = 1}^{n_k} \mu(E_j \cap E_{k, \ell}).
$$
于是我们可展开 $\nu(A)$ 的定义：
$$
\begin{align*}
  \nu(A) &= \sum_{j = 1}^n \mu(E_j) \\
  &= \sum_{j = 1}^n \sum_{k \geq 1} \sum_{\ell = 1}^{n_k} \mu(E_j \cap E_{k, \ell}). \tag{$*$} 
\end{align*}
$$
此外，我们有
$$
\begin{aligned}
  E_{k, \ell} &= E_{k, \ell} \cap A \\
  &= E_{k, \ell} \cap \left( \biguplus_{j = 1}^n E_j \right) \\
  &= \biguplus_{j = 1}^n (E_{k, \ell} \cap E_j),
\end{aligned}
$$
因此
$$
  \mu(E_{k, \ell}) = \sum_{j = 1}^n \mu(E_j \cap E_{k, \ell}).
$$
将其带入公式 $(*)$ 可得
$$
  \nu(A) = \sum_{k \geq 1} \sum_{\ell = 1}^{n_k} \mu(E_{k, \ell}) = \sum_{k \geq 1} \nu(A_k),
$$
即 $\nu$ 是 $\sigma$ 可加的．

由于 $\nu$ 也是可加的，其唯一性由前一定理保证．
:::
