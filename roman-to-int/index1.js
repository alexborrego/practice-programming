/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    
    const values = new Map([
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000]
    ]);
    
    let total = 0;
    let max = 0;
    let mode = 'add';
    let i;
    str = s.split('');
    str.forEach((roman) => {
        i = values.get(roman);
        console.log(`value: ${i}`);
        if(i > max && total === 0){
            max = i;
        }
        else if(i > max){
            mode = 'subtract';
        }
        console.log(`max: ${max}`);
        console.log(`mode: ${mode}`);
        console.log(`total: ${total}`);
        if(mode === 'add'){
            total += i;
        }
        else{
            total = ~total + 1;
            console.log(`total inverted: ${total}`)
            total += i;
            mode = 'add';
        }
        console.log(`total: ${total}`);
        console.log(`mode: ${mode}`)
    })
    console.log(total);
};

romanToInt('XXIV');