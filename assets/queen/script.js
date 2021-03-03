const arr = [
  {
    id: 1,
    category: 'Телефоны',
    items: [
      {
        id: 1,
        name: 'Телефон сотовый APPLE iPhone 12 64GB',
        price: '469 890 ₸',
        link: 'https://www.mechta.kz/product/telefon-sotovyy-apple-iphone-12-64gb-black/',
        img: 'https://mechta.kz/export/1cbitrix/import_files/ac/ac142f06-0df3-11eb-a235-005056b6dbd7.jpeg'
      },
      {
        id: 2,
        name: 'Телефон сотовый HUAWEI P40 Lite E',
        price: '79 890 ₸',
        link: 'https://www.mechta.kz/product/telefon-sotovyy-huawei-p40-lite-e-midnight-black/',
        img: 'https://mechta.kz/export/1cbitrix/import_files/aa/aa1199c4-7a40-11ea-a22d-005056b6dbd7.jpeg'
      },
      {
        id: 3,
        name: 'Телефон сотовый OPPO A72',
        price: '119 990 ₸',
        link: 'https://www.mechta.kz/product/telefon-sotovyy-oppo-a72-twilight-black/',
        img: 'https://mechta.kz/export/1cbitrix/import_files/fd/fd23481b-ab9a-11ea-a22e-005056b6dbd7.jpeg'
      },
      {
        id: 4,
        name: 'Телефон сотовый SAMSUNG SM A 315 Galaxy A31',
        price: '99 890 ₸',
        link: 'https://www.mechta.kz/product/telefon-sotovyy-samsung-sm-a-315-galaxy-a31-fzkus-black/',
        img: 'https://mechta.kz/export/1cbitrix/import_files/b2/b22398ea-8bb2-11ea-a22d-005056b6dbd7.jpeg'
      }
    ]
  },
  {
    id: 2,
    category: 'Смарт часы',
    items: [
      {
        id: 1,
        name: 'SAMSUNG Galaxy Watch Active2 Aluminium 40mm Gold (R830-NZDASKZ)',
        price: '99 890 ₸',
        link: 'https://www.mechta.kz/product/smart-chasy-samsung-galaxy-watch-active2-aluminium-40mm-gold-r830-nzdaskz/',
        img: 'https://mechta.kz/export/1cbitrix/import_files/f6/f69dd892-61f4-11eb-a23a-005056b6dbd7.jpeg'
      },
      {
        id: 2,
        name: 'SAMSUNG Galaxy Watch Active2 Aluminium 44mm Rose Gold (R820-NZDASKZ)',
        price: '119 890 ₸',
        link: 'https://www.mechta.kz/product/smart-chasy-samsung-galaxy-watch-active2-aluminium-44mm-rose-gold-r820-nzdaskz/',
        img: 'https://mechta.kz/export/1cbitrix/import_files/14/14798d4e-6209-11eb-a23a-005056b6dbd7.jpeg'
      },
      {
        id: 3,
        name: 'HUAWEI WATCH GT 2 (Matte Black) (LTN-B19)',
        price: '79 890 ₸',
        link: 'https://www.mechta.kz/product/smart-chasy-huawei-watch-gt-2-matte-black-ltn-b19/',
        img: 'https://mechta.kz/export/1cbitrix/import_files/c3/c338fc7b-ccda-11ea-a230-005056b6dbd7.jpeg'
      },
      {
        id: 4,
        name: 'HUAWEI WATCH Fit розовый (TIA-B09)',
        price: '49 890 ₸',
        link: 'https://www.mechta.kz/product/smart-chasy-huawei-watch-fit-rozovyy-tia-b09/',
        img: 'https://mechta.kz/export/1cbitrix/import_files/82/82441de1-f7d7-11ea-a230-005056b6dbd7.jpeg'
      }
    ]
  },
  {
    id: 3,
    category: 'Ноутбук',
    items: [
      {
        id: 1,
        name: 'LENOVO IdeaPad 3 15IGL05 (81WQ000JRK)',
        price: '154 970 ₸',
        link: 'https://www.mechta.kz/product/noutbuk-lenovo-ideapad-3-15igl05-81wq000jrk-156-hdceleron-n4120-11-ghz41tbdos/',
        img: 'https://mechta.kz/export/1cbitrix/import_files/89/89b214fb-5fae-11eb-a23a-005056b6dbd7.jpeg'
      },
      {
        id: 2,
        name: 'LENOVO V15 (82C700E3RU)',
        price: '179 970 ₸',
        link: 'https://www.mechta.kz/product/noutbuk-lenovo-v155-15api-82c700e3ru-156-fhdamd-athlon-gold-3150u-24-ghz8ssd256dos/',
        img: 'https://mechta.kz/export/1cbitrix/import_files/1c/1cd1b7e0-5939-11eb-a23a-005056b6dbd7.jpeg'
      },
      {
        id: 3,
        name: 'DREAM MACHINES G1650',
        price: '339 990 ₸',
        link: 'https://www.mechta.kz/product/noutbuk-dream-machines-g1650-15kz41156-fhdcore-i5-10200h-24-ghz8ssd500gtx16504dos/',
        img: 'https://mechta.kz/export/1cbitrix/import_files/f3/f3ab2d42-344f-11eb-a238-005056b6dbd7.jpeg'
      }
    ]
  },
  {
    id: 4,
    category: 'Наушники',
    items: [
      {
        id: 1,
        name: 'Наушники SONY WF XB 700 (blue)',
        price: '29 990 ₸',
        link: 'https://www.mechta.kz/product/naushniki-sony-wf-xb-700-blue/',
        img: 'https://www.mechta.kz/export/1cbitrix/import_files/d1/d11c4040-c4bc-11ea-a230-005056b6dbd7.jpeg'
      },
      {
        id: 2,
        name: 'Наушники для телефона APPLE Airpods with Charging Case (MV7N2)',
        price: '89 990 ₸',
        link: 'https://www.mechta.kz/product/naushniki-dlya-telefona-apple-airpods-with-charging-case-mv7n2/',
        img: 'https://www.mechta.kz/export/1cbitrix/import_files/02/02ee1a43-5568-11eb-a239-005056b6dbd7.jpeg'
      },
      {
        id: 3,
        name: 'Наушники для телефона SAMSUNG Galaxy Buds+ (black) SM-R175NZKASER',
        price: '49 890 ₸',
        link: 'https://www.mechta.kz/product/naushniki-dlya-telefona-samsung-galaxy-buds-black-sm-r175nzkaser/',
        img: 'https://www.mechta.kz/export/1cbitrix/import_files/e5/e51f8c28-5d04-11ea-a22d-005056b6dbd7.jpeg'
      },
      {
        id: 4,
        name: 'Наушники для телефона XIAOMI Mi True Wireless Earbuds Basic 2 (Black)',
        price: '12 490 ₸',
        link: 'https://www.mechta.kz/product/naushniki-dlya-telefona-xiaomi-mi-true-wireless-earbuds-basic-2-black/',
        img: 'https://www.mechta.kz/export/1cbitrix/import_files/f4/f4b67aff-11c7-11eb-a235-005056b6dbd7.jpeg'
      }
    ]
  },
  {
    id: 5,
    category: 'Пылесосы',
    items: [
      {
        id: 1,
        name: 'Робот-пылесос XIAOMI SKV4093GL MI ROBOT VACUUM MOP (white)',
        price: '131 290 ₸',
        link: 'https://www.mechta.kz/product/pylesos-xiaomi-skv4093gl-mi-robot-vacuum-mop-white/',
        img: 'https://mechta.kz/export/1cbitrix/import_files/12/1251201b-6285-11ea-a22d-005056b6dbd7.jpeg'
      },
      {
        id: 2,
        name: 'Робот-пылесос XIAOMI Roborock S5 MAX (black)',
        price: '224 890 ₸',
        link: 'https://www.mechta.kz/product/robot-pylesos-xiaomi-roborock-s5-max-black/',
        img: 'https://mechta.kz/export/1cbitrix/import_files/0e/0edf0474-e5c7-11ea-a230-005056b6dbd7.jpeg'
      },
      {
        id: 3,
        name: 'Вертикальный пылесос DYSON V7 ANIMAL EXTRA (SV11 ANIMAL EXTRA)',
        price: '129 990 ₸',
        link: 'https://www.mechta.kz/product/vertikalnyy-pylesos-dyson-v7-animal-extra-sv11-animal-extra/',
        img: 'https://mechta.kz/export/1cbitrix/import_files/26/2600b5db-2f95-11eb-a237-005056b6dbd7.jpeg'
      },
      {
        id: 4,
        name: 'Климатический комплекс SHARP KCD41RW',
        price: '159 990 ₸',
        link: 'https://www.mechta.kz/product/pylesos-tefal-ty-9471wo/',
        img: 'https://mechta.kz/export/1cbitrix/import_files/7e/7e6e8a5f-bc1b-11ea-a22f-005056b6dbd7.jpeg'
      }
    ]
  },
  {
    id: 6,
    category: 'Климат',
    items: [
      {
        id: 1,
        name: 'Увлажнитель воздуха POLARIS PUH 7804 TF синий',
        price: '19 990 ₸',
        link: 'https://www.mechta.kz/product/uvlajnitel-vozduha-polaris-puh-7804-tf-siniy/',
        img: 'https://mechta.kz/export/1cbitrix/import_files/3a/3a6bade2-28c2-11eb-a235-005056b6dbd7.jpeg'
      },
      {
        id: 2,
        name: 'Увлажнитель воздуха BONECO U201A white',
        price: '36 990 ₸',
        link: 'https://www.mechta.kz/product/uvlajnitel-vozduha-boneco-u201a-white/',
        img: 'https://mechta.kz/export/1cbitrix/import_files/46/4672e444-b251-11e8-a218-005056b6dbd7.jpeg'
      },
      {
        id: 3,
        name: 'Мойка воздуха BONECO W2055D',
        price: '91 992 ₸',
        link: 'https://www.mechta.kz/product/vozduhoochistitel-boneco-w2055d/',
        img: 'https://mechta.kz/export/1cbitrix/import_files/41/41484666-bc85-11e8-a219-005056b6dbd7.jpeg'
      },
      {
        id: 4,
        name: 'Климатический комплекс SHARP KCD41RW',
        price: '159 990 ₸',
        link: 'https://www.mechta.kz/product/klimaticheskiy-kompleks-sharp-kcd41rw/',
        img: 'https://mechta.kz/export/1cbitrix/import_files/6d/6d3ab429-078c-11ea-a22b-005056b6dbd7.jpeg'
      }
    ]
  },
  {
    id: 7,
    category: 'Посудомоечные машины',
    items: [
      {
        id: 1,
        name: 'Посудомоечная машина BEKO DFS 05012 W',
        price: '119 990 ₸',
        link: 'https://www.mechta.kz/product/posudomoechnaya-mashina-beko-dfs-05012-w/',
        img: 'https://mechta.kz/export/1cbitrix/import_files/af/af2111ef-e7e6-11e8-a219-005056b6dbd7.jpeg'
      },
      {
        id: 2,
        name: 'Посудомоечная машина BOSCH SMS 53L08ME',
        price: '229 990 ₸',
        link: 'https://www.mechta.kz/product/posudomoechnaya-mashina-bosch-sms-53l08me/',
        img: 'https://mechta.kz/export/1cbitrix/import_files/37/3729743d-9ea7-11e3-9317-14dae972ca6d.jpeg'
      },
      {
        id: 3,
        name: 'Встр. посудомоечная машина BOSCH SMV 25CX10Q',
        price: '239 990 ₸',
        link: 'https://www.mechta.kz/product/vstr-posudomoechnaya-mashina-bosch-smv-25cx10q/',
        img: 'https://mechta.kz/export/1cbitrix/import_files/44/44d21a57-d776-11e8-a219-005056b6dbd7.jpeg'
      },
      {
        id: 4,
        name: 'Встр. посудомоечная машина HANSA ZIM 647 ELH',
        price: '239 990 ₸',
        link: 'https://www.mechta.kz/product/vstr-posudomoechnaya-mashina-hansa-zim-647-elh/',
        img: 'https://mechta.kz/export/1cbitrix/import_files/ef/ef21e156-a90f-11e9-a221-005056b6dbd7.jpeg'
      }
    ]
  },
  {
    id: 8,
    category: 'Настольный гриль',
    items: [
      {
        id: 1,
        name: 'Настольный гриль BORK G802',
        price: '279 390 ₸',
        link: 'https://www.mechta.kz/product/nastolnyy-gril-bork-g802/',
        img: 'https://mechta.kz/export/1cbitrix/import_files/72/72da49d7-8684-11e9-a221-005056b6dbd7.jpeg'
      },
      {
        id: 2,
        name: 'Настольный гриль BORK G800',
        price: '125 390 ₸',
        link: 'https://www.mechta.kz/product/nastolnyy-gril-bork-g800/',
        img: 'https://mechta.kz/export/1cbitrix/import_files/a1/a19c328b-7285-11e7-80d5-704d7bb700a8.jpeg'
      },
      {
        id: 3,
        name: 'Настольный гриль DELONGHI CGH1030D',
        price: '135 990 ₸',
        link: 'https://www.mechta.kz/product/nastolnyy-gril-delonghi-cgh1030d/',
        img: 'https://mechta.kz/export/1cbitrix/import_files/73/7322412c-e11e-11e6-9521-2c768a5d3551.jpeg'
      },
      {
        id: 4,
        name: 'Настольный гриль TEFAL GC 722D34',
        price: '139 990 ₸',
        link: 'https://www.mechta.kz/product/nastolnyy-gril-tefal-gc-722d34/',
        img: 'https://mechta.kz/export/1cbitrix/import_files/7f/7f2110e0-1c8d-11ea-a22d-005056b6dbd7.jpeg'
      }
    ]
  },
  {
    id: 9,
    category: 'Фен',
    items: [
      {
        id: 1,
        name: 'Фен PHILIPS BHD 027/00',
        price: '12 990 ₸',
        link: 'https://www.mechta.kz/product/fen-philips-bhd-02700/',
        img: 'https://mechta.kz/export/1cbitrix/import_files/fe/fec0d21e-3040-11e9-a21e-005056b6dbd7.jpeg'
      },
      {
        id: 2,
        name: 'Фен VITEK VT 2262',
        price: '7 990 ₸',
        link: 'https://www.mechta.kz/product/fen-vitek-vt-2262/',
        img: 'https://mechta.kz/export/1cbitrix/import_files/da/dadbffcd-3c3a-11e6-a93a-2c768a5d3551.jpeg'
      },
      {
        id: 3,
        name: 'Фен ROWENTA CV 3620',
        price: '12 990 ₸',
        link: 'https://www.mechta.kz/product/fen-rowenta-cv-3620/',
        img: 'https://mechta.kz/export/1cbitrix/import_files/55/55b5f045-1009-11e1-ba25-00241dc0e077.jpeg'
      }
    ]
  },
  {
    id: 10,
    category: 'Стайлер',
    items: [
      {
        id: 1,
        name: 'Стайлер DYSON Airwrap HS01 (объём+форма)',
        price: '221 990 ₸',
        link: 'https://www.mechta.kz/product/stayler-dyson-airwrap-hs01-obemforma/',
        img: 'https://mechta.kz/export/1cbitrix/import_files/75/75e46cb4-6060-11eb-a23a-005056b6dbd7.jpeg'
      },
      {
        id: 2,
        name: 'Стайлер DYSON Airwrap HS01 для разных типов волос (медный с дорожным чехлом)',
        price: '272 990 ₸',
        link: 'https://www.mechta.kz/product/stayler-dyson-airwrap-hs01-dlya-raznyh-tipov-volos-mednyy-s-dorojnym-chehlom/',
        img: 'https://mechta.kz/export/1cbitrix/import_files/50/50ccd9e4-344b-11eb-a238-005056b6dbd7.jpeg'
      }
    ]
  },
  {
    id: 11,
    category: 'Прибор для распрямления волос',
    items: [
      {
        id: 1,
        name: 'Прибор для распрямления волос ROWENTA SF 4522 Do',
        price: '25 490 ₸',
        link: 'https://www.mechta.kz/product/pribor-dlya-raspryamleniya-volos-rowenta-sf-4522-do/',
        img: 'https://mechta.kz/export/1cbitrix/import_files/01/01442a62-294e-11e6-a0e3-2c768a5d3551.jpeg'
      },
      {
        id: 2,
        name: 'Прибор для распрямления волос DYSON Corrale HS03(NK/FU)',
        price: '259 990 ₸',
        link: 'https://www.mechta.kz/product/pribor-dlya-raspryamleniya-volos-dyson-corrale-hs03nkfu/',
        img: 'https://mechta.kz/export/1cbitrix/import_files/b8/b8762776-9bdc-11ea-a22e-005056b6dbd7.jpeg'
      },
      {
        id: 3,
        name: 'Прибор для распрямления волос PHILIPS BHS 375/00',
        price: '13 990 ₸',
        link: 'https://www.mechta.kz/product/pribor-dlya-raspryamleniya-volos-philips-bhs-37500/',
        img: 'https://mechta.kz/export/1cbitrix/import_files/f3/f394ffb4-602b-11e9-a220-005056b6dbd7.jpeg'
      },
      {
        id: 4,
        name: 'Прибор для распрямления волос VITEK VT 2311',
        price: '5 990 ₸',
        link: 'https://www.mechta.kz/product/pribor-dlya-raspryamleniya-volos-vitek-vt-2311/',
        img: 'https://mechta.kz/export/1cbitrix/import_files/b2/b29380ec-3c2e-11e6-a93a-2c768a5d3551.jpeg'
      }
    ]
  },
  {
    id: 12,
    category: 'Кухонная машина',
    items: [
      {
        id: 1,
        name: 'Кухонная машина KENWOOD KHH 326 WH',
        price: '189 990 ₸',
        link: 'https://www.mechta.kz/product/kuhonnaya-mashina-kenwood-khh-326-wh/',
        img: 'https://mechta.kz/export/1cbitrix/import_files/d4/d4e09287-3be9-11e5-bb4e-2c768a5d3551.jpeg'
      },
      {
        id: 2,
        name: 'Кухонная машина KENWOOD KVC 5100 T',
        price: '259 990 ₸',
        link: 'https://www.mechta.kz/product/kuhonnaya-mashina-kenwood-kvc-5100-t/',
        img: 'https://mechta.kz/export/1cbitrix/import_files/5f/5f567548-c37c-11e7-80c1-1866daf08915.jpeg'
      },
      {
        id: 3,
        name: 'Кухонная машина MOULINEX QA 519D32',
        price: '195 990 ₸',
        link: 'https://www.mechta.kz/product/kuhonnaya-mashina-moulinex-qa-519d32/',
        img: 'https://mechta.kz/export/1cbitrix/import_files/31/31ef2248-125d-11ea-a22b-005056b6dbd7.jpeg'
      },
      {
        id: 4,
        name: 'Кухонная машина MOULINEX QA 51AD10',
        price: '136 490 ₸',
        link: 'https://www.mechta.kz/product/kuhonnaya-mashina-moulinex-qa-51ad10/',
        img: 'https://mechta.kz/export/1cbitrix/import_files/31/31ef2252-125d-11ea-a22b-005056b6dbd7.jpeg'
      }
    ]
  },
  {
    id: 13,
    category: 'Ручной блендер',
    items: [
      {
        id: 1,
        name: 'Ручной блендер BRAUN MQ 535 Sauce',
        price: '23 990 ₸',
        link: 'https://www.mechta.kz/product/ruchnoy-blender-braun-mq-535-sauce/',
        img: 'https://mechta.kz/export/1cbitrix/import_files/5a/5a40a5c6-ab2c-11e3-89c5-14dae972ca6d.jpeg'
      },
      {
        id: 2,
        name: 'Ручной блендер REDMOND RHB 2972',
        price: '22 990 ₸',
        link: 'https://www.mechta.kz/product/ruchnoy-blender-redmond-rhb-2972/',
        img: 'https://mechta.kz/export/1cbitrix/import_files/c4/c4a9761d-8741-11e9-a221-005056b6dbd7.jpeg'
      },
      {
        id: 3,
        name: 'Ручной блендер VITEK VT 8530',
        price: '9 990 ₸',
        link: 'https://www.mechta.kz/product/ruchnoy-blender-vitek-vt-8530/',
        img: 'https://mechta.kz/export/1cbitrix/import_files/91/91a79490-2241-11ea-a22d-005056b6dbd7.jpeg'
      },
      {
        id: 4,
        name: 'Ручной блендер MOULINEX DD 653832',
        price: '34 990 ₸',
        link: 'https://www.mechta.kz/product/ruchnoy-blender-moulinex-dd-653832/',
        img: 'https://mechta.kz/export/1cbitrix/import_files/ea/ea2abb72-a731-11e6-8d58-2c768a5d3551.jpeg'
      }
    ]
  },
  {
    id: 14,
    category: 'Гладильная система',
    items: [
      {
        id: 1,
        name: 'Гладильная система BRAUN IS 7156 BK',
        price: '209 990 ₸',
        link: 'https://www.mechta.kz/product/gladilnaya-sistema-braun-is-7156-bk/',
        img: 'https://mechta.kz/export/1cbitrix/import_files/00/00ea7648-74aa-11ea-a22d-005056b6dbd7.jpeg'
      },
      {
        id: 2,
        name: 'Гладильная система BRAUN IS 7144 BK',
        price: '179 990 ₸',
        link: 'https://www.mechta.kz/product/gladilnaya-sistema-braun-is-7144-bk/',
        img: 'https://mechta.kz/export/1cbitrix/import_files/5e/5e26d484-f83c-11e8-a21b-005056b6dbd7.jpeg'
      },
      {
        id: 3,
        name: 'Гладильная система TEFAL GV 7830E0',
        price: '139 990 ₸',
        link: 'https://www.mechta.kz/product/gladilnaya-sistema-tefal-gv-7830e0/',
        img: 'https://mechta.kz/export/1cbitrix/import_files/50/50aba6d8-3ba6-11e8-a20f-005056b6dbd7.jpeg'
      },
      {
        id: 4,
        name: 'Гладильная система PHILIPS GC 7920/20',
        price: '89 990 ₸',
        link: 'https://www.mechta.kz/product/gladilnaya-sistema-philips-gc-792020/',
        img: 'https://mechta.kz/export/1cbitrix/import_files/72/72d9c083-64f3-11e9-a220-005056b6dbd7.jpeg'
      }
    ]
  },
]
const links = [
  'https://www.mechta.kz/section/smartfony/',
  'https://www.mechta.kz/section/smart-chasy/',
  'https://www.mechta.kz/section/noutbuki/',
  'https://www.mechta.kz/section/naushniki/',
  'https://www.mechta.kz/section/pylesosy/',
  'https://www.mechta.kz/section/klimat-tehnika/',
  'https://www.mechta.kz/section/posudomoechnye-mashiny/',
  'https://www.mechta.kz/section/elektrogrili/',
  'https://www.mechta.kz/section/feny/',
  'https://www.mechta.kz/section/staylery/',
  'https://www.mechta.kz/section/vypryamiteli-volos/',
  'https://www.mechta.kz/section/kuhonnye-kombayny/',
  'https://www.mechta.kz/section/ruchnye-blendery/',
  'https://www.mechta.kz/section/utyugi-s-parogeneratorom/'
]
const dynamic_items = document.getElementById('dynamic-items')
const click_event = document.getElementsByClassName('click-event')
const btn = document.getElementById('header6-3d')

function addClickHandler(link, i){
  link.addEventListener('click', function(e){
    list(arr[i], i)
  }, false)
}

var list = function(obj, ii) {
  dynamic_items.innerHTML = ''
  btn.innerHTML = ''
  for (let o in obj.items) {
    dynamic_items.innerHTML += `
    <a href="${obj.items[o].link}" class="item features-image сol-12 col-md-6 col-lg-${obj.items.length < 4 ? 4 : 3}">
      <div class="item-wrapper">
        <div class="item-img">
          <img
            src="${obj.items[o].img}"
          />
        </div>
        <div class="item-content">
          <h6 class="item-subtitle mbr-fonts-style mt-1 display-7">
            <strong>${obj.items[o].name}</strong>
          </h6>
          <p class="mbr-text mbr-fonts-style mt-3 display-2">
            <strong>${obj.items[o].price}</strong><br />
          </p>
        </div>
      </div>
    </a>
    `
  }
  btn.innerHTML = `
  <div class="align-center container">
    <div class="row justify-content-center">
      <div class="col-12 col-lg-10">
        <div class="mbr-section-btn mt-3">
          <a class="btn btn-primary display-4" href="${links[ii]}"
            >Все товары</a
          >
        </div>
      </div>
    </div>
  </div>
`
}
list(arr[0], 0)

for (var i = 0, len = click_event.length; i < len; i++)
  addClickHandler(click_event[i], i)
