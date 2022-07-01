function Task_1(notebook) {
    var notebook = {
        Serial_num: '3V5E7EA',
        Model: 'HP 255 G8',
        Screen: {
            Screen_type: "IPS",
            Screen_resolution: "1920x1080",
        },
        CPU:"MD Ryzen 7 5700U (1.8 - 4.3 ГГц)",
        RAM: 8,
        Data_drives: {
            HDD: "256 GB SSD",
            video_card: "AMD Radeon Graphics",
        },
        Case: {
            color: "Silver",
            weight: "1,7",
            Dimensions: "358 x 242 x 19"
        }
    };
    console.log(notebook);
}
Task_1();
class NewUser{
    constructor(login, password){
        this.login = login;
        this.password = password;
    }
};
const user1 =new NewUser("Alex","alex_01");
const user2 =new NewUser("Alexa","alexa_02");
const user3 =new NewUser("Sony","pana_son");
let usersArr = [];
usersArr.push(user1,user2,user3);

const map = new Map();
usersArr.forEach(el => map.set(el.login, el));
for (let i = 0; i < usersArr.length; i++) {
    map.set(usersArr[i].login, usersArr[i])
    
};
