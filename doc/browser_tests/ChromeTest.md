# A könyvtár tesztelése Chrome böngészőben

A böngésző verziója: 90.0.4430.93 (a verzió 2021.04.27-én jött ki)

## Az url.html fájlban lévő tesztek futtatása

Az első eset, ha semmilyen transzformációt nem kívánunk végezni.

![](../img/chrome_test/1.png)

Az url megfelelő részeinek lekérdezése pl. host, port.

![](../img/chrome_test/2.png)

Abszolút url tesztelése.

![](../img/chrome_test/3.png)

Relatív url tesztelése. A szülő könyvtár használatával is, illetve annak a helyes kezelése, ha a gyökér könyvtáron túl mutatna az url.

![](../img/chrome_test/4.png)

![](../img/chrome_test/5.png)

![](../img/chrome_test/6.png)

A query paraméterek törlésének tesztelése.

![](../img/chrome_test/7.png)

Kisbetű-nagybetű érzékenység vizsgálata.

![](../img/chrome_test/8.png)

Az útvonal enkódolása pl. szóköz helyes használata.
A beadott url: `http://server.com/path with spaces.html`

![](../img/chrome_test/9.png)

A tesztek mind sikeresen lefutottak.

## Tesztelés manuálisan

Az útvonal helyes meghatározása.
A query paraméterek hozzáadása.

![](../img/chrome_test/10.png)


Útvonal egyszerűsítés tesztelése.

![](../img/chrome_test/11.png)

Tömb típusú query paraméter kezelésének ellenőrzése.

![](../img/chrome_test/12.png)

Összes paraméter törlése.

![](../img/chrome_test/13.png)

A query paraméterek számának, illetve az üresség helyes megállapításának tesztelése.

![](../img/chrome_test/14.png)