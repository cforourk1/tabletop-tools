/**
 * A wizard can cast a spell if they have the spell prepared.
 * They can also cast it from a scroll even if it is not prepared.
 * @param {boolean} isSpellPrepared - whether the spell is prepared
 * @param {boolean} hasScroll - whether the wizard has a scroll of the spell
 * @returns {boolean} whether the wizard can cast the spell
 */
function canCastSpell(isSpellPrepared, hasScroll) {
  /*this function assesses if the wizard can cast the spell. It returns true if either argument passed into the parameters evaluates as true. the pipe operators side by side indicate the or operator.
  */
    return isSpellPrepared || hasScroll
}

/**
 * A creature is hidden from an observer if it is actively hiding
 * or if the observer is not aware of it.
 * @param {boolean} hiding - whether the creature is actively hiding
 * @param {boolean} aware - whether the observer is aware of the creature
 * @returns {boolean} whether the creature is hidden from the observer
 */
function isHidden(hiding, aware) {
  // this function assesses if the creature is hiding or not aware. I used pipe operators for the or portion and exclamation point to say is not aware
    return hiding || !aware
}

/**
 * A strike hits if the attack value is greater than or equal
 * to the target's armor class (AC).
 * @param {number} attack - the attack value
 * @param {number} ac - the armor class to beat
 * @returns {boolean} whether the strike hits
 */
function doesStrikeHit(attack, ac) {
  // this function assesses if a strike hits. It assesses as true if the attack is greater than or equal to the targets armor class.
  return attack >= ac
}

/**
 * A strike is a critical hit if the attack value is at least
 * 10 greater than the target's armor class (AC).
 * @param {number} attack - the attack value
 * @param {number} ac - the armor class to beat
 * @returns {boolean} whether the strike is a critical hit
 */
function doesStrikeCrit(attack, ac) {
  // this function assesses if the strike it a critical hit. It only returns true if the attack is greater than armor class plus 10
  return attack > ac + 10
}

/**
 * A creature can restore hit points (HP) by healing,
 * but its total HP cannot exceed its maximum HP.
 * @param {number} maxHp - maximum hit points
 * @param {number} currentHp - current hit points
 * @param {number} healAmount - amount to heal
 * @returns {number} total hit points after healing
 */
function heal(maxHp, currentHp, healAmount) {
  /* I had to get help with this. math min is returning the smaller value there so I don't go over the max hp. I would like to see this talked about in class.
  */
  return Math.min(currentHp + healAmount, maxHp);
}

/**
 * When a character uses a skill they have proficiency in,
 * they get to add a bonus to their attempt.
 *
 * | Rank       | Bonus     |
 * | ---        | ---       |
 * | untrained  | 0         |
 * | trained    | level + 2 |
 * | expert     | level + 4 |
 * | master     | level + 6 |
 * | legendary  | level + 8 |
 *
 * @param {number} level - level of the character
 * @param {string} rank - character's proficiency rank
 * @returns {number} the character's proficiency bonus
 */
function getProficiencyBonus(level, rank) {
  switch (rank) {
    /*this function assesses what bonus a character gets based on rank. I used switch case here to made it simpler. Based on switch case of rank, I will return the bonus that corresponds with that rank. I had to add a default incase incorrect arguments were introduced.
    */
    case "untrained":
     return level + 0
    break;
    case "trained":
     return level + 2
    break;
    case "expert":
     return level + 4
    break;
        case "master":
     return level + 6
    break;
        case "legendary":
     return level + 8
    break;
    default:
    console.log("rank must be a value from the list")
    return 0
  }
}

/**
 * A creature can get a bonus to its armor class (AC) by taking cover.
 * If the creature is behind an obstacle, it gets a +2 bonus to its AC,
 * unless the creature is actively taking cover, in which case it gets
 * a +4 bonus to its AC.
 * A creature that is not behind an obstacle gets no bonus to its AC.
 * @param {boolean} behindObstacle - whether the creature is behind an obstacle
 * @param {boolean} takingCover - whether the creature is actively taking cover
 * @returns {number} the cover bonus to AC
 */
function getCoverBonus(behindObstacle, takingCover) {
   /* here is where it got a bit more complicated. I needed to assess if the creature is behind an obstacle and if it is taking cover. So the firt if looks at is it behind an obstacle and taking cover - if true return 4. Then if it is true that it is behind an obstacle and NOT taking cover, return 2. So sneaky! But if it is not behind anything , or actively taking cover return 0 for 0 bonus.
  */
  if (behindObstacle && takingCover) {
    return 4
  } else if (behindObstacle && !takingCover) {
    return 2
  } else  {
    return 0
  }
}

/**
 * A creature's current hit points (HP) is reduced by taking damage.
 * If the damage taken is greater than or equal to double its maximum
 * HP, the creature dies instantly.
 * A creature's HP cannot go below 0 unless it is dead.
 * @param {number} maxHp - maximum hit points
 * @param {number} currentHp - current hit points
 * @param {number} damage - damage taken
 * @returns {number} -1 if the creature dies instantly
 * @returns {number} 0 if the creature's HP drops to 0 or below
 * @returns {number} the creature's remaining HP after taking damage
 */
function getRemainingHp(maxHp, currentHp, damage) {
  /* for this function we had to assess if the damage was greater than or equal to double its max hp and then return a value of negative one. my first if uses an equation to assess if the damage is greater than or equal to maxhp times 2. the next line is if the damage is greater than or equal to current hp return 0 as the creature has depleted its hp. the last line assesses if the damage is less than the current hp, list the damage number dealt as the creatre is still alive.
  */
   if (damage >= maxHp * 2) {
    return -1
   } else if (damage >= currentHp) {
    return 0
   } else if (damage < currentHp) {
      return currentHp - damage
   }
}

/**
 * All creatures can see in bright light.
 * Creatures with low-light vision can also see in dim light.
 * Creatures with darkvision can see in all light conditions.
 * @param {string} light - light condition: "bright", "dim", or "dark"
 * @param {string} vision - vision type: "average", "low-light", or "dark"
 * @returns {boolean} whether the creature can see
 */
function canSee(light, vision) {
/* this function assesses what vision type a creature has and the conditions and returns values based on the argurments passed into the parameters. My first if statement looks at if the light is bright return true because all creatures can see in the bright light. My next one assesses if the light is dim and vision is low-light or dark return true because those two vision groups can see if the lighting is dim. I learned the hard way that parenthesis have to encapsulate the vision parameter AND vision has to be stated each time if I want to use the OR operator to return true. My next if returns true if it is dark out and the creature has a dark level of vision. Anything else is false.
*/
    if (light === "bright") {
      return true
    } else if (light === "dim" && (vision === "low-light" || vision === "dark")) {
        return true
    } else if (light === "dark" && vision === "dark") {
        return true
    } else {
      return false
    }
}

/**
 * A strike deals damage if it hits, unless the strike is a critical hit,
 * in which case it deals double damage.
 * If the strike does not hit, it deals 0 damage.
 * Hint: you can use the functions you wrote above :)
 * @param {number} attack - the attack value
 * @param {number} ac - the armor class to beat
 * @param {number} damage - damage on a normal hit
 * @returns {number} damage dealt by the strike
 */
function getStrikeDamage(attack, ac, damage) {
/* this one was particularly frustrating because you had to call the previous functions. So I called the function doesStrikeHit and its paramenters and assessed if it was critical in the same line. So - did the strike hit AND was it critical - if so then return damage * 2. The problem was again the () I didn't understant that I needed those for the if to work and it was similar to the issue in the light function where there is also an order of operations to consider. && happens BEFORE ||. My next if looks at if the strike hits, give me the damage report. Anything else is 0.
*/
      if (doesStrikeHit(attack, ac) && doesStrikeCrit(attack, ac)) {
        return damage * 2
      } else if (doesStrikeHit(attack, ac)) {
        return damage
      } else {
        return 0
      }
}
