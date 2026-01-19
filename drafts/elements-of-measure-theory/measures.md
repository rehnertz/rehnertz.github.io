---
article: false
order: 2
---

# 测度

上一节我们主要关注测度的定义域：$\sigma$ 代数．这一节我们正式引入测度，并研究其性质．

在本节中，我们约定：

- $X$ 是非空集合；
- $[0, \infty] := \mathbb{R}^+ \cup \{\infty\}$；
- $\mathbb{K}$ 是实数域 $\mathbb{R}$ 或复数域 $\mathbb{C}$．

## 集合函数

设 $\mathcal{C}$ 是 $X$ 的子集构成的集合族且 $\emptyset \in \mathcal{C}$，$\varphi$ 是从 $\mathcal{C}$ 到 $[0, \infty]$ 的映射——或称为**集合函数**（set function），且满足 $\varphi(\emptyset) = 0$．若对 $\mathcal{C}$ 中所有的序列 $(A_j)$，当 $\bigcup_j A_j \in \mathcal{C}$ 时都有
$$
  \varphi\left( \bigcup_j A_j \right) \leq \sum_j \varphi(A_j),
$$
则称 $\varphi$ 是 **次** $\boldsymbol{\sigma}$ **可加的**（$\sigma$-subadditive）．

设 $\varphi$ 是从 $\mathcal{C}$ 到 $[0, \infty]$ 或 $\mathbb{K}$ 的映射且 $\varphi(\emptyset)$．若对 $\mathcal{C}$ 中的每个两两不相交的序列 $(A_j)$ 都有
$$
  \varphi\left( \bigcup_j A_j \right) = \sum_j \varphi(A_j),
$$
则称 $\varphi$ 是 $\boldsymbol{\sigma}$ **可加的**（$\sigma$-additive）．

对于以上两个定义，若将序列 $(A_j)$ 改为有限多个 $\mathcal{C}$ 中的集合 $A_0, \dots, A_m$，则相应的性质分别称为**次可加性**（subadditivity）和**可加性**（additivity）．

设 $\varphi : \mathcal{C} \to [0, \infty]$，$X \in \mathcal{C}$．若存在 $\mathcal{C}$ 中的序列 $(A_j)$ 使得 $X = \bigcup_j A_j$ 且对每个 $j \in \mathbb{N}$ 都有 $\varphi(A_j) < \infty$，则称 $\varphi$ 是 $\boldsymbol{\sigma}$ **有限的**（$\sigma$-finite）．若进一步 $\varphi(X) < \infty$，则称 $\varphi$ 是**有限的**（finite）．

;;; remarks
$\mathrm{(a)}$ $\sigma$ 可加的集合函数都是可加的．$\sigma$ 次可加的集合函数都是次可加的．

$\mathrm{(b)}$ 设 $\varphi$ 是从 $\mathcal{C}$ 到 $[0, \infty]$（或 $\mathbb{K}$）的 $\sigma$ 可加映射．若 $(A_j) \in \mathcal{C}^\mathbb{N}$ 两两不相交且 $\bigcup_j A_j \in \mathcal{C}$，则级数 $\sum_j \varphi(A_j)$ 在 $[0, \infty]$（或 $\mathbb{K}$）中**绝对收敛**（absolutely convergent）——任意交换求和顺序不改变求和结果．

::: proof
$\varphi(\bigcup_j A_j)$ 的值与 $A_j$ 的顺序无关．
:::

$\mathrm{(c)}$ 映射
$$
\begin{aligned}
  \mathfrak{P}(X) &\to [0, \infty], \\
  A &\mapsto \begin{cases}
    1, & A \neq \emptyset, \\
    0, & A = \emptyset
  \end{cases}
\end{aligned}
$$
是次 $\sigma$ 可加的，且它是 $\sigma$ 可加的当且仅当 $X$ 是单元素集合．
;;;

## 测度空间

设 $\mathcal{A}$ 是 $X$ 上的 $\sigma$ 代数，$\mu : \mathcal{A} \to [0, \infty]$ 是 $\sigma$ 可加的，则称 $\mu$ 是 $X$（或 $\mathcal{A}$）上的（正）**测度**（measure），并称 $(X, \mathcal{A}, \mu)$ 为**测度空间**（measure space）．若 $\mu(X) = 1$，则我们也称 $\mu$ 是**概率测度**（probability measure），并称 $(X, \mathcal{A}, \mu)$ 为**概率空间**（probability space）．

;;; examples
$\mathrm{(a)}$ 给定 $a \in X$，对 $A \subseteq X$，定义
$$
  \delta_a(A) := \begin{cases}
    1, & a \in A, \\
    0, & a \notin A,
  \end{cases}
$$
则 $\delta_a : \mathfrak{P}(X) \to [0, \infty]$ 是概率测度，称为 $\boldsymbol{X}$ **上在** $\boldsymbol{a}$ **处的 Dirac 测度**（Dirac measure on $X$ at $a$）．

$\mathrm{(b)}$ 对 $A \subseteq X$，定义 $\mathcal{H}^0(A) := \operatorname{Num}(A)$（记号 $\mathcal{H}^0$ 会在介绍 Hausdorff 测度时展开），则 $\mathcal{H}^0 : \mathfrak{P}(X) \to [0, \infty]$ 是测度，称为 $X$ 上的**计数测度**（counting measure）．$\mathcal{H}^0$ 是有限的（或 $\sigma$ 有限的）当且仅当 $X$ 是有限集（或可数集）．

$\mathrm{(c)}$ 对 $A \subseteq X$，当 $A = \emptyset$ 时令 $\mu(A) := 0$，其余情况令 $\mu(A) := \infty$，则 $(X, \mathfrak{P}(X), \mu)$ 是测度空间．

$\mathrm{(d)}$ 设 $(X, \mathcal{A}, \mu)$ 是测度空间．取 $A \in \mathcal{A}$，则 $(A, \mathcal{A}|A, \mu|A)$ 也是测度空间．
;;;

## 测度的性质

::: proposition
设 $(X, \mathcal{A}, \mu)$ 是测度空间．对于 $A, B \in \mathcal{A}$ 和 $(A_j) \in \mathcal{A}^\mathbb{N}$，我们有

$\mathrm{\ \ (i)}$ $\mu(A \cup B) + \mu(A \cap B) = \mu(A) + \mu(B)$．
$\mathrm{\ (ii)}$ 若 $A \subseteq B$ 且 $\mu(A) < \infty$，则 $\mu(B \setminus A) = \mu(B) - \mu(A)$．
$\mathrm{(iii)}$ $\mu$ 是递增的：$A \subseteq B \implies \mu(A) \leq \mu(B)$．
$\mathrm{(iv)}$ 若 $A_0 \subseteq A_1 \subseteq A_2 \subseteq \cdots$，则 $\mu(A_k) \uparrow \mu(\bigcup_j A_j)$．
$\mathrm{\ (v)}$ 若 $A_0 \supseteq A_1 \supseteq A_2 \supseteq \cdots$ 且 $\mu(A_0) < \infty$，则 $\mu(A_k) \downarrow \mu(\bigcup_j A_j)$．
$\mathrm{(vi)}$ $\mu$ 是次 $\sigma$ 可加的：$\mu(\bigcup_j A_j) \leq \sum_j \mu(A_j)$．
:::

::: proof
$\mathrm{(i)}$ 由于 $A \cup B = A \cup (B \setminus A)$ 且 $A \cap (B \setminus A) = \emptyset$，根据测度的可加性有
$$
  \mu(A \cup B) = \mu(A) + \mu(B \setminus A).
$$
类似地，由于 $B = (A \cap B) \cup (B \setminus A)$ 且 $(A \cap B) \cap (B \setminus A) = \emptyset$，
$$
  \mu(A \cap B) + \mu(B \setminus A) = \mu(B).
$$
将以上二式求和可得
$$
  \mu(A \cup B) + \mu(A \cap B) + \mu(B \setminus A) = \mu(A) + \mu(B) + \mu(B \setminus A).
$$
若 $\mu(B \setminus A) < \infty$，则两侧减去 $\mu(B \setminus A)$ 即的待证命题．若 $\mu(B \setminus A) = \infty$，则 $\mu(A \cup B) = \mu(B) = \infty$，待证命题也成立．

$\mathrm{(ii)}$ 由 $A \subseteq B$ 得 $B = A \cup (B \setminus A)$．由于 $A$ 和 $B \setminus A$ 不相交，$\mu(B) = \mu(A) + \mu(B \setminus A)$．由于 $\mu(A) < \infty$，可移项得到 $\mu(B) - \mu(A) = \mu(B \setminus A)$．

$\mathrm{(iii)}$ 由 $\mathrm{(ii)}$ 以及 $\mu \geq 0$ 可得 $\mu(B) \geq \mu(A)$．

$\mathrm{(iv)}$ 令 $A_{-1} := \emptyset$，并对 $k \in \mathbb{N}$ 令 $B_k := A_k \setminus A_{k - 1}$，则 $(B_k)$ 是 $\mathcal{A}$ 中两两不相交的序列，并且 $\bigcup_{k = 0}^\infty B_k = \bigcup_{j = 0}^\infty A_j$，此外 $\bigcup_{k = 0}^m B_k = A_m$．由 $\mu$ 的 $\sigma$ 可加性得
$$
\begin{aligned}
  \mu\left( \bigcup_j A_j \right)
  &= \mu\left( \bigcup_k B_k \right) \\
  &= \lim_{m \to \infty} \sum_{k = 0}^m \mu(B_k) \\
  &= \lim_{m \to \infty} \mu\left( \bigcup_{k = 0}^m B_k \right) \\
  &= \lim_{m \to \infty} \mu(A_m).
\end{aligned}
$$

$\mathrm{(v)}$ 若 $(A_k)$ 是 $\mathcal{A}$ 中的递减序列，则 $(A_0 \setminus A_k)$ 是 $\mathcal{A}$ 中的递增序列．此外
$$
\begin{aligned}
  A_0 \setminus \bigcap_k A_k
  &= A_0 \cap \left( \bigcap_k A_k \right)^c \\
  &= \bigcup_k (A_0 \cap A_k^c) \\
  &= \bigcup_k (A_0 \setminus A_k).
\end{aligned}
$$
于是
$$
\begin{aligned}
  \mu(A_0) - \mu\left( \bigcap_k A_k \right)
  &= \mu\left( A_0 \setminus \bigcap_k A_k \right) \\
  &= \mu\left( \bigcup_k (A_0 \setminus A_k) \right) \\
  &= \lim_{m \to \infty} \mu(A_0 \setminus A_m) \\
  &= \mu(A_0) - \lim_{m \to \infty} \mu(A_m).
\end{aligned}
$$

$\mathrm{(vi)}$ 令 $B_0 := A_0$，并对 $k \in \mathbb{N}^\times$ 令 $B_k := A_k \setminus (\bigcup_{j = 0}^{k - 1} A_j)$．序列 $(B_k)$ 满足 $\bigcup_k B_k = \bigcup_j A_j$ 且对 $k \in \mathbb{N}$ 有 $B_k \subseteq A_k$．根据 $\mathrm{(iii)}$ 和 $\mu$ 的 $\sigma$ 可加性可得
$$
  \mu\left( \bigcup_k A_k \right)
  = \mu\left( \bigcup_k B_k \right)
  = \sum_k \mu(B_k)
  \leq \sum_k \mu(A_k).
$$
:::

;;; remarks
$\mathrm{(a)}$ 以上命题中 $\mathrm{(iv)}$ 和 $\mathrm{(v)}$ 所描述的性质分别称为测度的**下方连续性**（continuity from below）和**上方连续性**（continuity from above）．

$\mathrm{(b)}$ 当 $\mathcal{A}$ 是代数时，$\mathrm{(i)\text{--}(iii)}$ 依然成立，且 $\mu : \mathcal{A} \to [0, \infty]$ 是可加的．

$\mathrm{(c)}$ 若 $\mathcal{S}$ 是 $X$ 上的代数且 $\mu : \mathcal{S} \to [0, \infty]$ 是可加的、单调的、$\sigma$ 有限的，则存在 $\mathcal{S}$ 中的两两不相交序列 $(B_k)$ 使得 $\bigcup_k B_k = X$ 且对 $k \in \mathbb{N}$ 都有 $\mu(B_k) < \infty$．

::: proof
根据 $\mu$ 的 $\sigma$ 有限性，存在 $\mathcal{S}$ 中的序列 $(A_j)$ 使得 $\bigcup_j A_j = X$ 且对所有 $j \in \mathbb{N}$ 都有 $\mu(A_j) < \infty$．令 $B_0 := A_0$，并对 $k \in \mathbb{N}^\times$ 令 $B_k := A_k \setminus \bigcup_{j = 0}^{k - 1} A_j$，则 $(B_k)$ 就是符合条件的序列．
:::

;;;


## 零测集

设 $(X, \mathcal{A}, \mu)$ 是测度空间，$N \in \mathcal{A}$．若 $\mu(N) = 0$，则称 $N$ 是 $\boldsymbol{\mu}$ **零测的**（$\mu$-null）．所有 $\mu$ 零测集构成的集合记作 $\mathcal{N}_\mu$．若所有的 $\mu$ 零测集的子集都在 $\mathcal{A}$ 中，则称测度空间 $(X, \mathcal{A}, \mu)$ 或测度 $\mu$ 是**完备的**（complete）．

;;; remarks
$\mathrm{(a)}$ 若 $M \in \mathcal{A}$、$N \in \mathcal{N}_\mu$ 且 $M \subseteq N$，则 $M \in \mathcal{N}_\mu$．

::: proof
由 $\mu$ 的单调性得到．
:::

$\mathrm{(b)}$ 可数个 $\mu$ 零测集的并是 $\mu$ 零测集．

::: proof
由 $\mu$ 的次 $\sigma$ 可加性得到．
:::

$\mathrm{(c)}$ 测度 $\mu$ 是完备的当且仅当 $\mu$ 零测集的每个子集都是 $\mu$ 零测集．

$\mathrm{(d)}$ 若 $A = \mathfrak{P}(X)$，则 $\mu$ 是完备的．例如 Dirac 测度和计数测度就是完备的．
;;;

我们将所有 $\mu$ 零测集的子集构成的集合族记作
$$
  \mathcal{M}_\mu := \{ M \subseteq X \;|\; \exists N \in \mathcal{N}_\mu : M \subseteq N \}.
$$
显然 $\mu$ 是完备的当且仅当 $\mathcal{M}_\mu \subseteq \mathcal{A}$．于是对任意非完备的测度 $\mu$，我们可以将其定义域扩充为
$$
  \overline{\mathcal{A}}_\mu := \{ A \cup M \;|\; A \in \mathcal{A}, M \in \mathcal{M}_\mu \},
$$
从而得到 $\mu$ 的完备化测度 $\overline{\mu} : \overline{\mathcal{A}} \to [0, \infty]$．当然，严格来说我们需要证明 $\overline{\mu}$ 确实是测度．

::: proposition
设 $(X, \mathcal{A}, \mu)$ 是测度空间．

$\mathrm{(a)}$ 对 $A \in \mathcal{A}$ 和 $M \in \mathcal{M}_\mu$，定义 $\overline{\mu}(A \cup M) := \mu(A)$，则 $\overline{\mu}$ 是 $\overline{\mathcal{A}}_\mu$ 上良定义的集合函数，且 $(X, \overline{\mathcal{A}}_\mu, \overline{\mu})$ 是完备测度空间，$\overline{\mu} \supseteq \mu$（$\overline{\mu}$ 是 $\mu$ 的扩张）．

$\mathrm{(b)}$ 若 $(X, \mathcal{B}, \nu)$ 是完备测度空间且 $\nu \supseteq \mu$，则 $\nu \supseteq \overline{\mu}$．
:::

::: proof
$\mathrm{(i)}$ 我们首先证明 $\overline{\mathcal{A}}_\mu$ 是 $\sigma$ 代数．
:::
