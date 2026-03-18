# R_J_TP

Навчальний проєкт з практикою по **JavaScript / React / TypeScript**.

Фокус: короткі інтерактивні практики з рівнями, перевіркою відповідей і фідбеком (пояснення + правильна відповідь/очікувані частини коду).

## Що є в проєкті

- **Practice pages**: окремі секції для JS/React/TS + Overview
- **Єдиний шаблон практики**: `PracticeTemplate` відмальовує рівні, прогрес, перевірку, фідбек і фініш-картки
- **Дані задач**: зберігаються у `*.data.js` (інтро, рівні, tasks для Level 1–3)

## Структура (основне)

```text
src/
  pages/
    Practice/
      index.js
      layout/
        PracticeLayout.jsx
      nav/
        practice.nav.js
      sections/
        PracticeOverview/
          PracticeOverview.jsx
          PracticeOverview.module.css
        PracticeJS/
          PracticeJS.jsx
        PracticeReact/
          PracticeReact.jsx
        PracticeTypescript/
          PracticeTypescript.jsx
      components/
        PracticeTemplate/
          PracticeTemplate.jsx
          PracticeTemplate.module.css
        Progress.jsx
        FeedBack.jsx
        FinishCard.jsx
      hooks/
        usePracticeLevel.jsx
      data/
        practiceOverview.data.js
        practiceJS.data.js
        practiceReact.data.js
        practiceTypescript.data.js

public/
  favicon.svg
```
