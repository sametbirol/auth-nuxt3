# DummyJSON Auth ile Nuxt 3 Projesi

## Projenin Amacı
Bu proje, Nuxt 3 kullanarak DummyJSON'a istek atarak giriş yapmayı amaçlamaktadır. Middleware ve PiniaStore kullanarak bu verileri yönetmek ve doğrulamak hedeflenmiştir. Ayrıca Tailwind CSS kullanılmıştır.

## Adımlar

- [Nuxt 3 Crash Kursu](https://www.youtube.com/playlist?list=PL4cUxeGkcC9haQlqdCQyYmL_27TesCGPC)'nun ilk 8 videosunu izledim, temel bilgileri edindim.
- Giriş mantığı üzerine [örnek bir proje](https://dev.to/rafaelmagalhaes/authentication-in-nuxt-3-375o) aradım.
- Örnekteki basit login sayfası yerine daha karmaşık bir görünüm için Tailwind CSS temellerini öğrenmek amacıyla bir [örnek login sayfasına](https://colorlib.com/etc/lf/Login_v4/index.html) göz attım.
- Benim tasarimim soyle oldu

![image](https://github.com/sametbirol/auth-nuxt3/assets/75724488/4bbd217d-8946-4668-8886-4c0804226b9a)

- Login butonuna, username veya password olmadığında etkisizleştirme koşulu ekledim.
- Aynı şekilde, username veya password olmadığında inputların altına hata mesajı ekledim.

![image](https://github.com/sametbirol/auth-nuxt3/assets/75724488/0a73d7a0-e3dc-45d3-9424-3fcd5e4a41b6)

- Proje için gerekli layout ve sayfaları, Tailwind CSS kullanarak yazdım.
- DummyJSON sitesine auth login isteği atmak için kullanılan [Pinia Store](/store/auth.ts) örneğini projeme entegre ettim(kopyala yapıştır).
- Default layout'ta kullanıcı giriş yapmışsa logout, yapmamışsa login butonunu koşullu ekledim.
- Aynı şekilde index sayfasında, ya giriş yapılmadı yazisini ya da kullanıcı verisini gösterdim.
- Basit bir global middleware oluşturdum, şu an için herhangi bir işlevi yok.

İleride SSR eklemeyi düşünüyorum, ancak şu anlık bu aşamada proje bu kadar.

