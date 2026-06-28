# Planeamento — Integração das Imagens Template nas Secções do Site

> **Atualizado:** imagens reais analisadas e mapeadas. Não é mais geração por AI — são screenshots de projetos reais que temos em mãos.

---

## 1. Inventário das Imagens Disponíveis

| Ficheiro | O que representa | Paleta / Estética |
|---|---|---|
| `fashion.png` | "Maison K Paris" — e-commerce de moda de luxo | Dark, dourado, premium, elegante |
| `ecomerce.png` | "MarchéPlus" — marketplace generalista (estilo Amazon) | Header dark, corpo claro, amarelo CTA |
| `apps.png` = `dasbnoard.png` | "Novexa" — dashboard SaaS + app mobile (composição lado a lado) | Dark navy, azul, métricas reais |
| `webnovastudio.png` | "NOVA Studio" — site de agência de design & estratégia | Branco limpo, azul, tipografia forte |
| `Dojafashioneco.png` | Site real da marca **Doja** — streetwear (o nosso próprio cliente!) | Preto/branco, raw, modelos reais |

> `apps.png` e `dasbnoard.png` são ficheiros **idênticos**. Tratar como um só.

---

## 2. Diagnóstico do Site Atual

| Secção | Visual atual | Problema |
|---|---|---|
| `Services > Websites` | JSX gerado: barras e grids fingidos | Não mostra o nível real do trabalho |
| `Services > E-commerce` | JSX gerado: loja fake com cart | Idem |
| `Services > Aplicativos` | JSX gerado: dashboard + mobile fake | Idem |
| `Projects` (3 cards) | Placeholder explícito "imagem real em breve" | Secção incompleta — baixa credibilidade |

---

## 3. Mapeamento Definitivo: Imagem → Secção

### 3.1 Secção `Services` — substituir os visuais JSX abstratos

| Serviço | Imagem | Porquê |
|---|---|---|
| `01 — Websites` | **`webnovastudio.png`** | Site de agência com copy forte, layout clean, navegação clara — exemplo perfeito de "website profissional". |
| `02 — E-commerce` | **`fashion.png`** | Maison K Paris: dark, produtos em grid, badges "NOUVEAU/-20%", trust bar em baixo — alinha 1:1 com "lojas que vendem enquanto dorme". Paleta dark harmoniza com o nosso site. |
| `03 — Aplicativos` | **`apps.png`** | Composição que já inclui dashboard web + mobile side by side — ilustra "software à medida" sem precisar de montar nada. Os números são reais (2.4k users, 98% uptime, €47.2k). |

### 3.2 Secção `Projects` — substituir os card placeholders

| Projeto (card atual) | Imagem | Porquê |
|---|---|---|
| **Doja Paris** (E-commerce) | **`Dojafashioneco.png`** | É literalmente o site da própria marca Doja — o argumento de credibilidade mais forte possível. Modelos reais, produto autêntico, marca reconhecível. |
| **Studio Arquitetura** (Website Institucional) | **`webnovastudio.png`** | NOVA Studio representa exatamente o que é um site institucional de portfólio. Mesmo ficheiro que o serviço Websites, mas com crop diferente no card. |
| **Gestão de Equipas** (Aplicativo) | **`apps.png`** | Dashboard com tarefas "Concluído / Em progresso / Pendente", gráfico mensal, tabela de equipa — mapeia 1:1 com o nome do projeto. |

### 3.3 `ecomerce.png` — uso estratégico (4.º projeto)

O marketplace "MarchéPlus" não tem um slot direto no conteúdo atual mas é demasiado bom para não usar.

**Decisão: adicionar como 4.º card na secção Projects.**

| Projeto (NOVO) | Imagem | Copy |
|---|---|---|
| **MarchéPlus** | **`ecomerce.png`** | Categoria: "E-commerce" · Resultado: "Marketplace multi-categoria com sistema de promoções, timer de ofertas em tempo real e 6 métodos de pagamento." · Tags: Next.js, Stripe, Redis |

> **Alternativa** se 4 cards for excessivo: usar `ecomerce.png` como segundo painel na secção E-commerce (composição fashion + marketplace) para mostrar versatilidade. Decidir na implementação.

---

## 4. Tratamento Visual de Cada Imagem

### `fashion.png` — dark, paleta dourada ✅ alinha diretamente
- Nenhum ajuste necessário — a imagem já é dark e premium
- Mostrar com `object-position: top` → aparece navbar "Maison K Paris" + hero "Collection Été 2025"
- Glow azul atrás (`#1d6ff3/10`) mantém coerência

### `apps.png` — dark navy, azul ✅ alinha bem
- Composição landscape — pode ser esmagada em mobile
- Desktop: mostrar composição completa (dashboard + mobile phone)
- Mobile: crop com `object-position: left` → mostra apenas o dashboard
- No card Projects: crop focado no dashboard (sem o mobile, para caber no card `h-52`)

### `Dojafashioneco.png` — preto/branco, imagem muito alta (`2880×5666px`)
- ⚠️ Ficheiro é vertical enorme — usar `object-position: top` para capturar o hero
- O hero mostra dois modelos com mesh tops + "SUMMER / SHOP NOW" — impactante e reconhecível
- Overlay gradiente escuro na base do card para legibilidade do texto

### `webnovastudio.png` — fundo branco, site claro
- ⚠️ Fundo branco num site dark — contraste agressivo
- Solução: mostrar dentro da moldura browser com chrome escuro (já existe no código)
- Overlay gradiente `from-[#0b0b0e]/0 to-[#0b0b0e]/50` na borda inferior
- `object-position: top` → aparece o header "NOVA Studio" + subtítulo azul + hero image

### `ecomerce.png` — header dark, corpo claro
- `object-position: top` → mostra o header escuro "MarchéPlus" + barra de anúncios
- Overlay na base do card: `from-transparent to-[#0b0b0e]/60`

---

## 5. Estrutura de Ficheiros

```
public/
  images/
    services/
      nova-studio.png          ← cópia de webnovastudio.png
      maison-k-paris.png       ← cópia de fashion.png
      novexa-dashboard.png     ← cópia de apps.png
    projects/
      doja-paris.png           ← cópia de Dojafashioneco.png
      nova-studio.png          ← (reutilizar o mesmo da pasta services ou copiar)
      novexa-app.png           ← cópia de apps.png
      marcheplus.png           ← cópia de ecomerce.png
```

---

## 6. Arquitetura de Implementação

### Componente Image wrapper (Services)
```
[chrome bar: dots red/yellow/green + URL bar]
─────────────────────────────────────────────
│                                           │
│   <Image fill objectFit="cover"           │
│          objectPosition="top"             │
│          sizes="(max-width: 768px) 100vw, │
│                 (max-width: 1200px) 80vw, │
│                 1100px" />                │
│                                           │
│   [overlay gradiente: transparent → dark] │
└───────────────────────────────────────────┘
   [glow radial azul atrás do container]
```

### Componente Image wrapper (Projects card)
```
┌──────────────────────────────────────┐  ← h-52, relative, overflow-hidden
│  <Image fill objectFit="cover"       │
│         objectPosition="top"         │
│         quality={90} />              │
│                                      │
│  [overlay bottom: → #0b0b0e/60]      │
│  [badge categoria: top-left, absoluto]│
└──────────────────────────────────────┘
│  [content: nome, resultado, tags]    │
└──────────────────────────────────────┘
```

### Changes em `Services.tsx`
- A propriedade `visual` de cada serviço passa de JSX gerado para `image: string`
- O bloco de render substitui `{service.visual}` por `<Image src={service.image} ...>`
- Manter a moldura browser com chrome — é um detalhe que eleva a apresentação

### Changes em `Projects.tsx`
- Array `projects` passa a incluir `image: string` em cada entrada
- Adicionar 4.º projeto (MarchéPlus)
- Substituir o bloco placeholder `h-52` por `<Image>` com overlay
- Remover o aviso "Imagens reais em preparação — secção atualizada em breve"
- Remover a badge "imagem real em breve" de cada card

---

## 7. Efeitos e Animações

| Elemento | Efeito | Justificação |
|---|---|---|
| Services — imagem | `opacity: 0 → 1` + `translateY(20px → 0)` ao entrar no viewport | Tesla pattern — o "produto" revela-se ao scroll |
| Services — imagem | Hover: estático (sem zoom) | Manter foco nos CTAs em baixo |
| Projects — card | Hover: `scale(1.0 → 1.03)` apenas na imagem (`overflow-hidden` no container) | Profundidade subtil, padrão de cards SaaS |
| Projects — card | Border `white/6` → `#1d6ff3/30` no hover | Já existe no código, manter |

---

## 8. Atualização de Copy nos Projects

### "Doja Paris" — atualizar
```
result: "E-commerce de moda streetwear com checkout Stripe, gestão de inventário,
         galeria social @Doja integrada e envio automático de faturas."
```
Adicionar: botão "Ver projeto →" com link externo (quando disponível)

### "MarchéPlus" — novo card
```
category: "E-commerce"
name: "MarchéPlus"
result: "Marketplace multi-categoria com filtros avançados, sistema de promoções,
         timer de ofertas em tempo real e 6 métodos de pagamento integrados."
tags: ["Next.js", "Stripe", "Redis", "PostgreSQL"]
```

### "Studio Arquitetura" e "Gestão de Equipas" — manter copy atual

---

## 9. O que NÃO fazer

- **Não usar imagens em full-bleed background** — viola o Tesla pattern (o visual é sempre um "produto" emoldurado, não um wallpaper)
- **Não animar com hover zoom as imagens dos Services** — distrai dos CTAs
- **Não mostrar `Dojafashioneco.png` na secção Services** — é prova de trabalho (Projects), não ilustração de serviço
- **Não escalar/redimensionar as imagens manualmente** — deixar o `next/image` com `sizes` fazer isso
- **Não usar imagens claras sem tratamento** — `webnovastudio.png` e `ecomerce.png` precisam de overlay

---

## 10. Ordem de Implementação

| # | Tarefa | Impacto | Esforço |
|---|---|---|---|
| 1 | Copiar imagens para `/public/images/` | Pré-requisito | 5 min |
| 2 | `Projects.tsx` — substituir placeholders + 4.º card | Alto — secção está incompleta e é fraca | 45 min |
| 3 | `Services.tsx > Websites` — substituir JSX por `webnovastudio.png` | Alto | 30 min |
| 4 | `Services.tsx > E-commerce` — substituir JSX por `fashion.png` | Alto | 20 min |
| 5 | `Services.tsx > Aplicativos` — substituir JSX por `apps.png` | Alto | 20 min |
| 6 | Testar responsividade (mobile/tablet/desktop) | Crítico | 20 min |
| 7 | Verificar Lighthouse score (manter acima de 90) | Importante | 10 min |

**Total estimado: ~2h30**

---

## 11. Resultado Esperado

| Secção | Antes | Depois |
|---|---|---|
| Services — Websites | Barras e divs cinzentos abstractos | Screenshot real do NOVA Studio em chrome frame |
| Services — E-commerce | Grid de produtos fake | Maison K Paris: dark, luxo, produtos reais |
| Services — Aplicativos | Dashboard fake com gráfico de barras JSX | Novexa: dashboard + mobile reais, números reais |
| Projects — Doja Paris | Placeholder + "imagem real em breve" | Site real da Doja com modelos, hero "SUMMER" |
| Projects — Studio Arquitetura | Placeholder | NOVA Studio site limpo e profissional |
| Projects — Gestão de Equipas | Placeholder | Dashboard Novexa com tarefas e métricas |
| Projects — MarchéPlus | (não existia) | Novo card com marketplace completo |
