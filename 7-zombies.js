function zombie_shootout(totalZombies, range, ammo) {
  let remainingZombies = totalZombies
  while (ammo > 0) {
    ammo -= 1
    remainingZombies -= 1
    if ( remainingZombies === 0 ) {
      return `You shot all ${totalZombies} zombies.`
    }
    range -= 0.5
    if ( range === 0 ) {
      return `You shot ${totalZombies - remainingZombies} zombies before being eaten: overwhelmed.`
    }
  }
  return `You shot ${totalZombies - remainingZombies} zombies before being eaten: ran out of ammo.`
}


console.log(zombie_shootout(5, 2, 5))