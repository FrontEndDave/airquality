# AirQuality

AirQuality to aplikacja mobilna do monitorowania jakości powietrza na całym świecie. Dzięki prostemu interfejsowi użytkownik może dodawać lokalizacje, które chce śledzić, a aplikacja udostępnia dane w dwóch językach, co sprawia, że jest dostępna dla użytkowników na całym świecie.

## Instrukcja instalacji

Aby zainstalować i uruchomić aplikację lokalnie, wykonaj poniższe kroki:

> ### Wymagania wstępne

- Zainstalowany [Node.js](https://nodejs.org/en) (zalecana wersja LTS)
- Git

### Kroki instalacji

> ### 1. Zainstaluj Node.js
   - Pobierz i zainstaluj wersję LTS z [https://nodejs.org/en](https://nodejs.org/en).
   - Upewnij się, że Node.js jest zainstalowany, wpisując w terminalu:
     ```bash
     node -v
     ```

> ### 2. Sklonuj repozytorium
   - W terminalu wpisz:
     ```bash
     git clone https://github.com/FrontEndDave/AirQuality
     ```

> ### 3. Przejdź do katalogu projektu
   - Wpisz polecenie:
     ```bash
     cd <NAZWA_FOLDERU>
     ```

> ### 4. Zainstaluj zależności
   - W katalogu projektu wpisz:
     ```bash
     npm install
     ```

> ### 5. Uruchomienie aplikacji
   - Wpisz polecenie:
     ```bash
     npx expo start
     ```
   - Następnie możesz uruchomić aplikację:
     - Na urządzeniu z iOS: pobierz aplikację **Expo Go** z App Store, zeskanuj kod QR wyświetlony w terminalu.
     - W symulatorze iOS: kliknij `i` w terminalu.

> ### 6. Budowanie aplikacji na iOS za pomocą EAS Build
   - Najpierw zainstaluj EAS CLI:
     ```bash
     npm install -g eas-cli
     ```
   - Zaloguj się na swoje konto Expo:
     ```bash
     eas login
     ```
     Wprowadź dane logowania przesłane w formularzu.
   - Aby stworzyć build na iOS, wpisz:
     ```bash
     eas build --platform ios
     ```
     **Uwaga**: Aby zbudować aplikację na iOS, wymagane jest konto Apple Developer z aktywną subskrypcją.

<br />

> ### Technologie

- **React Native**
- **Expo**
  
## Licencja

Ten projekt jest licencjonowany na warunkach licencji MIT.
