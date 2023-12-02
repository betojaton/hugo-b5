---
title: "Página de Inicio"
---

Esta es la página de inicio.

{{ range .Pages }}
  ## {{ .Title }}
  {{ .Content }}
{{ end }}