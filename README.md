# JS Async Parallel Fibonacci

![Multithreaded Executing](executing.png)

## Output for 1_000_000

```bash
worker [7] took 31935ms
worker [8] took 34446ms
worker [16] took 34476ms
worker [5] took 35802ms
worker [6] took 36521ms
worker [10] took 37450ms
worker [4] took 38063ms
worker [9] took 38353ms
worker [12] took 39559ms
worker [2] took 39600ms
worker [15] took 39673ms
worker [13] took 39721ms
worker [14] took 39912ms
worker [3] took 40043ms
worker [11] took 40193ms
worker [1] took 40294ms
values:  [
  208988, 208988, 208988,
  208988, 208988, 208988,
  208988, 208988, 208988,
  208988, 208988, 208988,
  208988, 208988, 208988,
  208988
]
all took 40755ms
```

## Runtime Environment

```bash
            .-/+oossssoo+/-.
        `:+ssssssssssssssssss+:`
      -+ssssssssssssssssssyyssss+-         lavantien@savaka
    .ossssssssssssssssssdMMMNysssso.       ----------------
   /ssssssssssshdmmNNmmyNMMMMhssssss/      OS: Ubuntu 22.04.2 LTS x86_64
  +ssssssssshmydMMMMMMMNddddyssssssss+     Host: MS-7D42 1.0
 /sssssssshNMMMyhhyyyyhmNMMMNhssssssss/    Kernel: 5.19.0-42-generic
.ssssssssdMMMNhsssssssssshNMMMdssssssss.   Uptime: 1 day, 16 mins
+sssshhhyNMMNyssssssssssssyNMMMysssssss+   Packages: 2276 (dpkg), 276 (brew), 11 (nix
ossyNMMMNyMMhsssssssssssssshmmmhssssssso   Shell: bash 5.1.16
ossyNMMMNyMMhsssssssssssssshmmmhssssssso   Resolution: 3840x2160
+sssshhhyNMMNyssssssssssssyNMMMysssssss+   DE: GNOME 42.5
.ssssssssdMMMNhsssssssssshNMMMdssssssss.   WM: Mutter
 /sssssssshNMMMyhhyyyyhdNMMMNhssssssss/    WM Theme: Adwaita
  +sssssssssdmydMMMMMMMMddddyssssssss+     Theme: Yaru-olive-dark [GTK2/3]
   /ssssssssssshdmNNNNmyNMMMMhssssss/      Icons: Yaru-olive [GTK2/3]
    .ossssssssssssssssssdMMMNysssso.       Terminal: WezTerm
      -+sssssssssssssssssyyyssss+-         CPU: 12th Gen Intel i7-12700F (20) @ 4.800
        `:+ssssssssssssssssss+:`           GPU: NVIDIA GeForce RTX 3080 Lite Hash Rat
            .-/+oossssoo+/-.               Memory: 12706MiB / 31954MiB
```
