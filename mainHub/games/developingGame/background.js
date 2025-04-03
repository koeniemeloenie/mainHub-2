const slideProperties = {
    worldTickSpeed: 1,
}
// slider1.value = '1';
// slider1.min = '.5';
// slider1.max = '5';
// slider1.step = '0.5';

const getParticle = (factor = 1) => {

    const properties = {
        size: {width:  factor, height:  factor},
        vel: {},
        color: {r: 255 - (factor-1) * 15,g: 255- (factor-1) * 15, b: 255- (factor-1) * 15},
        pos: {},
    }
    const makeVel = () => getVector(0, factor/2 + .75*(1/factor));
    const makePos = () => getVector(Math.random()*canvas.width, -3 * Math.random() * 500 - properties.size.height);
    properties.vel = makeVel();
    properties.pos =  makePos();
    

return{
    update: () => {
        properties.pos.y += slideProperties.worldTickSpeed * properties.vel.y;
        
        if(properties.pos.y > canvas.height + properties.size.height){
            properties.pos = makePos();
            properties.vel = makeVel();
        }
        
    },
    draw: () => {
        context.beginPath();
        context.fillStyle = `rgb(${properties.color.r},${properties.color.g},${properties.color.b})`;
        context.rect(properties.pos.x, properties.pos.y, properties.size.width, properties.size.height);
        context.fill();
    },
    setVelocity: (speed = 1) => {
    properties.vel.y = speed * properties.vel.y;
    },
    starVel: properties.vel,
}

}


const getMeteor = () => {
    let sizeVariable = getRandomNumber(10, 0, 1);
    const properties = {
        size: {width: sizeVariable, height: sizeVariable * getRandomNumber(1, 0.5, 1)},
        pos: getVector(),
        vel: getVector(),
        color: {r: getRandomNumber(150, 50),g: 0,b: 0},
    }

    properties.pos.x = getRandomNumber(canvas.width);
    properties.pos.y =  - properties.size.height;
    properties.vel.x = 0;
    properties.vel.y = getRandomNumber(5, 10);
    
    return{
        update: () => {
            properties.pos.add(properties.vel);
            
            if( properties.pos.y - 2 * properties.size.height > canvas.height){
                activateMeteor = false;

                sizeVariable = getRandomNumber(10, 0, 1);
                properties.pos.x = getRandomNumber(canvas.width);
                properties.pos.y =  - properties.size.height;
                properties.vel.x = 0;
                properties.vel.y = getRandomNumber(5, 10);
                properties.color.r = getRandomNumber(150, 50);
                properties.size.width = sizeVariable;
                properties.size.height = sizeVariable * getRandomNumber(1, 0.5, 1);
            }
            
        },
        draw: () => {
            context.beginPath();
            context.fillStyle = `rgb(${properties.color.r},${properties.color.g},${properties.color.b})`;
            context.strokeStyle= `rgb(${properties.color.r - 35},${properties.color.g},${properties.color.b})`;

            context.moveTo(properties.pos.x, properties.pos.y - properties.size.height);
            context.lineTo(properties.pos.x + properties.size.width, properties.pos.y)
            context.lineTo(properties.pos.x , properties.pos.y + properties.size.height);
            context.lineTo(properties.pos.x- properties.size.width, properties.pos.y );

            context.closePath();
            context.stroke();
            context.fill();
        },
        properties,
    }
}


const getVector = (xInc = 0, yInc = 0) => {
    let x = xInc;
    let y = yInc;

    const add = (vector) => {
     
        x += vector.x;
        y += vector.y;
    }

    return {
        get x() {
            return x;    
          },
        
          set x(value) {
            x = value;
          },
          get y() {
            return y;    
          },
        
          set y(value) {
            y = value;
          },
        add,
    };

}

// rc = richtingscoëficient
// sg = startgetal
// ev = extra variabele
const getRandomNumber = (rc = 1, sg = 0, ev = 0) => {
    let a = rc;
    let b = sg;
    let c = ev;

    const randomNumber = a * (c +Math.random()) + b;

    return randomNumber;
}