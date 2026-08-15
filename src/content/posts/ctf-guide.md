---
title: CTF 入门指南：Reverse 与 PWN 方向学习路线
published: 2026-08-14
description: 针对 CTF 新手，梳理 Reverse 与 PWN 两大二进制方向的知识体系、练习资源与入门建议。
image: ""
tags: [CTF, 逆向, 学习路线]
category: 逆向工程
draft: false
---

## CTF 是什么

CTF（Capture The Flag，夺旗赛）是安全领域的竞技比赛形式，通过解决一系列问题获取"Flag"来得分。其中 **Reverse** 与 **PWN** 是与二进制逆向最密切相关的两大方向。

## Reverse 方向

**核心能力**：读懂程序在做什么，再逆向出正确输入或 Flag。

**知识点**：

- 汇编语言（x86/x64）、调用约定
- PE / ELF 文件结构
- Ghidra / IDA 反编译
- 常见加密算法的识别与还原（Base64、XOR、RC4、AES）
- 脱壳、反调试、混淆对抗

## PWN 方向

**核心能力**：利用程序的漏洞控制程序执行流，最终获得 shell。本质上是对二进制程序的深度理解与利用。

**知识点**：

- 栈溢出：ret2text / ret2libc / ROP
- 格式化字符串漏洞
- 堆利用：UAF、double free、tcache poisoning
- 保护机制：NX、ASLR、PIE、Canary、FULL RELRO

**必备工具**：GDB + pwndbg、checksec、ROPgadget、one_gadget、LibcSearcher。

## 推荐的入门路径

```text
阶段一：掌握 C/Python、基本 Linux 命令
阶段二：学习汇编基础，熟悉 ELF 加载流程
阶段三：刷 Easy 难度 Reverse 题（看懂伪代码、还原算法）
阶段四：学习栈溢出原理，练习 ret2text / ret2shellcode
阶段五：进阶 ROP、堆利用，参与正式比赛
```

## 练习平台与资源

- [CTFtime](https://ctftime.org)：全球比赛信息
- [BUUCTF](https://buuoj.cn)：国内热门练习平台
- [PwnCollege](https://pwn.college)：系统化 PWN 教学
- [Nightmare](https://github.com/guyinatuxedo/nightmare)：逆向题目集
- [CTF Wiki](https://ctf-wiki.org)：逆向 / 二进制方向知识库

> CTF 是最接近真实攻防的学习方式，坚持刷题比看多少教程都重要。