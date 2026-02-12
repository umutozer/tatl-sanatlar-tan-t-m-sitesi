# Test Planı: Tatlı Sanatlar Tanıtım Sitesi

Bu test planı, 'Tatlı Sanatlar Tanıtım Sitesi' projesinin kalite güvence süreçlerini detaylandırmaktadır. Amaç, sitenin beklendiği gibi çalıştığını, kullanıcı deneyiminin sorunsuz olduğunu ve tüm teknik gereksinimleri karşıladığını doğrulamaktır.

## 1. Genel Test Stratejisi
- **Fonksiyonel Testler**: Tüm linklerin, butonların ve form elemanlarının doğru çalışıp çalışmadığını doğrulamak.
- **Kullanılabilirlik Testleri**: Kullanıcı arayüzünün sezgisel ve kolay kullanılır olup olmadığını değerlendirmek.
- **Duyarlılık (Responsive) Testleri**: Sitenin farklı ekran boyutlarında ve cihazlarda doğru görüntülenip görüntülenmediğini kontrol etmek.
- **Görsel Testler**: Tasarımın ve renk paletinin tutarlılığını, görsellerin kalitesini ve hizalamalarını incelemek.
- **Performans Testleri**: Sayfa yükleme hızlarını ve animasyonların akıcılığını gözden geçirmek.
- **Erişilebilirlik Testleri**: Sitenin engelli kullanıcılar için erişilebilir olup olmadığını kontrol etmek.
- **SEO Temelli Testler**: Temel SEO öğelerinin (meta etiketler, alt metinler) doğru yapılandırıldığını doğrulamak.

## 2. Test Alanları ve Senaryoları

### 2.1. Header ve Navigasyon
- **Senaryo 2.1.1**: Logo'ya tıklandığında ana sayfanın (hero bölümü) en üstüne kaydırma yapıyor mu?
- **Senaryo 2.1.2**: Navigasyon menüsündeki tüm linklere (Anasayfa, Hakkımızda, Ürünlerimiz, Neden Biz?, İletişim) tıklandığında ilgili bölümlere akıcı (smooth) bir şekilde kaydırma yapıyor mu?
- **Senaryo 2.1.3 (Mobil)**: Menü geçiş (toggle) butonu mobil ve tablet boyutlarında görünüyor mu?
- **Senaryo 2.1.4 (Mobil)**: Menü geçiş butonuna tıklandığında navigasyon menüsü açılıp kapanıyor mu?
- **Senaryo 2.1.5 (Mobil)**: Açık olan mobil menüden bir linke tıklandığında ilgili bölüme kaydırıp menüyü kapatıyor mu?
- **Senaryo 2.1.6**: Header aşağı kaydırıldığında sabit (sticky) kalıyor ve görünümünde bir bozulma olmuyor mu?

### 2.2. Hero Bölümü
- **Senaryo 2.2.1**: Sayfa yüklendiğinde başlık, açıklama ve butonlar animasyonlu olarak görünür hale geliyor mu?
- **Senaryo 2.2.2**: "Ürünlerimizi Keşfet" butonuna tıklandığında Ürünler bölümüne kaydırma yapıyor mu?
- **Senaryo 2.2.3**: "Bize Ulaşın" butonuna tıklandığında İletişim bölümüne kaydırma yapıyor mu?
- **Senaryo 2.2.4**: Arka plan görseli doğru görüntüleniyor ve metinler üzerinde okunabilirliği sağlıyor mu?

### 2.3. Hakkımızda Bölümü
- **Senaryo 2.3.1**: Sayfa scroll edildiğinde Hakkımızda bölümü görünür hale geldiğinde animasyon tetikleniyor mu?
- **Senaryo 2.3.2**: Bölüm başlığı, metinler ve görsel doğru ve eksiksiz görüntüleniyor mu?
- **Senaryo 2.3.3**: Görselin alt (alt) etiketi mevcut ve açıklayıcı mı?
- **Senaryo 2.3.4 (Responsive)**: Mobil ve tablet görünümlerinde metin ve görsel düzeni bozulmadan alt alta veya uygun şekilde hizalanıyor mu?

### 2.4. Ürünlerimiz Bölümü
- **Senaryo 2.4.1**: Sayfa scroll edildiğinde Ürünlerimiz bölümü görünür hale geldiğinde animasyon tetikleniyor mu?
- **Senaryo 2.4.2**: Ürün kartları (Artisan Çikolatalar, Kıtır Gofretler, Rengarenk Şekerlemeler) grid düzeninde doğru görüntüleniyor mu?
- **Senaryo 2.4.3**: Her ürün kartı için görsel, başlık, açıklama ve buton doğru ve eksiksiz görüntüleniyor mu?
- **Senaryo 2.4.4**: Ürün görselleri yükleniyor ve üzerine gelindiğinde (hover) transform efekti çalışıyor mu?
- **Senaryo 2.4.5**: Her ürün kartındaki "Detaylı Bilgi" butonuna tıklandığında İletişim bölümüne kaydırma yapıyor mu?
- **Senaryo 2.4.6**: Ürün kartları, görünür olduklarında gecikmeli animasyonları (delay-1, delay-2, delay-3) doğru bir şekilde tetikliyor mu?

### 2.5. Neden Biz? Bölümü
- **Senaryo 2.5.1**: Sayfa scroll edildiğinde Neden Biz? bölümü görünür hale geldiğinde animasyon tetikleniyor mu?
- **Senaryo 2.5.2**: Avantaj kartları (Ödüllü Kalite, El İşçiliği, Doğal İçerikler, Müşteri Memnuniyeti) grid düzeninde doğru görüntüleniyor mu?
- **Senaryo 2.5.3**: Her kart için ikon, başlık ve açıklama doğru ve eksiksiz görüntüleniyor mu?
- **Senaryo 2.5.4**: İkonlar Font Awesome kütüphanesinden doğru bir şekilde yükleniyor mu?
- **Senaryo 2.5.5**: Avantaj kartları, görünür olduklarında gecikmeli animasyonları (delay-1, delay-2, delay-3, delay-4) doğru bir şekilde tetikliyor mu?

### 2.6. İletişim Bölümü
- **Senaryo 2.6.1**: Sayfa scroll edildiğinde İletişim bölümü görünür hale geldiğinde animasyon tetikleniyor mu?
- **Senaryo 2.6.2**: İletişim Bilgileri bölümünde adres, telefon, e-posta bilgileri ve ikonları doğru görüntüleniyor mu?
- **Senaryo 2.6.3**: Telefon ve e-posta linkleri doğru şekilde tıklanabilir ve ilgili uygulamaları açıyor mu?
- **Senaryo 2.6.4**: Sosyal medya linkleri (Facebook, Instagram, Twitter, LinkedIn) görünüyor ve üzerine gelindiğinde efektleri çalışıyor mu?
- **Senaryo 2.6.5**: Sosyal medya linkleri yeni sekmede açılıyor mu (target="_blank")?
- **Senaryo 2.6.6**: Mesaj Gönderin formundaki tüm giriş alanları (Adınız Soyadınız, E-posta Adresiniz, Konu, Mesajınız) ve etiketleri mevcut mu?
- **Senaryo 2.6.7**: Formdaki "Gönder" butonu çalışıyor ve tıklanabilir mi?
- **Senaryo 2.6.8 (Validasyon)**: Tüm zorunlu alanlar boş bırakılıp gönderilmeye çalışıldığında ilgili hata mesajları doğru görüntüleniyor mu?
- **Senaryo 2.6.9 (Validasyon)**: Geçersiz bir e-posta formatı girildiğinde ilgili hata mesajı görüntüleniyor mu?
- **Senaryo 2.6.10**: Form başarılı bir şekilde gönderildiğinde (simülasyon) "Mesajınız başarıyla gönderildi!" mesajı görüntüleniyor ve form sıfırlanıyor mu?
- **Senaryo 2.6.11**: Form validasyon hatası olduğunda genel hata mesajı "Lütfen tüm alanları doğru şekilde doldurunuz." görüntüleniyor mu?

### 2.7. Footer
- **Senaryo 2.7.1**: Footer'da telif hakkı yılı otomatik olarak güncel yılı gösteriyor mu?
- **Senaryo 2.7.2**: "Gizlilik Politikası" ve "Kullanım Koşulları" linkleri görünüyor ve tıklanabilir durumda mı?
- **Senaryo 2.7.3 (Responsive)**: Mobil ve tablet görünümlerinde footer içeriği (telif hakkı, linkler) düzenli bir şekilde görüntüleniyor mu?

## 3. Duyarlılık (Responsive) Testleri
- **Cihazlar**: Masaüstü (1920px, 1440px), Tablet (iPad Pro: 1024px, iPad: 768px), Mobil (iPhone Pro Max: 414px, iPhone SE: 375px).
- **Yönlendirme**: Dikey ve yatay modlarda test edilmeli.
- **Kontrol Edilecekler**: Metin boyutları, görsel hizalamaları, navigasyon menüsü (hamburger menü), kartların düzeni, iletişim formu düzeni, footer düzeni.

## 4. Tarayıcı Uyumluluk Testleri
- **Tarayıcılar**: Google Chrome (en son 2 sürüm), Mozilla Firefox (en son 2 sürüm), Microsoft Edge (en son 2 sürüm), Safari (en son 2 sürüm).
- **Kontrol Edilecekler**: CSS stillerinin doğru uygulanması, JavaScript fonksiyonlarının çalışması, fontların doğru yüklenmesi, animasyonların düzgün çalışması.

## 5. Erişilebilirlik ve SEO Temelli Testler
- **Erişilebilirlik**: Tüm interaktif elemanlara klavye ile erişilebiliyor mu (tab tuşu navigasyonu)? Odaklanma durumları (focus states) belirgin mi? `aria-label` gibi ARIA nitelikleri doğru kullanılmış mı?
- **SEO**: Meta başlık (`<title>`), meta açıklama (`<meta name="description">`) ve anahtar kelimeler (`<meta name="keywords">`) doğru ve ilgili mi? Tüm görsellerin `alt` nitelikleri mevcut mu?

## 6. Performans Testleri
- **Sayfa Yükleme**: Tarayıcı geliştirici araçları kullanılarak ilk sayfa yükleme süresi ve kaynak boyutları kontrol edilmeli.
- **Görsel Optimizasyonu**: Görsellerin sıkıştırılmış ve uygun boyutlarda olup olmadığı kontrol edilmeli (örnek resim URL'leri genelde yüksek boyutlu olabilir, gerçekte optimize edilmiş olmalı).

## 7. Kabul Kriterleri
- Tüm fonksiyonel testler başarılı olmalı.
- Duyarlılık testleri tüm belirlenen cihazlarda ve tarayıcılarda geçmeli.
- Görsel tasarım, belirlenen UI/UX beklentilerine ve mock-up'lara uygun olmalı.
- Performans metrikleri kabul edilebilir seviyelerde olmalı.
- Herhangi bir kritik güvenlik açığı bulunmamalıdır (bu proje için öncelikli değil, ancak standart bir kontrol).
- Konsolda hata mesajı veya uyarı olmamalıdır.

## 8. Test Ortamı
- **İşletim Sistemleri**: Windows, macOS, Android, iOS (tarayıcılar aracılığıyla).
- **Tarayıcılar**: Bölüm 4'te belirtilenler.
- **Ağ Koşulları**: Hızlı ve orta hızda internet bağlantıları simüle edilerek test edilebilir (gerekirse).
