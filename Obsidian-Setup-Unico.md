# Obsidian Setup Unico

Este arquivo concentra todo o kit inicial e avancado para voce usar Obsidian de forma simples.

## 1. Plugins para ativar

Ative estes plugins no Obsidian:
- Templates
- Daily Notes
- Dataview
- Templater (opcional, recomendado)

## 2. Estrutura de pastas recomendada

Crie estas pastas no Vault:
- Inbox
- Diario
- Projetos
- Estudos
- Templates
- Arquivo

## 3. Template de nota diaria (Templates/Diario.md)

```markdown
---
tipo: diario
data: <% tp.date.now("YYYY-MM-DD") %>
semana: <% tp.date.now("GGGG-[W]WW") %>
mes: <% tp.date.now("YYYY-MM") %>
---

# Diario <% tp.date.now("YYYY-MM-DD") %>

## Top 3
- [ ] 
- [ ] 
- [ ] 

## Tarefas do dia
- [ ] 

## Notas rapidas
- 

## Aprendizados
- 

## Para amanha
- [ ] 
```

## 4. Template de projeto (Templates/Projeto.md)

```markdown
---
tipo: projeto
status: ativo
inicio: <% tp.date.now("YYYY-MM-DD") %>
prazo:
tags: [projeto]
---

# <% tp.file.title %>

## Objetivo
- 

## Proximas acoes
- [ ] 

## Referencias
- 

## Decisoes
- Data:
- Decisao:
- Motivo:
```

## 5. Template de estudo (Templates/Estudo.md)

```markdown
---
tipo: estudo
data: <% tp.date.now("YYYY-MM-DD") %>
revisar_1: <% tp.date.now("YYYY-MM-DD", 1) %>
revisar_7: <% tp.date.now("YYYY-MM-DD", 7) %>
revisar_30: <% tp.date.now("YYYY-MM-DD", 30) %>
tags: [estudo]
---

# <% tp.file.title %>

## Resumo
- 

## Conceitos-chave
- 

## Duvidas
- 

## Aplicacao pratica
- 
```

## 6. Dashboard unico (crie uma nota chamada Dashboard)

Copie os blocos abaixo para a nota Dashboard.

### Tarefas abertas

```dataview
task
where !completed
sort due asc
```

### Projetos ativos

```dataview
table status, inicio, prazo
from "Projetos"
where tipo = "projeto" and status = "ativo"
sort prazo asc
```

### Estudos para revisar hoje

```dataview
table revisar_1, revisar_7, revisar_30
from "Estudos"
where tipo = "estudo" and (revisar_1 = date(today) or revisar_7 = date(today) or revisar_30 = date(today))
```

## 7. Fluxo diario em 4 passos

1. Abra ou crie a nota do dia com o template Diario.
2. Defina e execute o Top 3.
3. Capture tudo na Inbox durante o dia.
4. No fim do dia, organize Inbox e prepare o dia seguinte.

## 8. Integracao com VS Code

No VS Code, abra a mesma pasta do Vault do Obsidian.
Com isso, suas edicoes ficam sincronizadas entre os dois apps.

## 9. Dica de inicio

Use este setup por 7 dias sem mudar nada.
Depois disso, ajuste apenas o que realmente ajudar seu fluxo.

## 10. PARA completo (em um unico arquivo)

PARA significa:
- Projects: coisas com inicio e fim
- Areas: responsabilidades continuas
- Resources: material de referencia
- Archive: itens concluidos ou inativos

### Estrutura de pastas PARA

Crie estas pastas dentro do Vault:
- Projects
- Areas
- Resources
- Archive

Sugestao de subpastas:
- Projects/Ativos
- Projects/Concluidos
- Areas/Pessoal
- Areas/Trabalho
- Resources/Artigos
- Resources/Cursos

### Convencao simples de notas

Use estas tags no frontmatter:
- tipo: projeto | area | recurso
- status: ativo | pausado | concluido

Exemplo de frontmatter para projeto:

```markdown
---
tipo: projeto
status: ativo
area: trabalho
inicio: 2026-05-24
prazo:
tags: [projeto]
---
```

Exemplo de frontmatter para area:

```markdown
---
tipo: area
status: ativa
responsabilidade: saude
tags: [area]
---
```

Exemplo de frontmatter para recurso:

```markdown
---
tipo: recurso
tema: produtividade
fonte: artigo
tags: [recurso]
---
```

### Dashboard PARA (cole na nota Dashboard)

#### Projetos ativos

```dataview
table status, area, inicio, prazo
from "Projects"
where tipo = "projeto" and status = "ativo"
sort prazo asc
```

#### Areas ativas

```dataview
table responsabilidade, status
from "Areas"
where tipo = "area"
sort file.name asc
```

#### Recursos recentes

```dataview
table tema, fonte, file.mtime as atualizado
from "Resources"
where tipo = "recurso"
sort file.mtime desc
limit 20
```

#### Tarefas abertas por area

```dataview
task
from "Areas"
where !completed
group by file.name
```

#### Projetos concluidos (historico)

```dataview
table area, inicio, prazo, file.mtime as encerrado
from "Archive"
where tipo = "projeto" and status = "concluido"
sort file.mtime desc
```

## 11. Fluxo semanal PARA (10 minutos)

1. Esvazie a Inbox e mova cada nota para Projects, Areas, Resources ou Archive.
2. Atualize status dos projetos ativos.
3. Escolha 1 proxima acao para cada projeto ativo.
4. Revise Areas para nao deixar responsabilidades sem acao.
5. Arquive tudo que estiver concluido ou sem uso.

## 12. Dashboards prontos (basico e avancado)

Use apenas uma versao por vez na nota Dashboard para manter a visualizacao limpa.

### Versao basica (rapida)

```dataview
task
where !completed
sort due asc
```

```dataview
table status, inicio, prazo
from "Projects"
where tipo = "projeto" and status = "ativo"
sort prazo asc
```

```dataview
table file.mtime as atualizado
from "Resources"
sort file.mtime desc
limit 10
```

### Versao avancada (com prioridade e tags)

Para usar esta versao, adicione no frontmatter das notas de projeto:

```markdown
prioridade: alta | media | baixa
tags: [projeto, trabalho]
```

Projetos por prioridade:

```dataview
table prioridade, status, prazo, tags
from "Projects"
where tipo = "projeto" and status = "ativo"
sort choice(prioridade = "alta", 1, choice(prioridade = "media", 2, 3)) asc
sort prazo asc
```

Tarefas abertas de alta prioridade:

```dataview
task
from "Projects"
where !completed and contains(file.tags, "projeto") and prioridade = "alta"
sort due asc
```

Projetos por tag de contexto (ex.: trabalho):

```dataview
table prioridade, status, prazo
from "Projects"
where tipo = "projeto" and contains(tags, "trabalho")
sort prazo asc
```

Estudos com revisao pendente hoje:

```dataview
table revisar_1, revisar_7, revisar_30
from "Estudos"
where tipo = "estudo" and (revisar_1 <= date(today) or revisar_7 <= date(today) or revisar_30 <= date(today))
```

## 13. Copiar e colar (limpo)

### Dashboard basico

```dataview
task
where !completed
sort due asc
```

```dataview
table status, inicio, prazo
from "Projects"
where tipo = "projeto" and status = "ativo"
sort prazo asc
```

```dataview
table file.mtime as atualizado
from "Resources"
sort file.mtime desc
limit 10
```

### Dashboard avancado

```dataview
table prioridade, status, prazo, tags
from "Projects"
where tipo = "projeto" and status = "ativo"
sort choice(prioridade = "alta", 1, choice(prioridade = "media", 2, 3)) asc
sort prazo asc
```

```dataview
task
from "Projects"
where !completed and contains(file.tags, "projeto") and prioridade = "alta"
sort due asc
```

```dataview
table prioridade, status, prazo
from "Projects"
where tipo = "projeto" and contains(tags, "trabalho")
sort prazo asc
```

```dataview
table revisar_1, revisar_7, revisar_30
from "Estudos"
where tipo = "estudo" and (revisar_1 <= date(today) or revisar_7 <= date(today) or revisar_30 <= date(today))
```
