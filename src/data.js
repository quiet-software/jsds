data = `
x;stworzenie projektu
x;dodanie selecta
x;dodanie options z przykładowymi
x;wyświetlanie wybranej story
;dodanie css
;dodanie <a href="https://www.lightningdesignsystem.com/components/buttons/#Base">button story 1</a>
;zapamiętanie wyświetlonej story w localstorage
;wczytanie wyświetlonej story z localstorage
;dodanie <a href="https://www.lightningdesignsystem.com/components/buttons/#Neutral">button story 2</a>
;wydzielenie button jako komponent
;dodanie widoku parametryzacji story (attr class przekazywany do prezentowanego komponentu)
;dodanie komponentu cards
;dodanie komponentu accords
`.split('\n').filter(Boolean).map(e => e.split(';', 2))
