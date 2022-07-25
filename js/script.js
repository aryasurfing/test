function iShoot(enemy) {
    enemy.classList.add("dead");

    if (!livingEnemies().length) {
        alert("You Win!");
        window.location.reload()
    }
}
function incrementValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
}
function enemyAttacksMe(enemy) {
    enemy.classList.add("showing");

    setTimeout(() => {
        enemyShootsMe(enemy);
    }, 1000);

    setTimeout(() => {
        enemy.classList.remove("showing");
    }, 1500)
}

function enemyShootsMe(enemy) {
    if (!enemy.classList.contains("dead")) {
        updateHealthPoints(healthPoints - 20);

        enemy.classList.add('shooting');
        gameFrame.classList.add('whenShoot')

        setTimeout(() => {
            enemy.classList.remove("shooting");
            gameFrame.classList.remove('whenShoot')
            var value = parseInt(document.getElementById('number').value, 10);
            value = isNaN(value) ? 0 : value;
            value--;
            document.getElementById('number').value = value;
        }, 100);
    }

}

function livingEnemies() {
    return document.querySelectorAll(".enemy:not(.dead)")
}

function randomEnemyAttacks() {
    var randomEnemyNo = Math.random() * livingEnemies().length;
    randomEnemyNo = Math.floor(randomEnemyNo);
    var enemy = livingEnemies()[randomEnemyNo];

    var randomDelay = Math.random() * 1000 + 500;

    setTimeout(() => {
        enemyAttacksMe(enemy);
        randomEnemyAttacks();
    }, randomDelay);
}

var healthPoints = 100;

function updateHealthPoints(points) {
    healthPoints = points;
    var healthBar = document.querySelector("#healthBar");

    healthBar.style.width = points + "%"

    if (healthPoints < 1) {
        alert("Game Over!");
        window.location.reload();
    }
}


