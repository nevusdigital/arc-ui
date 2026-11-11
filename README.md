# arc-ui — espelho do uiarc.dev/components

Espelho **não oficial** e navegável do catálogo completo do [uiarc.dev/components](https://uiarc.dev/components): **385 itens** (244 componentes + 141 blocos, free e Pro), cada um abrindo com **demo ao vivo**, documentação (uso, exemplos, quando usar/evitar, dependências, acessibilidade, movimento) e instruções de instalação.

- Site: <https://nevusdigital.github.io/arc-ui/>
- Original: <https://uiarc.dev/components>

## Funcionalidades

- Navegação por hash: `#/c/<slug>` (componentes) e `#/b/<slug>` (blocos) — deep-link direto para qualquer item.
- Busca instantânea (título, descrição, tags, keywords, categoria; tecla `/` foca o campo).
- Filtros por tipo (componente/bloco), nível (free/Pro) e categoria.
- Tema claro/escuro (segue o sistema, persistido em `localStorage`).
- Tabs por item: **Demo** (ao vivo), **Docs**, **Instalação**.

## Como funciona

- `catalog.json` — um registro por item (metadados ricos do site + localização do demo).
- **325 itens (Pro + free cross-ref):** os módulos webpack originais do site, extraídos dos bundles públicos, rodam sobre um runtime mini (`runtime/arc-runtime.js`) usando o próprio React do site (`runtime/vendor-dom.js`). Os 173 itens cujo factory de demo original foi capturado usam exatamente o demo que roda no site; os demais montam o componente exportado pela entrada.
- **60 itens free:** reconstruídos dos arquivos-fonte com esbuild em bundles ESM autossuficientes (`demos/free/<slug>/bundle.js` + `bundle.css`), com props de demonstração derivadas do tipo Props (parser) e curadas manualmente onde o componente exige dados.
- Um único instância de React (a do site, normalizada) é compartilhada entre registry e bundles, então os dois mundos convivem na mesma página.

## Aviso legal

Leia [NOTICE.md](NOTICE.md). Os itens **Pro** foram extraídos dos bundles públicos publicados pelo site; os termos do uiarc.dev se aplicam ao conteúdo.

## Estrutura

```
index.html app.js style.css     — casca da aplicação (roteamento, busca, tabs)
tokens.css .tokens.json         — design tokens extraídos do site
catalog.json                    — catálogo dos 385 itens
assets/                         — favicon e fontes (Geist/Inter)
runtime/                        — arc-runtime.js (runtime webpack mini) + vendor-dom.js (React do site)
src/shared.registry.js          — módulos compartilhados (React shim, jsx-runtime, etc.)
src/component/*.registry.js     — módulos originais: 188 (123 Pro + 65 free cross-ref)
src/block/*.registry.js         — módulos originais: 137 (119 Pro + 18 free cross-ref)
src/pro-block/<slug>/           — artefatos extras de alguns blocos Pro
demos/free/<slug>/              — bundles reconstruídos dos 60 free (bundle.js + bundle.css + meta.json)
vendor/npm/                     — shims ESM para react/react-dom/jsx-runtime (apontam para o __ARC__.dom)
NOTICE.md                       — aviso legal sobre o conteúdo Pro
```
