/**
 * Utilisation des classes
 */
//creation d'un objet
class Account {
    constructor(username) {
        this.username = username;
    }
};

const acc1 = new Account("cheroliv");
console.table(acc1);
console.assert(acc1.username === "cheroliv");

console.log("---------");

//création d'un objet et ajout de getter et setter(accesseurs)
class AccountInfo {
    constructor(username) {
        this._username = username;
    }

    get username() {
        return this._username;
    }

    /**
     * @param {(arg0: string) => void} new_username
     */
    set new_username(new_username) {
        this._username = new_username;
    }
};

const acc_info1 = new AccountInfo("cheroliv");
console.table(acc_info1);
//accés au membre _username avec le getter username()
console.assert(acc_info1.username === "cheroliv");

//update la valeur username de acc_info1 avec le setter
acc_info1.new_username = "imrandeh";
console.assert(acc_info1.username === "imrandeh");

console.log("---------");