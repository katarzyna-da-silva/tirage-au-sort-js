(function () {
    // pobieranie zmiennych z pliku index.html
    var btn = document.querySelector("#getNumbers");
    output = document.querySelector("#showNumbers");

    function getRandom(min, max) { // funkcja ktora cos zwraca 
        // zaokraglij(wylosuj liczbe * (49 -1) + 1) bo, math.random moze zwrocic 0, bo 0 * ( 48 ) = 0 + 1 = 1 , musi zwrocic minimum 1 stad dzialanie 
        return Math.round(Math.random() * (max - min) + min);
    }

    //losujemy 6 liczb poprzez petle i ona korzysta za kazdym razem z funkcji getRandom i dodaje losowana liczbe 
    //, wiec dodajemy nowa funkcje, z pusta tablica, ktora zapisze te losowane liczby
    //
    function showRandomNumbers() {
        var numbers = [], // tablica do przechowywania wylosowanych liczb
            random; // pusta zmienna dla petli, zeby nie tworzyc jej dla kazdego losowania x 6

        for (var i = 0; i < 6; i++) {

            random = getRandom(1, 49); // przekazujemy jej funkcje ktora losuje i wywoluje losowane liczby
           
            // rozwiazanie problemu na powtarzanie sie liczb :  
            // petla while dzialanie: jesli np wylosowana liczba 5 nie bedzie rowna -1 ale nie ma jej w tablicy to liczba trafia do tablicy, i warunek jest falszywy bo wylosowana liczba nie bedzie -1 
            // ale po kolejnym losowaniu jesli liczba wylosowana to tez 5, a znajduje sie juz w tabeli to warunek jest prawdziwy i petla wykona kolejne losowanie, bo indexOf zwroci nam 0, a zero nie jest rowne -1 
            while (numbers.indexOf(random) !== -1) {

                random = getRandom(1, 49); // losujemy liczbe przez random 
                console.log("liczba sie powtorzyla + random");
            }

            numbers.push(random); // wrzucamy liczby do tablicy , w funkcji gdzie liczby maja sie wyswietlic
        }

        // console.log(numbers); sprawdzamy jakie liczby losowe zainstalowaly sie w tablicy po losowaniu, po zdarzeniu na klikniecie w button 
        output.value = numbers.join(", "); // metoda join laczy wszystkie wylosowane liczby z naszej tablicy, w ciag znakow , value = liczba 

    }

    btn.onclick = showRandomNumbers; // obsluga zdarzenia, funkcja wywola sie po kliknieciu na button z klasa btn
})();