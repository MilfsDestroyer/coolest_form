const goodName = document.querySelector("#good-name");
const goodCost = document.querySelector("#good-cost");
const goodWarehouse = document.querySelector("#good-warehouse");
const saveBtn = document.querySelector("#save-btn");
const showBtn = document.querySelector("#show-btn");

let goodsAmount = (localStorage.getItem("goods-amount") != null) ? 0 : localStorage.getItem("goods-amount");

const goods = [];

function Good(name, cost, wareHouse){
    this.name = name;
    this.cost = cost;
    this.wareHouse = wareHouse;
}

function save(){
    goods[goodsAmount] = new Good(goodName.value, goodCost.value, goodWarehouse.value);

    localStorage.setItem("good_" + goodsAmount, JSON.stringify(goods[goodsAmount]));

    console.log(JSON.stringify(goods[goodsAmount]));

    localStorage.setItem("goods-amount", ++goodsAmount);

    goodName.value = null;
    goodCost.value = null;
    goodWarehouse.value = null;
}

function show(){
    let goodNumber = prompt("Type the number of good or '0' to exit");

    if(goodNumber == -1){
        return;
    }

    let good = localStorage.getItem("good_" + goodNumber);

    console.log(goodsAmount);

    // while(good != null){
    //     goodNumber = prompt("Type the number of good or '0' to exit");
    // }

    let question = prompt("What u want to know about it? \n Type 'cost' to get cost \n Type 'warehouse' to know warehouse");

    if(question == "cost"){
        alert(good.cost);

        return true;
    }
    else if(question == "warehouse"){
        alert(good.wareHouse);

        return true;
    }
}