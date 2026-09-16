# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Visão geral

Blog pessoal de Vitor Machado, servido em `www.vitormach.dev/blog` pelo GitHub Pages a partir do branch `gh-pages` deste repo (build automático do Jekyll; não há `_site` versionado nem workflow em `.github/`). Não há Gemfile, testes, lint ou etapa de build local — qualquer push para `gh-pages` publica.

O layout é um redesenho de 2026 baseado na linguagem visual do site principal (`vitormach.dev`, repo `vittau.github.io`). A especificação viva do design — tokens, componentes, princípios de interação e regras para edição assistida por IA — está em **`DESIGN.md`**. Leia antes de mexer no visual. Em caso de dúvida sobre um token ou padrão, o `DESIGN.md` do site principal é a fonte.

## Comandos

Não há toolchain instalado localmente e **não dá para rodar o Jekyll nesta máquina**: o Ruby do sistema é 2.6 e o Jekyll exige 3.0+. Para pré-visualizar, duas rotas:

```sh
# 1. Instalar um Ruby moderno e o Jekyll (rota oficial)
gem install jekyll jekyll-paginate && jekyll serve      # http://localhost:4000/blog

# 2. Renderizador Liquid mínimo + Sass avulso (rota usada no redesenho)
gem install liquid -v 5.3.0 kramdown --user-install
# - Liquid resolve _config.yml, includes e layouts e cospe HTML;
# - o CSS precisa do Sass: substitua os `{{ site.* }}` de css/screen.scss pelos
#   valores de _config.yml e compile com `npx sass --load-path=_sass`.
```

Validação visual sem navegador interativo: o Chrome headless já instalado serve. Atenção: **`timeout` não existe no macOS**; use `perl -e 'alarm shift; exec @ARGV' 45 <cmd>`. O Chrome no macOS tem largura mínima de janela de ~500px — para testar 320/375px, carregue a página num `<iframe>` dessa largura. O blog vive sob `/blog`, então sirva a prévia com esse prefixo.

## Arquitetura

**Multi-página.** `index.html` (feed paginado) + `_posts/` (cada post gera uma URL por `permalink: /:year/:month/:day/:title`) + `feed.xml`. `_layouts/default.html` monta a página concatenando includes nesta ordem: `head` → `icons` → `header` → `main` (`masthead` + `content`) → `footer` → `scripts`. `_layouts/post.html` (com `layout: default`) envolve um post; `_layouts/page.html` serve páginas soltas. Edição de conteúdo acontece em `_posts/`, `_config.yml` e `_includes/*.html`.

**Paginação.** `jekyll-paginate` com `paginate: 5`; `index.html` itera `paginator.posts` e usa `site.paginate_path` (default `/page:num`). Os links de paginação usam `| prepend: site.baseurl` **de propósito**: os paths que o plugin devolve não incluem o baseurl — diferente dos filtros `relative_url`.

**`baseurl` é `/blog`.** O domínio é servido por outro repo na raiz; aqui todo asset precisa do prefixo. Use `| relative_url` / `| absolute_url`; evite `| prepend: site.baseurl` fora dos links de paginação.

**CSS é gerado por Liquid + Sass, não é estático.** `css/screen.scss` tem front matter, então o Liquid roda no corpo antes do Sass; os valores de `_config.yml` → `color:` (hex sem `#`) viram variáveis Sass que alimentam `_sass/_tokens.scss`, que emite as custom properties de tema claro/escuro. Consequências:

- As cores do blog vêm de `_config.yml` → `color:`. Trocar a paleta é editar só esse arquivo.
- Os campos `*-rgb` são o mesmo valor em decimal, usados nos `rgba()`. **Mantenha-os em sincronia com o hex ao lado.**
- Há três variantes de coral com papéis distintos (`--accent` decorativo, `--accent-ink` para texto, `--accent-solid` para fundo). A tabela de contraste está em `DESIGN.md` §2.2. Não colapse as três em uma.
- **Em `rgba()` com alpha, use as variáveis Sass** (`rgba($c-primary, .3)`), não `rgba(var(--token), .3)`: o Sass do Jekyll não avalia `var()` dentro de `rgba()` e quebra o build.
- Ordem dos partials em `css/screen.scss`: `vendor/normalize` → `variables` (breakpoints) → `tokens` → `base` → `layout` → `modules`. Os módulos (`_sass/modules/`) definem mixins `blog-*` que `_modules.scss` inclui.

**Fontes.** Poppins auto-hospedada em `fonts/` — 3 pesos × 2 subsets (latin e latin-ext), `woff2`. O caminho é o `$font-dir` definido em `css/screen.scss` (`{{ site.baseurl }}/fonts`); o `@font-face` fica em `_sass/_tokens.scss` e o `unicode-range` faz o navegador baixar só o subset usado.

**highlight.js auto-hospedado.** `js/highlight.min.js` (v9.13.1) é versionado no repo. O tema **não** é um CSS de terceiro: os tokens `.hljs-*` são estilizados com as custom properties do blog em `_sass/modules/post/_rules.scss`, então acompanham o tema. `_includes/scripts.html` carrega o script e chama `hljs.initHighlighting()` no `DOMContentLoaded`. Os posts usam `<pre><code class="...">` e `<code class="inline">`.

**Ícones.** Um sprite inline, `_includes/icons.html`, para UI e redes sociais; todos monocromáticos com `currentColor`. O `<svg>` usa `.sprite` (`position:absolute; width:0; height:0`), **nunca `display:none`** — fora da render tree, símbolos com gradiente pintam vazio. **Não extraia para um `.svg` externo**: com `<use href="arquivo.svg#id">` o Chrome resolve o documento de forma assíncrona e falha de verdade.

**JS.** `js/main.js` (~110 linhas, sem dependências): tema (com script bloqueante no `<head>` para não piscar), menu mobile, sombra da navbar e o reset do Disqus ao trocar de tema. Tudo degrada sem JS.

**Comentários (Disqus).** Em `_layouts/post.html`, shortname `vitor-machados-blog`. O Disqus escolhe claro/escuro pela **cor de texto herdada** em `#disqus_thread` no momento do load; por isso o CSS fixa `#disqus_thread { color: var(--text) }` e `js/main.js` chama `DISQUS.reset({reload:true, config: window.disqus_config})` quando o tema muda. Não há como reestilizar o iframe vivo. Para funcionar, o admin do Disqus precisa estar com o Color Scheme em **"Auto"**.

**Feed.** `feed.xml` (`layout: null`) publica os 10 posts mais recentes e é descoberto pelo `rel="alternate"` em `_includes/head.html`.

**Analytics.** GA4 (`G-NSNV8ZR1NV`) inline em `_includes/head.html`.

**Imagens.** `img/photo.webp` é o retrato quadrado usado no card About do rodapé (recortado em círculo); `img/posts/` guarda as imagens dos posts. O `og:image` vem de `site.image` (`_config.yml`). Sobra do tema antigo: `avatar.jpg`, `ribbon*`, `banner*`, `binary*`, `bulb*`, `noise*` e `icon-*`, tudo sem referência no código (ver débito em `DESIGN.md`).

**Conteúdo estático fora do Jekyll.** `other/` (arquivos de configuração de EQ) e `music/` (mp3) são copiados as-is pelo Jekyll; não compartilham nada com o tema.

## Não reintroduza CDNs

Fontes, ícones e highlight.js são servidos do próprio domínio, e o CSS é escrito à mão/em Sass. É uma decisão explícita (`DESIGN.md` §1, §6). As únicas dependências de terceiro em runtime são GA4 e o Disqus.

## Publicação

O branch ativo é `gh-pages`. Push para `gh-pages` publica; o build do GitHub Pages roda o Jekyll e o Sass de verdade, então uma mudança que não compila localmente pode falhar só lá — confira o domínio após publicar.
