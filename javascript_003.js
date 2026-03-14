function printBinaryTriangle(rows) {
    for (let i = 0; i < rows; i++) {
        let line = "";
        for (let j = 0; j <= i; j++) {
            
            if ((i + j) % 2 === 0) {
                line += "1 ";
            } else {
                line += "0 ";
            }
        }
        console.log(line.trim());
    }
}


printBinaryTriangle(6);