class SchoolCatalog {
  constructor() {
    this._highSchools = [];
    this._middleSchools = [];
    this._primarySchools = [];
  }

  addHigh(highSchool) {
    this._highSchools.push(highSchool);
  }

  addMiddle(middleSchool) {
    this._middleSchools.push(middleSchol)
  }

  addPrimary(primarySchool) {
    this._primarySchools.push(primarySchool);
  }
 
  fullCatalog() {
    let h = 'High Schools: ';
    this._highSchools.forEach(s => 
    h += `${s.name}, `);

    let m = 'Middle Schools: ';
    this._middleSchools.forEach(s => 
    m += `${s.name}, `);

    let p = 'Primary Schools: ';
    this._primarySchools.forEach(s => 
    p += `${s.name}, `);

    return `${h} \n${m} \n${p} \n`
  }
}

class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }

  get name() {
    return this._name;
  }

  get level() {
    return this._level;
  }

  get numberOfStudents() {
    return this._numberOfStudents;
  }

  set numberOfStudents(num) {
    if (typeof num === 'number') {
      this._numberOfStudents = num;
    } else {
      console.log('Invalid input: numberOfStudents must be set to a number.');
    }
  }

  quickFacts() {
    let facts = `${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`
    return facts;
  }

  static pickSubstituteTeacher(substituteTeachers) {
    let rand = Math.floor(Math.random() * substituteTeachers.length);
    return substituteTeachers[rand];
  }
}

class Primary extends School {
  constructor(name, numberOfStudents, pickupPolicy) {
    super(name, 'Primary', numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }

  get pickupPolicy() {
    return this._pickupPolicy;
  }
}

class Middle extends School {
  constructor(name, numberOfStudents) {
    super(name, 'Midde', numberOfStudents)
  }
}

class High extends School {
  constructor(name, numberOfStudents, sportsTeams) {
    super(name, 'High', numberOfStudents);
    this._sportsTeams = sportsTeams;
  }

  get sportsTeams() {
    return this._sportsTeams;
  }

  addSportsTeam(team) {
    this._sportsTeams.push(team);
  }
}

let lorraineHansbury = new Primary('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');

console.log(lorraineHansbury.quickFacts());

let sub = School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);
console.log(sub);

let alSmith = new High('Al. E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);

console.log(alSmith.sportsTeams);

let catalog = new SchoolCatalog();
catalog.addPrimary(lorraineHansbury);
catalog.addHigh(alSmith);
console.log('\n' + catalog.fullCatalog());
