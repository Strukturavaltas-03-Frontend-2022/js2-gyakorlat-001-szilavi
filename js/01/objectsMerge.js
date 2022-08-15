/*Írj egy függvényt, amely paraméterként tetszőleges darabszámú objektumot merge-öl össze, 
majd visszatér ezzel az objektummal!
A függvény neve objectsMerge legyen! Az összefűzést úgy hajtsa végre, 
hogy az új objektum property-jei egyszerű indexek legyenek (0, 1, 2 stb.),
 amelyek tartalmazzák a részobjektumokat!*/ 

const objectsMerge = (...obj) => {
    const newObject = {...obj}
    return newObject
};

export default objectsMerge;