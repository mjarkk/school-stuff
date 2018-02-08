# SQL cheat sheets

## INTRO
- Vervang alle {{ een hint }} met wat voor jou van toepassing is zie voorbeelden voor meer info
- Heb je surgesties voor deze readme open dan een [github issue](https://github.com/mjarkk/school-stuff/issues)
- Wil je dingen veranderen maak een fork van deze repo en doe een fork request als je klaar bendt

### selecteer alle dingen van 1 tabel:  
Santex
```SQL
SELECT * FROM {{tabel naam}}
```

### selecteer alle dingen WAAR iets iets is:
Santex
```SQL
SELECT * FROM {{tabel naam}} WHERE {{rij naam}} = '{{is iets}}'
```
Voorbeeld
```SQL
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
```SQL
SELECT * FROM {{tabel naam}}
WHERE {{rij naam}}
BETWEEN '{{start getal}}' AND '{{2de getal}}'
```
Voorbeeld
```SQL
SELEC * FROM prijsen
WHERE startprijs
BETWEEN 55 AND 100
```

### sorteer uit alle dubbele gegevens:
Santex
```SQL
SELECT DISTINCT * FROM {{tabel naam}}
```

### selecteer alle dingen die het iets bevatten van een bepaalde string:
Santex
```SQL
SELECT * FROM {{tabel naam}}
WHERE {{rij naam}}
LIKE "%{{wat je wil vilteren}}%";
```

### laat resultaaten zien van 2 tabbellen in 1 tabel:
Santex
```SQL
SELECT {{tabel naam 1}}.*, {{tabel naam 2}}.*
FROM {{tabel naam 1}}
INNER JOIN {{tabel naam 2}}
ON {{prime key 1}} = {{prime key 2}}
```
Voorbeeld
```SQL
SELECT klacht.*, klachtsoort.*
FROM `klacht`
INNER JOIN klachtsoort
ON klacht.ID_klachtsoort = klachtsoort.ID
```

### HELP! wat is RIGHT, LEFT, FULL (INNER JOIN)

### UPDATE getal in rij
Santex
```SQL
UPDATE {{tabel naam}}
SET {{rij naam}} = "{{niuwe waarde}}" {{, extra shillz}}
WHERE {{tabel naam}}.{{rij naam}} {{operator}} {{to search}}
```
Voorbeeld
```SQL
UPDATE albumprijsen
SET prijs = 5.95, naam = "jaap de aap"
WHERE albumprijsen.naam = "app de jaap"
```

### Data TOEVOEGEN aan een tabel:
Santex
```SQL
INSERT INTO {{tabel naam}}
( {{alle tabel rijen die je wil instellen}} )
VALUES ( {{alle waardes met commas ertussen}} )
```
Voorbeeld
```SQL
INSERT INTO klacht
(ID_gebruiker, ID_klachtsoort ,postcode)
VALUES (5,5,"111AA")
```

### Verwijder rijen uit een tabel
Santex
```SQL
DELETE FROM {{tabel naam}}
WHERE {{rij naam}} {{operator}} {{to search}}
```

### Tel de hoeveelhijd enteries
Santex
```SQL
SELECT COUNT( {{kolomnaam}} ) FROM {{tabel naam}}
```

### Het laagste getal uit een rij:
Santex
```SQL
SELECT MIN( {{kolom naam}} )
FROM {{tabel naam}}
```

### Het hoogste getal uit een rij:
Santex
```SQL
SELECT MAX( {{kolom naam}} )
FROM {{tabel naam}}
```

### Tel all dingen bij elkaar op:
Santex
```SQL
SELECT SUM( {{kolom naam}} )
FROM {{tabel naam}}
```

## 2.5

### Creeer database:
Santex
```SQL
CREATE DATABASE {{ database naam }}
```

### Creeer tabel in database:
Santex
```SQL
CREATE TABLE {{ tabel naam }} (
  {{kolom naam}} {{datatype => varchar(255) }},
  ID int NOT NULL,
  PRIMARY KEY (ID)
)
```

### verwijder tabel:
Santex
```SQL
DROP TABLE {{tabel naam}}
```

### verwijder database:
Santex
```SQL
DROP DATABASE {{database naam}}
```

## 2.6

### Hernoem tabel:
Santex  
```SQL
ALTER TABLE {{ tabel naam }}
RENAME {{ nieuwe tabel naam }}
```

### Verander datatype van tabel rij:
Santex
```SQL
ALTER TABLE {{ tabel naam }}
MODIFY COLUMN {{ kolom naam }} {{ nieuw data type }}
```

### Een kolom toevoegen aan tabel:
Santex
```SQL
ALTER TABLE {{ tabel naam }}
ADD COLUMN {{ kolom naam }} {{ nieuw data type }}
```

### Een kolom verwijderen van tabel:
Santex
```SQL
ALTER TABLE {{ tabel naam }}
DROP COLUMN {{ kolom naam }}
```

### Primary key toevoegen aan tabel
Santex
```SQL
ALTER TABLE {{ table naam }}
ADD PRIMARY KEY( {{ kolom naam }} )
```

### Verwijder key van tabel
Santex
```SQL
ALTER TABLE {{ table naam }}
DROP PRIMARY KEY( {{ kolom naam }} )
```

## 2.7
### Geef ander naam aan ouptput rij
Santex
```SQL
SELECT {{ naam van rij }} AS {{ naan van ouput rij }}
FROM {{ database naam }}
```
Voorbeeld
```SQL
SELECT MAX(prijs) AS hoogsteprijs
FROM prijsendatabase
```

### verbind meerde gettallen aan elkaar
Santex
```SQL
SELECT CONCAT( {{ input, 2de input, 2de, .... }} ) AS {{ naam van output rij }}
FROM {{ database naam }}
```
Voorbeeld
```SQL
SELECT CONCAT( voornaam, " ", achernaam ) AS fullname
FROM mensen
```
