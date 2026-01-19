---
article: true
category: [量子计算]
tag: [量子计算]
---

# 量子计算入门

量子计算以其天然的并行性闻名，许多科普宣传中都称它能加速计算．这一结论目前只在很狭窄的范围内成立，因为其并行性是有限制的，眼下人们只能在特定问题（包括“生造的”、artificial 问题）上实现加速．本文意在从数学角度上解释量子计算，以帮助读者理解其“并行性”的本质．

由于物理技术有限，目前并没有广泛可用的量子计算自．但正如写程序算法不需要理解晶体管电路一样，设计量子算法也不需要理解量子力学——像 $\lambda$ 演算这样的计算理论早在计算机诞生之前就已经被提出了．或者更严格地说，是不需要像物理学家那样理解量子力学，我们只需要了解其数学模型就行．

## 引言

在经典计算机中，一个**比特**（bit）可以取值 $0$ 或 $1$，我们称这两个量为比特的**状态**（state）．在同一时刻，一个经典比特质能处于状态 $0$ 或 $1$ 的其中一者，不能同时处于这两个状态．在量子计算机中，一个**量子比特**（qubit）有两个**基本状态** $\ket{0}$ 和 $\ket{1}$．在许多科普文章中，量子比特能“同时”处于这两个基态，也就是处于 $\ket{0}$ 和 $\ket{1}$ 的**叠加态**（superposition）．严格来说“同时”这个描述是不准确的：在量子力学中，我们无法在测量前就准确知晓一个粒子的状态，而测量会有概率得到不同的结果．对于单个量子比特，对其进行测量后有概率 $p_0$ 得到结果 $\ket{0}$，有概率 $p_1$ 得到结果 $\ket{1}$（并且自然地有 $p_0 + p_1 = 1$）．如果测量结果是 $\ket{0}$，则量子比特**塌缩**（collapse）到状态 $\ket{0}$——也就是我们明确知晓量子比特处于状态 $\ket{0}$．若再无外力影响这个量子比特，则后续测量都只会得到结果 $\ket{0}$．若测量结果为 $\ket{1}$ 则有同样的结论．

只是这样平铺直叙并不能解释什么是叠加态．数学上可以将一个量子比特的状态描述为复向量空间 $\mathbb{C}^2$ 中的元素，而基态 $\ket{0}$ 和 $\ket{1}$ 是标准基向量，即
$$
\begin{aligned}
  \ket{0} &= \begin{bmatrix} 1 \\ 0 \end{bmatrix}, &
  \ket{1} &= \begin{bmatrix} 0 \\ 1 \end{bmatrix}.
\end{aligned}
$$
$\ket{0}$ 与 $\ket{1}$ 的叠加态就是其线性组合：
$$
  \ket{\psi} = \alpha \ket{0} + \beta \ket{1}, \quad \alpha, \beta \in \mathbb{C}.
$$
在量子力学中我们习惯用 $\ket{\cdot}$ 表示状态（这个记号称为 **ket**），而上式中的字母 $\psi$ 相当于一个变量，可根据需要选择合适的字母．对 $\ket{\psi}$ 做测量，我们有概率 $|\alpha|^2$ 得到结果 $\ket{0}$，有概率 $|\beta|^2$ 得到结果 $\ket{1}$，因此我们自然要求叠加态 $\ket{\psi}$ 是单位向量，也就是 $|\alpha|^2 + |\beta|^2 = 1$．所谓量子比特“同时”处于 $\ket{0}$ 和 $\ket{1}$，更准确地说是其测量结果既可能是 $\ket{0}$ 也可能是 $\ket{1}$．$\alpha$ 和 $\beta$ 分别称为状态 $\ket{0}$ 和 $\ket{1}$ 的**概率振幅**（probability amplitude）．

对于两个量子比特构成的系统，其基态可以描述为 $\mathbb{C}^4$ 中的标准基向量，即
$$
\begin{aligned}
  \ket{00} &= \begin{bmatrix} 1 \\ 0 \\ 0 \\ 0 \end{bmatrix}, &
  \ket{01} &= \begin{bmatrix} 0 \\ 1 \\ 0 \\ 0 \end{bmatrix}, &
  \ket{10} &= \begin{bmatrix} 0 \\ 0 \\ 1 \\ 0 \end{bmatrix}, &
  \ket{11} &= \begin{bmatrix} 0 \\ 0 \\ 0 \\ 1 \end{bmatrix}.
\end{aligned}
$$
系统状态可描述为单位向量
$$
  \ket{\psi} = \alpha_{00} \ket{00} + \alpha_{01} \ket{01} + \alpha_{10} \ket{10} + \alpha_{11} \ket{11}, \quad \alpha_{00}, \alpha_{01}, \alpha_{10}, \alpha{11} \in \mathbb{C},
$$
其中 $|\alpha_{00}|^2 + |\alpha_{01}|^2 + |\alpha_{10}|^2 + |\alpha_{11}|^2 = 1$．测量结果为 $\ket{ij}$ 的概率自然是 $|\alpha_{ij}|^2$．

本文并不打算从头引入线性代数，这需要读者自己夯实基础．这一节的目的是更详细地介绍线性代数中的各种概念在量子计算中有什么含义．

::: info 约定
对任意复数 $\alpha \in \mathbb{C}$，我们将其共轭复数记作 $\alpha^*$（共轭复数在数学中一般记作 $\overline{\alpha}$，这里遵循量子计算中的符号约定记作 $\alpha^*$）．

对任意复矩阵 $A \in \mathbb{C}^{n \times m}$，其共轭（所有元素都变为其共轭复数）记作 $A^*$，其共轭转置记作 $A^\dagger := (A^*)^\mathsf{T}$．

量子计算中涉及的向量空间默认为复向量空间，也就是标量都是复数．
:::

## 状态 Hilbert 空间

量子力学假设封闭的量子系统可由 Hilbert 空间描述，因此我们需要解释什么是 Hilbert 空间．

### 内积空间

在线性代数课程中我们学习过内积的概念，这里将其在复向量空间中的定义复述如下．

设 $V$ 是复向量空间，其上的**内积**（inner product）是一个函数 $\langle {\cdot}, {\cdot} \rangle : V \times V \to \mathbb{C}$，对任意标量 $\alpha, \beta \in \mathbb{C}$ 和向量 $u, v, w \in \mathbb{C}$ 都满足：

1. （正定性）$\langle v, v \rangle \geq 0$，并且 $\langle v, v \rangle = 0 \iff v = 0$；
2. （共轭对称性）$\langle u, v \rangle = \langle v, u \rangle^*$；
3. （第二分量线性性）$\langle u, \alpha v + \beta w \rangle = \alpha \langle u, v \rangle + \beta \langle u, w \rangle$.

带有内积的向量空间称为**内积空间**（innder product space）．根据性质 2 和 3 可以推出

- （第一分量共轭线性性）$\langle \alpha u + \beta v, w \rangle = \alpha^* \langle u, w \rangle + \beta^* \langle v, w \rangle$．

::: warning
在数学中我们一般采取“第一分量线性性”和“第二分量共轭线性性”．量子力学选择相反的定义是为了与矩阵向量表示的内积相统一．这两种定义在本质上没有优劣之分．
:::

对于复向量空间 $\mathbb{C}^n$，我们有标准内积
$$
  \langle x, y \rangle := x^\dagger y = \sum_{j = 1}^n x_i^* y_i,
$$
其中
$$
\begin{aligned}
  x &= \begin{bmatrix} x_1 \\ \vdots \\ x_n \end{bmatrix} \in \mathbb{C}^n, &
  y &= \begin{bmatrix} y_1 \\ \vdots \\ y_n \end{bmatrix} \in \mathbb{C}^n.
\end{aligned}
$$

对于有限维的内积空间 $V$，设 $e_1, \dots, e_n$ 是它的一个标准正交基，也就是
$$
  \langle e_j, e_k \rangle = \begin{cases}
    1, & j = k, \\
    0, & j \neq k.
  \end{cases}
$$
（有限维情形下总是存在标准正交基，可用 Gram-Schmidt 正交化过程构造．）对任意向量 $x, y \in V$，我们都存在其坐标表示
$$
\begin{aligned}
  x &= \sum_{j = 1}^n x_j e_j, &
  y &= \sum_{j = 1}^n y_j e_j, 
\end{aligned}
$$
从而可以定义 $V$ 上的标准内积为
$$
  \langle x, y \rangle := \sum_{j = 1}^n x_j^* y_j.
$$
表面上看这个内积依赖于所选取的基，实际上可以证明这个内积不依赖于所选取的标准正交基．实际上这是酉矩阵的性质：保持内积不变．我们会在后文提到这一点，读者也可以自己尝试证明．

内积空间 $V$ 上的内积可以导出相应的**范数**（norm）：
$$
  \|v\| := \langle v, v \rangle^{1/2}, \quad v \in V.
$$
范数是“长度”这一概念的抽象，其对任意标量 $\alpha \in \mathbb{C}$ 和向量 $u, v \in V$ 都满足：

1. （正则性）$\|v\| \geq 0$ 且 $\|v\| = 0 \iff v = 0$；
2. （齐次性）$\|\alpha v\| = |\alpha| \|v\|$；
3. （三角不等式）$\|u + v\| \leq \|u\| + \|v\|$．

三角不等式的证明要用到 Cauchy-Schwarz 不等式，这里略去．

### 完备性

在高等数学中引入数列极限的时候我们曾学习过完备性的概念，这里将其推广到内积空间上．直观地看，完备性要求所有收敛序列的极限不会超出所讨论的空间范围．

::: example
序列 $\Bigl( \lfloor 10^n \cdot \pi \rfloor / 10^n \Bigr)_{n = 1}^\infty$ 是有理数列，其第 $n$ 项保留 $\pi$ 的 $n$ 位小数．这个序列的极限是无理数 $\pi$，不在有理数集中．存在有理数列收敛到无理数，因此有理数集不是完备的．
:::

设 $V$ 是内积空间，$(v_n)$ 是 $V$ 中的序列．若对任意 $\varepsilon > 0$ 都存在相应的 $N \in \mathbb{N}$ 使得当自然数 $n, m > N$ 时有 $\| v_n - v_m \| < \varepsilon$，则称 $(v_n)$ 是 $V$ 中的一个 **Cauchy 序列**（Cauchy sequence）．若 $V$ 中的所有 Cauchy 序列都收敛到 $V$ 中的某个元素，则称 $V$ 是**完备的**（complete）．

::: info Cauchy 序列
直观地看，Cauchy 序列就是“收敛序列”，只不过收敛值未必在 $V$ 中．无论这个序列是否在 $V$ 中收敛，我们都有固定的方法能够构造一个空间 $\widetilde{V} \supseteq V$ 使得 Cauchy 序列在 $\widetilde{V}$ 中收敛，这个方法称为**度量空间的完备化**，见[^erwin-functional-analysis]第 1.6 节．
:::

对于有限维内积空间我们有以下结论．

::: theorem
有限维内积空间是完备的．
:::

::: proof
见[^erwin-functional-analysis]定理 2.4-2．
:::

完备的内积空间称为 **Hilbert 空间**（Hilbert space）．因此，任意有限维的内积空间都是 Hilbert 空间．

### 状态空间

一个没有外部环境影响的物理系统称为封闭系统．在量子力学中，我们有如下假设，它是量子计算的公理之一．

**假设 1**&emsp;一个封闭量子系统的状态可由某个 Hilbert 空间中的元素表示，我们称这个 Hilbert 空间为系统的**状态空间**（state space）．

::: example
对于单量子比特构成的封闭系统，存在一个二维 Hilbert 空间 $\mathcal{H}$ 表示其状态．$\mathcal{H}$ 有标准正交基 $\ket{0}$ 与 $\ket{1}$，而系统的状态可描述为
$$
  \ket{\psi} = \alpha \ket{0} + \beta \ket{1} \in \mathcal{H}, \quad \alpha, \beta \in \mathbb{C},
$$
其中 $|\alpha|^2 + |\beta|^2 = 1$．严格来说 $\ket{0}$ 与列向量 $[1, 0]^\mathsf{T}$ 是不同的对象，前者是抽象 Hilbert 空间 $\mathcal{H}$ 中的元素，后者是 $\mathbb{C}^2$ 中的元素．不过 $\mathcal{H}$ 和 $\mathbb{C}^2$ 之间显然存在同构
$$
\begin{aligned}
  \mathcal{H} &\to \mathbb{C}^2, \\
  \alpha \ket{0} + \beta \ket{1} &\mapsto
  \begin{bmatrix} \alpha \\ \beta \end{bmatrix}.
\end{aligned}
$$
:::

设 $\mathcal{H}$ 是 $N$ 维 Hilbert 空间，我们一般将其任意一组标准正交基向量记作 $\ket{0}, \ket{1}, \dots, \ket{N - 1}$．如有需要也可以记作 $\ket{1}, \ket{2}, \dots, \ket{N}$ 或任意其他合适的符号．由于 $\mathcal{H}$ 与 $\mathbb{C}^N$ 同构，不失一般性我们可以将两者视作同一空间．全体 $M \times N$ 维复矩阵构成的空间 $\mathbb{C}^{M \times N}$ 也是 Hilbert 空间，它同构于 $\mathbb{C}^{MN}$．

状态 Hilbert 空间的标准正交基是可能得到的测量结果．假如一个粒子可能出现在 $N$ 个不同的位置上（例如一个 $N$ 阶有向图），那么这 $N$ 个位置就可表示为 $\ket{0}, \ket{1}, \dots, \ket{N - 1}$．随着系统演化，粒子可能处于这些基本状态的叠加态，需要执行一次测量才能明确其所处位置．

一般的量子力学可能需要用无限维 Hilbert 空间描述（例如一条直线上的粒子有无穷多个可能的位置），但量子计算一般只涉及有限维 Hilbert 空间．对于有限维 Hilbert 空间，我们能用**线性代数**的知识处理．无限维 Hilbert 空间需要用到**泛函分析**（functional analysis）的知识，其中的许多结论都与有限维的情形截然不同．

### 线性算子

设 $\mathcal{H}$ 和 $\mathcal{G}$ 都是 Hilbert 空间，$T : \mathcal{H} \to \mathcal{G}$ 为函数．若对任意标量 $\alpha, \beta \in \mathbb{C}$ 和向量 $u, v \in \mathcal{H}$ 都有
$$
  T(\alpha u + \beta v) = \alpha T(u) + \beta T(v),
$$
则称 $T$ 为**线性映射**（linear map）或**线性算子**（linear operator），物理学中也经常称为**线性算符**．对于线性算子 $T$，我们一般把 $T(v)$ 写作 $Tv$．

设 $\mathcal{H}$ 和 $\mathcal{G}$ 的维度分别为 $N$ 和 $M$（有限值），则线性代数的知识告诉我们线性算子 $T$ 能使用 $\mathbb{C}^{M \times N}$ 中的复矩阵描述．不失一般性，可将 $\mathcal{H}$ 和 $\mathcal{G}$ 分别视作 $\mathbb{C}^N$ 和 $\mathbb{C}^M$，并记 $e_1, \dots, e_n$ 为 $\mathbb{C}^N$ 的标准基，即
$$
\begin{aligned}
  e_1 &= \begin{bmatrix} 1 \\ 0 \\ 0 \\ \vdots \\ 0 \end{bmatrix}, &
  e_2 &= \begin{bmatrix} 0 \\ 1 \\ 0 \\ \vdots \\ 0 \end{bmatrix}, &
  e_3 &= \begin{bmatrix} 0 \\ 0 \\ 1 \\ \vdots \\ 0 \end{bmatrix}, &
  &\cdots,&
  e_N &= \begin{bmatrix} 0 \\ 0 \\ 0 \\ \vdots \\ 1 \end{bmatrix},
\end{aligned}
$$
则
$$
\begin{aligned}
  Tv &= T\left( \sum_{j = 1}^n v_j e_j \right) \\
  &= \sum_{j = 1}^n v_j T(e_j) \\
  &= \begin{bmatrix} T(e_1) & T(e_2) & \cdots & T(e_N) \end{bmatrix}
    \begin{bmatrix} v_1 \\ v_2 \\ \vdots \\ v_N \end{bmatrix}.
\end{aligned}
$$
若记
$$
  A = \begin{bmatrix} T(e_1) & T(e_2) & \cdots & T(e_N) \end{bmatrix},
$$
则 $Tv = Av$．因此当我们讨论有限维 Hilbert 空间上的线性算子时，可以将其视作复矩阵．

我们一般把单位矩阵记作 $I$．类似地，对于任意（可能无限维的）Hilbert 空间上的算子，我们将映射 $v \mapsto v$ 称为**恒等算子**（identity operator，也称**单位算子**），并依然记作 $I$．

### 共轭转置

对于一般的 Hilbert 空间 $\mathcal{H}$，设 $A : \mathcal{H} \to \mathcal{H}$ 是线性算子，其**伴随算子**（adjoint operator）定义为对所有 $v \in \mathcal{H}$ 都满足下式的线性算子 $A^\dagger$：
$$
  \langle Av, v \rangle = \langle v, A^\dagger v \rangle.
$$
对于 $\mathcal{H}$ 是有限维的情形，若 $A$ 是矩阵，则 $A^\dagger$ 就是 $A$ 的共轭转置．在有限维 Hilbert 空间中，我们当然可以不引入伴随算子的定义而直接使用共轭转置，但这个定义更本质地揭示了共轭转置的性质：研究共轭转置时不免要研究 Hilbert 空间上的内积．

设 $U : \mathcal{H} \to \mathcal{H}$ 是线性算子．若 $U U^\dagger = U^\dagger U = I$（换言之 $U^{-1} = U^\dagger$），则称 $U$ 为**酉算子**（unitary operator）．当 $U$ 使用矩阵表示时，也称其为**酉矩阵**（unitary matrix）．酉矩阵在实矩阵中的对应是**正交矩阵**，它表示旋转或翻折，是保持内积不变的变换．术语 unitary operator 有时也翻译为**幺正算子**．

一般地，若线性算子 $U : \mathcal{H} \to \mathcal{H}$ 满足
$$
  \langle U v, U w \rangle = \langle v, w \rangle, \quad v, w \in \mathcal{H},
$$
则称 $U$ 是**保内积的**．我们不需要特别记忆这个术语，因为它是酉（unitary）的同义词．这里我们只讨论有限维情形．

::: proposition
设 $\mathcal{H}$ 是 $N$ 维 Hilbert 空间，$U : \mathcal{H} \to \mathcal{H}$ 是线性算子，则 $U$ 是保内积的当且仅当 $U$ 是酉算子．
:::

::: proof
$(\Rightarrow)$ 设 $U$ 是保内积的，则任取 $v, w \in \mathcal{H}$，我们有
$$
\begin{aligned}
  \langle v, w \rangle &= \langle Uv, Uw \rangle = \langle v, U^\dagger U w \rangle.
\end{aligned}
$$
记 $A = U^\dagger U$．若用 $e_1, \dots, e_N$ 表示 $\mathcal{H}$ 的标准基，则 $A$ 的第 $i$ 行 $j$ 列元素是
$$
  \langle e_i, A e_j \rangle = \langle e_i, e_j \rangle,
$$
因此 $A$ 是单位矩阵，即 $U^\dagger U = I$．于是 $U^\dagger = U^{-1}$，从而 $U^\dagger U = U U^\dagger = I$．

$(\Leftarrow)$ 设 $U$ 是酉算子，则 $U^\dagger U = I$．根据 $U^\dagger$ 的定义，对任意 $v, w \in \mathcal{H}$ 都有
$$
  \langle v, w \rangle
  = \langle v, U^\dagger U w \rangle
  = \langle Uv, Uw\rangle.
$$
:::


在量子力学中，系统状态用单位向量 $\ket{\psi} \in \mathcal{H}$ 表示，它的共轭转置记作 $\bra{\psi}$（这个记号称为 **bra**）．使用 bra-ket 记号，状态 $\ket{\varphi}$ 与 $\ket{\psi}$ 的内积可以记作
$$
  \langle \varphi | \psi \rangle := \bra{\varphi} \ket{\psi} = \ket{\varphi}^\dagger \ket{\psi}.
$$

[^erwin-functional-analysis]: （加）欧文·克雷斯齐格（Erwin Kreyszig）著, 蒋正新, 吕善伟, 等译. 泛函分析导论及应用[M]. 北京：人民邮电出版社, 2022.
