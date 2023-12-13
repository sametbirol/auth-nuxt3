# DummyJSON Auth ile Nuxt 3 Projesi

## Projenin Amacı
Bu proje, Nuxt 3 kullanarak DummyJSON'a istek atarak giriş yapmayı amaçlamaktadır. Middleware ve PiniaStore kullanarak bu verileri yönetmek ve doğrulamak hedeflenmiştir. Ayrıca Tailwind CSS kullanılmıştır.

## Adımlar

1. [Nuxt 3 Crash Kursu](https://www.youtube.com/playlist?list=PL4cUxeGkcC9haQlqdCQyYmL_27TesCGPC)'nun ilk 8 videosunu izledim, temel bilgileri edindim.
2. Giriş mantığı üzerine örnek bir proje aradım ve [örnek bir proje](https://dev.to/rafaelmagalhaes/authentication-in-nuxt-3-375o)'ye rastladım.
3. Örnekteki basit login sayfası yerine daha karmaşık bir görünüm için [Tailwind CSS](https://colorlib.com/etc/lf/Login_v4/index.html) temellerini öğrenmek amacıyla bir örnek login sayfasına göz attım.
4. Proje için gerekli layout ve sayfaları, Tailwind CSS kullanarak yazdım.
5. Basit bir global middleware oluşturdum, şu an için herhangi bir işlevi yok.
6. DummyJSON sitesine auth login isteği atmak için kullanılan Pinia Store örneğini projeme entegre ettim.
7. Default layout'ta kullanıcı giriş yapmışsa logout, yapmamışsa login butonunu ekledim.
8. Aynı şekilde, ya giriş yapılmadı ya da kullanıcı nesnesini index sayfasında gösterdim.
9. Login butonuna, username veya password olmadığında etkisizleştirme koşulu ekledim.
10. Aynı şekilde, username veya password olmadığında inputların altına hata mesajı ekledim.

11. İleride SSR eklemeyi düşünüyorum, ancak şu anlık bu aşamada proje bu kadar.

Proje şu an için bu aşamada, belirtilen adımları izleyerek DummyJSON Auth üzerinden Nuxt 3 kullanımı üzerine çalışmalarım devam ediyor.
