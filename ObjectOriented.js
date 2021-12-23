class Player {
    constuctor(name, posistion) {
        this.name = name;
        this.posistion = posistion;
    }
    describe () {
        return `${this.name} plays ${this.posistion}.`;
    }
}

class Team {
    constructor(name) {
        this.name = name;
        this.players = [];
    }

    addPlayer (player) {
        if (player instanceof Player) {
            this.players.push(player);
        } else {
            throw new Error('You can only ass an instance of Player. Arguement is not a player: ${player}');
        }
    }
    describe() {
        return `${this.name} has ${this.players.length} players.`;
    }
} 

class Menu {
    constructor() {
        this.teams = [];
        this.selectedTeam = null;
    }
    start() {
        let selection = this.showMainMenuOptions();
        while (selection !=0) {
            switch (selection) {
                case '1':
                    this.createTeam();
                    break;
                case '2':
                    this.viewTeam();
                    break;
                case '3':
                    this.deleteTeam();
                    break;
                case '4':
                    this.displayTeams();
                    break;
                default:
                    selection = 0;        

            }
           selection = this.showMainMenuOptions(); 
        }
        alert('Goodbye!');
    }

    showMainMenuOptions() {
        return prompt(`
        0) exit
        1) create new team
        2) view team
        3) delete team
        4) display all teams
    `); 
    } 

    showTeamMenuOptions(teamInfo) {
        return prompt(`
        0) back
        1) create player
        2) delete player
        --------------------
        ${teamInfo}
        `);
    
    }



    displayTeams() {
        let teamString = '';
        for (let i = 0; i < this.teams.length; i++) {
            teamString += i + ') ' + this.teams[i].name + '\n';
        }
        alert(teamString);
    }
    
    createTeam() {
        let name = prompt('Enter name for new team:');
        this.teams.push(new Team(name));
    }

    viewTeam() {
        let index = prompt('Enter the index of the team you wish yo view:');
        if (index > -1 && index < this.teams.length) {
            this.selectedTeam = this.teams[index];
            let description = 'Team Name: ' + this.selectedTeam.name + '\n';

            for(let i = 0; i < this.selectedTeam.players.length; i++) {
              description += i + ') ' + this.selectedTeam.players[i].name + ' - ' + this.selectedTeam.players[i].posistion + '\n';

            }

            let selection = this.showTeamMenuOptions(description);
            switch (selection) {
                case '1':
                    this.createPlayer();
                    break;
                    case '2':
                        this.deletePlauer();

            }

        }    
    }
 deleteTeam() {
     let index = prompt('Enter the index of the team you wish to delete:');
     if (index > -1 && index < this.teams.length) {
         this.teams.splice(index,1);
     }
 }


 createPlayer() {
     let name = prompt('Enter name for new player:');
     let posistion = prompt('Enter posistion for new player:');
     this.selectedTeam.players.push(new Player(name,posistion));
 }
 deletePlayer() {
     let index = prompt('Enter the index of the player you wish to delete:');
     if (index > -1 && index < this.selectedTeam.plauers.length) {
         this.selectedTeam.players.splice(index, 1);
     }
 }
}
let menu =  new Menu();
menu.start();


