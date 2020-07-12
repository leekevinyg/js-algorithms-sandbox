
const dayOfTheWeek = function(day : number , month : number, year : number) : string {
    const months : number[] = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
    const isLeapYear = (year : number) : boolean => {
        return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
    };
    
    const dayOfWeek : string[] = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
	
    const daysFromStart = (day : number, month : number, year : number) : number => {
        let sum = 0;
		for (let i = 1971; i < year; i++) {
			sum += 365;
			if (isLeapYear(i)) {
				sum++;
			}
		}
        
        for (let i = 1; i < month; i++) {
            sum += months[i - 1];
            if (i == 2 && isLeapYear(year)) {
                sum++;
            }
        }
        
        sum += day;
        return sum;
	}
    
    let now = daysFromStart(12, 7, 2020);
    let target = daysFromStart(day, month, year);
    return dayOfWeek[(target - now % 7 + 7) % 7]
};