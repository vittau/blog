# DESIGN.md — `vitormach.dev/blog`

Especificação viva do design atual do blog. Reflete o que está implementado hoje; não é um changelog nem um plano de migração — isso vive no histórico do git.

**Referência de linguagem:** o site principal, `vitormach.dev` (repo `vittau.github.io`, arquivo `DESIGN.md` lá). O blog herda a linguagem visual dele; este documento registra só o que o blog concretiza e onde diverge.

---

## 1. Identidade do projeto

| | |
|---|---|
| **Produto** | Blog pessoal de Vitor Machado, servido em `www.vitormach.dev/blog` |
| **Estágio** | Em produção, publicado via GitHub Pages a partir do branch `gh-pages` deste repo |
| **Usuário primário** | Leitores chegando por busca, RSS ou pelo site principal |
| **Sensação de design** | A mesma do site principal: gradiente escuro/roxo, um único acento coral, tipografia geométrica, cards translúcidos. Aqui a leitura longa é o centro: um post é uma coluna de 720px, densa em texto e leve em peso de página. |
| **Restrição transversal** | Sem CDN, sem bundler, sem passo de build próprio além do Jekyll do GitHub Pages. Fontes e highlight.js são versionados no repo. Dependências de terceiro em runtime: GA4 e Disqus. |

**Diferença deliberada em relação ao site principal:** a única folha é gerada por Sass (`css/screen.scss` → `_sass/`), não escrita à mão num único arquivo. O Liquid roda antes do Sass e injeta a paleta do `_config.yml`; o resultado são as mesmas custom properties do site principal.

---

## 2. Linguagem visual

### 2.1 Inspiração

- **Seguir:** o sistema de tokens e componentes do `vitormach.dev` (navbar em pill, superfícies translúcidas, dark/light, Poppins, coral único) e, na origem, o template do Behance de [Giselle Santos](https://www.behance.net/gallery/193147621/Personal-Portfolio-Page-Web-Design).
- **Evitar:** reintroduzir Bootstrap, jQuery ou qualquer framework CSS; fonte, ícone ou script servido por CDN.

### 2.2 Sistema de cor

Tokens semânticos, definidos como custom properties em `:root` (tema claro é o padrão), redefinidos sob `[data-theme="dark"]` e em `@media (prefers-color-scheme: dark)` quando não há preferência salva. Os valores vêm de `_config.yml` → `color:` — trocar a paleta é editar só esse arquivo.

| Token | Escuro | Claro | Uso |
|---|---|---|---|
| `--bg` | `#1B1B2B` | `#E7E9F3` | fundo da página |
| `--grad-from` / `--grad-to` | `#232437` / `#563C4D` | `#CBCEF1` / `#EDCFD8` | masthead e rodapé |
| `--surface` | `rgba(255,255,255,.045)` | `rgba(255,255,255,.55)` | cards, navbar, chips |
| `--surface-strong` | `rgba(255,255,255,.09)` | `rgba(255,255,255,.85)` | navbar ao rolar, tags, cabeçalho de tabela |
| `--surface-border` | `rgba(255,255,255,.11)` | `rgba(61,61,61,.12)` | borda de 1px das superfícies |
| `--text` | `#FFFFFF` | `#3D3D3D` | títulos e corpo de destaque |
| `--text-muted` | `#BABABA` | `#5A5A66` | corpo de post, meta, rodapé |
| `--accent` | `#CC6868` | `#CC6868` | decoração: bordas, ícones, barra ativa, marcadores |
| `--accent-ink` | `#D98080` | `#A94442` | **texto** e links na cor de destaque |
| `--accent-solid` | `#CC6868` | `#B5514F` | **fundo** de botão/pill selecionado |
| `--on-accent` | `#1B1B2B` | `#FFFFFF` | texto **sobre** `--accent-solid` |
| `--accent-2` | `#7C4B83` | `#7C4B83` | strings de código, brilho do avatar |
| `--code-bg` | `rgba(255,255,255,.06)` | `rgba(61,61,61,.07)` | fundo de `pre` e `code.inline` |

O coral tem três variantes com papéis distintos (`--accent`, `--accent-ink`, `--accent-solid`) porque o coral puro não passa em WCAG AA como texto pequeno sobre fundo claro nem como fundo de botão com texto branco. **Não colapse as três em uma.**

Os pares que sustentam a decisão (medidos no site principal, mesmos valores aqui):

| Par | Razão | Contexto |
|---|---|---|
| `#CC6868` sobre `#1B1B2B` | 4.64:1 | acento sobre fundo escuro |
| `#A94442` sobre `#E7E9F3` | 4.83:1 | `--accent-ink` claro, corpo de texto |
| `#D98080` sobre superfície translúcida escura | 5.29:1 | `--accent-ink` escuro, corpo de texto |
| `#FFFFFF` sobre `#B5514F` | 4.94:1 | texto sobre pill selecionado, claro |
| `#1B1B2B` sobre `#CC6868` | 4.64:1 | texto sobre pill selecionado, escuro |
| `#BABABA` sobre `#1B1B2B` | 8.74:1 | `--text-muted` escuro |
| `#5A5A66` sobre `#E7E9F3` | 5.5:1 | `--text-muted` claro |

Os campos `*-rgb` em `_config.yml` (mesmo valor em decimal) alimentam os `rgba()` do CSS — mantenha-os em sincronia com o hex ao lado.

### 2.3 Tipografia

Família única: **Poppins**, auto-hospedada em `fonts/` — pesos 400/600/700, subset latin + latin-ext, `woff2`. Fallback: `ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`. Código: `--font-mono` (mono do sistema, sem fonte extra).

| Papel | Token | Tamanho | Peso |
|---|---|---|---|
| `--fs-display` (título do masthead) | | `clamp(2rem, 6vw, 3.25rem)` | 700 |
| `--fs-h1` (título na `.page`) | | `clamp(1.75rem, 4.5vw, 2.5rem)` | 600 |
| `--fs-h2` (seção de post, `h5` do markdown) | | `clamp(1.5rem, 3.5vw, 2rem)` | 600 |
| `--fs-h3` (título de card) | | `1.125rem` | 600 |
| `--fs-lead` (subtítulo do masthead) | | `1.0625rem` | 400 |
| `--fs-body` | | `1rem` | 400 |
| `--fs-sm` (meta, rodapé, card) | | `0.875rem` | 400 |
| `--fs-eyebrow` (tags, rótulos) | | `0.75rem` | 600, `.08em`, uppercase |

O corpo do post usa `1.0625rem` com `line-height: 1.75` e a coluna é limitada por `--reading: 720px` — não por um `ch` arbitrário. **Foi removida uma largura máxima em `ch` do card About do rodapé** porque criava uma segunda medida e quebrava a linha antes do fim do container; o texto agora usa a largura do card.

### 2.4 Espaçamento, raio, elevação, motion

```
Espaçamento (base 4px)
  --sp-1  4px   --sp-4  16px   --sp-7  48px   --sp-10 128px
  --sp-2  8px   --sp-5  24px   --sp-8  64px
  --sp-3  12px  --sp-6  32px   --sp-9  96px

Layout
  --container      1140px
  --reading         720px   (coluna de leitura do post)
  --gutter          24px    (16px abaixo de 768px)
  --section-pad-y   clamp(3rem, 8vw, 5.5rem)
  --nav-h            68px   (60px abaixo de 768px)

Raio
  --r-sm 8px   --r-md 12px   --r-lg 20px   --r-xl 28px   --r-pill 999px

Elevação
  --shadow-card   dark: 0 8px 32px rgba(0,0,0,.35)
                  light: 0 8px 28px rgba(61,61,61,.10)
  brilho do avatar  0 0 40px rgba(204,104,104,.3)

Motion
  --ease      cubic-bezier(.4, 0, .2, 1)
  --dur-fast  150ms   --dur-base 250ms   --dur-slow 500ms
```

Breakpoints (em `_sass/_variables.scss`): `$bp-nav: 900px`, `$bp-md: 768px`, `$bp-sm: 600px`.

---

## 3. Padrões de componentes

| Componente | Especificação |
|---|---|
| **Navbar** | Pill flutuante (`--r-pill`), `background: var(--surface)`, `backdrop-filter: blur(16px)`, sticky a `--sp-4` do topo. Ganha `--shadow-card` ao rolar (`.is-scrolled`). Links: Blog, Portfolio, RSS + ícones sociais + toggle de tema. Abaixo de **900px** vira hambúrguer com painel deslizante de `min(80vw, 320px)`. O vidro fica num `::before`, não no `.nav__inner`, para não sequestrar o `position: fixed` do painel mobile. |
| **Masthead** | `padding-block` com `--nav-h + --sp-9` no topo para o conteúdo começar em `y=0` sob a navbar. Duas variantes: **index** (eyebrow "The blog", `h1` = `site.title`, lead = `site.subtitle`) e **post/page** (`container--reading`, eyebrow = categorias, `h1` = `page.title`, lead = `page.description`, meta = data + local). Fundo `grad-bg`. |
| **Card de post** (feed) | Grade `repeat(auto-fill, minmax(320px, 1fr))`, gap `--sp-6`. Thumbnail `aspect-ratio: 16/9` com `object-fit: cover`; **sem `image:` no front matter, cai num fallback tipográfico** (título sobre gradiente). Corpo: data + categorias, `h2`, excerpt `strip_html` truncado em 40 palavras e limitado a 4 linhas (`-webkit-line-clamp`), tags, "Read more". Hover eleva 6px e a borda vira `--accent`. |
| **Article** (post) | `container--reading` (720px). Hero `16/9` quando há `image:`. Corpo `--text-muted` com `h5`→`--fs-h2`, `h6`→`--fs-h3`. Rodapé: tags + link "Back to the blog". |
| **Código** | `code.inline` em chip (`--code-bg`, borda, `--accent-ink`); `pre` em bloco com scroll horizontal. Tema do highlight.js **por tokens** (`.hljs-keyword`→`--accent-ink`, `.hljs-string`→`--accent-2`, etc.), então acompanha o tema sem CSS de terceiro. |
| **Imagens de post** | Blocos `.post-image` / `.post-image-caption` que o markdown dos posts já trazia: imagem centralizada com borda e sombra, legenda em itálico `--fs-sm`; iframes/vídeos em `16/9`. |
| **Paginação** | Só pills **numéricos** ("1  2"). `--accent-solid` no selecionado, `aria-current="page"`. Os botões First/Prev/Next/Last foram removidos por serem ruído com poucas páginas. |
| **Rodapé** | Topo com marca, ícones sociais e nav. Card **About** em `.surface` (foto circular `img/photo.webp` com brilho coral + `site.description` + links). Linha legal com Jekyll, GitHub Pages e o crédito "Layout inspired by Giselle Santos' portfolio concept". |
| **Ícones** | Todos inline via `<use href="#i-...">`, `fill="currentColor"`. Marcas (GitHub, Instagram) do Simple Icons (CC0); interface (home, rss, sun, moon, menu, close, arrows) desenhada no estilo traço 1.75. |

**Foco:** todo elemento interativo mantém `:focus-visible` com `outline: 2px solid var(--accent); outline-offset: 3px`.

Primitivos compartilhados disponíveis mas **ainda não usados** no blog: `.btn` (`--primary`/`--secondary`) e `.chip`. Existem para manter paridade com o site principal; se algum dia forem usados, seguem a spec de lá.

---

## 4. Princípios de interação

1. **Uma cor de destaque.** Coral carrega marca, links, estados ativos e marcadores. Roxo (`--accent-2`) é secundário. Tudo mais é neutro.
2. **Movimento discreto e opcional.** Animação é ornamental; sob `prefers-reduced-motion: reduce` as durações vão a `0.01ms` e as transições param.
3. **Conteúdo antes de efeito.** A página é legível e navegável com JS desligado: o tema segue `prefers-color-scheme`, o menu mobile vira lista visível (`html.no-js`), o highlight.js simplesmente não realça.
4. **Navbar colapsa por conteúdo, não por dispositivo.** O ponto é onde a barra completa (marca + 3 links + 2 ícones sociais + toggle) para de caber, com margem — hoje 900px. Se a navbar ganhar itens, meça de novo.
5. **O tema do Disqus segue a cor herdada.** O Disqus escolhe claro/escuro pela cor de texto que herda em `#disqus_thread` **no carregamento**; por isso `#disqus_thread { color: var(--text) }` e uma chamada a `DISQUS.reset` quando o tema muda. Não há como reestilizar o iframe vivo — a alternativa seria inverter cores por CSS, que estragaria avatares e imagens.

**JS** (`js/main.js`, sem dependências): tema (script bloqueante no `<head>` evita flash), menu mobile, sombra da navbar e o reset do Disqus. `_includes/scripts.html` carrega `highlight.min.js` e chama `hljs.initHighlighting()`.

---

## 5. Estado atual da build

### Seções implementadas

- [x] Navbar (desktop + mobile) com toggle de tema
- [x] Masthead em gradiente (variantes index e post)
- [x] Feed paginado em cards a partir de `_posts/`
- [x] Article de leitura (hero, prosa, código, tabelas, imagens, legenda)
- [x] Paginação numérica
- [x] Rodapé com card About e créditos legais
- [x] Dark/light mode com persistência
- [x] Feed RSS (`feed.xml`) + autodiscovery, e GA4
- [x] Comentários Disqus seguindo o tema

### Débito de design conhecido

- **Assets do tema antigo.** `img/` ainda guarda `ribbon*`, `banner*`, `binary*`, `bulb*`, `dark-bulb*`, `noise*`, `dark-noise*`, `icon-location/twitter/instagram/world*` e `avatar.jpg`, todos sem referência no código. Podem ser removidos.
- **Build oficial do Jekyll não roda localmente** (Ruby do sistema é 2.6, Jekyll exige 3.0+). Validação visual depende de um renderizador Liquid mínimo (gem `liquid` + `kramdown`) e do Sass via `npx sass`; a primeira publicação de qualquer mudança grande merece uma conferida no domínio real.
- **Navegação por teclado e leitor de tela.** A marcação está correta (`aria-checked`, `aria-expanded`, `aria-controls`, skip link, `:focus-visible` em tudo), mas não foi percorrida à mão com um leitor de tela real.
- **Feed sem autor por item.** O RSS é válido e tem 8 itens (`limit:10`), mas não emite `<author>`/`<dc:creator>` por post.

---

## 6. Regras para edição assistida por IA

Ao gerar ou editar HTML/CSS deste blog:

- **Use os tokens, nunca hex direto.** Cor nova é um token novo em `_config.yml` (+ seu par `-rgb`), não um valor hardcoded no CSS.
- **Sem CDN, sem novo arquivo externo para ícone/fonte.** Fontes ficam em `fonts/`; ícones em sprite inline (`<symbol>` + `<use>`), nunca um `.svg` externo referenciado por `<use href="arquivo.svg#id">` (o Chrome resolve de forma assíncrona e falha intermitentemente).
- **O `<svg>` de um sprite usa `.sprite` (`position:absolute; width:0; height:0`), nunca `display:none`.** Fora da render tree, símbolos com gradiente pintam vazio.
- **Cores em `rgba()` com alpha vêm de variáveis Sass** (`rgba($c-primary, .3)`), não de `rgba(var(--x), .3)`: o Sass do Jekyll não avalia `var()` dentro de `rgba()` e quebra o build.
- **`baseurl` é `/blog`.** Prefira `relative_url`/`absolute_url`; os únicos `prepend: site.baseurl` legítimos são os links de paginação em `index.html`, porque os paths do `jekyll-paginate` não os incluem.
- **Componentes com estado vazio/alternativo precisam de fallback explícito.** Card de post sem `image:` cai num título tipográfico; `page.tags` ausente some a lista, não deixa markup quebrado.
- **Todo elemento interativo novo precisa de `:focus-visible` visível** e, se for controle não nativo (toggle, menu), dos atributos ARIA correspondentes.
- **Mexeu no tema? Confira o Disqus.** O esquema dele depende da cor herdada em `#disqus_thread` e do admin em "Auto".
- **Teste em pelo menos 320, 375, 768, 900 e 1440px** antes de considerar uma mudança de layout pronta — a maioria dos bugs apareceu numa faixa estreita perto de um breakpoint.
