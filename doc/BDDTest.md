# BDD Teszt
A csapattagok megismertek a BDD alapelveivel, lépéseivel, illetve a kiválasztott framework, a Cucumber.js használatával.
## Tesztek
### Hash teszt
Különböző elérési útvonalú URL-ek esetén is hibától mentesen elvégzi az URL hashének beállítását. Próbáltuk különböző query paraméterek esetén is a robosztusságot.

![](img/bdd/hash.png)

### Host teszt
Különböző elérési útvonalú URL-ek esetén is hibától mentesen elvégzi az URL hostjának beállítását. Próbáltuk különböző query paraméterek esetén is a robosztusságot. Hostok változtatása esetén is megmarad a többi paraméter.

![](img/bdd/host.png)

### Path teszt
Különböző elérési útvonalú URL-ek esetén is hibától mentesen elvégzi az URL pathjának beállítását. Próbáltuk különböző query paraméterek esetén is a robosztusságot.

![](img/bdd/path.png)

### Port teszt
Különböző elérési útvonalú URL-ek esetén is hibától mentesen elvégzi az URL portjának beállítását. Próbáltuk különböző query paraméterek esetén is a robosztusságot.

![](img/bdd/port.png)

### Protocol teszt
Különböző elérési útvonalú URL-ek esetén is hibától mentesen elvégzi az URL protocoljának beállítását.

![](img/bdd/protocol.png)

### Query teszt
Különböző elérési útvonalú URL-ek esetén is hibától mentesen elvégzi az URL query paramétereinek beállítását. Próbáltuk a meglévő paraméterhez való hozzáfűzést, illetve tömb átadását is.

![](img/bdd/query.png)

## Konklúzió
A Cucumber egy könnyen tanulható és könnyen használható tesztkörnyezet. A BDD elvek mentén tisztán átlátható elvárásokat állíthatunk a készülő projektünkhöz.
Különböző feature fájlok esetén is figyelni kell, hogy a tesztfájlokban szereplő Given, When, Then leírásai ne egyezzenek, ekkor ugyanis ütközni fognak a tesztek.

![](img/bdd/error.png)