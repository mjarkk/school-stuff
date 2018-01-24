# SQL cheat sheets

## INTRO
- Vervang alle {{ een hint }} met wat voor jou van toepassing is zie voorbeelden voor meer info
- Heb je surgesties voor deze readme open dan een [github issue](https://github.com/mjarkk/school-stuff/issues)
- Wil je dingen veranderen maak een fork van deze repo en doe een fork request als je klaar bendt

### selecteer alle dingen van 1 tabel:  
Santex
```
SELECT * FROM {{tabel naam}}
```

### selecteer alle dingen WAAR iets iets is:
Santex
```
SELECT * FROM {{tabel naam}} WHERE {{rij naam}} = '{{is iets}}'
```
Voorbeeld
```
SELECT * FROM klacht WHERE postcode = '1098LV'
```


operator | wat is het
--- | ---
"=" | is gelijk aan
"<>" | is NIET gelijk aan
">"	| is groter dan
"<"	| is klijner dan
">=" |is groter dan en/of gelijk aan
"<=" |is klijner dan en/of gelijk aan


### selecteer alle dingen tussen 2 waardes:
Santex
```
SELECT * FROM {{tabel naam}}
WHERE {{rij naam}}
BETWEEN '{{start getal}}' AND '{{2de getal}}'
```
Voorbeeld
```
SELEC * FROM prijsen
WHERE startprijs
BETWEEN 55 AND 100
```

### sorteer uit alle dubbele gegevens:
Santex
```
SELECT DISTINCT * FROM {{tabel naam}}
```

### selecteer alle dingen die het iets bevatten van een bepaalde string:
Santex
```
SELECT * FROM {{tabel naam}}
WHERE {{rij naam}}
LIKE "%{{wat je wil vilteren}}%";
```

### laat resultaaten zien van 2 tabbellen in 1 tabel:
Santex
```
SELECT {{tabel naam 1}}.*, {{tabel naam 2}}.*
FROM {{tabel naam 1}}
INNER JOIN {{tabel naam 2}}
ON {{prime key 1}} = {{prime key 2}}
```
Voorbeeld
```
SELECT klacht.*, klachtsoort.*
FROM `klacht`
INNER JOIN klachtsoort
ON klacht.ID_klachtsoort = klachtsoort.ID
```

### Meer info over inner, left, right, full joins [HIER](https://stackoverflow.com/questions/5706437/whats-the-difference-between-inner-join-left-join-right-join-and-full-join)

### UPDATE getal in rij
Santex
```
UPDATE {{tabel naam}}
SET {{rij naam}} = "{{niuwe waarde}}" {{, extra shillz}}
WHERE {{tabel naam}}.{{rij naam}} {{operator}} {{to search}}
```
Voorbeeld
```
UPDATE albumprijsen
SET prijs = 5.95, naam = "jaap de aap"
WHERE albumprijsen.naam = "app de jaap"
```

### Data TOEVOEGEN aan een tabel:
Santex
```
INSERT INTO {{tabel naam}}
( {{alle tabel rijen die je wil instellen}} )
VALUES ( {{alle waardes met comma's ertussen}} )
```
Voorbeeld
```
INSERT INTO klacht
(ID_gebruiker, ID_klachtsoort ,postcode)
VALUES (5,5,"111AA")
```

### Verwijder rijen uit een tabel
Santex
```
DELETE FROM {{tabel naam}}
WHERE {{rij naam}} {{operator}} {{to search}}
```

### Tel de hoeveelhijd enteries
Santex
```
SELECT COUNT( {{kolomnaam}} ) FROM {{tabel naam}}
```

### Het laagste getal uit een rij:
Santex
```
SELECT MIN( {{kolom naam}} )
FROM {{tabel naam}}
```

### Het hoogste getal uit een rij:
Santex
```
SELECT MAX( {{kolom naam}} )
FROM {{tabel naam}}
```

### Tel all dingen bij elkaar op:
Santex
```
SELECT SUM( {{kolom naam}} )
FROM {{tabel naam}}
```

## 2.5

### Creeer database:
Santex
```
CREATE DATABASE {{ database naam }}
```

### Creeer tabel in database:
Santex
```
CREATE TABLE {{ tabel naam }} (
  {{kolom naam}} {{datatype => varchar(255) }},
  ID int NOT NULL,
  PRIMARY KEY (ID)
)
```

### verwijder tabel:
Santex
```
DROP TABLE {{tabel naam}}
```

### verwijder database:
Santex
```
DROP DATABASE {{database naam}}
```

## 2.6

### Hernoem tabel:
Santex
```
ALTER TABLE {{ tabel naam }}
RENAME {{ nieuwe tabel naam }}
```

### Verander datatype van tabel rij:
Santex
```
ALTER TABLE {{ tabel naam }}
MODIFY COLUMN {{ kolom naam }} {{ nieuw data type }}
```

### Een kolom toevoegen aan tabel:
Santex
```
ALTER TABLE {{ tabel naam }}
ADD COLUMN {{ kolom naam }} {{ nieuw data type }}
```

### Een kolom verwijderen van tabel:
Santex
```
ALTER TABLE {{ tabel naam }}
DROP COLUMN {{ kolom naam }}
```

### Primary key toevoegen aan tabel
Santex
```
ALTER TABLE {{ table naam }}
ADD PRIMARY KEY( {{ kolom naam }} )
```

### Verwijder key van tabel
Santex
```
ALTER TABLE {{ table naam }}
DROP PRIMARY KEY( {{ kolom naam }} )
```

## 2.7
### Geef ander naam aan ouptput rij
Santex
```
SELECT {{ naam van rij }} AS {{ naan van ouput rij }}
FROM {{ database naam }}
```
Voorbeeld
```
SELECT MAX(prijs) AS hoogsteprijs
FROM prijsendatabase
```

### verbind meerde gettallen aan elkaar
Santex
```
SELECT CONCAT( {{ input, 2de input, 2de, .... }} ) AS {{ naam van output rij }}
FROM {{ database naam }}
```
Voorbeeld
```
SELECT CONCAT( voornaam, " ", achernaam ) AS fullname
FROM mensen
```
