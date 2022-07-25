function iShoot(enemy) {
    enemy.classList.add('dead');

    if (!livingEnemies().length) {
        alert('you win')
        window.location.reload
    }
}

function livingEnemies() {
    document.querySelectorAll('.enemy:not(.dead)')
}

function enemyAttacksMe(enemy) {
    enemy.classList.add('show')

    setTimeout(() => {
        enemyShootsMe();
    }, 1000);
    setTimeout(() => {
        enemy.classList.remove('showing')
    }, 1500);

}

function enemyShootsMe(enemy) {
    if (!enemy.classList.contains('dead')) {
        updateHealthPoints(points - 20)

        enemy.classList.add('shoot')
        setTimeout(() => {
            enemy.classList.remove('shoot')
        }, 100);
    }
}

function randomEnemyAttacks(enemy) {
    var randomEnemyNo = Math.random() * livingEnemies().length
    randomEnemyNo = Math.floor(randomEnemyNo)
    var enemy = livingEnemies()[randomEnemyNo]

    var randomDelay = Math.random() * 1000 + 500

    setTimeout(() => {
        enemyAttacksMe(enemy)
        randomEnemyAttacks()
    }, randomDelay);
}

var healthPoints = 100

function updateHealthPoints(){
    healthPoints = points
    var healthBar = document.querySelector('#healthBar')

    healthBar.style.width = points + "%"
    if(healthPoints<1) {
        alert('gameover')
        window.location.reload
    }
}