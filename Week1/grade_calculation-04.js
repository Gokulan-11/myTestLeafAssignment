function studentScore(mark) {
    switch (true) {
        case (mark<35 && mark>0):
            return(`You Grade is considered to be Fail for this Mark ${mark}`);

        case (mark >= 35 && mark <= 60):
            return(`Your Grade is considered to be D Grade for mark ${mark}`);

        case (mark >60 && mark <=75 ):
            return(`Your Grade is considered to be C Grade for mark ${mark}`);

        case (mark >75 && mark <=85 ):
            return(`Your Grade is considered to be B Grade for mark ${mark}`);

        case (mark >85 && mark <=95 ):
            return(`Your Grade is considered to be A Grade for mark ${mark}`);

        case (mark >95 && mark <=100 ):
            return(`Your Grade is considered to be A+ Grade for mark ${mark}`);

        default:
            return(`Invalid Mark`);
            break;
    }
}

console.log(studentScore(98));
console.log(studentScore(91));
console.log(studentScore(84));
console.log(studentScore(67));
console.log(studentScore(45));
console.log(studentScore(32));
console.log(studentScore(-56));