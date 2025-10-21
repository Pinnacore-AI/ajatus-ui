# Ajatuskumppani Android APK - Build Instructions

## 📱 Rakenna Android APK

### Vaihtoehto 1: EAS Build (Suositeltu - Helpoin)

**Edellytykset:**
- Expo-tili (ilmainen): https://expo.dev/signup
- EAS CLI asennettu

**Askeleet:**

1. **Asenna EAS CLI**
```bash
npm install -g eas-cli
```

2. **Kirjaudu Expoon**
```bash
eas login
```

3. **Konfiguroi projekti**
```bash
cd ajatus-ui
eas build:configure
```

4. **Rakenna APK**
```bash
npm run build:apk
```
tai
```bash
eas build -p android --profile preview
```

5. **Lataa APK**
- EAS lähettää linkin sähköpostiin
- Tai lataa suoraan: https://expo.dev/accounts/[username]/projects/ajatuskumppani/builds

**Aika:** ~10-15 minuuttia (pilvipalvelussa)

---

### Vaihtoehto 2: Paikallinen Build (Edistyneille)

**Edellytykset:**
- Android Studio asennettu
- Java JDK 11+
- Android SDK
- Node.js 18+

**Askeleet:**

1. **Asenna riippuvuudet**
```bash
cd ajatus-ui
npm install
```

2. **Luo native-projektit**
```bash
npx expo prebuild
```

3. **Rakenna APK**
```bash
cd android
./gradlew assembleRelease
```

4. **APK löytyy:**
```
android/app/build/outputs/apk/release/app-release.apk
```

**Aika:** ~30-60 minuuttia (ensimmäinen kerta)

---

### Vaihtoehto 3: Expo Go (Testaus)

**Nopein tapa testata sovellusta:**

1. **Asenna Expo Go puhelimeen**
- Android: https://play.google.com/store/apps/details?id=host.exp.exponent
- iOS: https://apps.apple.com/app/expo-go/id982107779

2. **Käynnistä kehityspalvelin**
```bash
cd ajatus-ui
npm start
```

3. **Skannaa QR-koodi Expo Go -sovelluksella**

**Huom:** Tämä ei luo APK:ta, vain testaus.

---

## 📦 APK-tiedoston Jakaminen

### Lataa APK Puhelimeen

1. **Siirrä APK puhelimeen**
   - USB-kaapelilla
   - Google Drive / Dropbox
   - Sähköpostilla

2. **Asenna APK**
   - Avaa tiedosto puhelimessa
   - Salli "Tuntemattomista lähteistä asennus"
   - Asenna sovellus

### Julkaise Google Play Storeen

1. **Luo Google Play Console -tili**
   - https://play.google.com/console
   - Maksu: $25 (kertaluonteinen)

2. **Rakenna AAB (App Bundle)**
```bash
eas build -p android --profile production
```

3. **Lataa AAB Play Consoleen**
   - Luo uusi sovellus
   - Lataa AAB
   - Täytä tiedot
   - Julkaise

---

## 🎨 Sovelluksen Kustomointi

### Vaihda Ikoni

1. **Luo ikoni (1024x1024px)**
2. **Tallenna:** `ajatus-ui/assets/icon.png`
3. **Rakenna uudelleen**

### Vaihda Värit

Muokkaa `App.js`:
```javascript
const styles = StyleSheet.create({
  header: {
    backgroundColor: '#6B8FA3', // Vaihda tämä
  },
  // ...
});
```

### Yhdistä Oikeaan AI-palvelimeen

Muokkaa `App.js` `sendMessage`-funktiota:
```javascript
const sendMessage = async () => {
  // ...
  
  // Korvaa tämä:
  setTimeout(() => { ... }, 1000);
  
  // Tällä:
  const response = await fetch('https://api.ajatuskumppani.ai/inference', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message: userMessage.content }),
  });
  const data = await response.json();
  const aiResponse = { role: 'assistant', content: data.response };
  setChat((prev) => [...prev, aiResponse]);
};
```

---

## 🐛 Yleisiä Ongelmia

### "eas: command not found"
```bash
npm install -g eas-cli
```

### "Expo account required"
```bash
eas login
```

### "Build failed"
- Tarkista `app.json` ja `eas.json`
- Varmista että `package.json` on kunnossa
- Katso virheloki EAS:sta

### "APK ei asennu"
- Salli "Tuntemattomista lähteistä asennus" puhelimen asetuksista
- Varmista että APK ei ole korruptoitunut

---

## 📚 Lisäresurssit

- **Expo Docs**: https://docs.expo.dev/
- **EAS Build**: https://docs.expo.dev/build/introduction/
- **React Native**: https://reactnative.dev/
- **Android Studio**: https://developer.android.com/studio

---

## 🚀 Nopea Aloitus (TL;DR)

```bash
# 1. Asenna EAS CLI
npm install -g eas-cli

# 2. Kirjaudu
eas login

# 3. Mene projektikansioon
cd ajatus-ui

# 4. Rakenna APK
npm run build:apk

# 5. Lataa APK linkistä joka tulee sähköpostiin
```

**Valmis!** 🎉

---

**Built in Finland. Open to the world.** 🇫🇮

