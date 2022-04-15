function zombieShootout(totalZombies, range, ammo) {
  const s = { totalZombies, range, ammo };
  while (s.ammo > 0) {
    s.remainingAmmo -= 1;
    s.totalZombies -= 1;
    if (s.totalZombies === 0) {
      return `You shot all ${totalZombies} zombies.`;
    }
    s.range -= 0.5;
    if (s.range === 0) {
      return `You shot ${
        totalZombies - s.totalZombies
      } zombies before being eaten: overwhelmed.`;
    }
  }
  return `You shot ${
    totalZombies - s.totalZombies
  } zombies before being eaten: ran out of ammo.`;
}

// eslint-disable-next-line no-console
console.log(zombieShootout(5, 2, 5));
