---
order: 1
---

# 引言：不可测集

在一维空间 $\mathbb{R}$ 中，集合有“长度”的概念．对任意满足 $a < b$ 的实数 $a, b ∈ \mathbb{R}$，直觉上区间 $(a, b)$、$(a, b]$、$[a, b)$ 和 $[a, b]$ 的长度都是 $b - a$．在二维空间 $\mathbb{R}^2$ 中，集合有“面积”的概念，其中正方形 $[0, 1] \times [0, 1]$ 的面积是 $1$．与之类似，三维空间 $\mathbb{R}^3$ 中也有“体积”的概念．

对任意集合 $Ω$，我们可以定义一个函数 $\mu$，它将某些子集 $A ⊆ Ω$ 映射为 $[0, \infty]$ 中的实数或无穷大，作为对 $A$ 的某种性质的测量，并称 $\mu$ 为**测度**（measure）．长度、面积和体积分别是 $\mathbb{R}$、$\mathbb{R}^2$ 和 $\mathbb{R}^3$ 上的测度值．我们将 $\mathbb{R}$ 上测量长度的测度记作 $\lambda$，其定义域记作 $\mathcal{F}$．要严格定义 $\lambda$ 是非常困难的，这是后续正文的目标之一．不过根据几何直觉，$\lambda$ 应当满足以下性质：

- $\lambda(\emptyset) = 0$；
- 对所有的 $a, b ∈ \mathbb{R}$ 而言，当 $a < b$ 时都有 $\lambda\bigl( (a, b] \bigr) = b - a$；
- (平移不变性) 对所有 $A ∈ \mathcal{F}$ 和 $x \in \mathbb{R}$ 都有 $\lambda(A + x) = \lambda(A)$，其中
  $$
    A + x := \Set{a + x | a \in A }.
  $$
- (可列可加性) 对所有两两不相交的 $A_1, A_2, \dots \in \mathcal{F}$ 都有
  $$
    \lambda\left( \biguplus_{i = 1}^\infty A_i \right) = \sum_{i = 1}^\infty \lambda(A_i),
  $$
  其中 $\uplus$ 与 $\cup$ 一样表示集合的并，但此时强调所有涉及的集合是两两不相交的．这里“两两不相交”指的是对任意不同的指标 $i \neq j$ 都有 $A_i \cap A_j = \emptyset$．

{.decimal-parentheses}

可列可加性是平面几何中面积割补法的基础．

根据几何直觉，我们有理由相信这样的 $\lambda$ 是存在的，否则平面几何就会有问题．于是我们自然会想：$\lambda$ 的定义域是否包括所有 $\mathbb{R}$ 的子集？也就是是否所有 $\mathbb{R}$ 的子集都可以测量出长度？本节我们证明（在接受选择公理的前提下）这是不可能的，因此存在不可测集．

对任意集合 $\Omega$，我们用 $\mathscr{P}(\Omega)$ 表示其幂集——所有 $\Omega$ 的子集构成的集合．假设存在函数 $\lambda : \mathscr{P}(\mathbb{R}) \to [0, \infty]$ 满足前文所列出的四条性质，我们来导出矛盾．我们首先给出 $\lambda$ 的单调性．

::: claim*
若 $A \subseteq B \subseteq \mathbb{R}$，则 $\lambda(A) \leq \lambda(B)$．
:::

::: proof
由 $A \subseteq B$ 可得
$$
  B = A \uplus (B \setminus A),
$$
若令 $E_1 = A$，$E_2 = B \setminus A$，$E_i = \emptyset\ (i \geq 3)$，则
$$
\begin{aligned}
  \lambda(B) &= \lambda\left( \biguplus_{i = 1}^\infty E_i \right)
  = \sum_{i = 1}^\infty \lambda(E_i) \\
  &= \lambda(A) + \lambda(B \setminus A).
\end{aligned}
$$
由于 $\lambda \geq 0$，$\lambda(B) \geq \lambda(A)$．
:::

为了构造不可测集，我们定义 $\mathbb{R}$ 上的关系：
$$
  x \sim y \ \ :\!\!\iff x - y \in \mathbb{Q},
$$
其中 $x, y \in \mathbb{R}$．任意实数 $x$ 的等价类记作
$$
  [x] := \Set{y \in \mathbb{R} | x \sim y}.
$$
<!-- 我们将所有等价类构成的集合（也就是 $\sim$ 对应的商集）记作 $\Lambda$．

::: claim*
商集 $\Lambda$ 是可数集．
:::

::: proof

::: -->

::: claim*
对任意 $x \in \mathbb{R}$ 而言，$[x]$ 都与区间 $(0, 1)$ 相交．
:::

::: proof

- 若 $x$ 是整数，则 $0 \in [x]$，故 $0.1 \in [x]$．
- 若 $x$ 不是整数，则其小数部分 $x - \lfloor x \rfloor \in (0, 1)$．

:::

我们从每个等价类中取出一个 $(0, 1)$ 中的元素构成集合 $\Omega \subseteq (0, 1)$．这意味着 $\Omega$ 中不同的元素来自于不同的等价类．

::: claim*
若 $p, q \in \mathbb{Q}$，则要么 $\Omega + p = \Omega + q$，要么 $\Omega + p$ 与 $\Omega + q$ 不相交．
:::

::: proof
若 $\Omega + p$ 和 $\Omega + q$ 相交，则可从中取出一个元素 $x$．换言之，存在 $x \in \Omega$ 以及相应的 $\alpha, \beta \in \Omega$ 使得
$$
  x = \alpha + p = \beta + q.
$$
于是 $x \sim \alpha$ 且 $x \sim \beta$，从而 $\alpha \sim \beta$．由于 $\Omega$ 中不同的元素来自不同的等价类，这只可能有 $\alpha = \beta$，从而 $p = q$．
:::

定义
$$
  \Phi := \biguplus_{\mathclap{\substack{q \in \mathbb{Q} \\ -1 < q < 1}}} (\Omega + q),
$$
它是可数个两两不相交集合的并．显然 $\Phi \subseteq (-1, 2) \subseteq (-1, 2]$，于是
$$
  \lambda(\Phi) \leq \lambda\bigl( (-1, 2] \bigr) = 3.
$$
根据 $\lambda$ 的可列可加性与平移不变性可得
$$
\begin{aligned}
  \lambda(\Phi) &= \sum_{\mathclap{\substack{q \in \mathbb{Q} \\[0.5ex] -1 < q < 1}}} \lambda(\Omega + p) \\
  &= \sum_{\mathclap{\substack{q \in \mathbb{Q} \\[0.5ex] -1 < q < 1}}} \lambda(\Omega) \leq 3.
\end{aligned}
$$
常数列构成的级数收敛，这意味着 $\lambda(\Omega) = 0$，从而 $\lambda(\Phi) = 0$．然而下面的断言表明这是不可能的．

::: claim*
$(0, 1) \subseteq \Phi$
:::

::: proof
对任意 $x \in (0, 1)$，唯一存在 $\alpha \in [x] \cap \Omega \subseteq (0, 1)$．定义
$$
  q := x - \alpha \in \mathbb{Q},
$$
则 $-1 < q < 1$，因此 $x = \alpha + q \in \Phi$．
:::

根据以上断言可得 $(0, 1/2] \subseteq \Phi$，因此 $1/2 \leq \lambda(\Phi)$，这与 $\lambda(\Phi) = 0$ 矛盾．这表明定义域 $\mathscr{P}(\mathbb{R})$ 过大，必须附加额外条件以确定哪些集合是可测量的．
