function solution(N) {
    // Convert N to binary representation
    const binaryString = N.toString(2);

    let maxGap = 0;
    let currentGap = 0;
    let counting = false;

    // Iterate over the binary representation
    for (let i = 0; i < binaryString.length; i++) {
        if (binaryString[i] === '1') {
            // If encounter '1', check if we were already counting zeros
            if (counting) {
                maxGap = Math.max(maxGap, currentGap);
                currentGap = 0;
            }
            counting = true;
        } else if (counting) {
            // If encounter '0' while counting, increment the currentGap
            currentGap++;
        }
    }

    return maxGap;
}

