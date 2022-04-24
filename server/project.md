# Projekt - React

## Warunki konieczne

* React
* Babel
* ESLint - nie może zwracać żadnych błędów
* Yarn

## Dozwolone pluginy

* Axios
* Formik
* Wybrana biblioteka CSS

## Wymagania 

* Interfejs
    * zarówno „przeglądarkowy” jak i (responsywny) „mobilny” (oparty o React i SCSS). Żeby wykorzystać SCSS w&nbsp;React zapoznaj się z biblioteką `node-sass`
    * interfejs aplikacji powinien być przemyślany i jasno komunikować użytkownikowi, jakie działania podjął (np.: wyświetlanie aktualnego sposobu sortowania lub przycisk cofnij na podstronach). Proszę trzymać się zasady: [Nie każ mi myśleć](https://lubimyczytac.pl/ksiazka/293495/nie-kaz-mi-myslec-o-zyciowym-podejsciu-do-funkcjonalnosci-stron-internetowych-wydanie-iii)
    * interfejs powinien spełniać aktualne standardy stylowania (możesz użyć gotowej biblioteki - w razie wątpliwości zapytaj prowadzącego)
* Funkcjonalność
    * aplikacja musi łączyć się ze stworzonym przez prowadzącego API
    * aplikacja musi korzystać z komponentów funkcyjnych. Powinna być podzielona na komponenty
    * Oceniany będzie również styl kodu
* Pobieranie danych
    * Powinna być możliwość wyświetlenia wszystkich danych
        * na liście powinny być widoczne podstawowe dane (razem z obrazkiem)
        * z podziałem na strony (paginacja)
        * z możliwością masowego usunięcia elementów (poprzez zaznaczenie i naciśnięcie przycisku)
    * Możliwość sortowania 
        * Alfabetycznie, wg. daty oraz wg. danych liczbowych
    * Możliwość filtrowania pól 
        * o trzech różnych typach (np.: checkbox, dropdown i text oraz inne kombinacje)
    * Graficzne przedstawienie danych
        * wyświetlenie filmu z okładką
        * wyświetlenie ratingu za pomocą gwiazdek
* Poruszanie się po aplikacji
    * Powinna być możliwość przeglądania danych w strukturze Master - detail (lista wszystkich filmów, po naciśnięciu na dany film pokazują się jego dane szczegółowe - zastosuj wyświetlanie warunkowe komponentów lub modal)
    * W widoku szczegółowym powinna być możliwość zagłosowania na wybrany element
        * głosowanie graficzne za pomocą gwiazdek (tych samych, które służą do wyświetlenia aktualnego ratingu)
    * Widok szczegółowy powinien umożliwić edycję i usunięcie widocznego filmu po naciśnięciu odpowiednich przycisków
    * Na liście wszystkich danych powinna być możliwość dodania nowego elementu po naciśnięciu przycisku.
* Dodawanie i edycja danych 
    * Powinna być możliwość dodawania i edycji danych 
    * Formularz powinien spełniać wymagania stawiane przez backend (np. odpowiednie typy danych).
    * Powinien istnieć wspólny formularz dla operacji dodawania i edycji.
    * Oceniana będzie czytelność i funkcjonalność formularza 
    * Wymagana jest odpowiednia walidacja danych
* Dodawanie elementów do ulubionych
    * Powinna być możliwość dodawania wybranych elementów do ulubionych.
    * Lista ulubionych powinna być oddzielona od listy wszystkich elementów.
    * Po odświeżeniu strony lista ulubionych jest resetowana
    * Powinna być możliwość usuwania elementów z listy ulubionych.


## API

Backend korzysta z postgresa, którego należy pobrać i zainstalować. Zapamiętaj wprowadzone hasło i port podczas instalacji. Następnie zmień dane konfiguracyjne w pliku `src/index.js`, aby móc połączyć się z bazą.