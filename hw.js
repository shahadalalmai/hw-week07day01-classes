class RunTracker {
    constructor(name, email){
        this.name = name
        this.email = email
        this.runs = [] // array of objects, each object consists of details of each run
        this.total
    }

    addRun(date, distance, time){
        this.date = date
        this.distance = distance
        this.time = time
        this.runs.push({"date" : this.date, "distance" : this.distance, "time" : this.time})
        //console.log(`Run date is ${this.date}, Run Distance is ${this.distance}, Run time is ${this.time}`)
        
    }

    totalDistance(){
        this.distances = this.runs.map(element => element.distance)
        this.totald = this.distances.reduce( (x, y) => x + y) // callback function implicit return with two parameters x and y

        //console.log(this.distances)
        return this.totald

    }

    logestDistance(){
        this.longest = this.distances.reduce( (x, y) => x > y ? x : y )
        return this.longest
    }

    totalTime() {
        this.times = this.runs.map(element => element.time)
        this.totalt = this.times.reduce( (x, y) => x + y )
        return this.totalt
    }

    averageSpeed(){
        this.avgSpeed = this.totalDistance() / this.totalTime()
        return this.avgSpeed
    }

} // end class


const runner1 = new RunTracker("Shahad", "sh@sh.com")
console.log(runner1.name)

runner1.addRun("2019-12-13", 30, 10)
runner1.addRun("2017-01-02", 20, 5)

console.log(runner1.totalDistance())
console.log(runner1.logestDistance())
console.log(runner1.averageSpeed())