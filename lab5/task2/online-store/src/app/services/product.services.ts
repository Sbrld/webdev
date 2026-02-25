import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private categories: Category[] = [
    { id: 1, name: 'Smartphones' },
    { id: 2, name: 'Laptops' },
    { id: 3, name: 'Headphones' },
    { id: 4, name: 'Tablets' },
  ];

  private products: Product[] = [
    {
      id: 1,
      categoryId: 1,
      name: 'Смартфон Samsung Galaxy S25 Ultra 5G 12 ГБ/256 ГБ темно-черный',
      description: 'Samsung Galaxy S25 Ultra 5G — флагманский смартфон с непревзойденными возможностями для тех, кто требует от устройства максимальной производительности и качества.',
      price: 57990,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pa8/pcf/20117665.png?format=gallery-large',
      images: [ 'https://resources.cdn-kaspi.kz/img/m/p/pa8/pcf/20117665.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/pc4/pcf/20117666.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/pe0/pcf/20117667.png?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s25-ultra-5g-12-gb-256-gb-temno-chernyi-133434571/?c=750000000',
      likes: 0,
    },
    {
      id: 2,
      categoryId: 1,
      name: 'Смартфон Apple iPhone 17 Pro 256Gb оранжевый',
      description: 'Apple iPhone 17 Pro 256Gb — это воплощение инноваций и стиля, сочетающее в себе непревзойденную производительность, потрясающую камеру и яркий OLED-дисплей.',
      price: 774648,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium',
      images: [ 'https://resources.cdn-kaspi.kz/img/m/p/p29/p1e/64464409.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pfc/p95/64168414.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pc3/p95/64168416.png?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-oranzhevyi-145467625/?c=750000000',
      likes: 0,
    },
    {
      id: 3,
      categoryId: 1,
      name: 'Смартфон Apple iPhone 17 Pro 256Gb серебристый',
      description: 'Apple iPhone 17 Pro 256Gb — это воплощение инноваций и стиля, сочетающее в себе передовые технологии и безупречный дизайн.',
      price: 828580,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pb3/p40/64168003.png?format=gallery-large',
      images: [ 'https://resources.cdn-kaspi.kz/img/m/p/pb3/p40/64168003.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/pd4/p66/64464588.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p7b/p40/64168005.png?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-serebristyi-145467562/?c=750000000',
      likes: 0,
    },
    {
      id: 4,
      categoryId: 1,
      name: 'Смартфон Redmi A3x 3 ГБ/64 ГБ черный',
      description: 'Смартфон Redmi A3x 3 ГБ/64 ГБ — это мощное устройство с высокой производительностью и стильным дизайном, которое идеально подходит для повседневного использования.',
      price: 52900,
      rating: 3.2,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h83/h08/86585118720030.png?format=gallery-large',
      images: [ 'https://resources.cdn-kaspi.kz/img/m/p/h83/h08/86585118720030.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h9a/h1b/86584697651230.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hac/h2e/86584697683998.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/redmi-a3x-3-gb-64-gb-chernyi-121654928/?c=750000000',
      likes: 0,
    },
    {
      id: 5,
      categoryId: 1,
      name: 'Смартфон Samsung Galaxy S24 FE 5G 8 ГБ/128 ГБ черный',
      description: 'Samsung Galaxy S24 FE 5G — это мощный и стильный смартфон с передовыми технологиями, который станет вашим надёжным помощником в повседневной жизни.',
      price: 254985,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p60/p7d/1610304.png?format=gallery-medium',
      images: [ 'https://resources.cdn-kaspi.kz/img/m/p/p60/p7d/1610304.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pdb/p79/1610315.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pbe/p79/1610316.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-fe-5g-8-gb-128-gb-chernyi-128143528/?c=750000000',
      likes: 0,
    },

    {
      id: 6,
      categoryId: 2,
      name: 'Ноутбук Lenovo IdeaPad 3 15.6" / 8 Гб / SSD 256 Гб / DOS / 15IGL05 / 81WQ00ERRK',
      description: 'Ноутбук IdeaPad 3 работает тише и с меньшим выделением тепла за счет использования оптимизированной механической системы распределения потоков воздуха и интеллектуальной вентиляции.',
      price: 170645,
      rating: 3.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h6f/hba/64231854538782.jpg?format=gallery-medium',
      images: [ 'https://resources.cdn-kaspi.kz/img/m/p/h6f/hba/64231854538782.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h2f/h20/64231858077726.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/ha2/h3f/64231926562846.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/lenovo-ideapad-3-15-6-8-gb-ssd-256-gb-dos-15igl05-81wq00errk-102715483/?c=750000000',
      likes: 0,
    },
    {
      id: 7,
      categoryId: 2,
      name: 'Ноутбук ThundeRobot 911S Core D 15.6" / 16 Гб / SSD 512 Гб / Без ОС / JT009K00F',
      description: 'Игровой ноутбук Thunderobot 911S Core D JT009K00F — 15.6-дюймовая модель с IPS-матрицей и разрешением 1920х1080 пикселей.',
      price: 496000,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h76/h6c/85301691547678.jpg?format=gallery-medium',
      images: [ 'https://resources.cdn-kaspi.kz/img/m/p/h76/h6c/85301691547678.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h91/h27/85301691678750.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h98/hae/85301691744286.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/thunderobot-911s-core-d-15-6-16-gb-ssd-512-gb-bez-os-jt009k00f-117046774/?c=750000000',
      likes: 0,
    },
    {
      id: 8,
      categoryId: 2,
      name: 'Ноутбук Apple MacBook Air 13 2025 / 16 Гб / SSD 256 Гб / macOS / MW123',
      description: 'Представляем Apple MacBook Air 13 2025 — ультрабук, который сочетает в себе высокую производительность, изящный дизайн и долговечность. Этот ноутбук станет идеальным спутником для работы и развлечений.',
      price: 521993,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pab/pc3/35723922.jpg?format=gallery-medium',
      images: [ 'https://resources.cdn-kaspi.kz/img/m/p/pab/pc3/35723922.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p72/pc3/35723924.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p3a/pc3/35723926.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2025-16-gb-ssd-256-gb-macos-mw123-137582956/?c=750000000',
      likes: 0,
    },
    {
      id: 9,
      categoryId: 2,
      name: 'Ноутбук Castom E157D 15.6" / 16 Гб / SSD 1000 Гб / Win 11 / 101725124',
      description: 'Castom E157D — универсальный ноутбук для работы, учебы и развлечений, сочетающий в себе мощный процессор AMD Ryzen 5, быстрый SSD-накопитель и яркий IPS-экран.',
      price: 249990,
      rating: 4,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p32/pf7/64711809.jpg?format=gallery-medium',
      images: [ 'https://resources.cdn-kaspi.kz/img/m/p/p32/pf7/64711809.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p04/p7d/63008953.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pe8/p7c/63008954.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/castom-e157d-15-6-16-gb-ssd-1000-gb-win-11-101725124-145214483/?c=750000000',
      likes: 0,
    },
    {
      id: 10,
      categoryId: 2,
      name: 'Ноутбук ThundeRobot Hunter R15 15.6" / 16 Гб / SSD 512 Гб / Win 11 Pro / 240HZ',
      description: 'Ноутбук ThundeRobot Hunter R15 — это мощное устройство для геймеров и профессионалов, которое сочетает в себе высокую производительность, современные технологии и стильный дизайн.',
      price: 679997,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h84/he3/86569781264414.jpg?format=gallery-medium',
      images: [ 'https://resources.cdn-kaspi.kz/img/m/p/h84/he3/86569781264414.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hea/h8f/86569781329950.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h78/h99/86569781395486.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/thunderobot-hunter-r15-15-6-16-gb-ssd-512-gb-win-11-pro-r15-i713650hx406016gqhd240hz-121594303/?c=750000000',
      likes: 0,
    },

    {
      id: 11,
      categoryId: 3,
      name: 'Наушники Apple USB-C MYQY3ZM/A белый',
      description: 'Наушники Apple USB-C MYQY3ZM/A — это удобное и практичное решение для тех, кто предпочитает классический дизайн и надёжное качество звука.',
      price: 10500,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pa1/pc8/41468726.jpg?format=gallery-large',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/pa1/pc8/41468726.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/pf5/pc8/41468729.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p7d/pcb/41468731.jpg?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-apple-usb-c-myqy3zm-a-belyi-139440255/?c=750000000',
      likes: 0,
    },
    {
      id: 12,
      categoryId: 3,
      name: 'Наушники Razer Blackshark V2 X белый',
      description: 'Представляем Razer BlackShark V2 X - тройная угроза за счет восхитительного звучания, превосходной чистоты микрофона и звукоизоляции высокого качества, подтвержденными про-игроками.',
      price: 15500,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h24/h07/64919532240926.jpg?format=gallery-medium',
      images: [ 'https://resources.cdn-kaspi.kz/img/m/p/h24/h07/64919532240926.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/he9/h61/64919533551646.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h68/h66/64919534207006.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-razer-blackshark-v2-x-belyi-104669405/?c=750000000',
      likes: 0,
    },
    {
      id: 13,
      categoryId: 3,
      name: 'Наушники Apple AirPods Pro 3 белый',
      description: 'Наушники Apple AirPods Pro 3 — это идеальный выбор для тех, кто ценит превосходное качество звука и удобство использования.',
      price: 129659,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p89/pc5/64466278.png?format=gallery-medium',
      images: [ 'https://resources.cdn-kaspi.kz/img/m/p/p89/pc5/64466278.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pa6/pc5/64466279.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p6d/pc5/64466277.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-pro-3-belyi-145554533/?c=750000000',
      likes: 0,
    },
    {
      id: 14,
      categoryId: 3,
      name: 'Наушники Xiaomi Redmi Buds 4 Active черный',
      description: 'Беспроводные наушники Xiaomi Redmi Buds 4 Active — компактное и стильное решение для тех, кто ценит свободу движений и качественный звук.',
      price: 30000,
      rating: 3.2,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h9d/h37/81829074599966.jpg?format=gallery-medium',
      images: [ 'https://resources.cdn-kaspi.kz/img/m/p/h9d/h37/81829074599966.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hf4/h98/87088733126686.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h53/hd5/87088733257758.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-xiaomi-redmi-buds-4-active-chernyi-111491755/?c=750000000',
      likes: 0,
    },
    {
      id: 15,
      categoryId: 3,
      name: 'Наушники Bang & Olufsen BeoPlay H100 оранжевый',
      description: 'Bang & Olufsen Beoplay H100 - флагманские беспроводные полноразмерные наушники с шумоподавлением следующего уровня, захватывающим звуком и роскошным дизайном.',
      price: 1122326,
      rating: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h4a/hc6/87138273624094.jpg?format=gallery-medium',
      images: [ 'https://resources.cdn-kaspi.kz/img/m/p/h4a/hc6/87138273624094.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h96/ha1/87138273689630.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h93/h34/87138273755166.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-bang-olufsen-beoplay-h100-oranzhevyi-123639332/?c=750000000',
      likes: 0,
    },

    {
      id: 16,
      categoryId: 4,
      name: 'Планшет Apple iPad A16 11 2025 Wi-Fi 11 дюйм 6 Гб/128 Гб синий',
      description: 'Представляем iPad A16 2025 — ваш идеальный спутник для работы и развлечений! Этот планшет с 11-дюймовым экраном и мощным процессором Apple A16 обеспечит вам высокую производительность и яркие впечатления от использования.',
      price: 199919,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p23/p2d/37019409.png?format=gallery-medium',
      images: [ 'https://resources.cdn-kaspi.kz/img/m/p/p23/p2d/37019409.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pb7/p12/37019481.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p7e/p12/37019483.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-ipad-a16-11-2025-wi-fi-11-djuim-6-gb-128-gb-sinii-138202165/?c=750000000',
      likes: 0,
    },
    {
      id: 17,
      categoryId: 4,
      name: 'Планшет Xiaomi Redmi Pad 2 11 дюйм 8 Гб/256 Гб серый',
      description: 'Xiaomi Redmi Pad 2 — универсальный планшет с ярким 11-дюймовым экраном и мощным процессором MediaTek Helio G100 Ultra для работы и развлечений.',
      price: 107653,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pac/p7a/81439516.jpg?format=gallery-medium',
      images: [ 'https://resources.cdn-kaspi.kz/img/m/p/pac/p7a/81439516.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p24/p44/46204507.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pec/p43/46204509.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-pad-2-11-djuim-8-gb-256-gb-seryi-140639712/?c=750000000',
      likes: 0,
    },
    {
      id: 18,
      categoryId: 4,
      name: 'Планшет AIRSTAR G3000 pluse 10.1 дюйм 16 Гб/512 Гб черный',
      description: 'Представляем планшет AIRSTAR G3000 pluse с диагональю 10.1 дюйма, который станет вашим идеальным спутником для работы и развлечений.',
      price: 38999,
      rating: 4.3,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pbc/peb/3848531.jpeg?format=gallery-medium',
      images: [ 'https://resources.cdn-kaspi.kz/img/m/p/pbc/peb/3848531.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p52/pe8/3848532.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pe8/pe4/3848533.jpeg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/airstar-g3000-pluse-10-1-djuim-16-gb-512-gb-chernyi-128606600/?c=750000000',
      likes: 0,
    },
    {
      id: 19,
      categoryId: 4,
      name: 'Планшет Samsung Galaxy Tab A11 8.7 дюйм 8 Гб/128 Гб серый',
      description: 'Вдохновленный культовой серией Galaxy S, новый Galaxy Tab A11 выглядит тонко и стильно. Его обтекаемый минималистичный дизайн подчеркивает премиальность устройства.',
      price: 95829,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pfb/p36/69034336.jpg?format=gallery-medium',
      images: [ 'https://resources.cdn-kaspi.kz/img/m/p/pfb/p36/69034336.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p17/p37/69034337.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p33/p37/69034338.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-a11-8-7-djuim-8-gb-128-gb-seryi-146913692/?c=750000000',
      likes: 0,
    },
    {
      id: 20,
      categoryId: 4,
      name: 'Планшет Apple iPad Pro 11 2024 Wi-Fi 11 дюйм 8 Гб/256 Гб черный',
      description: 'Планшет Apple iPad Pro 2024 Wi-Fi 11 — высокопроизводительное устройство, которое сочетает в себе инновационные технологии и стильный дизайн, идеально подходящее для работы и развлечений.',
      price: 515838,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hb3/h75/86106948239390.png?format=gallery-medium',
      images: [ 'https://resources.cdn-kaspi.kz/img/m/p/hb3/h75/86106948239390.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h27/h89/86106948272158.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h90/hc6/86106948304926.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-ipad-pro-11-2024-wi-fi-11-djuim-8-gb-256-gb-chernyi-119774227/?c=750000000',
      likes: 0,
    }
  ];

  getCategories(): Category[] {
    return this.categories;
  }

  getProductsByCategory(categoryId: number): Product[] {
    return this.products.filter(p => p.categoryId === categoryId).map(p => ({...p, images: [...p.images]}));
  }
}
