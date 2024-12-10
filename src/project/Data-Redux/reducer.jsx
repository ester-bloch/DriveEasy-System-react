import { produce } from 'immer';
import { InitialState } from './State';

export const reducer = produce((state, action) => {
    switch (action.type) {
        case "LOGIN": {
            console.log('LOGIN לרדיוסר נכנסתי ')
            let found = state.users.find(u => u.name == action.payload.name && u.password == action.payload.password)
            if (found != null) {
                console.log(`isManager:${state.userTypes.find(t => t.key == found.userType).isManager}`);
                state.isManager = state.userTypes
                    .find(t => t.key == found.userType)
                    .isManager
                console.log(`from reducer: find.name:${found.name}`);
                console.log(`from reducer: found.userType:${found.userType}`);
                console.log(`from reducer: isManager:${state.isManager}`);
                state.currentUser = found
            }
            else {
                console.log(`fron reducer: !!!!!found:${found}`);
                state.currentUser = found
                state.isManager = false
                console.log(`fron reducer: !!!!!isManager:${state.isManager}`);

            }
            break;
        }
        case "ADD_USER": {
            state.users.sort((y, j) => y['key'] - j['key'])
            let max = state.users[state.users.length - 1].key + 1
            const user = action.payload
            let newUser = {
                key: max + 1,
                userType: 1
                , name: user.name,
                id: user.id,
                phoneNumber: user.phoneNumber,
                password: user.password
                , creditCard: user.creditCard,
                passDay: user.passDay
                , cvv: user.cvv,
            }
            state.users.push(newUser)
            state.currentUser = newUser
            console.log(state.users.find(s => s.name == newUser.name).key);

            break
        }
        case "SET_CARS": {  
            action. payload.forEach(element => {
                element.key=element.id
            });
            state.cars =action. payload
            
            console.log(state.cars );
            
            break
        }
        case "SET_CURRENT_CAR":{
            state.currentCar =action. payload
            console.log(`from reducer2: isManager:${state.isManager}`);
            break;
        }
    
    }
}, InitialState)
