//Constructor for the horde
function Horde() {
	//an array of zombies
	this.zombies = [];

	//call each zombies drawing code and update it's location ready to be drawn again
	this.drawZombies = function() {
		for (var i = 0; i < this.zombies.length; i++) {
			this.zombies[i].draw();
			this.zombies[i].updateLocation();
		}
	}
    
    // draw red mark above head
    this.drawHeadshot = function(x, y) {
		for (var i = 0; i < this.zombies.length; i++) {
            if(this.zombies[i].isHeadClicked(x, y)) {
                // the circle that appears
                push();
                noFill()
                strokeWeight(4);
                stroke('red');
                ellipse(x, y, 30);
                pop(); 
            }           
		}
	}
    
    // reduce health when head is clicked
    this.reduceHealth = function(x, y) {
        for (var i = 0; i < this.zombies.length; i++) {
            if (this.zombies[i].isHeadClicked(x, y)) {
                this.zombies[i].hp--;
                console.log("current hp is " + this.zombies[i].hp);
                if (this.zombies[i].hp == 0) {
                    this.zombies[i].deleteFlg = true;
                } 
            }
		}
    }
    
    //delete zombie from the horde
    this.deleteZombie = function() {
        for (var i = this.zombies.length - 1; i >= 0; i--) {
            if (this.zombies[i].deleteFlg == true) {
                this.zombies.splice(i, 1);
            }
        }
    }
    
	//add n zombies to the horde
	this.addZombies = function(n) {
		for (var i = 0; i < n; i++) {
			this.zombies.push(new Zombie(random(20, height - 50)))
		}
	}
}
