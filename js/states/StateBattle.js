function StateBattle() {
    this.oFeild = document.querySelector('#wrapperFields');

}

StateBattle.prototype.createFeild = function (sex, name) {
    this.oFeild.classList.add('show');
    alert(name);
}

export let oStateBattle = new StateBattle();