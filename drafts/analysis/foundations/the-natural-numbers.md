---
article: false
order: 5
---

# 自然数

自然数是整个数学分析的基础，因此我们从一系列公理出发来定义自然数（尽管确实存在更基础的公理系统，但它们的细节过于繁琐，不在我们的讨论范围内）．

## Peano 公理

Peano 公理是常用于定义自然数集的公理，其内容如下．

存在一个集合 $\mathbb{N}$，其中的元素称为**自然数**（natural number），且有一个特殊元素 $0 \in \mathbb{N}$ 以及一个函数 $\nu : \mathbb{N} \to \mathbb{N}^{\times} := \mathbb{N} \setminus \{0\}$，其满足：

- $(\mathrm{N}_0)$ $\nu$ 是单射；
- $(\mathrm{N}_1)$ 若 $N$ 是 $\mathbb{N}$ 的子集且包含 $0$，并且对所有的 $n \in N$ 都有 $\nu(n) \in N$，则 $N = \mathbb{N}$．

对任意 $n \in \mathbb{N}$，$\nu(n)$ 称为 $n$ 的**后继数**（successor），它想表达的含义就是我们熟知的 $n + 1$，即 $n$ 的后一个数（只不过我们尚未定义加法运算，因此只能用函数描述）．公理 $(\mathrm{N}_1)$ 称为**归纳原理**（principle of induction），我们会在后续小节中进一步讨论．

::: proposition
函数 $\nu : \mathbb{N} \to \mathbb{N}^{\times}$ 是双射．
:::

::: proof
我们只需证明 $\nu$ 是满射．令
$$
  N := \operatorname{im}(\nu) \cup \{0\}.
$$
显然 $0 \in N$ 且对每个 $n \in N$ 都有 $\nu(n) \in N$，因此根据 $(\mathrm{N}_1)$ 可知 $N = \mathbb{N}$，亦即
$$
  \operatorname{im}(\nu) \cup \{0\} = \mathbb{N}.
$$
由于 $0 \notin \operatorname{im}(\nu)$，我们有 $\operatorname{im}(\nu) = \mathbb{N} \setminus \{0\} = \mathbb{N}^{\times}$．
:::

为方便表述，我们会将 $0, \nu(0), \nu\bigl( \nu(0) \bigr), \nu\Bigl( \nu\bigl( \nu(0) \bigr) \Bigr), \dots$ 依次记作 $0, 1, 2, 3, \dots$．关于数制（进制）的表示，我们会在引入级数后给出正式定义．有些作者将 $1 = \nu(0)$ 作为第一个自然数，这并没有本质区别．

::: info 自然数集的存在性
在集合论中有明确手段构造自然数集 $\mathbb{N}$，但由于我们并不关注集合论，因此这里只给出简要说明．设 $N$ 为集合且 $\emptyset \in N$，若对所有的 $z \in N$ 都有 $z \cup \{z\} \in N$，则称 $N$ 为**归纳集**（inductive set）．于是我们可以定义 $\mathbb{N}$ 为最小的归纳集：
$$
  \mathbb{N} := \bigcap \{ N \;|\; N\ \text{是归纳集} \}.
$$
此时 $\nu : \mathbb{N} \to \mathbb{N}^{\times}$ 定义为
$$
  \nu(n) := n \cup \{n\}.
$$
最后，我们定义 $0 := \emptyset$．在这种定义下我们有
$$
\begin{aligned}
  0 &= \emptyset, \\
  1 &= \{0\} = \{ \emptyset \}, \\
  2 &= \{ 0, 1 \} = \{ \emptyset, \{ \emptyset \} \}, \\
  3 &= \{ 0, 1, 2 \} = \{ \emptyset, \{ \emptyset \}, \{ \emptyset, \{ \emptyset \} \} \}, \\
    &\cdots.
\end{aligned}
$$
如果引入后文的减法运算，则对任意非零自然数 $n$ 有
$$
  \nu(n) = \{ 0, 1, 2, \dots, n - 1 \}.
$$
集合论保证若满足 Peano 公理的自然数集 $\mathbb{N}$ 存在，则它在同构的意义下唯一，因此我们可以放心地使用“自然数”这个称呼．
:::

## 自然数的运算

::: theorem
$\mathbb{N}$ 上唯一存在**加法**（addition）运算 $+$ 、**乘法**（multiplication）运算 $\cdot$ 和偏序 $\leq$ 满足以下性质：

1. 加法运算是结合的、交换的且 $0$ 是其单位元．
2. 乘法运算是结合的、交换的且 $1 := \nu(0)$ 是其单位元；
3. 分配律成立：  
  $$
    (\ell + m) \cdot n = \ell \cdot n + m \cdot n, \quad \ell, m, n \in \mathbb{N}.
  $$
4. 对所有的 $n \in \mathbb{N}$ 都有 $0 \cdot n = 0$ 以及 $\nu(n) = n + 1$．
5. $\leq$ 是 $\mathbb{N}$ 上的全序，且 $0 = \min(\mathbb{N})$．
6. 对每个 $n \in \mathbb{N}$，不存在 $k \in \mathbb{N}$ 使得 $n < k < n + 1$．
7. 对所有的 $m, n \in \mathbb{N}$ 都有  
  $$
  \begin{aligned}
    m \leq n &\iff \exists d \in \mathbb{N} : m + d = n, \\
    m < n &\iff \exists d \in \mathbb{N}^{\times} : m + d = n.
  \end{aligned}
  $$ 
  满足 $m + d = n$ 的自然数 $d$ 称为 $n$ 与 $m$ 的**差**（difference），记作 $d := n - m$．

8. 对所有的 $m, n \in \mathbb{N}$ 都有  
  $$
  \begin{aligned}
    m \leq n &\iff m + \ell \leq n + \ell, \quad \ell \in \mathbb{N}, \\
    m < n &\iff m + \ell < n + \ell, \quad \ell \in \mathbb{N}.
  \end{aligned}
  $$
9. 对所有的 $m, n \in \mathbb{N}^{\times}$ 都有 $m \cdot n \in \mathbb{N}^{\times}$．
10. 对所有的 $m, n \in \mathbb{N}$ 都有  
  $$
  \begin{aligned}
    m \leq n &\iff m \cdot \ell \leq n \cdot \ell, \quad \ell \in \mathbb{N}^{\times}, \\
    m < n &\iff m \cdot \ell < n \cdot \ell, \quad \ell \in \mathbb{N}^{\times}.
  \end{aligned}
  $$

:::

我们只证明加法运算的存在性与唯一性，因为给出完整的证明过于繁琐．有兴趣的读者可以参考其他分析教材，例如陶哲轩的《实分析》．

::: info 递归定义
在给出证明之前，我们给出加法和乘法的递归定义，以方便读者明白证明过程在做什么．至于为什么能够进行递归定义，可以参考后文对[递归定义](#递归定义)的证明．

自然数加法是满足以下递归定义的运算：
$$
  n + m = \begin{cases}
    n, & m = 0, \\
    \nu(n + m') & m = \nu(m').
  \end{cases}
$$
自然数乘法是满足以下递归定义的运算：
$$
  n \cdot m = \begin{cases}
    0, & m = 0, \\
    n \cdot m' + n, & m = \nu(m').
  \end{cases}
$$
此外，定理中的第 7 条性质可以认为是偏序 $\leq$ 的定义．
:::

::: proof

我们的主要目标是定义一个加法运算 $+$ 使之满足
$$
  n + \nu(m) = \nu(n + m), \quad n, m \in \mathbb{N}.
$$
证明过程的关键是避免在证明熟知的运算规则之前就使用它们．

(a) 假设 $\circledast$ 是 $\mathbb{N}$ 上的运算，且满足
$$
  0 \circledast 0 = 0, \quad
  n \circledast 1 = \nu(n), \quad
  n \circledast \nu(m) = \nu(n \circledast m), \quad n, m \in \mathbb{N}.
$$
令
$$
  N := \{ n \in \mathbb{N} \;|\; 0 \circledast n = n \},
$$
则显然 $0 \in N$．若 $n \in N$，则 $0 \circledast n = n$，进而根据假设可得
$$
  0 \circledast \nu(n) = \nu(0 \circledast n) = \nu(n),
$$
即 $\nu(n) \in N$．根据公理 $(\mathrm{N}_1)$ 可知 $N = \mathbb{N}$，也就是
$$
  0 \circledast n = n, \quad n \in \mathbb{N}.
$$

(b) 假设 $\circledcirc$ 是另一个 $\mathbb{N}$ 上满足 (a) 中性质的运算，即
$$
  0 \circledcirc 0 = 0, \quad
  n \circledcirc 1 = \nu(n), \quad
  n \circledcirc \nu(m) = \nu(n \circledcirc m), \quad n, m \in \mathbb{N},
$$
并且 $\circledcirc$ 还是交换的．对任意给定的 $n \in \mathbb{N}$，令
$$
  M := \{ m \in \mathbb{N} \;|\; m \circledast n = m \circledcirc n \}.
$$
根据假设，显然 $0 \in M$．若 $m \in M$，则 $m \circledast n = m \circledcirc n$，于是
$$
\begin{aligned}
  \nu(m) \circledast n
  &= n \circledast \nu(m) \\
  &= \nu(n \circledast m) = \nu(m \circledast n) \\
  &= \nu(m \circledcirc n) = \nu(n \circledcirc m) \\
  &= n \circledcirc \nu(m) \\
  &= \nu(m) \circledcirc n,
\end{aligned}
$$
即 $m \in M$．根据公理 $(\mathrm{N}_1)$ 可知 $M = \mathbb{N}$，亦即
$$
  m \circledast n = m \circledcirc n, \quad m, n \in \mathbb{N}.
$$
于是满足 (a) 所给前提假设的**交换**运算 $\circledast$ 是唯一的．

(c) 现在我们构造满足上述假设的运算．定义
$$
\begin{aligned}
  N := \Bigl\{
    n \in \mathbb{N} \;|\;
    & \exists \varphi_n : \mathbb{N} \to \mathbb{N},
    \varphi_n(0) = \nu(n), \\
    & \forall m \in \mathbb{N} : \varphi_n\bigl( \nu(m) \bigr) = \nu\bigl( \varphi_n(m) \bigr)
  \Bigr\}.
\end{aligned}
$$

> 为帮助读者理解证明，我们指出：这里希望构造的 $\varphi_n$ 满足 $\varphi_n(m) = \nu(n + m)$，从而用 $\varphi_n(m')$ 代替递归定义中的 $\nu(n + m')$ 以避免在完全定义 $+$ 之前使用 $+$．

令 $\varphi_0 := \nu$ 可知 $0 \in N$．若 $n \in N$，侧存在 $\varphi_n : \mathbb{N} \to \mathbb{N}$ 满足 $\varphi_n(0) = \nu(n)$ 且对所有的 $m \in \mathbb{N}$ 都有 $\varphi_n\bigl( \nu(m) \bigr) = \nu\bigl( \varphi_n(m) \bigr)$．定义
$$
  \psi : \mathbb{N} \to \mathbb{N}, \quad
  m \mapsto \nu\bigl( \varphi_n(m) \bigr).
$$
于是 $\psi(0) = \nu\bigl( \varphi_n(0) \bigr) = \nu\bigl( \nu(n) \bigr)$，且对任意 $m \in \mathbb{N}$ 都有
$$
  \psi\bigl( \nu(m) \bigr)
  = \nu\Bigl( \varphi_n\bigl( \nu(m) \bigr) \Bigr)
  = \nu\Bigl( \nu\bigl( \varphi_n(m) \bigr) \Bigr)
  = \nu\bigl( \psi(m) \bigr),
$$
因此置 $\varphi_{n + 1} := \psi$ 可知 $\nu(n) \in N$．于是 $N = \mathbb{N}$，也就是证明了对每个 $n \in \mathbb{N}$ 都存在一个函数 $\varphi_n : \mathbb{N} \to \mathbb{N}$ 使得 $\varphi_n(0) = \nu(n)$ 且对所有的 $m \in \mathbb{N}$ 都有 $\varphi_n\bigl( \nu(m) \bigr) = \nu\bigl( \varphi_n(m) \bigr)$．

我们进一步证明 $\varphi_n$ 是唯一的．对每个 $n \in \mathbb{N}$，如果还存在函数 $\psi_n : \mathbb{N} \to \mathbb{N}$ 使得 $\psi_n(0) = \nu(n)$ 且对所有的 $m \in \mathbb{N}$ 都有 $\psi_n\bigl( \nu(m) \bigr) = \nu\bigl( \psi_n(m) \bigr)$，则定义
$$
  M_n := \{ m \in \mathbb{N} \;|\; \varphi_n(m) = \psi_n(m) \}.
$$
由于 $\varphi_n(0) = \nu(n) = \psi_n(0)$，$0 \in M_n$．假设 $m \in M_n$，则
$$
  \varphi_n\bigl( \nu(m) \bigr)
  = \nu\bigl( \varphi_n(m) \bigr)
  = \nu\bigl( \psi_n(m) \bigr)
  = \psi_n\bigl( \nu(m) \bigr),
$$
因此 $\nu(m) \in M_n$．综上所述 $M_n = \mathbb{N}$，亦即 $\varphi_n = \psi_n$．

现在我们定义加法运算 ${+} : \mathbb{N} \times \mathbb{N} \to \mathbb{N}$ 为
$$
  n + m := \begin{cases}
    n, & m = 0, \\
    \varphi_n(m'), & m = \nu(m').
  \end{cases}
$$
由于 $\nu$ 是双射，我们能保证 $m'$ 唯一存在，因此加法运算是良定义的．对任意 $n \in \mathbb{N}$ 和 $m \in \mathbb{N}^{\times}$，令 $m' := \nu^{-1}(m)$，则
$$
\begin{aligned}
  n + 0 &= n, \\
  n + 1 &= n + \nu(0) = \varphi_n(0) = \nu(n) = \nu(n + 0), \\
  n + \nu(m) &= \varphi_n(m) = \varphi_n\bigl( \nu(m') \biglr) = \nu\bigl( \varphi_n(m') \bigr) = \nu(n + m),
\end{aligned}
$$
亦即对所有的自然数 $n$ 与 $m$ 都有 $n + 0 = n$ 和 $n + \nu(m) = \nu(n + m)$．根据 $(a)$ 可知 $0 + n = n$，因此 $0$ 是加法运算的单位元．

(d) 现在我们证明加法运算的结合性．对任意给定的 $\ell, m \in \mathbb{N}$，定义
$$
  N := \{ n \in \mathbb{N} \;|\; (\ell + m) + n = \ell + (m + n) \}.
$$
显然 $0 \in N$．若 $n \in N$，则 $(\ell + m) + n = \ell + (m + n)$，于是
$$
\begin{aligned}
  (\ell + m) + \nu(n)
  &= \nu\bigl( (\ell + m) + n \bigr) = \nu\bigl( \ell + (m + n) \bigr) \\
  &= \ell + \nu(m + n) \\
  &= \ell + \bigl(m + \nu(n)\bigr),
\end{aligned}
$$
故 $\nu(n) \in N$．这说明 $N = \mathbb{N}$，即加法运算是结合的．

(e) 最后我们证明加法运算的交换性．首先证明任意自然数 $n$ 与 $1$ 的交换性．令
$$
  N := \{ n \in \mathbb{N} \;|\; n + 1 = 1 + n \},
$$
则 $0 \in N$．若 $n \in N$，则
$$
  \nu(n) + 1 = \nu\bigl( \nu(n) + 0 \bigr) = \nu(n + 1) = \nu(1 + n) = 1 + \nu(n),
$$
即 $\nu(N) \in N$，于是 $N = \mathbb{N}$．

再证明自然数 $n$ 与任意自然数 $m$ 的交换性．给定 $n \in \mathbb{N}$，令
$$
  M := \{ m \in \mathbb{N} \;|\; m + n = n + m \},
$$
显然 $0 \in M$．若 $m \in M$，则
$$
\begin{aligned}
  \nu(m) + n
  &= (m + 1) + n = m + (1 + n) = m + (n + 1) \\
  &= (m + n) + 1 = \nu(m + n) = \nu(n + m) = n + \mu(m),
\end{aligned}
$$
故 $\mu(m) \in M$，从而 $M = \mathbb{N}$，即加法运算是交换的．于是，我们定义的加法运算满足 (a) 中所提出的性质．

事实上，对任意满足定理所给条件的加法运算 $\oplus$，我们都有
$$
  \nu(n \oplus m) = (n \oplus m) \oplus 1
  = n \oplus (m \oplus 1)
  = n \oplus \nu(m),
$$
因此加法运算必须满足 (a) 中所给出的性质．结合 (b)，我们证明了加法运算的唯一性．
:::

对于乘法运算 $m \cdot n$，我们经常省略称号，将其记作 $mn$．此外乘法运算优先于加法运算，$mn + k$ 表达的含义是 $(mn) + k$ 而不是 $m(n + k)$．从现在起我们默认所有熟知的自然数加法、乘法以及相关的序关系的结论成立了．

## 除法定理

前一定理的性质 10 能够推出乘法**消去律**（cancellation rule）：若 $m, n \in \mathbb{N}$ 和 $k \in \mathbb{N}^{\times}$ 满足 $mk = nk$，则 $m = n$．

一般地，对于 $m \in \mathbb{N}^{\times}$ 和 $n \in \mathbb{N}$，若存在 $k \in \mathbb{N}$ 使得 $n = mk$，则称 $m$ 是 $n$ 的一个**除数**（divisor），记 $m \mid n$（$m$ 整除 $n$）．这里 $k$ 是唯一的，称之为 $n$ 与 $m$ 的**商**（quotient），记作 $\frac{n}{m}$ 或 $n / m$．任意的非零自然数之间未必能做商，一般会留下余数．

::: theorem 除法定理
对每个 $m \in \mathbb{N}^{\times}$ 和 $n \in \mathbb{N}$，唯一存在一对 $\ell, k \in \mathbb{N}$ 使得
$$
  n = km + \ell, \quad \ell < m.
$$
:::

::: proof
我们先证明存在性．给定 $m \in \mathbb{N}^{\times}$，令
$$
  N := \{ n \in \mathbb{N} \;|\; \exists k, \ell \in \mathbb{N} : (n = km + \ell) \land (\ell < m) \}.
$$
由于 $0 = 0 \cdot m + 0$ 且 $0 < m$，$0 \in N$．若 $n \in N$，则存在 $\ell, k \in \mathbb{N}$ 使得 $n = km + \ell$ 且 $\ell < m$，于是 $n + 1 = km + (\ell + 1)$．

- 若 $\ell + 1 < m$，则我们已经证明了 $n + 1 \in N$．
- 若 $\ell + 1 = m$，则 $n + 1 = (k + 1)m + 0$，也说明 $n + 1 \in N$．

综上所述 $n + 1 = \nu(n) \in N$，故 $N = \mathbb{N}$，从而说明了 $\ell$ 和 $k$ 的存在性．

下面证明唯一性．如果存在 $k, k', \ell, \ell' \in \mathbb{N}$ 使得
$$
  n = km + \ell = k'm + \ell', \quad \ell < m, \quad \ell' < m,
$$
则不妨假设 $\ell \leq \ell'$（$\ell' \leq \ell$ 的情形可替换这两个符号后同理证明）．此时
$$
  k'm + \ell' = km + \ell \leq km + \ell',
$$
于是 $k'm \leq km$．由于 $m$ 非零，$k' \leq k$．

另一方面，根据 $\ell' < m$ 可得
$$
  km \leq km + \ell = k'm + \ell' < k'm + m = (k' + 1)m,
$$
因此 $k < k' + 1$．结合 $k' \leq k$，我们得到 $k' \leq k < k' + 1$．由于 $k'$ 和 $k' + 1$ 之间不存在自然数，这只可能有 $k = 'k$．于是 $\ell = n - km = n - k'm = \ell'$．
:::

## 归纳原理



我们已经频繁使用公理 $(\mathrm{N}_1)$ 来推进证明，该公理可以推出很常用的**良序原理**（well ordering principle）．

::: proposition
自然数集 $\mathbb{N}$ 是**良序的**（well ordered），意即 $\mathbb{N}$ 的每个非空子集都有最小值．
:::

::: proof
我们使用反证法．设 $A \subseteq \mathbb{N}$ 非空且没有最小元．定义
$$
  B := \{ n \in \mathbb{N} \;|\; n\ \text{是}\ A\ \text{的下界} \}.
$$
显然 $0 \in B$．假设 $n \in B$，由于 $A$ 没有最小值，$n \notin A$，且更准确地说对每个 $a \in A$ 都有 $n < a$，也就是 $n + 1 \leq a$，这意味着 $n + 1 = \nu(n) \in B$，于是 $B = \mathbb{N}$．这会导致 $A = \emptyset$，因为若 $m \in A$，则 $m \in \mathbb{N} = B$，即 $m$ 是 $A$ 的下界，从而 $m$ 是 $A$ 的最小元，与 $A$ 没有最小元矛盾．
:::

作为良序原理的应用，我们证明算术基本定理．对任意大于或等于 $2$ 的自然数 $p$，若其除数只有 $1$ 和 $p$，则称 $p$ 为**素数**（prime number）．

::: proposition
对任意不为 $0$ 和 $1$ 的自然数，它都能写成有限个素数的乘积，其中的每个素数称为**素因数**（prime factor），且这个乘积形式称为**素因数分解**（prime factorization）．若不考虑这些素因数的相乘顺序，则素因数分解唯一．
:::

::: proof
假设素因数分解不存在，即存在不为 $0$ 和 $1$ 的自然数，它不能分解为有限个素数的乘积．根据良序原理，我们可以取得中的最小自然数 $n_0$．$n_0$ 不是素数，否则它自身就构成一个素因数分解．于是，存在自然数 $n, m > 1$ 使得 $n_0 = n \cdot m$，而这意味着 $n, m < n_0$．根据 $n_0$ 的最小性，$n$ 和 $m$ 都能分解为有限个素数的乘积，因此 $nm$ 也是有限个素数的乘积，矛盾．

下面我们用反证法证明素因数分解的唯一性．假设有不为 $0$ 和 $1$ 的自然数具有两个不同的素因数分解（不考虑顺序差异），则我们能取得其中的最小元 $p$．设 $p$ 有两个不同的素因数分解
$$
  p = p_0 p_1 \cdots p_k = q_0 q_1 \cdots q_n.
$$
对所有的索引 $i$ 和 $j$ 都有 $p_i \neq q_j$，否则将 $p_i = q_j$ 除掉之后可得到比 $p$ 更小的具有两个素因数分解的自然数．

由于不考虑素因数相乘的顺序，不妨假设 $p_0 \leq p_1 \leq \cdots \leq p_k$ 且 $q_0 \leq q_1 \leq \cdots \leq q_n$．此外，不妨设 $p_0 < q_0$（$p_0 > q_0$ 的情形可对称地同理证明）．定义 $q := p_0 q_1 \cdots q_n$，则 $q < p$，因此 $p - q$ 是良定义的自然数．由于 $p_0 \mid q$ 且 $p_0 \mid p$，我们有 $p_0 \mid (p - q)$，于是 $p_0$ 是 $p - q$ 的素因数．不妨设 $p - q$ 具有素因数分解
$$
  p - q = p_0 r_1 \cdots r_\ell. \tag{$*$}
$$
由于 $p - q = (q_0 - p_0) q_1 \cdots q_n$，若我们将 $q_0 - p_0$ 也写成素因数分解
$$
  q_0 - p_0 = t_0 \cdots t_s,
$$
则
$$
  p - q = t_0 \cdots t_s q_1 \cdots q_n. \tag{$\dagger$}
$$
式 $(*)$ 和 $(\dagger)$ 是 $p - q$ 的两个不同的素因数分解，这是因为 $p_0$ 并不整除 $q_0 - p_0$，也就不可能出现在 $(\dagger)$ 中．然而 $p - q < p$，这与 $p$ 的最小性假设矛盾．
:::


每次都构造一个集合并应用公理 $(\mathrm{N}_1)$ 总显得繁琐，我们将其修改为以下描述．

对每个 $n \in \mathbb{N}$，设 $\mathcal{A}(n)$ 都是关于 $n$ 的一个命题．欲证对所有 $n \in \mathbb{N}$ 而言 $\mathcal{A}(n)$ 都为真，只需依次证明：

1. $\mathcal{A}(0)$ 为真．
2. 假设对某个 $n \in \mathbb{N}$ 有 $\mathcal{A}(n)$，则在此前提下可证明 $\mathcal{A}(n + 1)$ 为真．

这是很显然的，只需令
$$
  N := \{ n \in \mathbb{N} \;|\; \mathcal{A}(n)\ \text{为真} \}
$$
即可根据公理 $(\mathrm{N}_1)$ 证明 $N = \mathbb{N}$．

很多时候我们希望归纳原理能从 $0$ 以外的自然数开始．

::: proposition
设 $n_0 \in \mathbb{N}$．对每个自然数 $n \geq n_0$，设 $\mathcal{A}(n)$ 是有关 $n$ 的命题．若

1. $\mathcal{A}(n_0)$ 为真，
2. 对每个 $n \geq n_0$，在假设 $\mathcal{A}(n)$ 为真的前提下可证明 $\mathcal{A}(n + 1)$ 为真，

则 $\mathcal{A}(n)$ 对所有 $n \geq n_0$ 都为真．
:::

::: proof
令 $N := \{ n \in \mathbb{N} \;|\; \mathcal{A}(n + n_0)\ \text{为真} \}$ 并应用公理 $(\mathrm{N}_1)$ 即证．
:::

对任意 $m \in \mathbb{N}$ 和 $n \in \mathbb{N}^{\times}$，定义
$$
  m^n := \underbrace{m \cdot m \cdot \cdots \cdot m}_{n\ \text{个}\ m\ \text{相乘}}.
$$
我们给出归纳原理的一些简单应用．

::: example
对 $n \in \mathbb{N}^{\times}$ 有 $1 + 3 + 5 + \cdots + (2n - 1) = n^2$．
:::

::: proof
当 $n = 1$ 时显然成立 $1 = 1^2 = 1 \cdot 1 = 1$．假设 $1 + 3 + 5 + \cdots + (2n - 1) = n^2$，则
$$
\begin{aligned}
  1 + 3 + 5  + \cdots + (2n - 1) + \bigl( 2(n + 1) - 1 \bigr)
  &= 1 + 3 + 5 + \cdots + (2n - 1) + (2n + 1) \\
  &= n^2 + 2n + 1 \\
  &= (n + 1)^2.
\end{aligned}
$$
根据归纳原理即得证．
:::

归纳原理可扩展为更强的形式：同时假设多个前提条件成立．

::: proposition
设 $n_0 \in \mathbb{N}$，对每个 $n \geq n_0$ 而言 $\mathcal{A}(n)$ 都是关于 $n$ 的命题．若

1. $\mathcal{A}(n_0)$ 为真，
2. 对每个 $n \geq n_0$，在假设 $\mathcal{A}(n_0)$、$\mathcal{A}(n_0 + 1)$、$\cdots$、$\mathcal{A}(n)$ 都为真的前提下能证明 $\mathcal{A}(n + 1)$ 为真，

则 $\mathcal{A}(n)$ 对每个 $n \geq n_0$ 都为真．
:::

::: proof
令
$$
  N := \{ n \in \mathbb{N} \;|\; n \geq n_0, \mathcal{A}(n)\ \text{为假} \},
$$
我们反设 $N \neq \emptyset$．根据良序原理，存在自然数 $m := \min(N)$ 使得 $m \geq n_0$ 且 $\mathcal{A}(m_0)$ 为假．由于 $\mathcal{A}(n_0)$ 为真，我们有 $m > n_0$，于是可取得自然数 $n = m - 1 \geq n_0$．根据 $m$ 的最小性，$\mathcal{A}(n_0)$、$\mathcal{A}(n_0 + 1)$、$\cdots$、$\mathcal{A}(n)$ 都为真，于是可以推出 $\mathcal{A}(n + 1) = \mathcal{A}(m)$ 为真，矛盾．
:::

## 运算记号

设 $\odot$ 是集合 $X$ 上的运算，且对每个 $k \in \mathbb{N}$ 有 $x_k \in X$，则对每个 $n \in \mathbb{N}$ 定义
$$
  \bigodot_{k = 0}^n x_k := x_0 \odot x_1 \odot \cdots \odot x_n.
$$
对于加法运算 $+$ 和乘法运算 $\cdot$ 我们使用特殊的记号，定义
$$
  \sum_{k = 0}^n = x_0 + x_1 + \cdots + x_n, \quad
  \prod_{k = 0}^n = x_0 \cdot x_1 \cdot \cdots \cdot x_n.
$$
作为习惯，一般我们用加法运算时都默认它是交换的，但对于乘法运算来说则不一定（自然数乘法可交换是特例），因此相乘的顺序至关重要．最后，我们递归定义 $n \in \mathbb{N}$ 的**阶乘**（factorial）为
$$
  n! := \begin{cases}
    1, & n = 0, \\
    n \cdot (n - 1)!, & n \geq 1.
  \end{cases}
$$
显然当 $n \in \mathbb{N}^{\times}$ 的时候有 $n! = \prod_{i = 1}^n i$．