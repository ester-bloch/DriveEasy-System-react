export const InitialState = {
    userTypes: [
        { key: 0, description: "manager", isManager: true },
        { key: 1, description: "user", isManager: false }
    ],
    users: [
        { key: 0, name: "Esty", id: 327789616, phoneNumber: "0583212846", password: 123456, creditCard: 4580160117194037, passDay: "4575", cvv: "555", userType: 0 }
        , { key: 13, name: "Esty2", id: 327789616, phoneNumber: "0583212846", password: 123456, creditCard: 4580160117194037, passDay: "4575", cvv: "555", userType: 1 }
        , { key: 1, name: "Reuven", id: 111, phoneNumber: "0583212846", password: 11, creditCard: 4580160117194037, passDay: "4575", cvv: "555", userType: 0 }
        , { key: 2, name: "Shimon", id: 222, phoneNumber: "0583212846", password: 22, creditCard: 4580160117194037, passDay: "4575", cvv: "555", userType: 1 }
        , { key: 4, name: "Levi", id: 333, phoneNumber: "0583212846", password: 33, creditCard: 4580160117194037, passDay: "4575", cvv: "555", userType: 1 }
        , { key: 3, name: "Yehuda", id: 444, phoneNumber: "0583212846", password: 44, creditCard: 4580160117194037, passDay: "4575", cvv: "555", userType: 1 }
        , { key: 5, name: "Yisaschar", id: 555, phoneNumber: "0583212846", password: 55, creditCard: 4580160117194037, passDay: "4575", cvv: "555", userType: 1 }
        , { key: 6, name: "Zvulun", id: 666, phoneNumber: "0583212846", password: 66, creditCard: 4580160117194037, passDay: "4575", cvv: "555", userType: 1 }
        , { key: 7, name: "Dan", id: 777, phoneNumber: "0583212846", password: 77, creditCard: 4580160117194037, passDay: "4575", cvv: "555", userType: 1 }
        , { key: 9, name: "Asher", id: 888, phoneNumber: "0583212846", password: 88, creditCard: 4580160117194037, passDay: "4575", cvv: "555", userType: 1 }
        , { key: 8, name: "Gad", id: 999, phoneNumber: "0583212846", password: 99, creditCard: 4580160117194037, passDay: "4575", cvv: "555", userType: 1 }
        , { key: 10, name: "Naftaly", id: 111111, phoneNumber: "0583212846", password: 1111, creditCard: 4580160117194037, passDay: "4575", cvv: "555", userType: 1 }
        , { key: 11, name: "Yosef", id: 121212, phoneNumber: "0583212846", password: 1212, creditCard: 4580160117194037, passDay: "4575", cvv: "555", userType: 1 }
        , { key: 12, name: "Binyamin", id: 131313, phoneNumber: "0583212846", password: 1313, creditCard: 4580160117194037, passDay: "4575", cvv: "555", userType: 1 }
    ],
    currentCar:{ "passNum": 0, "carModelId": 2, "numPlaces": 0, "pic": "string", "year": 0, "autoGir": true, "engineTypeId": 2, "pricePerHour": 0, "gasPerHour": 0, "leftGas": 0, "city": "string", "street": "string", "empty": true },
    CarTypes: [
        { key: 1, description: "private" }
        , { key: 2, description: "station" }
        , { key: 3, description: "family" }
        , { key: 4, description: "bimba" }
        , { key: 5, description: "manager" }
        , { key: 6, description: "jip" }
        , { key: 7, description: "jipon" }
        , { key: 8, description: "business" }
        , { key: 9, description: "minibus" }
        , { key: 10, description: "bus" }
    ],
    //tesla, toyota, mercedes, mitzuvishi, frary, limuzine, man,
    carModels: [
        { key: 1, company: "toyota", model: 2020, carType: 1 }, { key: 2, company: "toyota", model: 2021, carType: 1 }, { key: 3, company: "toyota", model: 2023, carType: 1 },
        { key: 4, company: "toyota", model: 2021, carType: 2 }, { key: 5, company: "toyota", model: 1998, carType: 2 }, { key: 6, company: "toyota", model: 2021, carType: 2 },
        { key: 7, company: "joker", model: "juk", carType: 4 }, { key: 8, company: "Isratoys", model: "tustus", carType: 4 }, { key: 9, company: "Isratoys", model: "juk", carType: 4 },
        { key: 10, company: "tesla", model: 2020, carType: 3 }, { key: 11, company: "mercedes", model: 2022, carType: 3 }, { key: 12, company: "tesla", model: 1999, carType: 3 },
        { key: 13, company: "tesla", model: 2024, carType: 5 }, { key: 14, company: "frary", model: 2024, carType: 5 }, { key: 15, company: "frary", model: 2020, carType: 5 }, { key: 16, company: "tesla", model: 2022, carType: 5 },
        { key: 17, company: "tesla", model: 2008, carType: 6 }, { key: 18, company: "mitzuvishi", model: 1980, carType: 1 },
        { key: 19, company: "frary", model: 2005, carType: 7 },
        { key: 20, company: "frary", model: 2005, carType: 8 }, { key: 21, company: "limuzine", model: 2005, carType: 8 }, { key: 22, company: "frary", model: 2025, carType: 8 }, { key: 23, company: "frary", model: 2021, carType: 8 },
        { key: 24, company: "man", model: 2005, carType: 9 }, { key: 25, company: "man", model: 2020, carType: 9 },
        { key: 26, company: "man", model: 2020, carType: 10 },
        { key: 28, company: "man", model: 2023, carType: 10 }, { key: 27, company: "mercedes", model: 2022, carType: 10 },
        { key: 29, company: "mercedes", model: 2022, carType: 10 },
        { key: 33, company: "mercedes", model: 2022, carType: 10 },
        { key: 34, company: "mercedes", model: 2022, carType: 10 },
        { key: 27, company: "mercedes", model: 2022, carType: 10 },
        	
    ],
    engineTypes: [
        { key: 1, description: "gas", price: 9.7 },
        { key: 2, description: "soler", price: 8 },
        { key: 3, description: "electric", price: 7.3 },
        { key: 4, description: "hybrid", price: 13.9 },
    ],
    exsample: [
        { "passNum": 0, "carModelId": 2, "numPlaces": 0, "pic": "string", "year": 0, "autoGir": true, "engineTypeId": 2, "pricePerHour": 0, "gasPerHour": 0, "leftGas": 0, "city": "string", "street": "string", "empty": true }],
    forSql: [
        { "carModelId": 1, "numPlaces": 5, "pic": "string", "year": 2025, "autoGir": true, "engineTypeId": 1, "pricePerHour": 20, "gasPerHour": 12, "leftGas": 13, "city": "Yerushlayim", "street": "Bar Ilan", "empty": false },
        { "carModelId": 2, "numPlaces": 5, "pic": "pic_name", "year": 2025, "autoGir": true, "engineTypeId": 1, "pricePerHour": 20, "gasPerHour": 12, "leftGas": 13, "city": "Yerushlayim", "street": "Bar Ilan", "empty": true },
        { "carModelId": 4, "numPlaces": 5, "pic": "pic_name", "year": 2025, "autoGir": true, "engineTypeId": 2, "pricePerHour": 20, "gasPerHour": 12, "leftGas": 13, "city": "Yerushlayim", "street": "Bar Ilan", "empty": false },
        { "carModelId": 5, "numPlaces": 5, "pic": "pic_name", "year": 2025, "autoGir": false, "engineTypeId": 1, "pricePerHour": 20, "gasPerHour": 12, "leftGas": 13, "city": "Yerushlayim", "street": "Bar Ilan", "empty": true },
        { "carModelId": 6, "numPlaces": 5, "pic": "pic_name", "year": 2025, "autoGir": true, "engineTypeId": 3, "pricePerHour": 20, "gasPerHour": 12, "leftGas": 13, "city": "Yerushlayim", "street": "Bar Ilan", "empty": true },
        { "carModelId": 7, "numPlaces": 1, "pic": "pic_name", "year": 2025, "autoGir": true, "engineTypeId": 1, "pricePerHour": 20, "gasPerHour": 12, "leftGas": 13, "city": "Yerushlayim", "street": "Bar Ilan", "empty": true },
        { "carModelId": 8, "numPlaces": 1, "pic": "pic_name", "year": 2025, "autoGir": true, "engineTypeId": 3, "pricePerHour": 2, "gasPerHour": 0, "leftGas": 13, "city": "Yerushlayim", "street": "Bar Ilan", "empty": false },
        { "carModelId": 9, "numPlaces": 1, "pic": "pic_name", "year": 2025, "autoGir": false, "engineTypeId": 2, "pricePerHour": 2, "gasPerHour": 0, "leftGas": 13, "city": "Yerushlayim", "street": "Bar Ilan", "empty": true },
        { "carModelId": 10, "numPlaces": 7, "pic": "pic_name", "year": 2025, "autoGir": true, "engineTypeId": 1, "pricePerHour": 2, "gasPerHour": 0, "leftGas": 13, "city": "Yerushlayim", "street": "Bar Ilan", "empty": true },
        { "carModelId": 11, "numPlaces": 7, "pic": "pic_name", "year": 2025, "autoGir": false, "engineTypeId": 1, "pricePerHour": 20, "gasPerHour": 12, "leftGas": 13, "city": "Yerushlayim", "street": "Bar Ilan", "empty": true },
        { "carModelId": 12, "numPlaces": 9, "pic": "pic_name", "year": 2025, "autoGir": true, "engineTypeId": 1, "pricePerHour": 20, "gasPerHour": 12, "leftGas": 13, "city": "Yerushlayim", "street": "Bar Ilan", "empty": false },
        { "carModelId": 13, "numPlaces": 5, "pic": "pic_name", "year": 2025, "autoGir": true, "engineTypeId": 3, "pricePerHour": 20, "gasPerHour": 12, "leftGas": 13, "city": "Yerushlayim", "street": "Bar Ilan", "empty": true },
        { "carModelId": 14, "numPlaces": 7, "pic": "pic_name", "year": 2025, "autoGir": false, "engineTypeId": 1, "pricePerHour": 20, "gasPerHour": 12, "leftGas": 13, "city": "Yerushlayim", "street": "Bar Ilan", "empty": true },
        { "carModelId": 15, "numPlaces": 9, "pic": "pic_name", "year": 2025, "autoGir": true, "engineTypeId": 3, "pricePerHour": 20, "gasPerHour": 12, "leftGas": 13, "city": "Yerushlayim", "street": "Bar Ilan", "empty": true },
        { "carModelId": 16, "numPlaces": 5, "pic": "pic_name", "year": 2025, "autoGir": false, "engineTypeId": 1, "pricePerHour": 20, "gasPerHour": 12, "leftGas": 13, "city": "Yerushlayim", "street": "Bar Ilan", "empty": false },
        { "carModelId": 17, "numPlaces": 5, "pic": "pic_name", "year": 2025, "autoGir": false, "engineTypeId": 2, "pricePerHour": 20, "gasPerHour": 12, "leftGas": 13, "city": "Yerushlayim", "street": "Bar Ilan", "empty": false },
        { "carModelId": 18, "numPlaces": 1, "pic": "pic_name", "year": 2025, "autoGir": true, "engineTypeId": 1, "pricePerHour": 20, "gasPerHour": 12, "leftGas": 13, "city": "Yerushlayim", "street": "Bar Ilan", "empty": true },
        { "carModelId": 19, "numPlaces": 2, "pic": "pic_name", "year": 2025, "autoGir": false, "engineTypeId": 3, "pricePerHour": 20, "gasPerHour": 12, "leftGas": 13, "city": "Yerushlayim", "street": "Bar Ilan", "empty": true },
        { "carModelId": 20, "numPlaces": 5, "pic": "pic_name", "year": 2025, "autoGir": false, "engineTypeId": 3, "pricePerHour": 20, "gasPerHour": 12, "leftGas": 13, "city": "Yerushlayim", "street": "Bar Ilan", "empty": false },
        { "carModelId": 21, "numPlaces": 10, "pic": "pic_name", "year": 2025, "autoGir": true, "engineTypeId": 1, "pricePerHour": 20, "gasPerHour": 12, "leftGas": 13, "city": "Yerushlayim", "street": "Bar Ilan", "empty": false },
        { "carModelId": 22, "numPlaces": 12, "pic": "pic_name", "year": 2025, "autoGir": false, "engineTypeId": 1, "pricePerHour": 20, "gasPerHour": 12, "leftGas": 13, "city": "Yerushlayim", "street": "Bar Ilan", "empty": true },
        { "carModelId": 23, "numPlaces": 7, "pic": "pic_name", "year": 2025, "autoGir": true, "engineTypeId": 1, "pricePerHour": 20, "gasPerHour": 12, "leftGas": 13, "city": "Yerushlayim", "street": "Bar Ilan", "empty": true },
        { "carModelId": 24, "numPlaces": 30, "pic": "pic_name", "year": 2025, "autoGir": false, "engineTypeId": 3, "pricePerHour": 100, "gasPerHour": 50, "leftGas": 13, "city": "Yerushlayim", "street": "Bar Ilan", "empty": true },
        { "carModelId": 25, "numPlaces": 30, "pic": "pic_name", "year": 2025, "autoGir": true, "engineTypeId": 1, "pricePerHour": 150, "gasPerHour": 60, "leftGas": 13, "city": "Yerushlayim", "street": "Bar Ilan", "empty": false },
        { "carModelId": 27, "numPlaces": 50, "pic": "pic_name", "year": 2025, "autoGir": false, "engineTypeId": 4, "pricePerHour": 250, "gasPerHour": 70, "leftGas": 13, "city": "Yerushlayim", "street": "Bar Ilan", "empty": true },
        { "carModelId": 1, "numPlaces": 60, "pic": "pic_name", "year": 2025, "autoGir": false, "engineTypeId": 3, "pricePerHour": 200, "gasPerHour": 90, "leftGas": 13, "city": "Yerushlayim", "street": "Bar Ilan", "empty": true },
        { "carModelId": 1, "numPlaces": 60, "pic": "pic_name", "year": 2025, "autoGir": true, "engineTypeId": 4, "pricePerHour": 200, "gasPerHour": 80, "leftGas": 13, "city": "Yerushlayim", "street": "Bar Ilan", "empty": true },
        { "carModelId": 1, "numPlaces": 5, "pic": "pic_name", "year": 2005, "autoGir": true, "engineTypeId": 3, "pricePerHour": 20, "gasPerHour": 12, "leftGas": 13, "city": "Yerushlayim", "street": "Bar Ilan", "empty": true },
        { "carModelId": 2, "numPlaces": 5, "pic": "pic_name", "year": 2025, "autoGir": true, "engineTypeId": 1, "pricePerHour": 20, "gasPerHour": 12, "leftGas": 13, "city": "Yerushlayim", "street": "Bar Ilan", "empty": true },
        { "carModelId": 3, "numPlaces": 5, "pic": "pic_name", "year": 2025, "autoGir": false, "engineTypeId": 4, "pricePerHour": 20, "gasPerHour": 12, "leftGas": 13, "city": "Yerushlayim", "street": "Bar Ilan", "empty": true },
        { "carModelId": 4, "numPlaces": 5, "pic": "pic_name", "year": 2025, "autoGir": true, "engineTypeId": 2, "pricePerHour": 20, "gasPerHour": 12, "leftGas": 13, "city": "Yerushlayim", "street": "Bar Ilan", "empty": true },
        { "carModelId": 5, "numPlaces": 5, "pic": "pic_name", "year": 2005, "autoGir": false, "engineTypeId": 4, "pricePerHour": 20, "gasPerHour": 12, "leftGas": 13, "city": "Yerushlayim", "street": "Bar Ilan", "empty": true },
        { "carModelId": 6, "numPlaces": 5, "pic": "pic_name", "year": 2000, "autoGir": true, "engineTypeId": 1, "pricePerHour": 20, "gasPerHour": 12, "leftGas": 13, "city": "Yerushlayim", "street": "Bar Ilan", "empty": true },
        { "carModelId": 7, "numPlaces": 1, "pic": "pic_name", "year": 2025, "autoGir": true, "engineTypeId": 2, "pricePerHour": 20, "gasPerHour": 12, "leftGas": 13, "city": "Yerushlayim", "street": "Bar Ilan", "empty": true },
        { "carModelId": 8, "numPlaces": 1, "pic": "pic_name", "year": 2025, "autoGir": true, "engineTypeId": 4, "pricePerHour": 2, "gasPerHour": 0, "leftGas": 13, "city": "Yerushlayim", "street": "Bar Ilan", "empty": false },
        { "carModelId": 9, "numPlaces": 1, "pic": "pic_name", "year": 2025, "autoGir": false, "engineTypeId": 3, "pricePerHour": 2, "gasPerHour": 0, "leftGas": 13, "city": "Yerushlayim", "street": "Bar Ilan", "empty": true },
        { "carModelId": 10, "numPlaces": 7, "pic": "pic_name", "year": 2000, "autoGir": true, "engineTypeId": 4, "pricePerHour": 2, "gasPerHour": 0, "leftGas": 13, "city": "Yerushlayim", "street": "Bar Ilan", "empty": true },
        { "carModelId": 11, "numPlaces": 7, "pic": "pic_name", "year": 2025, "autoGir": false, "engineTypeId": 1, "pricePerHour": 20, "gasPerHour": 12, "leftGas": 13, "city": "Yerushlayim", "street": "Bar Ilan", "empty": true },
        { "carModelId": 12, "numPlaces": 9, "pic": "pic_name", "year": 2025, "autoGir": true, "engineTypeId": 1, "pricePerHour": 20, "gasPerHour": 12, "leftGas": 13, "city": "Yerushlayim", "street": "Bar Ilan", "empty": false },
        { "carModelId": 13, "numPlaces": 5, "pic": "pic_name", "year": 2025, "autoGir": true, "engineTypeId": 4, "pricePerHour": 20, "gasPerHour": 12, "leftGas": 13, "city": "Yerushlayim", "street": "Bar Ilan", "empty": true },
        { "carModelId": 14, "numPlaces": 7, "pic": "pic_name", "year": 2005, "autoGir": false, "engineTypeId": 1, "pricePerHour": 20, "gasPerHour": 12, "leftGas": 13, "city": "Yerushlayim", "street": "Bar Ilan", "empty": true },
        { "carModelId": 15, "numPlaces": 9, "pic": "pic_name", "year": 2025, "autoGir": true, "engineTypeId": 3, "pricePerHour": 20, "gasPerHour": 12, "leftGas": 13, "city": "Yerushlayim", "street": "Bar Ilan", "empty": true },
        { "carModelId": 16, "numPlaces": 5, "pic": "pic_name", "year": 2000, "autoGir": false, "engineTypeId": 1, "pricePerHour": 20, "gasPerHour": 12, "leftGas": 13, "city": "Yerushlayim", "street": "Bar Ilan", "empty": false },
        { "carModelId": 17, "numPlaces": 5, "pic": "pic_name", "year": 2025, "autoGir": false, "engineTypeId": 3, "ricePerHour": 20, "gasPerHour": 12, "leftGas": 13, "city": "Yerushlayim", "street": "Bar Ilan", "empty": false },
        { "carModelId": 18, "numPlaces": 1, "pic": "pic_name", "year": 2000, "autoGir": true, "engineTypeId": 1, "pricePerHour": 20, "gasPerHour": 12, "leftGas": 13, "city": "Yerushlayim", "street": "Bar Ilan", "empty": true },
        { "carModelId": 19, "numPlaces": 2, "pic": "pic_name", "year": 2025, "autoGir": false, "engineTypeId": 1, "pricePerHour": 20, "gasPerHour": 12, "leftGas": 13, "city": "Yerushlayim", "street": "Bar Ilan", "empty": true },
        { "carModelId": 20, "numPlaces": 5, "pic": "pic_name", "year": 2005, "autoGir": false, "engineTypeId": 3, "pricePerHour": 20, "gasPerHour": 12, "leftGas": 13, "city": "Yerushlayim", "street": "Bar Ilan", "empty": false },
        { "carModelId": 21, "numPlaces": 10, "pic": "pic_name", "year": 2000, "autoGir": true, "engineTypeId": 1, "pricePerHour": 20, "gasPerHour": 12, "leftGas": 13, "city": "Yerushlayim", "street": "Bar Ilan", "empty": false },
        { "carModelId": 22, "numPlaces": 12, "pic": "pic_name", "year": 2025, "autoGir": false, "engineTypeId": 1, "pricePerHour": 20, "gasPerHour": 12, "leftGas": 13, "city": "Yerushlayim", "street": "Bar Ilan", "empty": true },
        { "carModelId": 23, "numPlaces": 7, "pic": "pic_name", "year": 2025, "autoGir": true, "engineTypeId": 3, "pricePerHour": 20, "gasPerHour": 12, "leftGas": 13, "city": "Yerushlayim", "street": "Bar Ilan", "empty": true },
        { "carModelId": 24, "numPlaces": 30, "pic": "pic_name", "year": 2025, "autoGir": false, "engineTypeId": 4, "pricePerHour": 100, "gasPerHour": 50, "leftGas": 13, "city": "Yerushlayim", "street": "Bar Ilan", "empty": true },
        { "carModelId": 25, "numPlaces": 30, "pic": "pic_name", "year": 2005, "autoGir": true, "engineTypeId": 1, "pricePerHour": 150, "gasPerHour": 60, "leftGas": 13, "city": "Yerushlayim", "street": "Bar Ilan", "empty": false },
        { "carModelId": 3, "numPlaces": 5, "pic": "pic_name", "year": 2005, "autoGir": false, "engineTypeId": 4, "pricePerHour": 20, "gasPerHour": 12, "leftGas": 13, "city": "Yerushlayim", "street": "Bar Ilan", "empty": true }

    ],
    carsJustToSave: [
        { key: 1, passNum: 1111111, carModel: 1, numPlaces: 5, pic: "", year: 2025, autoGir: true, engineType: 1, pricePerHour: 20, gasPerHour: 12, LeftGas: 13, city: "Yerushlayim", street: "Bar Ilan", empty: false },
        { key: 2, passNum: 2222222, carModel: 2, numPlaces: 5, pic: null, year: 2025, autoGir: true, engineType: 1, pricePerHour: 20, gasPerHour: 12, LeftGas: 13, city: "Yerushlayim", street: "Bar Ilan", empty: true },
        { key: 3, passNum: 4444444, carModel: 4, numPlaces: 5, pic: null, year: 2025, autoGir: true, engineType: 2, pricePerHour: 20, gasPerHour: 12, LeftGas: 13, city: "Yerushlayim", street: "Bar Ilan", empty: false },
        { key: 4, passNum: 5555555, carModel: 5, numPlaces: 5, pic: null, year: 2025, autoGir: false, engineType: 1, pricePerHour: 20, gasPerHour: 12, LeftGas: 13, city: "Yerushlayim", street: "Bar Ilan", empty: true },
        { key: 5, passNum: 6666666, carModel: 6, numPlaces: 5, pic: null, year: 2025, autoGir: true, engineType: 3, pricePerHour: 20, gasPerHour: 12, LeftGas: 13, city: "Yerushlayim", street: "Bar Ilan", empty: true },
        { key: 6, passNum: 7777777, carModel: 7, numPlaces: 1, pic: null, year: 2025, autoGir: true, engineType: 1, pricePerHour: 20, gasPerHour: 12, LeftGas: 13, city: "Yerushlayim", street: "Bar Ilan", empty: true },
        { key: 7, passNum: 8888888, carModel: 8, numPlaces: 1, pic: null, year: 2025, autoGir: true, engineType: 3, pricePerHour: 2, gasPerHour: 0, LeftGas: 13, city: "Yerushlayim", street: "Bar Ilan", empty: false },
        { key: 8, passNum: 9999999, carModel: 9, numPlaces: 1, pic: null, year: 2025, autoGir: false, engineType: 2, pricePerHour: 2, gasPerHour: 0, LeftGas: 13, city: "Yerushlayim", street: "Bar Ilan", empty: true },
        { key: 9, passNum: 1010101010, carModel: 10, numPlaces: 7, pic: null, year: 2025, autoGir: true, engineType: 1, pricePerHour: 2, gasPerHour: 0, LeftGas: 13, city: "Yerushlayim", street: "Bar Ilan", empty: true },
        { key: 10, passNum: 1111011010, carModel: 11, numPlaces: 7, pic: null, year: 2025, autoGir: false, engineType: 1, pricePerHour: 20, gasPerHour: 12, LeftGas: 13, city: "Yerushlayim", street: "Bar Ilan", empty: true },
        { key: 11, passNum: 121212212, carModel: 12, numPlaces: 9, pic: null, year: 2025, autoGir: true, engineType: 1, pricePerHour: 20, gasPerHour: 12, LeftGas: 13, city: "Yerushlayim", street: "Bar Ilan", empty: false },
        { key: 12, passNum: 1313131313, carModel: 13, numPlaces: 5, pic: null, year: 2025, autoGir: true, engineType: 3, pricePerHour: 20, gasPerHour: 12, LeftGas: 13, city: "Yerushlayim", street: "Bar Ilan", empty: true },
        { key: 13, passNum: 141414144, carModel: 14, numPlaces: 7, pic: null, year: 2025, autoGir: false, engineType: 1, pricePerHour: 20, gasPerHour: 12, LeftGas: 13, city: "Yerushlayim", street: "Bar Ilan", empty: true },
        { key: 14, passNum: 1515151, carModel: 15, numPlaces: 9, pic: null, year: 2025, autoGir: true, engineType: 3, pricePerHour: 20, gasPerHour: 12, LeftGas: 13, city: "Yerushlayim", street: "Bar Ilan", empty: true },
        { key: 15, passNum: 161661661, carModel: 16, numPlaces: 5, pic: null, year: 2025, autoGir: false, engineType: 1, pricePerHour: 20, gasPerHour: 12, LeftGas: 13, city: "Yerushlayim", street: "Bar Ilan", empty: false },
        { key: 16, passNum: 17171717, carModel: 17, numPlaces: 5, pic: null, year: 2025, autoGir: false, engineType: 2, pricePerHour: 20, gasPerHour: 12, LeftGas: 13, city: "Yerushlayim", street: "Bar Ilan", empty: false },
        { key: 17, passNum: 81818188, carModel: 18, numPlaces: 1, pic: null, year: 2025, autoGir: true, engineType: 1, pricePerHour: 20, gasPerHour: 12, LeftGas: 13, city: "Yerushlayim", street: "Bar Ilan", empty: true },
        { key: 18, passNum: 19191991, carModel: 19, numPlaces: 2, pic: null, year: 2025, autoGir: false, engineType: 3, pricePerHour: 20, gasPerHour: 12, LeftGas: 13, city: "Yerushlayim", street: "Bar Ilan", empty: true },
        { key: 19, passNum: 20202020, carModel: 20, numPlaces: 5, pic: null, year: 2025, autoGir: false, engineType: 3, pricePerHour: 20, gasPerHour: 12, LeftGas: 13, city: "Yerushlayim", street: "Bar Ilan", empty: false },
        { key: 20, passNum: 21212121, carModel: 21, numPlaces: 10, pic: null, year: 2025, autoGir: true, engineType: 1, pricePerHour: 20, gasPerHour: 12, LeftGas: 13, city: "Yerushlayim", street: "Bar Ilan", empty: false },
        { key: 21, passNum: 2323232323, carModel: 22, numPlaces: 12, pic: null, year: 2025, autoGir: false, engineType: 1, pricePerHour: 20, gasPerHour: 12, LeftGas: 13, city: "Yerushlayim", street: "Bar Ilan", empty: true },
        { key: 22, passNum: 2424242424, carModel: 23, numPlaces: 7, pic: null, year: 2025, autoGir: true, engineType: 1, pricePerHour: 20, gasPerHour: 12, LeftGas: 13, city: "Yerushlayim", street: "Bar Ilan", empty: true },
        { key: 23, passNum: 2525252525, carModel: 24, numPlaces: 30, pic: null, year: 2025, autoGir: false, engineType: 3, pricePerHour: 100, gasPerHour: 50, LeftGas: 13, city: "Yerushlayim", street: "Bar Ilan", empty: true },
        { key: 24, passNum: 262622626, carModel: 25, numPlaces: 30, pic: null, year: 2025, autoGir: true, engineType: 1, pricePerHour: 150, gasPerHour: 60, LeftGas: 13, city: "Yerushlayim", street: "Bar Ilan", empty: false },
        { key: 26, passNum: 272272727, carModel: 27, numPlaces: 50, pic: null, year: 2025, autoGir: false, engineType: 4, pricePerHour: 250, gasPerHour: 70, LeftGas: 13, city: "Yerushlayim", street: "Bar Ilan", empty: true },
        { key: 27, passNum: 282828228, carModel: 1, numPlaces: 60, pic: null, year: 2025, autoGir: false, engineType: 3, pricePerHour: 200, gasPerHour: 90, LeftGas: 13, city: "Yerushlayim", street: "Bar Ilan", empty: true },
        { key: 25, passNum: 29229292992, carModel: 1, numPlaces: 60, pic: null, year: 2025, autoGir: true, engineType: 4, pricePerHour: 200, gasPerHour: 80, LeftGas: 13, city: "Yerushlayim", street: "Bar Ilan", empty: true },

        { key: 29, passNum: 1111111, carModel: 1, numPlaces: 5, pic: null, year: 2005, autoGir: true, engineType: 3, pricePerHour: 20, gasPerHour: 12, LeftGas: 13, city: "Yerushlayim", street: "Bar Ilan", empty: true },
        { key: 30, passNum: 2222222, carModel: 2, numPlaces: 5, pic: null, year: 2025, autoGir: true, engineType: 1, pricePerHour: 20, gasPerHour: 12, LeftGas: 13, city: "Yerushlayim", street: "Bar Ilan", empty: true },
        { key: 31, passNum: 3333333, carModel: 3, numPlaces: 5, pic: null, year: 2025, autoGir: false, engineType: 4, pricePerHour: 20, gasPerHour: 12, LeftGas: 13, city: "Yerushlayim", street: "Bar Ilan", empty: true },
        { key: 32, passNum: 4444444, carModel: 4, numPlaces: 5, pic: null, year: 2025, autoGir: true, engineType: 2, pricePerHour: 20, gasPerHour: 12, LeftGas: 13, city: "Yerushlayim", street: "Bar Ilan", empty: true },
        { key: 34, passNum: 5555555, carModel: 5, numPlaces: 5, pic: null, year: 2005, autoGir: false, engineType: 4, pricePerHour: 20, gasPerHour: 12, LeftGas: 13, city: "Yerushlayim", street: "Bar Ilan", empty: true },
        { key: 33, passNum: 6666666, carModel: 6, numPlaces: 5, pic: null, year: 2000, autoGir: true, engineType: 1, pricePerHour: 20, gasPerHour: 12, LeftGas: 13, city: "Yerushlayim", street: "Bar Ilan", empty: true },
        { key: 35, passNum: 7777777, carModel: 7, numPlaces: 1, pic: null, year: 2025, autoGir: true, engineType: 2, pricePerHour: 20, gasPerHour: 12, LeftGas: 13, city: "Yerushlayim", street: "Bar Ilan", empty: true },
        { key: 36, passNum: 8888888, carModel: 8, numPlaces: 1, pic: null, year: 2025, autoGir: true, engineType: 4, pricePerHour: 2, gasPerHour: 0, LeftGas: 13, city: "Yerushlayim", street: "Bar Ilan", empty: false },
        { key: 37, passNum: 9999999, carModel: 9, numPlaces: 1, pic: null, year: 2025, autoGir: false, engineType: 3, pricePerHour: 2, gasPerHour: 0, LeftGas: 13, city: "Yerushlayim", street: "Bar Ilan", empty: true },
        { key: 38, passNum: 1010101010, carModel: 10, numPlaces: 7, pic: null, year: 2000, autoGir: true, engineType: 4, pricePerHour: 2, gasPerHour: 0, LeftGas: 13, city: "Yerushlayim", street: "Bar Ilan", empty: true },
        { key: 39, passNum: 1111011010, carModel: 11, numPlaces: 7, pic: null, year: 2025, autoGir: false, engineType: 1, pricePerHour: 20, gasPerHour: 12, LeftGas: 13, city: "Yerushlayim", street: "Bar Ilan", empty: true },
        { key: 40, passNum: 121212212, carModel: 12, numPlaces: 9, pic: null, year: 2025, autoGir: true, engineType: 1, pricePerHour: 20, gasPerHour: 12, LeftGas: 13, city: "Yerushlayim", street: "Bar Ilan", empty: false },
        { key: 41, passNum: 1313131313, carModel: 13, numPlaces: 5, pic: null, year: 2025, autoGir: true, engineType: 4, pricePerHour: 20, gasPerHour: 12, LeftGas: 13, city: "Yerushlayim", street: "Bar Ilan", empty: true },
        { key: 42, passNum: 141414144, carModel: 14, numPlaces: 7, pic: null, year: 2005, autoGir: false, engineType: 1, pricePerHour: 20, gasPerHour: 12, LeftGas: 13, city: "Yerushlayim", street: "Bar Ilan", empty: true },
        { key: 43, passNum: 1515151, carModel: 15, numPlaces: 9, pic: null, year: 2025, autoGir: true, engineType: 3, pricePerHour: 20, gasPerHour: 12, LeftGas: 13, city: "Yerushlayim", street: "Bar Ilan", empty: true },
        { key: 44, passNum: 161661661, carModel: 16, numPlaces: 5, pic: null, year: 2000, autoGir: false, engineType: 1, pricePerHour: 20, gasPerHour: 12, LeftGas: 13, city: "Yerushlayim", street: "Bar Ilan", empty: false },
        { key: 45, passNum: 17171717, carModel: 17, numPlaces: 5, pic: null, year: 2025, autoGir: false, engineType: 3, ricePerHour: 20, gasPerHour: 12, LeftGas: 13, city: "Yerushlayim", street: "Bar Ilan", empty: false },
        { key: 46, passNum: 81818188, carModel: 18, numPlaces: 1, pic: null, year: 2000, autoGir: true, engineType: 1, pricePerHour: 20, gasPerHour: 12, LeftGas: 13, city: "Yerushlayim", street: "Bar Ilan", empty: true },
        { key: 47, passNum: 19191991, carModel: 19, numPlaces: 2, pic: null, year: 2025, autoGir: false, engineType: 1, pricePerHour: 20, gasPerHour: 12, LeftGas: 13, city: "Yerushlayim", street: "Bar Ilan", empty: true },
        { key: 48, passNum: 20202020, carModel: 20, numPlaces: 5, pic: null, year: 2005, autoGir: false, engineType: 3, pricePerHour: 20, gasPerHour: 12, LeftGas: 13, city: "Yerushlayim", street: "Bar Ilan", empty: false },
        { key: 49, passNum: 21212121, carModel: 21, numPlaces: 10, pic: null, year: 2000, autoGir: true, engineType: 1, pricePerHour: 20, gasPerHour: 12, LeftGas: 13, city: "Yerushlayim", street: "Bar Ilan", empty: false },
        { key: 50, passNum: 2323232323, carModel: 22, numPlaces: 12, pic: null, year: 2025, autoGir: false, engineType: 1, pricePerHour: 20, gasPerHour: 12, LeftGas: 13, city: "Yerushlayim", street: "Bar Ilan", empty: true },
        { key: 51, passNum: 2424242424, carModel: 23, numPlaces: 7, pic: null, year: 2025, autoGir: true, engineType: 3, pricePerHour: 20, gasPerHour: 12, LeftGas: 13, city: "Yerushlayim", street: "Bar Ilan", empty: true },
        { key: 52, passNum: 2525252525, carModel: 24, numPlaces: 30, pic: null, year: 2025, autoGir: false, engineType: 4, pricePerHour: 100, gasPerHour: 50, LeftGas: 13, city: "Yerushlayim", street: "Bar Ilan", empty: true },
        { key: 53, passNum: 262622626, carModel: 25, numPlaces: 30, pic: null, year: 2005, autoGir: true, engineType: 1, pricePerHour: 150, gasPerHour: 60, LeftGas: 13, city: "Yerushlayim", street: "Bar Ilan", empty: false },
        { key: 28, passNum: 3333333, carModel: 3, numPlaces: 5, pic: null, year: 2005, autoGir: false, engineType: 4, pricePerHour: 20, gasPerHour: 12, LeftGas: 13, city: "Yerushlayim", street: "Bar Ilan", empty: true },

    ],
    Hashala: [
        { key: 1, userCode: 1, "date": new Date().getDay, hour: new Date().getHours, retuned: false },
        { key: 2, userCode: 1, "date": new Date().getDay, hour: new Date().getHours, retuned: true },
        { key: 3, userCode: 2, "date": new Date().getDay, hour: new Date().getHours, retuned: true },
        { key: 4, userCode: 3, "date": new Date().getDay, hour: new Date().getHours, retuned: true },
        { key: 5, userCode: 3, "date": new Date().getDay, hour: new Date().getHours, retuned: true },
        { key: 6, userCode: 3, "date": new Date().getDay, hour: new Date().getHours, retuned: false },
        { key: 7, userCode: 4, "date": new Date().getDay, hour: new Date().getHours, retuned: true },
        { key: 8, userCode: 4, "date": new Date().getDay, hour: new Date().getHours, retuned: false },
        { key: 9, userCode: 5, "date": new Date().getDay, hour: new Date().getHours, retuned: false },
        { key: 10, userCode: 6, "date": new Date().getDay, hour: new Date().getHours, retuned: true },
        { key: 11, userCode: 6, "date": new Date().getDay, hour: new Date().getHours, suretuned: false },
        { key: 12, userCode: 10, "date": new Date().getDay, hour: new Date().getHours, retuned: true },
        { key: 13, userCode: 11, "date": new Date().getDay, hour: new Date().getHours, retuned: false },
        { key: 14, userCode: 12, "date": new Date().getDay, hour: new Date().getHours, retuned: true },
        { key: 15, userCode: 10, "date": new Date().getDay, hour: new Date().getHours, retuned: false },
    ],

    returns: [
        { key: 1, Hashala: 2, "date": new Date().getDay, hour: new Date().getHours, sumToPay: 500, leftToPay: 25500, retuned: true },
        { key: 2, Hashala: 3, "date": new Date().getDay, hour: new Date().getHours, sumToPay: 80, leftToPay: 12, retuned: true },
        { key: 3, Hashala: 4, "date": new Date().getDay, hour: new Date().getHours, sumToPay: 800, leftToPay: 200, retuned: true },
        { key: 4, Hashala: 5, "date": new Date().getDay, hour: new Date().getHours, sumToPay: 500, leftToPay: 350, retuned: true },
        { key: 5, Hashala: 7, "date": new Date().getDay, hour: new Date().getHours, sumToPay: 500, leftToPay: 20, retuned: true },
        { key: 6, Hashala: 10, "date": new Date().getDay, hour: new Date().getHours, sumToPay: 500, leftToPay: 200, retuned: true },
        { key: 7, Hashala: 12, "date": new Date().getDay, hour: new Date().getHours, sumToPay: 150, leftToPay: 150, retuned: true },
        { key: 8, Hashala: 14, "date": new Date().getDay, hour: new Date().getHours, sumToPay: 1500, leftToPay: 0, retuned: true },
    ],
    isManager: false,
    //managerDetails: { name: "Esty" || "Esti", password: "123456" },
    currentUser: {}
}
