

let name1 = "abc xyz"
let count = 0


for (i = 0; i < name1.length; i++) {
    let check_alpha = name1[i];
    // console.log(check_alpha.length);
    // if (check_alpha !== null && check_alpha !== undefined && check_alpha !== "" && check_alpha.length > 0) {
        name1 = name1.replace(/\s+/g,"")
        for (j = i + 1; j <= name1.length; j++) {

            if (name1[j] == check_alpha) {
                count++;
            }
        }

        if (count == 0) {
            console.log(check_alpha + "-" + 1)
        } else {
            console.log(check_alpha + "-" + count)

        }
    // }

}

