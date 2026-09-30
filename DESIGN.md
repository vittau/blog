# DESIGN.md — `vitormach.dev/blog`

Especificação viva do design atual do blog. Reflete o que está implementado hoje; não é um changelog nem um plano de migração — isso vive no histórico do git.

**Referência de linguagem:** o site principal, `vitormach.dev` (repo `vittau.github.io`, arquivo `DESIGN.md` lá), que é a fonte dos tokens, da tipografia e dos componentes. Este documento registra só o que o blog concretiza e onde diverge.

---

## 1. Identidade do projeto

| | |
|---|---|
| **Produto** | Blog pessoal de Vitor Machado, servido em `www.vitormach.dev/blog` |
| **Estágio** | Em produção, publicado via GitHub Pages a partir do branch `gh-pages` deste repo |
| **Usuário primário** | Leitores chegando por busca, RSS ou pelo site principal |
| **Sensação de design** | A mesma do site principal: editorial, papel e carvão quentes, um único acento coral, títulos em serifa, metadados em mono. Aqui a leitura longa é o centro: um post é uma coluna de 700px com a capa mais larga que o texto, e o índice é uma lista, não uma grade de cards. |
| **Restrição transversal** | Sem CDN, sem bundler, sem passo de build próprio além do Jekyll do GitHub Pages. Fontes e highlight.js são versionados no repo. Dependências de terceiro em runtime: GA4 e Disqus. |

**Diferença deliberada em relação ao site principal:** a folha é gerada por Sass (`css/screen.scss` → `_sass/`), não escrita à mão num único arquivo. O Liquid roda antes do Sass e injeta a paleta do `_config.yml`; o resultado são as mesmas custom properties do site principal.

---

## 2. Linguagem visual

### 2.1 Princípios

- **Seguir:** os tokens e componentes do `vitormach.dev` — mesma paleta, mesmas três fontes, mesma marca ◇, mesma navbar, mesmos `.kicker`, `.tag`, `.link-arrow` e rodapé. Quem passa do site para o blog não deve notar a troca de repositório.
- **Evitar:** os clichês do tema anterior (roxo, gradiente de fundo com emenda, cards translúcidos em grade) e qualquer framework CSS, fonte, ícone ou script servido por CDN.

### 2.2 Sistema de cor

Tokens semânticos em `:root` (tema claro é o padrão), redefinidos por um mixin único (`dark-tokens` em `_sass/_tokens.scss`) aplicado sob `[data-theme="dark"]` e sob `@media (prefers-color-scheme: dark)` quando não há preferência salva — o mixin impede que os dois blocos divirjam. Os valores vêm de `_config.yml` → `color:`.

| Token | Escuro | Claro | Uso |
|---|---|---|---|
| `--bg` | `#141316` | `#F4F0E8` | fundo da página (carvão quente / papel) |
| `--surface` | `#1D1B20` | `#FBF9F5` | blocos de código, cartões anterior/próximo |
| `--surface-2` | branco a 5% | tinta a 5% | tags, `code.inline`, cabeçalho de tabela |
| `--line` / `--line-strong` | branco a 9% / 18% | tinta a 12% / 22% | bordas e divisores |
| `--text` | `#F2EEE8` | `#26231F` | títulos e destaque |
| `--text-muted` | `#A8A198` | `#5F5850` | corpo de post, meta |
| `--accent` | `#CC6868` | `#CC6868` | decoração: marca, pontos, borda de citação |
| `--accent-ink` | `#E08A7E` | `#A5492F` | **texto** e links na cor de destaque |
| `--accent-solid` | `#CC6868` | `#AD4F38` | **fundo** da página selecionada na paginação |
| `--on-accent` | `#141316` | `#FFFFFF` | texto **sobre** `--accent-solid` |
| `--code-string` | `#A7B57C` | `#56632F` | strings no highlight.js (sálvia) |

A única cor fora do coral é a sálvia das strings de código: com keywords e strings no mesmo coral o código perdia a leitura. Ela aparece só dentro de `pre`. **Não colapse as três variantes do coral em uma** (ver `DESIGN.md` do site para o motivo). Pares próprios do blog, medidos:

| Par | Razão |
|---|---|
| `--code-string` / `--surface`, claro · escuro | 6.20 · 7.76 |

Todos os demais pares são os mesmos do site principal e passam em AA. Os campos `*-rgb` em `_config.yml` alimentam os `rgba()` — mantenha-os em sincronia com o hex ao lado.

### 2.3 Tipografia

As mesmas três famílias do site, auto-hospedadas em `fonts/` (SIL OFL), subsets latin + latin-ext:

- **Newsreader** (500 romana e 400 itálica, estáticas no tamanho óptico 72) — títulos de página, de post, de seção, legendas de imagem, citações e o parágrafo do autor.
- **Geist** (variável 300–700) — texto corrido.
- **Geist Mono** (400–600) — `.kicker`, datas, tempo de leitura, tags, código.

| Papel | Tamanho |
|---|---|
| `--fs-display` (título do blog) | `clamp(2.75rem, 7vw, 5.5rem)`, "of …" em itálico coral na segunda linha |
| `--fs-title` (título de post) | `clamp(2.25rem, 5.5vw, 4rem)` |
| `--fs-h2` (seção, `h5` do markdown) | `clamp(1.625rem, 3.2vw, 2.125rem)` |
| `--fs-h3` (título na lista, `h6`) | `clamp(1.25rem, 2vw, 1.5rem)` |
| `--fs-read` (corpo do post) | `1.0938rem`, `line-height: 1.75` |

### 2.4 Espaçamento, raio, motion

Escala de espaçamento, raios, `--ease`/`--ease-out` e durações idênticos ao site. Layout: `--container 1180px`, `--wide 1000px` (capa do post), `--reading 700px`, `--gutter 32px` (20px abaixo de 768px). Breakpoints em `_sass/_variables.scss`: `$bp-nav: 900px`, `$bp-md: 768px`, `$bp-sm: 600px`.

---

## 3. Padrões de componentes

| Componente | Especificação |
|---|---|
| **Navbar** | A do site: pill transparente sobre o topo, vidro (`--glass`) + borda + sombra ao rolar. Marca "◇ vitor machado / BLOG" (o "/ BLOG" some abaixo de 600px) apontando para `site.home_url`. Links: Blog (ativo no índice, em qualquer página da paginação e nos posts), Portfolio ↗, RSS. Abaixo de 900px vira painel deslizante com links em serifa grande. |
| **Masthead do índice** | Kicker "THE BLOG · N POSTS SINCE AAAA" (e "PAGE N" nas páginas seguintes), título do `_config.yml` quebrado em " of ": primeira metade romana, segunda em itálico coral recuado. Lead = `site.subtitle`. Dois `.link-arrow`: vitormach.dev e RSS. Brilho coral no canto que se dissolve no fundo, sem emenda. |
| **Masthead do post** | `container--reading`. Kicker com categoria em coral + tempo de leitura (`strip_html | number_of_words` ÷ 220). Título em serifa, lead = `page.description`, e uma linha em mono com data por extenso e local, separada por um fio. |
| **Destaque** (primeira página) | O post mais novo em duas colunas: imagem 16:10 e kicker "LATEST · data · min read", título grande em serifa, descrição e "Read the post →". |
| **Lista de posts** | Uma linha por post, com fios entre elas: data e categoria em mono à esquerda, título em serifa + descrição (`description`, ou o excerpt) + até 5 tags no meio, miniatura 16:10 à direita. A linha inteira é clicável pelo link do título. **Sem `image:`, a miniatura cai num quadro com o ◇.** Abaixo de 600px: data em cima, miniatura de 96px, sem tags. |
| **Article** | Capa em `container--wide` (1000px) quando há `image:` **e ela ainda não aparece no corpo** (evita a mesma foto duas vezes seguidas). Corpo em `--text-muted`, títulos em serifa, links com sublinhado coral translúcido que fica sólido no hover. `hr` é um traço coral curto centralizado. |
| **Código** | `pre` em `--surface` com borda `--line`; `code.inline` em `--surface-2`. Tema do highlight.js por tokens: keywords e literais em `--accent-ink`, strings em `--code-string`, comentários em itálico `--text-muted`, chaves de objeto em `--text`. |
| **Imagens de post** | `.post-image` com borda `--line`, sem sombra; legenda em itálico serifado, centralizada, até 52ch. |
| **Rodapé do post** | Tags + "← All posts"; depois dois cartões **Previous / Next** com o título em serifa. |
| **Paginação** | Rótulo "PAGES" em mono + números em pill de contorno; selecionado em `--accent-solid`. |
| **Rodapé** | Bloco do autor (retrato 4:5 com a moldura deslocada do hero do site, kicker "WRITTEN BY", `site.description` em serifa grande, links vitormach.dev/GitHub/LinkedIn/Instagram/RSS) e a barra final igual à do site (marca, legal, "Back to top"). |

**Foco:** todo elemento interativo mantém `:focus-visible` com `outline: 2px solid var(--accent); outline-offset: 3px`.

---

## 4. Princípios de interação

1. **Uma cor de destaque.** Coral carrega marca, links e estados ativos; a sálvia existe só nas strings de código.
2. **Movimento discreto e opcional.** Só a entrada do masthead (fade com leve blur, escalonado) e hovers. Sob `prefers-reduced-motion: reduce`, durações e atrasos vão a zero.
3. **Conteúdo antes de efeito.** Sem JS: tema segue `prefers-color-scheme` (e o botão some), menu mobile vira lista, navbar fica sempre com vidro, highlight.js simplesmente não realça. A entrada do masthead é só CSS.
4. **Navbar colapsa por conteúdo, não por dispositivo** — 900px, onde marca + 3 links + 2 ícones + toggle deixam de caber com folga.
5. **O tema do Disqus segue a cor herdada.** `#disqus_thread { color: var(--text) }` e `DISQUS.reset` quando o tema muda; o admin do Disqus precisa estar em "Auto".

---

## 5. Estado atual da build

### Seções implementadas

- [x] Navbar (desktop + mobile) com toggle de tema
- [x] Masthead (índice e post)
- [x] Destaque + lista paginada a partir de `_posts/`
- [x] Article (capa, prosa, código, tabelas, imagens, legenda, anterior/próximo)
- [x] Rodapé com bloco do autor
- [x] Dark/light mode com persistência
- [x] Feed RSS (`feed.xml`) + autodiscovery, e GA4
- [x] Comentários Disqus seguindo o tema

### Débito de design conhecido

- **O Disqus não segue a tipografia nem a paleta** — só claro/escuro. Os botões de login dele (coloridos) são a parte menos coerente da página.
- **Build oficial do Jekyll não roda localmente.** Ver `CLAUDE.md` para a rota de pré-visualização e a validação do Sass com o Ruby Sass 3.7.4.
- **Navegação por teclado e leitor de tela** não foram percorridas à mão com um leitor de tela real.

---

## 6. Regras para edição assistida por IA

- **Mude o site primeiro, depois o blog.** Token, fonte ou componente compartilhado nasce no `DESIGN.md` do site e é copiado para cá — nunca o contrário.
- **Use os tokens, nunca hex direto.** Cor nova é um token novo em `_config.yml` (+ par `-rgb` se for usada em `rgba()`).
- **Cores em `rgba()` com alpha vêm de variáveis Sass** (`rgba($c-primary, .3)`), não de `rgba(var(--x), .3)`: o Sass do Jekyll não avalia `var()` dentro de `rgba()` e quebra o build.
- **Valide o Sass no motor do GitHub Pages** (Ruby Sass 3.7.4, ver `CLAUDE.md`), não só no dart-sass: o que um aceita o outro pode recusar.
- **Sem CDN, sem novo arquivo externo para ícone/fonte.** Sprite inline com `.sprite`, nunca `display:none`, nunca `<use href="arquivo.svg#id">`.
- **`baseurl` é `/blog`.** `relative_url`/`absolute_url` em tudo, menos nos links de paginação em `index.html`.
- **Tags vêm como texto** (`tags: a, b, c`): o Jekyll divide por espaço e cada tag chega com a vírgula; os includes a removem com `| remove: ","`.
- **Componentes com estado vazio precisam de fallback explícito:** post sem `image:` → quadro com ◇ na lista e sem capa no post; sem `description:` → excerpt; sem `tags` → sem lista; sem anterior/próximo → só o cartão que existe.
- **Todo elemento interativo novo precisa de `:focus-visible` visível** e dos atributos ARIA se for controle não nativo.
- **Mexeu no tema? Confira o Disqus.**
- **Teste em 320, 375, 768, 900 e 1440px, nos dois temas**, no índice (páginas 1 e 2) e em um post com código e um com imagens.
