/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let availableSpaces = 0
    
    for (let i = 0; i < flowerbed.length; i++) {
        let currentSpace = flowerbed[i]
        console.log(currentSpace)
        if (currentSpace === 0) {
             let hasSpaceOnPrevElement = i === 0 || flowerbed[i - 1] === 0
             console.log(hasSpaceOnPrevElement)
              if (!hasSpaceOnPrevElement) continue
        let hasSpaceOnNextElement = i + 1 === flowerbed.length || flowerbed[i + 1] === 0
        console.log(hasSpaceOnNextElement)
        if (!hasSpaceOnNextElement) continue

        
        if (hasSpaceOnPrevElement && hasSpaceOnNextElement) {
            availableSpaces += 1
            flowerbed[i] = 1
        }
        }
       
    }

    return n <= availableSpaces
};