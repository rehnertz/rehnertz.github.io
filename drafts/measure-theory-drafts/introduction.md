---
order: 1
---

# 引言：不可测集

对于直线 $\mathbb{R}$ 上的区间 $(a, b]$，我们将其长度用 $\lambda\bigl( (a, b] \bigr)$ 表示．按照直觉，这个区间的长度应该是
$$
  \lambda\bigl( (a, b] \bigr) = b - a.
$$
这样的函数 $\lambda$ 只能定义在所有的左开右闭区间上，我们希望将定义域其扩展到整个直线 $\mathbb{R}$ 上，以用数学语言严格定义“长度”这一概念．由于 $\mathbb{R}$ 本身的长度显然是无穷的，这样的函数值域应当包含 $\infty$．

若记 $\overline{\mathbb{R}}_{+} := [0, \infty]$，并以 $\mathscr{P}(\mathbb{R})$ 表示 $\mathbb{R}$ 的幂集——所有 $\mathbb{R}$ 的子集构成的集合，则我们希望定义一个函数 $\lambda : \mathscr{P}(\mathbb{R}) \to \overline{\mathbb{R}}_{+}$，它具有以下性质（它们是根据直觉所总结的“长度”应满足的性质）：

- $\lambda(\emptyset) = 0$；
- 对于 $a < b$ 有 $\lambda\bigl( (a, b] \bigr) = b - a$；
- 对任意 $A \subseteq \mathbb{R}$ 和 $x \in \mathbb{R}$ 都有 $\lambda(A + x) = \lambda(A)$，其中
  $$
    A + x := \Set{ a + x | a \in A }.
  $$
  这一性质经常称为**平移不变性**．
- 若 $A_1, A_2, \dots$ 是 $\mathbb{R}$ 的两两不相交子集——亦即对任意不同的正整数 $i$ 和 $j$ 都有 $A_i \cap A_j = \emptyset$，$A = \bigcup_{j \geq 1} A_j$，则
  $$
    \lambda(A) = \sum_{j \geq 1} \lambda(A_j).
  $$
  这一性质称为**可列可加性**或 $\boldsymbol{\sigma}$ **可加性**，它符合所谓面积的“割补法”．

{.decimal-parentheses}

接下来我们证明这样的 $\lambda$ 是不存在的（在接受选择公理的前提下）．然而以上性质显然是长度所应满足的性质，所以应当确实存在一个描述长度的函数 $\lambda$，如此只有一处可以做出修改：$\lambda$ 的定义域．换言之，长度 $\lambda$ 的定义域不能是整个 $\mathscr{P}(\mathbb{R})$，必定存在一些 $\mathbb{R}$ 的子集是不能定义长度的——称之为**不可测集**．

::: info 不相交并
对两两不相交的集合 $A_1, A_2, \dots$，我们使用记号
$$
  \biguplus_{j \geq 1} A_j := \bigcup_{j \geq 1} A_j
$$
表示其并，以强调两两不相交的性质．对于不相交集合 $A$ 与 $B$，我们记 $A \uplus B := A \cup B$．
:::

假设存在满足条件的函数 $\lambda : \mathscr{P}(\mathbb{R}) \to \overline{\mathbb{R}}_{+}$．我们首先可以证明 $\lambda$ 是单调的．

::: claim*
设 $E \subseteq F \subseteq \mathscr{P}(\mathbb{R})$，则 $\lambda(E) \leq \lambda(F)$．
:::

::: proof
由 $E \subseteq F$ 可得
$$
  F = E \uplus (F \setminus E).
$$
根据 $\lambda$ 的 $\sigma$ 可加性，
$$
\begin{aligned}
  \lambda(F) &= \lambda \bigl( E \uplus (F \setminus E) \uplus \emptyset \uplus \emptyset \uplus \cdots \bigr) \\
  &= \lambda(E) + \lambda(F \setminus E) + \lambda(\emptyset) + \lambda(\emptyset) + \cdots \\
  &= \lambda(E) + \lambda(F \setminus E).
\end{aligned}
$$
又 $\lambda \geq 0$，$\lambda(F) \geq \lambda(E)$．
:::

我们首先引入一个 $\mathbb{R}$ 上的等价关系 $\sim$．对任意 $x, y \in \mathbb{R}$，定义
$$
  x \sim y \ \ :\!\!\iff y - x \in \mathbb{Q}.
$$
我们将 $x$ 的等价类记作
$$
  [x] := \Set{ y \in \mathbb{R} | y - x \in \mathbb{Q} },
$$
将所等价类构成的集合（商集）记作
$$
  \Lambda := \mathbb{R}/{\sim} := \Set{ [x] | x \in \mathbb{R} }.
$$

显然任意等价类 $[x] = x + \mathbb{Q}$ 都与 $\mathbb{Q}$ 等势．如果 $\Lambda$ 可数——即所有等价类是可列的，那么
$$
  \mathbb{R} = \bigcup_{x \in \mathbb{R}} [x] = \bigcup_{[x] \in \Lambda} [x]
$$
是可数集的可数并，从而是可数集．然而众所周知 $\mathbb{R}$ 不可数，这说明 $\Lambda$ 不可数．

所有等价类中都可以取出一个位于 $(0, 1)$ 中的元素（对于不在 $(0, 1)$ 内的数，只需减去其整数部分）．我们从每个等价类中取出且只取出一个实数，构成集合 $\Omega \subseteq (0, 1)$．

::: claim*
对任意有理数 $p, q \in \mathbb{Q}$，集合 $\Omega + p$ 与 $\omega + q$ 要么不相交，要么相等．
:::

::: proof
若 $\Omega + p$ 与 $\Omega + q$ 相交，则可取公共元素 $x$．$x \in \Omega + p$ 表明存在 $\alpha \in \Omega$ 使得 $x = \alpha + p$．$x \in \Omega + q$ 表明存在 $\beta \in \Omega$ 使得 $x = \beta + q$．于是
$$
  \alpha - \beta = q - p \in \mathbb{Q},
$$
这说明 $\alpha \sim \beta$．根据 $\Omega$ 的定义，其中不同的元素均来自不同的等价类，因此 $\alpha = \beta$，从而 $p = q$．
:::

现在考虑集合
$$
  \Phi := \biguplus_{\mathclap{\substack{q \in \mathbb{Q}\\ -1 < q < 1}}} (\Omega + q)
$$
的长度．对任意位于 $(-1, 1)$ 中的有理数 $q$，显然 $\Omega + q \subseteq (-1, 2) \subseteq (-1, 2]$，因此
$$
  \Phi \subseteq (-1, 2].
$$
根据 $\lambda$ 的单调性，$\lambda(\Phi) \leq \lambda\bigl( (-1, 2] \bigr) = 3$．

根据 $\sigma$ 可加性和平移不变性可得
$$
  \lambda(\Phi)
  = \sum_{\mathclap{\substack{q \in \mathbb{Q}\\ -1 < q < 1}}} \lambda(\Omega + q) 
  = \sum_{\mathclap{\substack{q \in \mathbb{Q}\\ -1 < q < 1}}} \lambda(\Omega) \leq 3.
$$
以上不等号的左侧是可数个常数 $\lambda(\Omega)$ 的和，这个和有限当且仅当 $\lambda(\Omega) = 0$，从而 $\lambda(\Phi) = 0$．

::: claim*
$(0, 1) \subseteq \Phi$．
:::

::: proof
任取 $x \in (0, 1)$．由于 $\Omega$ 中的元素来源于全体等价类，存在 $\alpha \in [x] \cap \Omega \subseteq (0, 1)$．由 $\alpha \in [x]$ 可知存在 $q \in \mathbb{Q}$ 使得 $x - \alpha = q$．由于 $x, \alpha \in (0, 1)$，$q \in (-1, 1)$，这说明
$$
  x = \alpha + q \in \Omega + q \subseteq \Phi. 
$$
:::

由于 $(0, 1/2] \subseteq (0, 1) \subseteq \Phi$．根据 $\lambda$ 的单调性，
$$
  1/2 = \lambda\bigl( (0, 1/2] \bigr) \leq \lambda(\Phi) = 0,
$$
矛盾．因此不存在 $\lambda$ 满足所需条件．

如上构造的集合 $\Phi$ 无法赋予长度，是不可测集．$\lambda$ 的定义域不能包含这样的集合．对于 $\mathbb{R}$ 以外的一般集合，我们也可能定义满足类似性质的 $\lambda$（例如 $\mathbb{R}^2$ 上的面积），我们将这些表示测量的函数称为**测度**（measure），其严格定义会在学习了集合系之后给出．
