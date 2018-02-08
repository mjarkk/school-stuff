# SQL cheat sheets

## INTRO
- Vervang alle {{ een hint }} met wat voor jou van toepassing is zie voorbeelden voor meer info
- Heb je surgesties voor deze readme open dan een [github issue](https://github.com/mjarkk/school-stuff/issues)
- Wil je dingen veranderen maak een fork van deze repo en doe een fork request als je klaar bendt

### selecteer alle dingen van 1 tabel:  
[w3schools](https://www.w3schools.com/sql/sql_select.asp),
Santex
```SQL
SELECT * FROM {{tabel naam}}
```

### selecteer alle dingen WAAR iets iets is:
[w3schools](https://www.w3schools.com/sql/sql_where.asp),
Santex
```SQL
SELECT * FROM {{tabel naam}} WHERE {{rij naam}} = '{{is iets}}'
```
Voorbeeld
```SQL
SELECT * FROM klacht WHERE postcode = '1098LV'
```

[operator](https://www.w3schools.com/sql/sql_operators.asp) | wat is het
--- | ---
"=" | is gelijk aan
"<>" | is NIET gelijk aan
">"	| is groter dan
"<"	| is klijner dan
">=" |is groter dan en/of gelijk aan
"<=" |is klijner dan en/of gelijk aan


### selecteer alle dingen tussen 2 waardes:
[w3schools](https://www.w3schools.com/sql/sql_between.asp),
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
[w3schools](https://www.w3schools.com/sql/sql_distinct.asp),
Santex
```SQL
SELECT DISTINCT * FROM {{tabel naam}}
```

### selecteer alle dingen die het iets bevatten van een bepaalde string:
[w3schools](https://www.w3schools.com/sql/sql_like.asp),
Santex
```SQL
SELECT * FROM {{tabel naam}}
WHERE {{rij naam}}
LIKE "%{{wat je wil vilteren}}%";
```

### laat resultaaten zien van 2 tabbellen in 1 tabel:
[w3schools](https://www.w3schools.com/sql/sql_join_inner.asp),
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

### Meer info over inner, left, right, full joins [HIER](https://stackoverflow.com/questions/5706437/whats-the-difference-between-inner-join-left-join-right-join-and-full-join)

### UPDATE getal in rij
[w3schools](https://www.w3schools.com/sql/sql_update.asp),
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
[w3schools](https://www.w3schools.com/sql/sql_insert.asp),
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
[w3schools](https://www.w3schools.com/sql/sql_delete.asp),
Santex
```SQL
DELETE FROM {{tabel naam}}
WHERE {{rij naam}} {{operator}} {{to search}}
```

### Tel de hoeveelhijd enteries
[w3schools](https://www.w3schools.com/sql/sql_count_avg_sum.asp),
Santex
```SQL
SELECT COUNT( {{kolomnaam}} ) FROM {{tabel naam}}
```

### Het laagste getal uit een rij:
[w3schools](https://www.w3schools.com/sql/sql_min_max.asp),
Santex
```SQL
SELECT MIN( {{kolom naam}} )
FROM {{tabel naam}}
```

### Het hoogste getal uit een rij:
[w3schools](https://www.w3schools.com/sql/sql_min_max.asp),
Santex
```SQL
SELECT MAX( {{kolom naam}} )
FROM {{tabel naam}}
```

### Tel all dingen bij elkaar op:
[w3schools](https://www.w3schools.com/sql/sql_count_avg_sum.asp),
Santex
```SQL
SELECT SUM( {{kolom naam}} )
FROM {{tabel naam}}
```

## 2.5

### Creeer database:
[w3schools](https://www.w3schools.com/sql/sql_create_db.asp),
Santex
```SQL
CREATE DATABASE {{ database naam }}
```

### Creeer tabel in database:
[w3schools](https://www.w3schools.com/sql/sql_create_table.asp),
Santex
```SQL
CREATE TABLE {{ tabel naam }} (
  {{kolom naam}} {{datatype bijvoorbeeld: varchar(255) }},
  ID int NOT NULL,
  PRIMARY KEY (ID)
)
```

### verwijder tabel:
[w3schools](https://www.w3schools.com/sql/sql_drop_table.asp),
Santex
```SQL
DROP TABLE {{tabel naam}}
```

### verwijder database:
[w3schools](https://www.w3schools.com/sql/sql_drop_db.asp),
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
[w3schools](https://www.w3schools.com/sql/sql_alter.asp),
Santex
```SQL
ALTER TABLE {{ tabel naam }}
MODIFY COLUMN {{ kolom naam }} {{ nieuw data type bijvoorbeeld: varchar(255) }}
```

### Een kolom toevoegen aan tabel:
[w3schools](https://www.w3schools.com/sql/sql_alter.asp),
Santex
```SQL
ALTER TABLE {{ tabel naam }}
ADD COLUMN {{ kolom naam }} {{ nieuw data type bijvoorbeeld: varchar(255) }}
```

### Een kolom verwijderen van tabel:
[w3schools](https://www.w3schools.com/sql/sql_alter.asp),
Santex
```SQL
ALTER TABLE {{ tabel naam }}
DROP COLUMN {{ kolom naam }}
```

### Primary key toevoegen aan tabel
[w3schools](https://www.w3schools.com/sql/sql_primarykey.asp),
Santex
```SQL
ALTER TABLE {{ table naam }}
ADD PRIMARY KEY( {{ kolom naam }} )
```

### Verwijder key van tabel
[w3schools](https://www.w3schools.com/sql/sql_primarykey.asp),
Santex
```SQL
ALTER TABLE {{ table naam }}
DROP PRIMARY KEY( {{ kolom naam }} )
```

## 2.7
### Geef ander naam aan ouptput rij (AS)
[w3schools](https://www.w3schools.com/sql/sql_alias.asp),
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

### verbind meerde gettallen aan elkaar (CONCAT)
[w3schools](https://www.w3schools.com/sql/func_mysql_concat.asp),
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

### lengte van string (CHAR_LENGTH)
[w3schools](https://www.w3schools.com/sql/func_mysql_char_length.asp),
Santex
```SQL
SELECT {{ tabel naam }}, CHAR_LENGTH( {{ rij naam }} ) AS {{ naam van output rij }}
FROM {{ database naam }}
```
Voorbeeld
```SQL
SELECT bezoekers, CHAR_LENGTH( naam ) AS lenghteVanNaam
FROM klanten
```

### vind paats van string in string (FIND_IN_SET)
[w3schools](https://www.w3schools.com/sql/func_mysql_find_in_set.asp),
Santex
```SQL
SELECT {{ tabel naam }}, FIND_IN_SET( {{ waar naar te zoekken }}, {{ rij naam }} ) AS {{ naam van output rij }}
FROM {{ database naam }}
```
Voorbeeld
```SQL
SELECT bezoekers, FIND_IN_SET("jaap aap" , bijnamen ) AS PlaatsVanZoekOpdracht
FROM klanten
```

### rond af (FORMAT)
Santex
```SQL
SELECT {{ tabel naam }}, FORMAT( {{ input }}, {{ hoveel cijvers achter de comma}} ) AS {{ naam van output rij }}
FROM {{ database naam }}
```

### vervang / replace gedeelte van string (INSERT)
Santex
```SQL
SELECT {{ tabel naam }}, INSERT( {{ input }}, {{ begin (cijfer) }} , {{ einde (cijfer) }} , {{ wat op de vervange plek moet staan }} ) AS {{ naam van output rij }}
FROM {{ database naam }}
```
