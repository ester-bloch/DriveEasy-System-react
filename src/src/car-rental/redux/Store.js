import { produce } from 'immer'
import { useDispatch, useSelector } from 'react-redux';
import { createStore } from 'redux';
import { setCars } from './Actions';
const initialState = {
    thisUser: null,
    typeUsers: [
        { id: '1', desc: "manager" },
        { id: '2', desc: "user" }
    ],
    users: [
        { code: '1', userName: 'דסי', id: "328186622", phone: "0533132115", password: "1111", creditNum: "45801700", validity: "1026", cvv: "356", codeTypeUser: '1', pic: "" },
        { code: '2', userName: 'בתיה', id: "214834012", phone: "0533132117", password: "2222", creditNum: "354798749", validity: "1326", cvv: "578", codeTypeUser: '1', pic: "" },
        { code: '3', userName: 'רבקי', id: "328353464", phone: "0533134515", password: "3333", creditNum: "645746868", validity: "1628", cvv: "366", codeTypeUser: '2', pic: "" },
        { code: '4', userName: 'מוטי', id: "2148834012", phone: "0533135435", password: "1234", creditNum: "453797497", validity: "1029", cvv: "654", codeTypeUser: '2', pic: "" },
        { code: '5', userName: 'יענקי', id: "456575765", phone: "0533134567", password: "5555", creditNum: "435465475", validity: "0326", cvv: "325", codeTypeUser: '2', pic: "" },
        { code: '6', userName: 'לאה', id: "3464654757", phone: "0533123435", password: "6666", creditNum: "45985979487", validity: "1027", cvv: "436", codeTypeUser: '2', pic: "" },
        { code: '7', userName: 'אסתי', id: "4385957904", phone: "0583226602", password: "7777", creditNum: "346437547575", validity: "0525", cvv: "565", codeTypeUser: '2', pic: "" },
    ],
    carType: [
        { code: '1', desc: 'גיפ' },
        { code: '2', desc: 'מנהלים' },
        { code: '3', desc: 'פרטי' },
        // { code: '4', desc: 'סטיישן' },
        { code: '5', desc: 'משפחתי' },
        { code: '7', desc: 'אחמי"ם' },
        { code: '8', desc: 'אספנות' },
        { code: '9', desc: 'מיניבוס' },
        { code: '10', desc: 'מסחרי' },
    ],
    carModels: [
        { code: '15', company: 'Toyota', model: 'Aigo', carTypeCode: '5' },
        { code: '20', company: 'Toyota', model: 'Corolla', carTypeCode: '5' },
        { code: '25', company: 'Jeep', model: 'Wrangler', carTypeCode: '1' },
        { code: '30', company: 'Mazda', model: 'Mazda2', carTypeCode: '3' },
        { code: '35', company: 'Jeep', model: 'steeve', carTypeCode: '8' },
        { code: '40', company: 'Volkswagen', model: 'tra', carTypeCode: '9' },
        { code: '50', company: 'Volvo', model: 's605', carTypeCode: '5' },
        { code: '60', company: 'Volvo', model: 'xc40', carTypeCode: '2' },
        { code: '65', company: 'Mitsubishi', model: 'Out', carTypeCode: '3' },
        { code: '70', company: 'Subaru', model: 'genesis', carTypeCode: '5' },
        { code: '75', company: 'Hyundai', model: 'genesis', carTypeCode: '2' },
        { code: '80', company: 'Hyundai', model: 'i20', carTypeCode: '3' },
        { code: '90', company: 'Tesla', model: 'Model S', carTypeCode: '3' },
        { code: '100', company: 'Fiat', model: '500', carTypeCode: '3' },
        { code: '110', company: 'Chevrolet', model: 'spark', carTypeCode: '3' },
        { code: '120', company: 'Ford', model: 'Edge', carTypeCode: '5' },
        { code: '125', company: 'Chevrolet', model: 'travers', carTypeCode: '5' },
        { code: '130', company: 'Ford', model: 'Fiesta', carTypeCode: '5' }

    ],

    driveType: [
        { id: '11', desc: 'electric', PricePerLiter: 9.67 },
        { id: '12', desc: 'electric', PricePerLiter: 10 },
        { id: '13', desc: 'fuel', PricePerLiter: 11 },
        { id: '14', desc: 'fuel', PricePerLiter: 0 },
        { id: '15', desc: 'fuel', PricePerLiter: 0 },
    ],
    //אוטומט-TRUE ידני-FALSE
    cars: [
        { CarCode: '100', NumLet: '006-89-447', CodeModel: '90', NumPlaces: 5, CarPicture: '../pics/tesla cybertruck היברידי אוטומטי.jpg', CarYear: '2021', CarGir: true, codeDriveType: '11', PricePerHour: 19, TakesDelekPerKamash: 0.03, LitterSurplus: 5, Street: 'אורלזרוב', City: 'חיפה', Available: true },
        { CarCode: '101', NumLet: '006-89-447', CodeModel: '90', NumPlaces: 4, CarPicture: '../pics/tesla s.jpg', CarYear: '2021', CarGir: true, codeDriveType: '11', PricePerHour: 19, TakesDelekPerKamash: 0.03, LitterSurplus: 5, Street: 'אורלזרוב', City: 'חיפה', Available: true },
        { CarCode: '102', NumLet: '123-45-456', CodeModel: '80', NumPlaces: 4, CarPicture: '../pics/hyundai i20 4 places auto.png', CarYear: '2020', CarGir: true, codeDriveType: '12', PricePerHour: 30, TakesDelekPerKamash: 0.04, LitterSurplus: 10, Street: 'זכרון יעקב', City: 'ירושלים', Available: true },
        { CarCode: '103', NumLet: '89-999-88', CodeModel: '60', NumPlaces: 5, CarPicture: '../pics/volvo xc40 5 places auto.png', CarYear: '2000', CarGir: true, codeDriveType: '13', PricePerHour: 25, TakesDelekPerKamash: 0.03, LitterSurplus: 13, Street: 'פתח תקווה', City: 'ירושלים', Available: false },
        { CarCode: '104', NumLet: '666-45-456', CodeModel: '75', NumPlaces: 5, CarPicture: '../pics/hyundai genesis 5 places auto.png', CarYear: '2019', CarGir: false, codeDriveType: '12', PricePerHour: 20, TakesDelekPerKamash: 0.02, LitterSurplus: 13, Street: 'מעגלי הרי"ם לוין', City: 'ירושלים', Available: false },
        { CarCode: '105', NumLet: '123-45-971', CodeModel: '70', NumPlaces: 5, CarPicture: '../pics/subaru forester 5 places auto.png', CarYear: '2018', CarGir: false, codeDriveType: '11', PricePerHour: 25, TakesDelekPerKamash: 0.05, LitterSurplus: 14, Street: 'פתח תקוה', City: 'פתח תקוה', Available: true },
        { CarCode: '106', NumLet: '719-44-456', CodeModel: '90', NumPlaces: 5, CarPicture: '../pics/tesla s.jpg', CarYear: '2021', CarYear: '2020', CarGir: false, codeDriveType: '15', PricePerHour: 32, TakesDelekPerKamash: 0.05, LitterSurplus: 9, Street: 'שמגר', City: 'בית שמש', Available: true },
        { CarCode: '107', NumLet: '770-70-770', CodeModel: '15', NumPlaces: 9, CarPicture: '../pics/toyota proace 9 places auto.png', CarYear: '2023', CarGir: false, codeDriveType: '13', PricePerHour: 55, TakesDelekPerKamash: 0.1, LitterSurplus: 8, Street: 'ר עקיבא', City: 'נתניה', Available: true },
        { CarCode: '108', NumLet: '744-74-888', CodeModel: '25', NumPlaces: 4, CarPicture: '/pics/jeep-wrangler-4x_היברידי_אוטומטיe1612265216241-removebg-preview.png', CarYear: '2000', CarGir: true, codeDriveType: '14', PricePerHour: 37, TakesDelekPerKamash: 0.06, LitterSurplus: 14, Street: 'נהר הירדן', City: 'בית שמש', Available: true },
        { CarCode: '109', NumLet: '987-45-499', CodeModel: '35', NumPlaces: 4, CarPicture: '../pics/willys-jeep-steve-אספנות-removebg-preview.png', CarYear: '2023', CarGir: true, codeDriveType: '15', PricePerHour: 23, TakesDelekPerKamash: 0.08, LitterSurplus: 11, Street: 'ים סוף', City: 'ירושלים', Available: true },
        { CarCode: '110', NumLet: '987-45-499', CodeModel: '65', NumPlaces: 4, CarPicture: '../pics/mitsubishi4 מקומות אוטומטי.png', CarYear: '2023', CarGir: true, codeDriveType: '15', PricePerHour: 23, TakesDelekPerKamash: 0.08, LitterSurplus: 11, Street: 'ים סוף', City: 'ירושלים', Available: true },
        { CarCode: '111', NumLet: '123-45-897', CodeModel: '20', NumPlaces: 4, CarPicture: '../pics/toyota aygo 4 places אוטומטי.png', CarYear: '1999', CarGir: false, codeDriveType: '12', PricePerHour: 18, TakesDelekPerKamash: 0.06, LitterSurplus: 9, Street: 'בית ישראל', City: 'בית שמש', Available: true },
        { CarCode: '112', NumLet: '783-45-456', CodeModel: '30', NumPlaces: 4, CarPicture: '../pics/mazda mazda2 4 places auto.png', CarYear: '1998', CarGir: true, codeDriveType: '12', PricePerHour: 23, TakesDelekPerKamash: 0.04, LitterSurplus: 10, Street: 'הורדים', City: 'רכסים', Available: false },
        { CarCode: '113', NumLet: '123-45-456', CodeModel: '40', NumPlaces: 9, CarPicture: '../pics/volkswagen transporter 9 places auto.png', CarYear: '2015', CarGir: true, codeDriveType: '14', PricePerHour: 30, TakesDelekPerKamash: 0.05, LitterSurplus: 4, Street: 'מיכה', City: 'ירושלים', Available: true },
        { CarCode: '114', NumLet: '123-45-456', CodeModel: '60', NumPlaces: 5, CarPicture: '../pics/volvo xc40 5 places auto.png', CarYear: '2020', CarGir: false, codeDriveType: '15', PricePerHour: 25, TakesDelekPerKamash: 0.05, LitterSurplus: 12, Street: 'חזון איש', City: 'בני ברק', Available: true },
        { CarCode: '115', NumLet: '672-40-456', CodeModel: '90', NumPlaces: 5, CarPicture: '../pics/tesla cybertruck היברידי אוטומטי.jpg', CarYear: '2000', CarGir: true, codeDriveType: '13', PricePerHour: 21, TakesDelekPerKamash: 0.02, LitterSurplus: 11, Street: 'ויצמן', City: 'חיפה', Available: true },
        { CarCode: '190', NumLet: '987-45-499', CodeModel: '25', NumPlaces: 7, CarPicture: '/pics/jeep-wrangler-4x_היברידי_אוטומטיe1612265216241-removebg-preview.png', CarYear: '2023', CarGir: true, codeDriveType: '15', PricePerHour: 23, TakesDelekPerKamash: 0.08, LitterSurplus: 11, Street: 'ים סוף', City: 'ירושלים', Available: true },
        { CarCode: '116', NumLet: '123-95-456', CodeModel: '70', NumPlaces: 5, CarPicture: '../pics/subaru forester 5 places auto.png', CarYear: '2022', CarGir: false, codeDriveType: '13', PricePerHour: 22, TakesDelekPerKamash: 0.56, LitterSurplus: 12, Street: 'שדרות אשכול', City: 'ירושלים', Available: true },
        { CarCode: '117', NumLet: '987-45-499', CodeModel: '100', NumPlaces: 4, CarPicture: '../pics/fiat 500 4 מקומות אוטומטי.png', CarYear: '2023', CarGir: true, codeDriveType: '15', PricePerHour: 23, TakesDelekPerKamash: 0.08, LitterSurplus: 11, Street: 'ים סוף', City: 'ירושלים', Available: true },
        { CarCode: '118', NumLet: '13-065-16', CodeModel: '75', NumPlaces: 5, CarPicture: '../pics/hyundai genesis 5 places auto.png', CarYear: '2014', CarGir: true, codeDriveType: '12', PricePerHour: 19, TakesDelekPerKamash: 0.67, LitterSurplus: 15, Street: 'שירת הים', City: '', Available: true },
        { CarCode: '119', NumLet: '423-65-451', CodeModel: '60', NumPlaces: 5, CarPicture: '../pics/volvo xc40 5 places auto.png', CarYear: '2015', CarGir: false, codeDriveType: '11', PricePerHour: 20, TakesDelekPerKamash: 0.45, LitterSurplus: 4, Street: 'צה"ל', City: 'צפת', Available: true },
        { CarCode: '120', NumLet: '123-45-406', CodeModel: '50', NumPlaces: 5, CarPicture: '../pics/volvo s605 places auto.png', CarYear: '2012', CarGir: true, codeDriveType: '14', PricePerHour: 22, TakesDelekPerKamash: 0.03, LitterSurplus: 1, Street: 'שזיפרון', City: 'מירון', Available: true },
        { CarCode: '121', NumLet: '23-485-46', CodeModel: '30', NumPlaces: 5, CarPicture: '../pics/mazda mazda2 4 places auto.png', CarYear: '2023', CarGir: false, codeDriveType: '11', PricePerHour: 24, TakesDelekPerKamash: 0.04, LitterSurplus: 6, Street: 'האר"י', City: 'צפת', Available: true },
        { CarCode: '122', NumLet: '13-405-46', CodeModel: '20', NumPlaces: 5, CarPicture: '../pics/toyota aygo 4 places אוטומטי.png', CarYear: '2024', CarGir: true, codeDriveType: '11', PricePerHour: 21, TakesDelekPerKamash: 0.04, LitterSurplus: 7, Street: 'חב"ד', City: 'נתניה', Available: true },
        { CarCode: '123', NumLet: '144-45-865', CodeModel: '50', NumPlaces: 9, CarPicture: '../pics/volvo s605 places auto.png', CarYear: '2012', CarGir: false, codeDriveType: '15', PricePerHour: 21, TakesDelekPerKamash: 0.05, LitterSurplus: 13, Street: 'זבוטינסקי', City: 'בני ברק', Available: true },
        { CarCode: '124', NumLet: '987-45-499', CodeModel: '35', NumPlaces: 4, CarPicture: '../pics/willys-jeep-steve-אספנות-removebg-preview.png', CarYear: '2023', CarGir: true, codeDriveType: '15', PricePerHour: 23, TakesDelekPerKamash: 0.08, LitterSurplus: 11, Street: 'ים סוף', City: 'ירושלים', Available: true },
        { CarCode: '125', NumLet: '987-45-499', CodeModel: '65', NumPlaces: 4, CarPicture: '../pics/mitsubishi4 מקומות אוטומטי.png', CarYear: '2023', CarGir: true, codeDriveType: '15', PricePerHour: 23, TakesDelekPerKamash: 0.08, LitterSurplus: 11, Street: 'ים סוף', City: 'ירושלים', Available: true },
        { CarCode: '126', NumLet: '987-45-499', CodeModel: '100', NumPlaces: 4, CarPicture: '../pics/fiat 500 4 1מקומות אוטומטי.png', CarYear: '2023', CarGir: true, codeDriveType: '15', PricePerHour: 23, TakesDelekPerKamash: 0.08, LitterSurplus: 11, Street: 'ים סוף', City: 'ירושלים', Available: true },
        { CarCode: '127', NumLet: '987-45-499', CodeModel: '110', NumPlaces: 4, CarPicture: '../pics/chevrolet spark 4 places אוטומטי.png', CarYear: '2023', CarGir: true, codeDriveType: '15', PricePerHour: 23, TakesDelekPerKamash: 0.08, LitterSurplus: 11, Street: 'ים סוף', City: 'ירושלים', Available: true },
        { CarCode: '128', NumLet: '987-45-499', CodeModel: '125', NumPlaces: 7, CarPicture: '../pics/chevrolet traverse 7 places auto.png', CarYear: '2023', CarGir: true, codeDriveType: '15', PricePerHour: 23, TakesDelekPerKamash: 0.08, LitterSurplus: 11, Street: 'ים סוף', City: 'ירושלים', Available: true },
        { CarCode: '129', NumLet: '987-45-499', CodeModel: '120', NumPlaces: 5, CarPicture: '../pics/ford edge 5 places auto.png', CarYear: '2023', CarGir: true, codeDriveType: '15', PricePerHour: 23, TakesDelekPerKamash: 0.08, LitterSurplus: 11, Street: 'ים סוף', City: 'ירושלים', Available: true },
        { CarCode: '130', NumLet: '987-45-499', CodeModel: '130', NumPlaces: 5, CarPicture: '../pics/ford fiesta 5 places אוטומטי.png', CarYear: '2023', CarGir: true, codeDriveType: '15', PricePerHour: 23, TakesDelekPerKamash: 0.08, LitterSurplus: 11, Street: 'ים סוף', City: 'ירושלים', Available: true },
        { CarCode: '131', NumLet: '123-95-456', CodeModel: '70', NumPlaces: 5, CarPicture: '../pics/subaru forester 5 places auto.png', CarYear: '2022', CarGir: false, codeDriveType: '13', PricePerHour: 22, TakesDelekPerKamash: 0.56, LitterSurplus: 12, Street: 'רבי עקיבא', City: 'בני ברק', Available: true },

    ],

    Returns: [
        { code: '1000', rentCode: '200', ReturnDate: new Date('13/1/2015'), ReturnHour: 14, surplus: 120, totalPay: 720, shoolam: true },
        { code: '2000', rentCode: '201', ReturnDate: new Date('2/5/2020'), ReturnHour: 16, surplus: 120, totalPay: 480, shoolam: true },
        { code: '3000', rentCode: '202', ReturnDate: new Date('4/7/2024'), ReturnHour: 8, surplus: 120, totalPay: 1200, shoolam: true },
        { code: '4000', rentCode: '203', ReturnDate: new Date('1/2/2024'), ReturnHour: 6, surplus: 120, totalPay: 150, shoolam: true },
        { code: '5000', rentCode: '204', ReturnDate: new Date('12/7/2024'), ReturnHour: 23, surplus: 120, totalPay: 270, shoolam: true },
    ],
    Rents: [
        { rentCode: '200', userCode: '1', CarCode: '110', rentDate: new Date('2024/1/5'), rentHour: 14 },
        { rentCode: '201', userCode: '2', CarCode: '103', rentDate: new Date('2024/3/5'), rentHour: 16 },
        { rentCode: '202', userCode: '2', CarCode: '104', rentDate: new Date('2024/6/1'), rentHour: 8 },
        { rentCode: '203', userCode: '4', CarCode: '112', rentDate: new Date('2024/5/7'), rentHour: 1 },
        { rentCode: '204', userCode: '1', CarCode: '110', rentDate: new Date('2024/6/10'), rentHour: 14 },
        { rentCode: '205', userCode: '2', CarCode: '103', rentDate: new Date('2024/7/29'), rentHour: 16 },
        { rentCode: '206', userCode: '2', CarCode: '104', rentDate: new Date('2024/8/1'), rentHour: 8 },
        { rentCode: '207', userCode: '4', CarCode: '112', rentDate: new Date('2024/8/6'), rentHour: 1 },

    ],


}
const reducer = produce((state, action) => {
    switch (action.type) {
        case 'ADD_USER':
            let users = state.users;
            console.log(users);
            users.push(action.payload)
            return;

        case 'ADD_CAR':
            state.cars.push(action.payload)
            return;
        case 'ADD_RENT':
            state.Rents.push(action.payload)
            return;
        case 'ADD_RETURN':
            state.Returns.push(action.payload)
            return;
        case 'ADD_MODEL':
            state.carModels.push(action.payload)
            return;
        case 'REMOVE_CAR':
            state.cars = state.cars.filter(car =>
                car.CarCode !== (action.payload));
            return;
        case 'SET_THISUSER':
            state.thisUser = (action.payload)
            return;
        case 'SET_AVAILABLE':
            // debugger
            let a = state.cars.find(x => x.CarCode == action.payload.CarCode);
            a.Available = !a.Available;
            return;
        // case 'SET_CITY':
        //     debugger
        //     let b = state.cars.find(x => x.CarCode == action.payload.CarCode);
        //     b.City = action.p1
        //     return;
        // case 'SET_STREET':
        //     debugger
        //     let c = state.cars.find(x => x.CarCode == action.payload.CarCode);
        //     c.Street = action.p1
        //     return;
        case 'SET_CAR':
            debugger
            const { car, value, field } = action.payload;
            state.cars.find(x =>
                x.CarCode === car.CarCode)
            [field] = value;

            return;
            case 'SET_DRIVER_TYPE':
                debugger
                const {type,PricePerLiter}=action.payload
                let e = state.driveType.find(x => x.id == type.id);
                e.PricePerLiter = PricePerLiter;
                return;

        default:
            break;
    }
}, initialState)
const store = createStore(reducer)
export default store
